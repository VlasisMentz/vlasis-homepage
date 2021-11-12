import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default Home;
