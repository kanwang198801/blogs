import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import styles from './styles.module.css';

const RelatedArticles = ({ articles }) => (
  <div className={styles.relatedArticles}>
    <h4>Related Articles</h4>
    {articles.map((article, index) => {
      const { title } = article;
      return (
        <div className={styles.relatedArticle} key={index}>
          <h5>{title}</h5>
        </div>
      );
    })}
  </div>
);

export default memo(RelatedArticles);

RelatedArticles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
