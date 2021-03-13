import React from 'react'
import NewAndAbnormalSymptom from '../components/NewAndAbnormalSymp';
import OverView from '../components/Overview/Overview';
import BasicTable from '../components/PatientDetailsTable';
import TotalOccAndPatient from '../components/TotalOccupancyAndPatients';
import AcquitionAndAgeGroups from './AcquitionAndAgeGroups';

const OverviewPage = () => {
  return <div>
    <OverView />
    <div className='w-full grid grid-rows-3 xm:grid-rows-1 xm:grid-cols-3 gap-6'>
        <div className='row-span-2 xm:row-span-1 xm:col-span-2 h-full'>
          <TotalOccAndPatient />
        </div>
        
      </div>
  </div>
}

export default OverviewPage