import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Navbar.css'; // Assuming your styles are in this file

const ContactUS = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_w0np3vs', 'ArthaMarga-service', form.current, {
        publicKey: 'vhomNDWXqzyVZJUhc',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const style = {
    backgroundImage: `url("indian5.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh', // Adjust height as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1,
  };

  const contentStyle = {
    zIndex: 2,
    maxWidth: '800px',
    width: '100%',
    padding: '20px',
  };

  return (
    <section style={style} className='contact'>
      <div style={overlayStyle}></div>
      <div className='content' style={contentStyle}>
        <h2>Contact Us</h2>
        <p>
          Connect with us through email and give your feedback for services provided by us. Let us connect, let's earn together, and grow together.
        </p>
      </div>

      <div className='contact-form' style={contentStyle}>
        <h2>Send Message</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className='input-box'>
            <input type="text" placeholder='Your Name' name="user_name" />
          </div>
          <div className='input-box'>
            <input type="email" placeholder='Email' name="user_email" />
          </div>
          <div className='input-box'>
            <textarea placeholder='Write a Message' name="message" />
          </div>
          <input className='input-box' type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
};

export default ContactUS;
