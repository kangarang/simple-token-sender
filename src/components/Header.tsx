import { ConnectWallet } from './ConnectWallet'
import { Box, Flex } from './ui'
import { useWallet } from './WalletContext'
import { useBalance } from 'hooks/useBalance'

function Header() {
  const { address } = useWallet()
  const { ethBalance, tokenBalance } = useBalance(address)

  return (
    <Flex justifyBetween p={3}>
      <Box>
        <Flex>ETH: {ethBalance}</Flex>
        <Flex>UNI: {tokenBalance}</Flex>
      </Box>

      <ConnectWallet />
    </Flex>
  )
}

export default Header
