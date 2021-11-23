import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../assets/Logo.png";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-designed">
          <h3>
            Designed and Developed by <br /> Vlasis Mentzelopoulos
          </h3>
        </Col>
        <Col md="4" className="footer-copyright">
          <h3>Copyright@ {year} VM.</h3>
        </Col>
        <Col md="4" className="footer-logo">
          <img className="footer-logo" src={Logo} alt="Vlasis dev logo" />
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
