// 'use client'

// import { wagmiAdapter, projectId, liskSepolia } from '../config'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { createAppKit } from '@reown/appkit/react'
// import React, { type ReactNode, useEffect } from 'react'
// import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi'

// // Set up queryClient
// const queryClient = new QueryClient()

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

// // Initialize AppKit
// let modal: any = null

// function ContextProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
//   const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

//   useEffect(() => {
//     // Create the modal only once on client side
//     if (!modal && typeof window !== 'undefined') {
//       modal = createAppKit({
//         adapters: [wagmiAdapter],
//         projectId: projectId!,
//         networks: [liskSepolia],
//         defaultNetwork: liskSepolia,
//         metadata: metadata,
//         features: {
//           analytics: true,
//           email: false,
//           socials: []
//         },
//         themeMode: 'dark',
//         themeVariables: {
//           '--w3m-color-mix': '#8B5CF6',
//           '--w3m-color-mix-strength': 20,
//           '--w3m-border-radius-master': '8px'
//         }
//       })
//     }
//   }, [])

//   return (
//     <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
//       <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
//     </WagmiProvider>
//   )
// }

// export default ContextProvider


'use client'

import { wagmiAdapter, projectId, liskSepolia } from '../config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react'
import React, { type ReactNode } from 'react'
import { cookieToInitialState, WagmiProvider, type Config } from 'wagmi'

// Set up queryClient
const queryClient = new QueryClient()

if (!projectId) {
  throw new Error('Project ID is not defined')
}

// Set up metadata
const metadata = {
  name: 'NFT Creator',
  description: 'Create and trade unique NFTs on Lisk Sepolia',
  url: 'https://nftcreator.com',
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// Create the modal - this must be called at module level
createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [liskSepolia],
  defaultNetwork: liskSepolia,
  metadata: metadata,
  features: {
    analytics: true,
    email: false,
    socials: []
  },
  themeMode: 'dark',
  themeVariables: {
    '--w3m-color-mix': '#8B5CF6',
    '--w3m-color-mix-strength': 20,
    '--w3m-border-radius-master': '8px'
  }
})

function ContextProvider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default ContextProvider