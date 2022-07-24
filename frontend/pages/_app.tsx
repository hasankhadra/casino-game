import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  chain,
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
} from 'wagmi'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { ChakraProvider } from '@chakra-ui/react'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
const alchemyId = process.env.ALCHEMY_ID
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


const graphClient = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/hasankhadra/casino-subgraph',
  cache: new InMemoryCache(),
});

const { chains, provider, webSocketProvider } = configureChains(
  [chain.mainnet, chain.polygon, chain.polygonMumbai],
  [publicProvider()],
)

// Set up client
const walletClient = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
  ],
  provider,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={walletClient}>
      <ApolloProvider client={graphClient}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </ApolloProvider>
    </WagmiConfig>
  )
}

export default MyApp
