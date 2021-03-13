import React from 'react';
import Duration from './Duration';

const OverView = () => {
  return (
    <div>
      <div className='text-3xl mb-10 font-medium flex-col flex md:flex-row items-center justify-between font-display'>
        Overview
        <div className='mt-5 md:mt-0'><Duration /></div>
      </div>
    </div>
  );
};

export default OverView;
