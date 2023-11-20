import { useEffect, useState } from 'react'
import { BasicToken, BasicToken__factory } from 'types'
import { tokenAddressByChainId } from 'utils/config'
import { useWallet } from 'components/WalletContext'

export function useContract() {
  const [contract, setContract] = useState<BasicToken>()
  const { signer } = useWallet()

  const chainId = 10
  const tokenAddress = tokenAddressByChainId[chainId]

  useEffect(() => {
    if (signer) {
      const connectedContract = BasicToken__factory.connect(tokenAddress, signer)
      setContract(connectedContract)
    }
  }, [signer, tokenAddress])

  return {
    contract,
  }
}
