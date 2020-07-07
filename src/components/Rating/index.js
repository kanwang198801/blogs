import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { Rate } from 'antd';

const setAverageRating = (totalRating, userCount) => {
  return Math.round(totalRating / userCount);
};
const Rating = ({ rating }) => {
  const { totalRating, userCount } = rating;
  const averageRating = setAverageRating(totalRating, userCount);
  return (
    <div className={styles.rating}>
      <h4>Average Rating</h4>
      <Rate defaultValue={averageRating} disabled value={averageRating} />
    </div>
  );
};
export default memo(Rating);

Rating.propTypes = {
  rating: PropTypes.shape({
    totalRating: PropTypes.number.isRequired,
    userCount: PropTypes.number.isRequired,
  }).isRequired,
};
