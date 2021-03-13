import React from 'react';
import SymptomDetail from './SymptomDetail';

const NewAndAbnormalSymptom = () => {
  return (
    <div className='bg-none w-full p-6'>
      <div className='font-semibold text-xl font-body'>
        New / abnormal Symptoms detected in Patients
      </div>
      <div className='h-24 mt-6 overflow-y-scroll'>
        <SymptomDetail />
        <SymptomDetail />
        <SymptomDetail />
        <SymptomDetail />
        <SymptomDetail />
      </div>
      <div style={{ borderColor: '#161d6f'}} className='mt-6 text-center font-display rounded-xl rounded-tr-none cursor-pointer border-4 text-xl py-3 px-6 bg-gray3 text-blue font-semibold'>
        Predict treatment for new diseases
      </div>
    </div>
  );
};

export default NewAndAbnormalSymptom;
