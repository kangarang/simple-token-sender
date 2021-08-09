import { useEffect, useState } from 'react'
import { BigNumber } from 'ethers'
import { formatBaseValue } from 'utils/helpers'
import { useWallet } from 'components/WalletContext'
import { useContract } from './useContract'

export function useBalance(address) {
  const { provider } = useWallet()
  const { contract } = useContract()

  const [balances, setBalances] = useState({
    eth: BigNumber.from(0),
    token: BigNumber.from(0),
  })

  useEffect(() => {
    async function fetchBalances() {
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
    }

    fetchBalances()

    // Poll for balance changes every X seconds
    const pollInterval = 5000
    const timeoutId = setInterval(fetchBalances, pollInterval)
    return () => clearInterval(timeoutId)
  }, [address])

  return {
    ethBalanceBase: balances.eth,
    tokenBalanceBase: balances.token,
    ethBalance: formatBaseValue(balances.eth),
    tokenBalance: formatBaseValue(balances.token),
  }
}
