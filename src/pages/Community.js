import React from 'react';
import '../styles/Home.css';
import Header from '../components/common/Header'
import CommunityFeed from '../components/community/CommunityFeed'

// HOME PAGE
function Community() {
  return (
    <div className='app'>
      {/* Header */}
      <Header/>
      
      {/* Feed  */}
      <CommunityFeed />
    </div>
  )
}

export default Community