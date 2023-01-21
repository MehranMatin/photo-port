// We need react to enable the components to function properly so we can test them
import React from 'react';
// functions from the React Testing Library
import { cleanup, render } from '@testing-library/react';
// need the extend-expect library from the jest-dob package
import '@testing-library/jest-dom/extend-expect';

// Component being tested
import About from '..';

// call the cleanup utility function using the afterEach global function from Jest
afterEach(cleanup);
// declare the componenet we're testing
describe('About component', () => {
  // First Test
  // baseline to verify that the component is rendering
  it('renders', () => {
    render(<About />);
  });
  // Second Test
  it('matches snapshot DOM node structure', () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
