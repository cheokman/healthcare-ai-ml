import React from 'react';
import TotalOccAndPatientComp from './TotalOccAndPatientComp';

const TotalOccAndPatient = () => {
  const PatientOccupancyData = [
    {
      label: 'ICU',
      numericalData: '4/12',
    },
    { 
      label: 'Deluxe', 
      numericalData: '21/42' 
    },
    { 
      label: 'General', 
      numericalData: '52/150' 
    },
  ];

  const PatientDiseasesData = [
    {
      label: 'Cold and Flu',
      numericalData: '9,241',
    },
    { 
      label: 'Diabetes', 
      numericalData: '1,219' 
    },
    { 
      label: 'Headaches and Stomachs', 
      numericalData: '12,512' 
    },
  ];

  return (
    <div className='w-full h-full grid grid-rows-2 xm:grid-rows-1 xm:grid-cols-2 gap-2'>
      <div className='bg-white rounded-l-xl'>
        <TotalOccAndPatientComp  growthOrLoss='loss' growthOrLossData = '5' dataInformation={PatientOccupancyData} />
      </div>
      <div className='bg-white rounded-r-xl'>
        <TotalOccAndPatientComp growthOrLoss='growth' growthOrLossData = '14' dataInformation={PatientDiseasesData} />
      </div>
    </div>
  );
};

export default TotalOccAndPatient;
