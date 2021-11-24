import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <Container fluid className="contact-container">
        <h2 className="contact-title">Contact me, I'd love to hear from you</h2>
        <div className="contactForm">
          <Form>
            <Form.Group className="form-group">
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control
                className="input-form"
                name="name"
                type="text"
                placeholder="Your name"
                // ref={nameRef}
              />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                className="input-form"
                name="email"
                type="email"
                placeholder="Your Email"
                // ref={emailRef}
              />
            </Form.Group>

            <Form.Group className="form-group">
              <Form.Label htmlFor="message">Your message</Form.Label>
              <Form.Control
                className="input-form"
                name="message"
                as="textarea"
                rows="3"
                placeholder="Your message"
                // ref={messageRef}
              />
            </Form.Group>

            <Button
              // onClick={submitMessage}
              className="form-button"
              size="lg"
              variant="primary"
              type="submit"
            >
              Send
            </Button>

            {/*{state.sent ? (*/}
            {/*  <strong>Email Sent</strong>*/}
            {/*) : (*/}
            {/*  <strong>Email Not Sent</strong>*/}
            {/*)}*/}
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Contact;
