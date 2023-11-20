import { Box, Flex } from './ui'
import Icon from './ui/Icon'
import { useWallet } from './WalletContext'
import logoutIcon from '../img/logout.svg'

export function ConnectWallet() {
  const { address, network, selectWallet, logoutWallet } = useWallet()

  return (
    <Box>
      {address ? (
        <Flex alignCenter>
          <Box mr={3}>{network}</Box>
          <Flex bg="cyan" border={1} p={2} alignCenter>
            <Box>{address}</Box>

            <Icon
              cursor="true"
              ml={3}
              bg="pink"
              src={logoutIcon}
              width={24}
              onClick={logoutWallet}
            />
          </Flex>
        </Flex>
      ) : (
        <Box border={2} p={2} cursor="true" onClick={selectWallet}>
          Connect Wallet
        </Box>
      )}
    </Box>
  )
}
