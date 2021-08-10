import React, { useState, useEffect, createContext } from 'react'
import { ethers, Signer } from 'ethers'
import { Web3Provider } from '@ethersproject/providers'
import Onboard from 'bnc-onboard'
import { API } from 'bnc-onboard/dist/src/interfaces'
import Notify from 'bnc-notify'
import { getItem, removeItem, setItem } from 'utils/localStorage'
import { getChecksummedAddress } from 'utils/helpers'
import { bncDappId } from 'utils/config'

const chainId = 4

enum NetworkName {
  Mainnet = 1,
  Rinkeby = 4,
}

interface WalletContextValue {
  onboard?: API
  notify?: any
  provider?: Web3Provider
  signer?: Signer
  address?: string
  network?: string
  selectWallet(): any
  checkWallet(): any
  logoutWallet(): any
}

const WalletContext = createContext<WalletContextValue>({
  onboard: undefined,
  notify: undefined,
  provider: undefined,
  signer: undefined,
  address: undefined,
  network: undefined,
  selectWallet: () => {},
  checkWallet: () => {},
  logoutWallet: () => {},
})

const WalletProvider = ({ children }: any) => {
  const [provider, setProvider] = useState<Web3Provider>()
  const [address, setAddress] = useState<string>()
  const [network, setNetwork] = useState<string>()
  const [signer, setSigner] = useState<Signer>()
  const [onboard, setOnboard] = useState<API>()
  const [notify, setNotify] = useState<any>()

  // Onboard.js
  useEffect(() => {
    const onboard = Onboard({
      dappId: bncDappId,
      networkId: chainId,
      blockPollingInterval: 5000,
      subscriptions: {
        address: address => (address ? setAddress(getChecksummedAddress(address)) : ''),
        network: networkId => {
          const networkName = NetworkName[networkId]
          setNetwork(networkName)
        },
        wallet: wallet => {
          if (wallet.provider) {
            const ethersProvider = new ethers.providers.Web3Provider(wallet.provider)
            setProvider(ethersProvider)

            // store user preference
            setItem('selectedWallet', wallet.name)
          } else {
            // logging out
            setProvider(undefined)
            removeItem('selectedWallet')
          }
        },
      },
      walletSelect: {
        wallets: [{ walletName: 'metamask', preferred: true }],
      },
      walletCheck: [{ checkName: 'accounts' }, { checkName: 'connect' }, { checkName: 'network' }],
    })

    const notify = Notify({
      dappId: bncDappId,
      networkId: chainId,
      darkMode: true,
    })

    setOnboard(onboard)
    setNotify(notify)
  }, [])

  // Reload connected wallet
  useEffect(() => {
    async function reloadSelectedWallet() {
      const previouslySelectedWallet = getItem('selectedWallet')

      if (onboard && previouslySelectedWallet != null) {
        await onboard.walletSelect(previouslySelectedWallet)
      }
    }

    reloadSelectedWallet()
  }, [onboard])

  // Set Signer
  useEffect(() => {
    if (provider) {
      const s = provider.getSigner()
      setSigner(s)
    }
  }, [provider])

  // Misc.
  const checkWallet = React.useCallback(async () => {
    return onboard?.walletCheck()
  }, [onboard])

  const selectWallet = React.useCallback(async () => {
    const walletSelected = await onboard?.walletSelect()
    if (walletSelected) {
      await onboard?.walletCheck()
    }
  }, [onboard])

  const logoutWallet = React.useCallback(async () => {
    setAddress(undefined)
    return onboard?.walletReset()
  }, [onboard])

  return (
    <WalletContext.Provider
      value={{
        onboard,
        provider,
        signer,
        address,
        network,
        selectWallet,
        checkWallet,
        logoutWallet,
        notify,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}

const useWallet = () => {
  const context = React.useContext(WalletContext)
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider')
  }
  return context
}

export { WalletProvider, useWallet }
