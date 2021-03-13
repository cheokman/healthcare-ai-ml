import React from 'react';

const DetailsComponent = ({ numericalData = '4/12', label = 'ICU' }) => {
  return (
    <div className='text-center'>
      <div className='font-body text-lg font-medium '>{numericalData}</div>
      <div className='font-display text-sm font-semibold text-gray-500'>
        {label}
      </div>
    </div>
  );
};

const TotalOccAndPatientComp = ({ heading, subHeading, dataInformation, growthOrLoss = 'growth', growthOrLossData = '5' }) => {
  return (
    <div className='w-full bg-none text-center font-body py-8 px-8 '>
      <div className='text-sm text-gray-600 flex items-center w-16 m-auto mt-6 mb-1'>
        <div className='w-4 mr-1'>
          <img src={`/media/${growthOrLoss}.svg`} alt={growthOrLoss} />
        </div>
        {growthOrLoss === 'loss' ? '-' : '+'}{growthOrLossData}%
      </div>
      <div className='text-4xl font-semibold'>{subHeading}</div>
      <div className='text-sm text-gray-500'>{heading}</div>
      <div className='grid grid-cols-3 mt-12'>
        {dataInformation.map((data, index) => {
          return  <div key={index}>
          <DetailsComponent label={data.label} numericalData={data.numericalData} />
        </div>
        })}
      </div>
    </div>
  );
};

export default TotalOccAndPatientComp;
