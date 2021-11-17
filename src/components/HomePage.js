import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Type from './Type';
import HomeLogo from '../assets/HomeLogo.png';
import SecondHome from './SecondHome';

const HomePage = () => {
  return (
    <section>
      <Container className='home-section home-content' id='home'>
        <Row>
          <Col md={7} className='home-header'>
            <h1 className='heading'>
              Hi There!
              <span className='wave' role='img' aria-labelledby='wave'>
                👋🏻
              </span>
            </h1>
            <h1>
              I'm <strong className='my-name'>Vlasis Mentzelopoulos</strong>
            </h1>
            <div className='type-animation'>
              <Type />
            </div>
          </Col>
          <Col md={5}>
            <img src={HomeLogo} alt='home logo' className='home-image-logo' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomePage;
