import React from 'react';
import AcquitionChart from '../../components/AcquitionAndAgeGrupComp/AcquitionChart';
import AgeGroupChart from '../../components/AcquitionAndAgeGrupComp/AgeGroupChart';

const AcquitionAndAgeGroup = () => {
  const AcquitionChartData = [
    {
      Admissions: 2500,
      Retention: 5000,
    },
    {
      Admissions: 800,
      Retention: 100,
    },
    {
      Admissions: 500,
      Retention: 1200,
    },
    {
      Admissions: 1500,
      Retention: 1800,
    },
    {
      Admissions: 2005,
      Retention: 3080,
    },
    {
      Admissions: 3000,
      Retention: 1500,
    },
    {
      Admissions: 1000,
      Retention: 3000,
    },
  ];

  const AgeGroupChartData = [
    {
      Weekday: 'Sun',
      '>50': 151,
      '<50': 115,
    },
    {
      Weekday: 'Mon',
      '>50': 155,
      '<50': 56,
    },
    {
      Weekday: 'Tue',
      '>50': 190,
      '<50': 48,
    },
    {
      Weekday: 'Wed',
      '>50': 146,
      '<50': 114,
    },
    {
      Weekday: 'Thurs',
      '>50': 59,
      '<50': 31,
    },
    {
      Weekday: 'Fri',
      '>50': 113,
      '<50': 188,
    },
    {
      Weekday: 'Sat',
      '>50': 152,
      '<50': 57,
    },
  ];

  return (
    <div className='w-full grid grid-rows-2 xm:grid-rows-1 xm:grid-cols-2 gap-8'>
      <div className='rounded-xl h-72 bg-white'>
        <div className='ml-4 mt-4 -mb-6 font-display font-medium'>
          Acquisition
        </div>
        <div className='h-64'>
          <AcquitionChart data={AcquitionChartData} />
        </div>
      </div>
      <div className='rounded-xl  h-72 bg-white'>
        <div className='ml-4 mt-4 -mb-6 font-display font-medium'>
          Age group charts
        </div>
        <div className='h-64'>
          <AgeGroupChart data={AgeGroupChartData} />
        </div>
      </div>
    </div>
  );
};

export default AcquitionAndAgeGroup;
