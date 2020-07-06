import React, { memo } from 'react';
import styles from './styles.module.css';
import { LoadingOutlined } from '@ant-design/icons';

function Loader() {
  return (
    <div className={styles.loader}>
      <LoadingOutlined />
    </div>
  );
}
export default memo(Loader);
