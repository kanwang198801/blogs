import React, { memo } from 'react';
import styles from './styles.module.css';
import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const RateNow = ({ rating, blog, setRating, updateRatingToBlog }) => {
  const handleChange = (value) => {
    updateRatingToBlog(value, blog);
    setRating(value);
  };

  return (
    <div className={styles.rate}>
      <h5>
        {rating > 0 ? <span>You have rated</span> : <span>Rate Now</span>}
      </h5>
      <Rate
        tooltips={desc}
        onChange={handleChange}
        value={rating}
        disabled={rating > 0}
      />
      {rating ? <span className="ant-rate-text">{desc[rating - 1]}</span> : ''}
    </div>
  );
};
export default memo(RateNow);
