import React from 'react'
import CommunitySearch from './CommunitySearch'
import UserProfile from './UserProfile'
import '../../styles/CommunityFeed.css'

function CommunityFeed() {
  return (
    <div className='communityFeed'>
      {/* Search */}
      <CommunitySearch />
      {/* Line of Text */}
      <h4 id='line'>Hitting Partner Suggestions 👇</h4>
      {/* User Profiles */}
      <UserProfile 
      profileImage={'https://deadline.com/wp-content/uploads/2021/01/Hugh-Grant-HBO0599-v2_by_JasonBell.jpg'}
      username={'Hugh Grant'}
      userLevel={'Advanced'}
      profileBio={'A huge fan of the sport!!'}
      />
    </div>
  )
}

export default CommunityFeed