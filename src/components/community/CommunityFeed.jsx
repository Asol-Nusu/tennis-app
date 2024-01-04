import React from 'react';
import FeedItem from '../common/FeedItem';
import Button from '../common/Button';

const CommunityFeed = () => {
  // Mock data for demonstration purposes
  const hittingPartnerSuggestions = [
    {
      image: 'url-to-image1',
      name: 'John Doe',
      level: 'Advanced',
      bio: 'A Huge Fan of Tennis!',
    },
    // Add more suggestions as needed
  ];

  return (
    <div className="community-feed">
      <h2>Find More Players</h2>
      {hittingPartnerSuggestions.map((profile, index) => (
        <FeedItem
          key={index}
          image={profile.image}
          title={profile.name}
          subtitle={`Level: ${profile.level} | ${profile.bio}`}
          actionButton={<Button onClick={() => alert('Play Now!')}>Play Now!</Button>}
        />
      ))}
    </div>
  );
};

export default CommunityFeed;
