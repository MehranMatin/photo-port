// Contact Form Component
import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  // add the Hook that'll manage the form data
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    console.log('errorMessage', errorMessage);

    // syncing form data with the form state with setter function setFormState only if passed quality tests
    if (!errorMessage) {
      // without the spread operator, the formState object would be overwritten to only contain the name: value key pair
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }
  // because the asynchronous nature of the setFormState function will cause the console.log placed in the function body of handleChange to appear delayed in its ability to sync
  console.log(formState);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  // create the DOM elements in the contact form using JSX
  // Due to keywords reserved in JavaScript, we need to replace the for attribute in the <label> element to htmlFor, just as class had to be changed to className previously
  return (
    <section>
      <h1 data-testid='h1tag'>Contact Me</h1>
      <form id='contact-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            name='name'
            defaultValue={name}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor='email'>Email address:</label>
          <input
            type='email'
            name='email'
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea
            name='message'
            rows='5'
            defaultValue={message}
            onBlur={handleChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className='error-text'>{errorMessage}</p>
          </div>
        )}
        <button type='submit' data-testid='submit'>
          Submit
        </button>
      </form>
    </section>
    // The && operator—known as the AND operator—is being used here as a short circuit. If the first value resolves to true, the second expression is evaluated. We used a short circuit previously with ||, the OR operator, in Express applications to assign ports with the expression const PORT = process.env.PORT || 3001;
  );
}

export default ContactForm;
