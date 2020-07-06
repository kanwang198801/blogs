import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';
import styles from './styles.module.css';

const Slider = ({ images }) => {
  return (
    <div className={styles.slider}>
      {images.length > 0 && (
        <Carousel>
          {images.map((image, index) => (
            <img src={image.url} key={index} alt="img" />
          ))}
        </Carousel>
      )}
    </div>
  );
};
export default memo(Slider);

Slider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    })
  ),
};
