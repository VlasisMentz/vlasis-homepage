import React, { useState } from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import { init } from "emailjs-com";
init("user_rpUp0bK7uNz6KClBE30pU");
// import Swal from "sweetalert2";

// const SERVICE_ID = "service_m72leld";
// const TEMPLATE_ID = "template_d3e332e";
// const USER_ID = "user_rpUp0bK7uNz6KClBE30pU";

const Contact = () => {
  const initialFormData = Object.freeze({
    name: "",
    email: "",
    message: "",
  });
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully");
    const templateId = "template_d3e332e";
    const serviceID = "service_m72leld";
    sendFeedback(serviceID, templateId, {
      from_name: formData.name,
      message: formData.message,
      email: formData.email,
    });
  };
  const sendFeedback = (serviceID, templateId, variables) => {
    window.emailjs
      .send(serviceID, templateId, variables)
      .then((res) => {
        console.log("email sent successfully");
      })
      .catch((err) => console.error("There has been an error.", err));
  };
  // const handleOnSubmit = (e) => {
  //   console.log(e.target.value);
  //   e.preventDefault();
  //   emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
  //     (result) => {
  //       console.log(e.target);
  //       Swal.fire({ icon: "success", title: "Message Sent Succesfully" });
  //     },
  //     (error) => {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Ooops, something went wrong",
  //         text: error.text,
  //       });
  //     }
  //   );
  //   e.target.reset();
  // };

  return (
    <>
      <Container fluid className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <div className="contactForm">
          <Form>
            <Form.Group className="form-group" controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Your name"
              />
            </Form.Group>

            <Form.Group className="form-group" controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="Your Email"
              />
            </Form.Group>
            <Form.Group className="form-group" controlId="formGridMessage">
              <Form.Label>Your message</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="message"
                as="textarea"
                rows="3"
                placeholder="Your message"
              />
            </Form.Group>
            <Button
              onClick={handleSubmit}
              className="form-button"
              size="lg"
              variant="primary"
              type="submit"
            >
              Send
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Contact;
