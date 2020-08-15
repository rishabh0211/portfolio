import React, { useState, useEffect } from 'react';
import SocialLinks from "../../constants/socialLinks";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import StyledContact from '../styledComponents/StyledContact';

const Contact = () => {
  let timeout;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleNameChange = e => {
    setError('');
    setSuccess(false);
    setName(e.target.value);
  };

  const handleEmailChange = e => {
    setError('');
    setSuccess(false);
    setEmail(e.target.value);
  };

  const handleMessageChange = e => {
    setError('');
    setSuccess(false);
    setMessage(e.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (!name) return setError('Please provide your name!');
    if (!email) return setError('Please provide your email!');
    const form = event.target;
    const data = new FormData(form);
    fetch(form.action, {
      method: form.method,
      headers: {
        "Accept": "application/json"
      },
      body: data
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          return setError('Oops! Something went wrong. Check your email and try again!');
        }
        resetForm();
        setSuccess(true);
        timeout = setTimeout(() => setSuccess(false), 3000);
      }).catch(err => {
        setError(true);
      });
  };

  useEffect(() => {
    return () => clearTimeout(timeout);
  });

  return (
    <StyledContact id="contact">
      <div className="inner-section">
        <h3 className="hello-heading">
          <div className="hr-line"></div>
          get in touch
        </h3>
        <div className="info-container">
          <div className="personal-info">
            <span className="info">
              <AiOutlineMail className="icon" />
              <h3>rishabh0211@gmail.com</h3>
            </span>
            <span className="info">
              <GoLocation className="icon" />
              <h3>New Delhi, India</h3>
            </span>
            <SocialLinks styleClass="contact-social" />
          </div>
          <form
            action="https://formspree.io/mqkyjokv"
            method="POST"
            className="contact-form"
            onSubmit={handleFormSubmit}
            autoComplete="off" >
            <div className="form-group">
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Your name"
                autoComplete="off"
                value={name}
                onChange={handleNameChange} />
            </div>
            <div className="form-group">
              <input
                name="email"
                type="text"
                className="form-control"
                placeholder="Your email"
                autoComplete="off"
                value={email}
                onChange={handleEmailChange} />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                type="text"
                className="form-control"
                placeholder="Your Message/Query"
                autoComplete="off"
                value={message}
                onChange={handleMessageChange} >
              </textarea>
            </div>
            <button className="submit-btn" type="submit">Submit</button>
            {error && <h3 className="info-message error">{error}</h3>}
            {success && <h3 className="info-message success">Submitted successfully! I'll reach out to you.</h3>}
          </form>
        </div>
      </div>
    </StyledContact>
  )
}

export default Contact;