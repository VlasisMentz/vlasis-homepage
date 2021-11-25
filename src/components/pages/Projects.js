import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "../ProjectCard";

import grocery from "../../assets/grocery.JPG";
import menu from "../../assets/menu.JPG";
import cocktail from "../../assets/cocktail.JPG";
import quiz from "../../assets/quiz.JPG";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <h1 className="projects-heading">
        Some Of My<strong> Projects</strong>
      </h1>

      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col xl={3} lg={4} md={6} className="project-card">
          <ProjectCard
            imgPath={grocery}
            title="Grocery"
            description="A simple grocery list keeper made with React."
            link="https://grocery-bud-react-vlasis.netlify.app/"
          />
        </Col>
        <Col xl={3} lg={4} md={6} className="project-card">
          <ProjectCard
            imgPath={menu}
            title="Menu"
            description="Lorem ipsum dolor sit amet, sdfgffff consectetur adipiscing elit, sed do eiusmod tempor"
            link="https://reactmenuproject.netlify.app/"
          />
        </Col>
        <Col xl={3} lg={4} md={6} className="project-card">
          <ProjectCard
            imgPath={cocktail}
            title="Cocktail"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
            link="https://vlasis-cocktail-db.netlify.app/"
          />
        </Col>
        <Col xl={3} lg={4} md={6} className="project-card">
          <ProjectCard
            imgPath={quiz}
            title="Quiz"
            description="A simple grocery list keeper made with React.Lorem ipsum dolor sit amet, sdfgffff consectetur adipiscing elit,Lorem ipsum dolor sit amet, sdfgffff con"
            link="https://vlasis-quiz.netlify.app/"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
