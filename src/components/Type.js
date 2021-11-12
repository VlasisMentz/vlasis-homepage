import React from 'react';
import Typewriter from 'typewriter-effect';

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          'Front End Enthusiast',
          'React Developer',
          'software engineer',
          'Ninja',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
