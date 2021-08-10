import { useState } from 'react'
import { useWallet } from 'components/WalletContext'
import { getEtherscanLink } from 'utils/helpers'

export enum TransferStatus {
  idle = 'idle',
  ready = 'ready',
  sending = 'sending',
  success = 'success',
  error = 'error',
}

export function useTransferStatus() {
  const { notify } = useWallet()
  const [transferStatus, setTransferStatus] = useState(TransferStatus.idle)
  const [txMessage, setTxMessage] = useState<{ msg: string; link?: string }>({ msg: '', link: '' })

  function handleTx(hash) {
    setTransferStatus(TransferStatus.sending)
    setTxMessage({ msg: 'Sending...' })

    const { emitter } = notify.hash(hash)

    emitter.on('txConfirmed', res => {
      const msg = `Success! View tx`
      const link = getEtherscanLink(res)

      setTransferStatus(TransferStatus.success)
      setTxMessage({ msg, link })
    })

    emitter.on('txError', res => {
      setTransferStatus(TransferStatus.error)
      setTxMessage(res)
    })
  }

  return {
    transferStatus,
    setTransferStatus,
    handleTx,
    txMessage,
    setTxMessage,
  }
}
