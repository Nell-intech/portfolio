import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { NavLink } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function ContactForm () {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3kq01oo', 'template_bf0peqr', form.current, '-ywZvNFbjUqQkxvxI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};