import { NFTGallery } from "@/components/nft-gallery"

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">NFT Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore all the NFTs minted on our platform. Each NFT shows the creator, metadata, and links to view on the
            blockchain.
          </p>
        </div>

        <NFTGallery />
      </div>
    </div>
  )
}
