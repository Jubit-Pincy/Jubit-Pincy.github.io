import React, { useRef } from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m4ma4it', 'template_u7lhk0v', form.current, {
        publicKey: 'NQUWU_pfwTRHW8ijn',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Message sent successfully! Thank you for contacting me.');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Message failed to send. Please try again later.');
        },
      );
  };
  return (
    <section id="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className="contactform" ref={form} onSubmit={sendEmail}>
                <input type="text" className='name' placeholder='Your Name' name='name'/>
                <input type="email" className='email' placeholder='Your Email'name='email' />
                <textarea className='msg' name="message" rows='5' placeholder='Your Message'></textarea><br></br>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className="links">
                    <a href='https://www.linkedin.com/in/jubitpincy' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin} className="link" /></a>
                    <a href='https://github.com/Jubit-Pincy' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faGithub} className="link" /></a>

                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact;