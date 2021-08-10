import Header from 'components/Header'
import { TokenTransfer } from 'components/TokenTransfer'
import { useBalance } from 'hooks/useBalance'
import { Box } from './ui'
import { useWallet } from './WalletContext'

function HomePage() {
  const { address } = useWallet()
  const { ethBalance, tokenBalance, tokenBalanceBase } = useBalance(address)

  return (
    <Box p={3}>
      <Header ethBalance={ethBalance} tokenBalance={tokenBalance} />

      {address && <TokenTransfer tokenBalanceBase={tokenBalanceBase} />}
    </Box>
  )
}

export default HomePage
