import React from 'react';
import FeedItem from '../common/FeedItem';
import Button from '../common/Button';

const MarketplaceFeed = () => {
  // Mock data for demonstration purposes
  const marketplaceItems = [
    {
      username: 'Seller123',
      timestamp: 'Dec 20, 11:45 PM',
      itemImage: 'url-to-item-image1',
      itemName: 'Tennis Balls',
      price: '$10',
      location: 'Moscow',
    },
    // Add more marketplace items as needed
  ];

  return (
    <div className="marketplace-feed">
      <h2>Marketplace Items</h2>
      {marketplaceItems.map((item, index) => (
        <FeedItem
          key={index}
          image={item.itemImage}
          title={item.itemName}
          subtitle={`Posted by: ${item.username} | ${item.timestamp}`}
          actionButton={<Button onClick={() => alert('Contact Seller')}>Message</Button>}
        />
      ))}
    </div>
  );
};

export default MarketplaceFeed;
