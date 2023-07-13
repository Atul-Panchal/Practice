// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" rows="4"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
