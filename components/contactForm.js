import React, { useState } from 'react';
import { useRouter } from 'next/router';

const ContactPage = () => {
  const [submitterName, setSubmitterName] = useState('');
  const router = useRouter();
  const confirmationScreenVisible = router.query?.success && router.query.success === 'true';
  const formVisible = !confirmationScreenVisible;

  const ConfirmationMessage = (
    <React.Fragment>
      <p>Thank you for submitting this form. Someone should get back to you within 24-48 hours.</p>

      <button onClick={() => router.replace('/contact', undefined, { shallow: true })}>
        {' '}
        Submit Another Response{' '}
      </button>
    </React.Fragment>
  );

  const ContactForm = (
    <form name="contact-form" method="POST" action="?success=true" data-netlify="true">
      <label htmlFor="name">Name *</label>
      <input id="name" name="name" required type="text" />
      <label htmlFor="email">E-mail Address *</label>
      <input id="email" type="email" name="email" required />
      <label htmlFor="message">Message *</label>
      <textarea id="message" name="message" required></textarea>
      <button type="submit">Submit</button>
    </form>
  );

  return (
    <div>
      <h1>Contact Us</h1>
      {formVisible ? ContactForm : ConfirmationMessage}
    </div>
  );
};

export default ContactPage;
