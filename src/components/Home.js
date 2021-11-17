import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HomeLogo from '../assets/HomeLogo.png';
import SecondHome from './SecondHome';
import SpinnerLoader from './SpinnerLoader';
import Type from './Type';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <SpinnerLoader />
      ) : (
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
                <img
                  src={HomeLogo}
                  alt='home logo'
                  className='home-image-logo'
                />
              </Col>
            </Row>
          </Container>
          <SecondHome />
        </section>
      )}
    </>
  );
};

export default Home;
