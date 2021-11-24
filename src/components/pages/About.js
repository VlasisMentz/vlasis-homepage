import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  DiReact,
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiNpm,
  DiMongodb,
  DiVisualstudio,
  DiIntellij,
  DiGithubFull,
} from "react-icons/di";
import {
  SiTestinglibrary,
  SiBootstrap,
  SiJest,
  SiMysql,
  SiNetlify,
  SiFigma,
} from "react-icons/si";

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
          <Col xs={4} md={2} className="skill-icons">
            <DiCss3 />
          </Col>
          <Col xs={4} md={2} className="skill-icons">
            <SiBootstrap />
          </Col>
          <Col xs={4} md={2} className="skill-icons">
            <DiNpm />
          </Col>
          <Col xs={4} md={2} className="skill-icons">
            <SiMysql />
          </Col>
          <Col xs={4} md={2} className="skill-icons">
            <DiMongodb />
          </Col>
          <Col xs={4} md={2} className="skill-icons">
            <SiJest />
          </Col>
        </Row>
      </Container>
      <Container fluid className="about2-container">
        <h1>
          Some Of The <span className="skills-span">Tools</span> I Use
        </h1>
        <Row className="about-row">
          <Col xs={4} md={2} className="skill-icons">
            <DiVisualstudio />
          </Col>
          <Col xs={4} md={2} className="skill-icons">
            <DiIntellij />
          </Col>
          <Col xs={4} md={2} className="skill-icons">
            <SiNetlify />
          </Col>
          <Col xs={4} md={2} className="skill-icons">
            <DiGithubFull />
          </Col>
          <Col xs={4} md={2} className="skill-icons">
            <SiFigma />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
