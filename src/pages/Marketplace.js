import React from 'react'
import Header from '../components/common/Header'
import MarketplaceFeed from '../components/marketplace/MarketplaceFeed'

function Marketplace() {
  return (
    <div>
      {/* Header */}
      <Header/>
      {/* Marketplace Feed  */}
      <MarketplaceFeed />
    </div>
  )
}

export default Marketplace