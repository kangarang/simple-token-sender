import { theme } from 'utils/styles'
import { ThemeProvider } from 'styled-components'
import { WalletProvider } from 'components/WalletContext'

const Providers = ({ children }: any) => {
  return (
    <ThemeProvider theme={theme}>
      <WalletProvider>{children}</WalletProvider>
    </ThemeProvider>
  )
}

export default Providers
