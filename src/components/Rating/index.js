import React, { memo } from 'react';
import styles from './styles.module.css';
import { Rate } from 'antd';

const Rating = ({ rating }) => {
  const { totalRating, userCount } = rating;
  const averageRating = Math.round(totalRating / userCount);
  return (
    <div className={styles.rating}>
      <h4>Average Rating</h4>
      <Rate defaultValue={averageRating} disabled value={averageRating} />
    </div>
  );
};
export default memo(Rating);
