import { useEffect, useState } from 'react'
import { BigNumber } from 'ethers'
import { formatBaseValue } from 'utils/helpers'
import { useWallet } from 'components/WalletContext'
import { useContract } from './useContract'

const initialState = {
  eth: BigNumber.from(0),
  token: BigNumber.from(0),
}

export function useBalance(address) {
  const { provider } = useWallet()
  const { contract } = useContract()

  const [balances, setBalances] = useState(initialState)

  useEffect(() => {
    async function fetchBalances() {
      if (address) {
        console.log('fetching balances...')

        try {
          const ethBalance = await provider?.getBalance(address)
          const tokenBalance = await contract?.balanceOf(address)

          if (ethBalance && tokenBalance) {
            setBalances({
              eth: ethBalance,
              token: tokenBalance,
            })
          }
        } catch (error) {
          console.log(`error:`, error)
        }
      } else {
        setBalances(initialState)
      }
    }

    fetchBalances()

    // Poll for balance changes every X seconds
    const pollInterval = 5000
    const timeoutId = setInterval(fetchBalances, pollInterval)
    return () => clearInterval(timeoutId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address])

  return {
    ethBalanceBase: balances.eth,
    tokenBalanceBase: balances.token,
    ethBalance: formatBaseValue(balances.eth),
    tokenBalance: formatBaseValue(balances.token),
  }
}
