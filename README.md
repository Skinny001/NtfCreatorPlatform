# NFT Creator Platform

A modern, responsive NFT minting platform built with Next.js, TypeScript, and Web3 technologies. Create, mint, and showcase NFTs with automatic creator rewards.

![NFT Creator Platform](https://via.placeholder.com/800x400/6366f1/ffffff?text=NFT+Creator+Platform)

## 🚀 Features

- **🔗 Wallet Integration**: Connect MetaMask using Reown AppKit
- **🎨 NFT Minting**: Upload images to IPFS and mint NFTs on-chain
- **💰 Creator Rewards**: Automatic ERC20 token rewards for creators
- **🖼️ NFT Gallery**: Browse and discover all minted NFTs
- **📱 Responsive Design**: Mobile-first design for all devices
- **⚡ Real-time Updates**: Live balance and transaction tracking

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **Web3**: Ethers.js, Reown AppKit
- **Storage**: IPFS via Pinata
- **Styling**: Tailwind CSS with responsive design

## 📋 Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- A MetaMask wallet
- A Reown Cloud project ID
- A Pinata account for IPFS storage

## 🚀 Quick Start

### 1. Create Next.js Project

```bash
npx create-next-app@latest nft-frontend --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd nft-frontend
npm install
```
###  Set Up Environment Variables

Create a `.env.local` file in the root directory:
```
NEXT_PUBLIC_REOWN_PROJECT_ID=your_reown_project_id_here
NEXT_PUBLIC_PINATA_JWT=your_pinata_jwt_token_here
NEXT_PUBLIC_PINATA_GATEWAY=https://gateway.pinata.cloud
```
### Get Required API Keys

#### Reown Project ID

1. Visit [Reown Cloud](https://cloud.reown.com)
2. Create a new project
3. Copy your Project ID


#### Pinata JWT Token

1. Sign up at [Pinata](https://pinata.cloud)
2. Go to API Keys in your dashboard
3. Create a new key with upload permissions
4. Copy the JWT token (not the API key or secret)

## 🔧 Configuration

### Smart Contract

The platform uses the NFT contract deployed at:
```
0x59a2D667704a5B41A71c6A0aD3fD05d554a91a83
```
## 🔍 Smart Contract Functions

The platform interacts with these key contract functions:

- `mintNFT(to, uri)`: Mint a new NFT
- `getCreatorTokenBalance(account)`: Get creator token balance
- `totalNFTsMinted()`: Get total NFTs minted
- `tokenURI(tokenId)`: Get NFT metadata URI
- `getCreator(tokenId)`: Get NFT creator address

## 📞 Support

If you have any questions or need help:

1. Check the [Issues](https://github.com/skinny001/nft-frontend/issues) page
2. Create a new issue with detailed information
