// import { createAppKit } from '@reown/appkit/react'
// import { wagmiAdapter, projectId, liskSepolia } from './config'

// if (!projectId) {
//   throw new Error('Project ID is not defined')
// }

// // Set up metadata
// const metadata = {
//   name: 'NFT Creator',
//   description: 'Create and trade unique NFTs on Lisk Sepolia',
//   url: 'https://nftcreator.com',
//   icons: ['https://avatars.githubusercontent.com/u/179229932']
// }

// // Create the modal
// export const modal = createAppKit({
//   adapters: [wagmiAdapter],
//   projectId,
//   networks: [liskSepolia],
//   defaultNetwork: liskSepolia,
//   metadata: metadata,
//   features: {
//     analytics: true,
//     email: false,
//     socials: []
//   },
//   themeMode: 'dark',
//   themeVariables: {
//     '--w3m-color-mix': '#8B5CF6',
//     '--w3m-color-mix-strength': 20,
//     '--w3m-border-radius-master': '8px'
//   }
// })