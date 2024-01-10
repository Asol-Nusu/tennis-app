import React from 'react'
import '../../styles/UserProfile.css'

function UserProfile({profileImage, username, userLevel, profileBio}) {
  return (
    <div className='userProfile'>
        <div className='userProfile__top'>
            <img src={profileImage} alt=''/>
        </div>
        <div className='userProfile__bottom'>
            <div className='userProfile__title'>{username}</div>
            <div className='userProfile__level'>{userLevel}</div>
            <div className='userProfile__description'>{profileBio}</div>
            <div className='userProfile__button'><a href='mailto:solbaatyr@gmail.com'>Play Now!</a></div>
        </div>
    </div>
  )
}

export default UserProfile