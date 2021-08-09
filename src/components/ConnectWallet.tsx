import { Box, Flex } from './ui'
import { useWallet } from './WalletContext'

export function ConnectWallet() {
  const { address, selectWallet } = useWallet()

  return (
    <Box>
      {address ? (
        <Box>
          <Flex>{address}</Flex>
        </Box>
      ) : (
        <Box>
          <Flex onClick={selectWallet}>Connect Wallet</Flex>
        </Box>
      )}
    </Box>
  )
}
