import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HomeLogo from '../assets/HomeLogo.png';
import Type from './Type';

const Home = () => {
  return (
    <section>
      <Container fluid className='home-section' id='home'>
        <Container className='home-content'>
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
      </Container>
    </section>
  );
};

export default Home;
