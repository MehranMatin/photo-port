// __tests__/Modal.test.js
import '@testing-library/jest-dom/extend-expect';
import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import Modal from '..';

const mockToggleModal = jest.fn();
const currentPhoto = {
  name: 'Park bench',
  category: 'landscape',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
  index: 1
};

afterEach(cleanup);

// renders and matches snapshot
describe('Modal component', () => {
  it('renders', () => {
    render(<Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />);
  });

  it('matches snapshot of DOM node structure', () => {
    const { asFragment } = render(
      <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

// clickhandler
describe('Click Event', () => {
  it('calls onClose handler', () => {
    const { getByText } = render(
      <Modal onClose={mockToggleModal} currentPhoto={currentPhoto} />
    );
    // simulate the user click event
    fireEvent.click(getByText('Close this modal'));
    // declares that the click handling function, mockToggleModal, will have been called one time
    expect(mockToggleModal).toHaveBeenCalledTimes(1);
  });
});
