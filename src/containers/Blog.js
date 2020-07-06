import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Divider } from 'antd';
import Theme from '../components/Theme';
import Authors from '../components/Authors';
import Slider from '../components/Slider';
import Summary from '../components/Summary';
import Blocks from '../components/Blocks';
import Rating from '../components/Rating';
import Rate from '../components/Rate';
import Loader from '../components/Loader';
import Data from '../data/article.json';
import 'antd/dist/antd.css';

const Blog = () => {
  const [blog, setBlog] = useState(null);
  const [yourRating, setYourRating] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const blogData = localStorage.getItem('blog');
    const yourRatingData = localStorage.getItem('yourRating');

    if (blogData) {
      setBlog(JSON.parse(blogData));
    } else {
      setBlog(Data.result.article);
    }

    if (yourRatingData) {
      setYourRating(JSON.parse(yourRatingData));
    }

    setTimeout(function () {
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    localStorage.setItem('blog', JSON.stringify(blog));
    localStorage.setItem('yourRating', JSON.stringify(yourRating));
  });

  const updateRatingToBlog = (yourRating, blog) => {
    let { rating } = blog;
    rating = rating || {
      userCount: 0,
      totalRating: 0,
    };
    const newBlog = {
      ...blog,
      rating: {
        userCount: rating.userCount + 1,
        totalRating: rating.totalRating + yourRating,
      },
    };
    setBlog(newBlog);
  };

  if (loading) {
    return (
      <Theme>
        <Loader />
      </Theme>
    );
  }
  if (!blog) {
    return (
      <Theme>
        <h1>Not found</h1>
      </Theme>
    );
  }

  const { authors, blocks, title, summary, imageList } = blog;
  const images = Object.values(imageList);

  const rating = blog.rating || {
    userCount: 0,
    totalRating: 0,
  };

  return (
    <Theme>
      <Helmet>
        <title>Blog</title>
        <meta name="Blog" content="Blog" />
      </Helmet>
      <h1>{title}</h1>
      <Authors authors={authors} />
      <Divider />
      <Slider images={images} />
      <Divider />
      <Summary summary={summary} />
      <Divider />
      <Blocks blocks={blocks} />
      <Divider />
      <Rating rating={rating} />
      <Divider />
      <Rate
        rating={yourRating}
        blog={blog}
        setRating={setYourRating}
        updateRatingToBlog={updateRatingToBlog}
      />
    </Theme>
  );
};

export default Blog;
