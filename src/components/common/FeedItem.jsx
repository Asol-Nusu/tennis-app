import React from 'react';
import PropTypes from 'prop-types';

const FeedItem = ({ image, title, subtitle, actionButton }) => {
  return (
    <div className="feed-item">
      <img src={image} alt={title} />
      <div className="content">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        {actionButton}
      </div>
    </div>
  );
};

FeedItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  actionButton: PropTypes.element.isRequired,
};

export default FeedItem;