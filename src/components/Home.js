import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import SpinnerLoader from "./SpinnerLoader";
import Footer from "./Footer";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  //----------Render----------
  return (
    <>
      {isLoading ? (
        <SpinnerLoader />
      ) : (
        <>
          <HomePage />
        </>
      )}
    </>
  );
};

export default Home;
