import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DiReact, DiJavascript1, DiHtml5 } from "react-icons/di";
import { SiTestinglibrary } from "react-icons/si";

const About = () => {
  return (
    <>
      <Container fluid className="about-container">
        <h1>
          Some Of My <span className="skills-span">Skills</span>
        </h1>
        <Row className="about-row">
          <Col xs={4} md={2} className="skill-icons">
            <DiReact />
          </Col>
          <Col xs={4} md={2} className="skill-icons">
            <DiJavascript1 />
          </Col>
          <Col xs={4} md={2} className="skill-icons">
            <DiHtml5 />
          </Col>
          <Col xs={4} md={2} className="skill-icons">
            <SiTestinglibrary />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
