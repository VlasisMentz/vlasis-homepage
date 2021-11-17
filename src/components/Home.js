import React, { useState, useEffect } from 'react';
import HomePage from './HomePage';
import Footer from './Footer';
import SpinnerLoader from './SpinnerLoader';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  //----------Render----------
  return (
    <>
      {isLoading ? (
        <SpinnerLoader />
      ) : (
        <>
          <HomePage />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
