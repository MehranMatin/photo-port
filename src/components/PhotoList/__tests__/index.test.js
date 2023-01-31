import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';
import React from 'react';
import PhotoList from '../';

afterEach(cleanup);

describe('PhotoList is rendering', () => {
  it('renders', () => {
    render(<PhotoList />);
  });

  it('renders', () => {
    const { asFragment } = render(<PhotoList />);
    expect(asFragment()).toMatchSnapshot();
  });
});
