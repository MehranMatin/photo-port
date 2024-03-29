import React from 'react';

// we received currentPhoto from the PhotoList component...
function Modal({ onClose, currentPhoto }) {
  // then assigned its properties in the modal
  const { name, category, description, index } = currentPhoto;

  return (
    <div className='modalBackdrop'>
      <div className='modalContainer'>
        <h3 className='modalTitle'>{name}</h3>
        <img
          src={require(`../../assets/large/${category}/${index}.jpg`)}
          alt='current category'
        />
        <p>{description}</p>
        <button type='button' onClick={onClose}>
          Close this modal
        </button>
      </div>
    </div>
  );
}

export default Modal;
