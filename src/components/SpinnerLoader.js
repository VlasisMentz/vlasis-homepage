import React from 'react';

const SpinnerLoader = () => {
  return (
    <div id='section-preloader'>
      <div className='boxes'>
        <div className='box'>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className='box'>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className='box'>
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className='box'>
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
      <p className='spinner-loading'>Loading...</p>
    </div>
  );
};

export default SpinnerLoader;
