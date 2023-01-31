// Contact Form Component
import React, { useState } from 'react';

function ContactForm() {
  // add the Hook that'll manage the form data
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formState;

  function handleChange(e) {
    // without the spread operator, the formState object would be overwritten to only contain the name: value key pair
    setFormState({ ...formState, [e.target.name]: e.target.value });
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
      <h1>Contact me</h1>
      <form id='contact-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            name='name'
            defaultValue={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='email'>Email address:</label>
          <input
            type='email'
            name='email'
            defaultValue={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea
            name='message'
            rows='5'
            defaultValue={message}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
