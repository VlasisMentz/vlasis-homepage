import React, { useState, useEffect } from 'react';
import HomePage from './HomePage';
import SecondHome from './SecondHome';
import SpinnerLoader from './SpinnerLoader';

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
        <>
          <HomePage />
          <SecondHome />
        </>
      )}
    </>
  );
};

export default Home;
