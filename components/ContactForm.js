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

      <button onClick={() => router.replace('/favicon/favicon.ico', undefined, { shallow: true })}>
        Submit Another Response
      </button>
    </React.Fragment>
  );

  const ContactForm = (
    <form name="contact" action="?success=true" method="POST" data-netlify="true">
      <p>
        <label>
          Your Name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p></p>
      <p>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
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
