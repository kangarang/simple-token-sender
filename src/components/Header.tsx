import { ConnectWallet } from './ConnectWallet'
import { Box, Flex } from './ui'

function Header({ ethBalance, tokenBalance }) {
  return (
    <Flex justifyBetween p={3} borderBottom={1}>
      <Box>
        <Flex>ETH: {ethBalance}</Flex>
        <Flex>UNI: {tokenBalance}</Flex>
      </Box>

      <ConnectWallet />
    </Flex>
  )
}

export default Header
