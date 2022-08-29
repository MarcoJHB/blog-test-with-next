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

      <button onClick={() => router.replace('/', undefined, { shallow: true })}>
        {' '}
        Submit Another Response{' '}
      </button>
    </React.Fragment>
  );

  const ContactForm = (
    <form
      className="container"
      method="POST"
      name="contact-form"
      action="/?success=true"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="subject" value={`You've got mail from ${submitterName}`} />
      <input type="hidden" name="form-name" value="contact-form" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <p>
        <label htmlFor="name">Name *</label>
        <input
          id="name"
          name="name"
          required
          onChange={(e) => setSubmitterName(e.target.value)}
          type="text"
        />
      </p>
      <p>
        <label htmlFor="company">Company *</label>
        <input id="company" name="company" required type="text" />
      </p>
      <p>
        <label htmlFor="email">E-mail Address *</label>
        <input id="email" type="email" name="email" required />
      </p>
      <p>
        <label htmlFor="message">Message *</label>
        <textarea id="message" name="message" required />
      </p>
      <p>
        <button type="submit">Submit</button>
      </p>
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
