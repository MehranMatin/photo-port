import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Gallery from '..';

const portrait = {
  name: 'portraits',
  description: 'Portraits of people in my life'
};

afterEach(cleanup);

describe('Gallery is rendering', () => {
  it('renders', () => {
    render(<Gallery currentCategory={portrait} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Gallery currentCategory={portrait} />);
    expect(asFragment()).toMatchSnapshot();
  });

  // make sure that the title of <h1> is Portraits
  it('renders', () => {
    const { getByTestId } = render(<Gallery currentCategory={portrait} />);
    expect(getByTestId('h1tag')).toHaveTextContent('Portraits');
  });
});
