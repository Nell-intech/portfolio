import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
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
    <div>

      <div className="main" >
        <div className="formGroupContainer">
        <div className="formContainerTop yellow" ></div>
        
        <div className="formContainer " >
          <Form className="form " ref={form} onSubmit={sendEmail} >
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} name="message"/>
            </Form.Group>
            
            <button className="br left-margin main-button" type="submit" value="Send">Send =)</button>
            
            <hr />
          </Form>
        </div>
        </div>

      </div>
    </div>
  );
};