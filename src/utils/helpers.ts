import { BigNumber, utils } from 'ethers'

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

export function trimDecimals(value: string) {
  const io = value.indexOf('.')
  const formatted = value.slice(0, io).concat(value.slice(io, io + 6))
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
