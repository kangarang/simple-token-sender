import { BigNumber, utils } from 'ethers'
import { etherscanBaseURL } from './config'

export function getChecksummedAddress(address: string): string {
  return utils.getAddress(address)
}

export function isValidAddress(address: string): boolean {
  try {
    utils.getAddress(address)
    return true
  } catch (e) {
    return false
  }
}

export function isValidSendValue(value: string) {
  return !isNaN(parseFloat(value)) && !value.includes('e') && !value.includes('-')
}

export function trimDecimals(value: string) {
  const decimalIndex = value.indexOf('.')
  const fractionalUnits = value.slice(decimalIndex, decimalIndex + 6)
  const formatted = value.slice(0, decimalIndex).concat(fractionalUnits)
  return formatted
}

export function formatBaseValue(base?: BigNumber, name?: string, unit = 18) {
  const formattedValue = utils.formatUnits(base!, unit)
  if (name) {
    console.log(name, formattedValue)
  }

  return trimDecimals(formattedValue)
}

export function toBaseUnits(amount: string) {
  return utils.parseUnits(amount, 18)
}

export function getEtherscanLink(tx) {
  return `${etherscanBaseURL}/tx/${tx && tx.hash ? tx.hash : tx}`
}
