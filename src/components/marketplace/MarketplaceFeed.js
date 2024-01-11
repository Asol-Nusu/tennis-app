import React from 'react'
import '../../styles/MarketplaceFeed.css'
import MarketplaceSearch from './MarketplaceSearch'
import MarketplaceButtonsPanel from './MarketplaceButtonsPanel'

function MarketplaceFeed() {
  return (
    <div>
        <div className='marketplaceFeed__topHalf'>
            {/* Search */}
            <MarketplaceSearch />
            {/* Filter, Cart, Create Post, View Posts buttons */}
            <MarketplaceButtonsPanel/>
        </div>

        {/* Expandable Filter Window & Item Posts  */}
    </div>
  )
}

export default MarketplaceFeed