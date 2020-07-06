import React, { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { Card, Avatar } from 'antd';

function Author({ author }) {
  const { Meta } = Card;
  const { name, imageList } = author;
  return (
    <Card style={{ width: 'auto', border: 0 }}>
      <Meta avatar={<Avatar src={imageList.square1x.url} />} title={name} />
    </Card>
  );
}
export default memo(Author);

Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string,
    imageList: PropTypes.object.isRequired,
  }).isRequired,
};
