import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Divider } from 'antd';
import RelatedArticles from '../RelatedArticles';
import styles from './styles.module.css';

function Block({ block }) {
  const { content } = block;
  if (typeof content === 'string') {
    return <div className={styles.block}>{ReactHtmlParser(content)}</div>;
  } else if (typeof content === 'object') {
    return <RelatedArticles articles={content} />;
  }
}
export default memo(Block);

Block.propTypes = {
  block: PropTypes.shape({
    content: PropTypes.any.isRequired,
  }).isRequired,
};
