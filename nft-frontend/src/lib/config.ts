export const CONTRACT_ADDRESS = "0x59a2D667704a5B41A71c6A0aD3fD05d554a91a83"

export const REOWN_PROJECT_ID = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID || "your-project-id"

export const PINATA_JWT = process.env.NEXT_PUBLIC_PINATA_JWT || ""
export const PINATA_GATEWAY = process.env.NEXT_PUBLIC_PINATA_GATEWAY || "https://gateway.pinata.cloud"

export const CHAIN_CONFIG = {
  chainId: 1, // Ethereum mainnet - change as needed
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://eth.llamarpc.com",
}
