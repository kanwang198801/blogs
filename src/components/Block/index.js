import React, { memo } from 'react';
import styles from './styles.module.css';

function Block({ block }) {
  const { content } = block;
  return <div className={styles.block}>{content}</div>;
}
export default memo(Block);
