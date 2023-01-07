import React from 'react'
import './contacts.css'
import {MdEmail} from 'react-icons/md'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vseqgvr', 'template_gno56ya', form.current, 'xXtqVzyswaj5wwugc')

    e.target.reset();
  };

  return (
    <section id='contacts'>
      <h5 className='Getintouch'>Get in touch</h5>
      <h2 className='contactMe'>Contact Me</h2>

    <div className='container contact__container'>

      <div className='sendAMessage'>
        <h4><MdEmail/> Email</h4>
        <h5 className='emailS'>ranack21@gmail.com</h5>
        <a href="mailto:ranack21@example.com">send a message</a>
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your email' required/>
        <textarea name="message" id="" rows="7" placeholder='Your Message'></textarea>
        <button type='submit' className='btn btn-primmary'>Send Message</button>
      </form>
    </div>
  

    </section>
 
  )
}


export default Contacts