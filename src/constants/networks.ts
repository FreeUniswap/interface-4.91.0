import { JsonRpcProvider } from '@ethersproject/providers'

import { SupportedChainId } from './chains'

// const INFURA_KEY = process.env.REACT_APP_INFURA_KEY
// if (typeof INFURA_KEY === 'undefined') {
//   throw new Error(`REACT_APP_INFURA_KEY must be a defined environment variable`)
// }

export const MAINNET_PROVIDER = new JsonRpcProvider(`https://eth.llamarpc.com`)

/**
 * These are the network URLs used by the interface when there is not another available source of chain data
 */
export const RPC_URLS: { [key in SupportedChainId]: string } = {
  [SupportedChainId.MAINNET]: `https://eth.llamarpc.com`,
  [SupportedChainId.GOERLI]: `https://ethereum-goerli.publicnode.com`,
  [SupportedChainId.OPTIMISM]: `https://optimism.llamarpc.com`,
  [SupportedChainId.ARBITRUM_ONE]: `https://arbitrum.llamarpc.com`,
  [SupportedChainId.POLYGON]: `https://polygon.llamarpc.com`,
  [SupportedChainId.POLYGON_MUMBAI]: `https://polygon-mumbai-pokt.nodies.app`,
  [SupportedChainId.CELO]: `https://forno.celo.org`,
  [SupportedChainId.CELO_ALFAJORES]: `https://alfajores-forno.celo-testnet.org`,
}
