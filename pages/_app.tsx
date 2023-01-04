import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.FantomTestnet}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}
