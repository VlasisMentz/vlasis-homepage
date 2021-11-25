import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "../ProjectCard";

import grocery from "../../assets/grocery.JPG";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <h1 className="projects-heading">
        Some Of My<strong> Projects</strong>
      </h1>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4}>
          <ProjectCard
            imgPath={grocery}
            title="Grocery"
            description="A simple grocery list keeper made with React."
          />
        </Col>
        <Col md={4}>
          <ProjectCard
            imgPath={grocery}
            title="Grocery"
            description="A simple grocery list keeper made with React."
          />
        </Col>
        <Col md={4}>
          <ProjectCard
            imgPath={grocery}
            title="Grocery"
            description="A simple grocery list keeper made with React."
          />
        </Col>
        <Col md={4}>
          <ProjectCard
            imgPath={grocery}
            title="Grocery"
            description="A simple grocery list keeper made with React."
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
