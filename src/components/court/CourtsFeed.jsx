import React from 'react';
import FeedItem from '../common/FeedItem';
import Button from '../common/Button';

const CourtsFeed = () => {
  // Mock data for demonstration purposes
  const courtSuggestions = [
    {
      image: 'url-to-court-image1',
      clubName: 'Tennis Club XYZ',
      address: '123 Main Street, Cityville',
      rating: 4.5,
    },
    // Add more court suggestions as needed
  ];

  return (
    <div className="courts-feed">
      <h2>Court Suggestions</h2>
      {courtSuggestions.map((court, index) => (
        <FeedItem
          key={index}
          image={court.image}
          title={court.clubName}
          subtitle={`Address: ${court.address} | Rating: ${court.rating}/5`}
          actionButton={<Button onClick={() => alert('Book a Court!')}>Book a Court!</Button>}
        />
      ))}
    </div>
  );
};

export default CourtsFeed;
