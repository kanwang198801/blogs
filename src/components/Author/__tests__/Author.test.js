import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Author from '../index';

const author = {
  name: 'Centr Team',
  imageList: {
    square1x: {
      url:
        'https://cdn.centr.com/content/5000/4738/images/square1x-cen-author-pic-the-expertsv2.jpg',
    },
    square2x: {
      url:
        'https://cdn.centr.com/content/5000/4738/images/square2x-cen-author-pic-the-expertsv2.jpg',
    },
    square3x: {
      url:
        'https://cdn.centr.com/content/5000/4738/images/square3x-cen-author-pic-the-expertsv2.jpg',
    },
  },
};

afterEach(cleanup);

it('should match the snapshot', () => {
  const { container } = render(<Author author={author} />);
  expect(container.firstChild).toMatchSnapshot();
});
