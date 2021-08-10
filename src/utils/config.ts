const appEnv = process.env.REACT_APP_ENVIRONMENT || 'dev'

export function isProd() {
  return appEnv === 'prod'
}

export function isDev() {
  return appEnv === 'dev'
}

export const etherscanBaseURL = isProd()
  ? 'https://etherscan.io'
  : isDev()
  ? 'https://rinkeby.etherscan.io'
  : process.env.REACT_APP_ETHERSCAN_BASE_URL

// UNI
export const tokenAddressByChainId = {
  1: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
  4: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
}

export const bncDappId = process.env.REACT_APP_BNC_DAPP_ID
