import { useEffect, useState } from 'react'
import { useContract } from 'hooks/useContract'
import { useTransferStatus, TransferStatus } from 'hooks/useTransferStatus'
import { isValidAddress, isValidSendValue, toBaseUnits } from 'utils/helpers'
import { Box, Button, Flex, Input } from './ui'

export function TokenTransfer({ tokenBalanceBase }) {
  const { contract } = useContract()
  const [sendValue, setSendValue] = useState<string>('')
  const [sendTo, setSendTo] = useState<string>('')
  const { transferStatus, setTransferStatus, handleTx, txMessage, setTxMessage } =
    useTransferStatus()

  async function sendTokens() {
    if (contract && sendValue && sendTo) {
      const baseValue = toBaseUnits(sendValue)

      if (baseValue.gt(tokenBalanceBase)) {
        setTxMessage({ msg: 'Not enough tokens!' })
        return false
      }

      setTransferStatus(TransferStatus.sending)

      try {
        const tx = await contract.transfer(sendTo, baseValue)

        handleTx(tx.hash)
      } catch (error: any) {
        console.log(`error:`, error)
        if (error.message.includes('User denied transaction signature') && isTransactionReady()) {
          setTransferStatus(TransferStatus.ready)
        }
      }
    }
  }

  function isTransactionReady() {
    if (sendTo && sendValue && isValidAddress(sendTo) && isValidSendValue(sendValue)) {
      return true
    }
  }

  useEffect(() => {
    if (isTransactionReady()) {
      if (txMessage) {
        setTxMessage({ msg: '', link: '' })
      }
      return setTransferStatus(TransferStatus.ready)
    }

    if (transferStatus === TransferStatus.ready) {
      setTransferStatus(TransferStatus.idle)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendValue, sendTo, setTransferStatus, setTxMessage])

  useEffect(() => {
    if (transferStatus === TransferStatus.success && isTransactionReady()) {
      setTransferStatus(TransferStatus.ready)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transferStatus, setTransferStatus])

  return (
    <Box mt={4}>
      <Flex width={600} justifyBetween alignCenter>
        <Box width={500} mr={3}>
          <Flex justifyBetween>
            <Box>Send to:</Box>
            <Input width={350} value={sendTo} onChange={e => setSendTo(e.target.value)} />
          </Flex>

          <Flex justifyBetween mt={2}>
            <Box>Value:</Box>
            <Input
              width={350}
              type="number"
              value={sendValue}
              onChange={e => setSendValue(e.target.value)}
            />
          </Flex>
        </Box>

        <Button disabled={transferStatus !== TransferStatus.ready} onClick={sendTokens}>
          Send Tokens
        </Button>
      </Flex>

      <Flex mt={4} alignCenter>
        <Box>{txMessage.msg}&nbsp;</Box>

        {txMessage.link && (
          <a target="_blank" rel="noreferrer" href={txMessage.link}>
            Etherscan
          </a>
        )}
      </Flex>
    </Box>
  )
}
