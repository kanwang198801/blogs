import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Block from '../index';

const blockNoraml = {
  blockTypeId: 0,
  content:
    '<p>You’ve just got home from work, you’ve squeezed in a workout, the last thing you want to do is think too hard about food. Luckily, you don’t have to. This weeknight recipe collection is all about simple ingredients (many of which you already have in your pantry or fridge), quick cook times and all-round bang for your buck. Consider your dinner sorted!</p>',
};

const blockRelatedPost = {
  blockTypeId: 1,
  displayId: 0,
  content: [
    {
      imageList: {
        landscapedesktop1x: {
          url:
            'https://cdn.centr.com/content/8000/7032/images/landscapedesktop1x-f9d77922d5360243a94d579360e1c766-loup-cen-veggiepitawraps-43l.jpg',
        },
      },
      imageReference: '',
      url: '/recipe/5822',
      title: 'DAN CHURCHILL’S VEGGIE PITA WRAPS',
      summary:
        'Dan is the man when it comes to fast, fresh and healthy dinners – this one will be on your plate (or in your hand) in all of 10 minutes! Wraps are a great way to bundle up those last little bits, so feel free to swap for whatever veggies you’ve got lying around in your fridge.',
    },
    {
      imageList: {
        landscapedesktop1x: {
          url:
            'https://cdn.centr.com/content/8000/7032/images/landscapedesktop1x-fb5d33e78d8dfbd8e879e1468294453d-loup-hco-honeyglazedchickenwithpotatowedges-43l.jpg',
        },
      },
      imageReference: '',
      url: '/recipe/4950',
      title: 'HONEY GLAZED CHICKEN WITH POTATO WEDGES',
      summary:
        'Everything you need for a golden glaze (soy sauce, tomato paste, honey and garlic) is already in your pantry, so just shake it up, coat that chicken and get it in the oven. Wedges and asparagus make for simple, and simply perfect, sides.',
    },
  ],
};

afterEach(cleanup);

it('should match the snapshot with normal content', () => {
  const { container } = render(<Block block={blockNoraml} />);
  expect(container.firstChild).toMatchSnapshot();
});

it('should match the snapshot with related posts content', () => {
  const { container } = render(<Block block={blockRelatedPost} />);
  expect(container.firstChild).toMatchSnapshot();
});

it('should match the text with normal content', () => {
  const { getByText } = render(<Block block={blockNoraml} />);
  const relatedArticlesNode = getByText(/You’ve just got home from work/);
  expect(relatedArticlesNode).toBeDefined();
});

it('should match the text with related posts content', () => {
  const { getByText } = render(<Block block={blockRelatedPost} />);
  const relatedArticlesNode = getByText(/Related Articles/);
  expect(relatedArticlesNode).toBeDefined();
});
