import React from 'react'
import CommunitySearch from './CommunitySearch'
import UserProfile from './UserProfile'
import '../../styles/CommunityFeed.css'

function CommunityFeed() {
  return (
    <div >
      <div className='communityFeed__topHalf'>
        {/* Search */}
        <CommunitySearch />
        {/* Line of Text */}
        <h4 id='line'>Hitting Partner Suggestions 👇</h4>
      </div>

      {/* A Grid of User Profiles */}
      <div className='communityFeed__bottomHalf'>
          <UserProfile 
            profileImage={'https://deadline.com/wp-content/uploads/2021/01/Hugh-Grant-HBO0599-v2_by_JasonBell.jpg'}
            username={'Hugh Grant'}
            userLevel={'Advanced'}
            profileBio={'A huge fan of the sport!!'}
          />

          <UserProfile 
            profileImage={'https://radaris.com/i/791f03e1020c3962aade789f16403cd6.jpg'}
            username={'Seth Fearey'}
            userLevel={'Advanced'}
            profileBio={'A super star of my own!'}
          />

          <UserProfile 
            profileImage={'https://media.vogue.co.uk/photos/60538d2bd4f5db6cd813d095/1:1/w_4480,h_4480,c_limit/Justin-Bieber-vogue-credit-Mike-Rosenthal-1.jpg'}
            username={'Justin Bieberrrrr'}
            userLevel={'Beginner'}
            profileBio={'Life is music and tennis <3'}
          />

          <UserProfile 
            profileImage={'https://images.ctfassets.net/2i2gisqijzbj/2keEasrqrRJVPKEkoMvB9I/c3edea225030f38bc226138178ab08bf/420E6729-DCA2-45DC-A8A4-16695692F6FF.jpeg'}
            username={'Alexis Kerry Ohanian'}
            userLevel={'Intermediate'}
            profileBio={'Venturing, building, and hitting balls w/ the GOAT, the one and only Serena Williams!'}
          />

          <UserProfile 
            profileImage={'https://i2-prod.mirror.co.uk/incoming/article29141502.ece/ALTERNATES/s1200c/1_65th-Annual-Grammy-Awards-Arrivals-Los-Angeles-USA-05-Feb-2023.jpg'}
            username={'H Styles'}
            userLevel={'Absolute Beginner'}
            profileBio={'Im fallin for tennis ...'}
          />

          <UserProfile 
            profileImage={'https://hips.hearstapps.com/hmg-prod/images/gettyimages-1794117452-65573dd7f16bc.jpg?crop=1.00xw:0.668xh;0,0.0359xh&resize=640:*'}
            username={'Margot Robbie'}
            userLevel={'Beginner'}
            profileBio={'Pink Tennis 💓'}
          />

          <UserProfile 
            profileImage={'https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/canvas/2021/05/17/fb234cb7-3975-4a42-b839-82cc7cca3ce8_f512a994.jpg?itok=4tiSlFTb&v=1621244447'}
            username={'Ellen D'}
            userLevel={'Beginner'}
            profileBio={'Here to host the TENNIS SHOW 😈'}
          />

          <UserProfile 
            profileImage={'https://hips.hearstapps.com/hmg-prod/images/kendall-jenner-attends-the-2023-academy-museum-gala-at-news-photo-1701721154.jpg?crop=0.553xw:0.369xh;0.220xw,0.0288xh&resize=1200:*'}
            username={'Kendall J'}
            userLevel={'Absolute Beginner'}
            profileBio={'To the list of fashion, horses, 818, volleyball, the tennis has added itself :)'}
          />

          <UserProfile 
            profileImage={'https://assets.teenvogue.com/photos/656627e30c8382070f7279c6/1:1/w_4937,h_4937,c_limit/1816504083'}
            username={'Timmy'}
            userLevel={'Advanced'}
            profileBio={'Lets GOOOOOO!'}
          />
      </div>
    </div>
  )
}

export default CommunityFeed