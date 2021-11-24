import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import HomeLogo from "../assets/HomeLogo.png";

const HomePage = () => {
  return (
    <section>
      <Container className="home-section home-content" id="home">
        <Row>
          <Col md={7} className="home-header">
            <h1 className="heading">
              Hi There!
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
            </h1>
            <h1>
              I'm <strong className="my-name">Vlasis Mentzelopoulos</strong>
            </h1>
            <div className="type-animation">
              <Type />
            </div>
          </Col>
          <Col md={5}>
            <img src={HomeLogo} alt="home logo" className="home-image-logo" />
          </Col>
        </Row>
      </Container>
      <Container fluid className="profile-container">
        <Row>
          <h1>
            My <strong>Profile</strong>
          </h1>
          <p>
            Passionate with technology with great interest in Computer Science,
            popular technologies, programming languages and databases (React,
            HTML/CSS, JavaScript MongoDB and many other), frameworks and tools
            (GIT, etc.). Spending several hours a day in the “Facebook” of
            developers (i.e. Stack Overflow, Reddit), I am always passionate
            about learning and sharing knowledge, best practices, and tips
            around programming (active user in both sites with several posts).
            Tech savy and computer junkie I am always driven from technology
            innovation and eager to learn and expand my career prospect
          </p>
        </Row>
      </Container>
    </section>
  );
};

export default HomePage;
