import React from 'react';
import '../styles/Community.css';
import Header from '../components/common/Header'
import CommunityFeed from '../components/community/CommunityFeed'

function Community() {
  return (
    <div className='community'>
      {/* Header */}
      <Header/>
      
      {/* Feed  */}
      <CommunityFeed />
    </div>
  )
}

export default Community