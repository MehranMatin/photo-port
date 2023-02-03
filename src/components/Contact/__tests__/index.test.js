// __tests__/Contact.test.js
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import Contact from '..';

afterEach(cleanup);

//checking component renders and creating snapshot test
describe('Contact component', () => {
  // baseline test
  it('renders', () => {
    render(<Contact />);
  });
  // snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });
});

// checks h1 tag renders
describe('h1 "Contact Me" is visible', () => {
  it('Inserts text into h1', () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId('h1tag')).toHaveTextContent('Contact Me');
  });
});

// checks to make sure submit button renders
describe('Submit button is visible', () => {
  it('Subit inserted into button', () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId('submit')).toHaveTextContent('Submit');
  });
});
