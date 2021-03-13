import React from 'react'

const SymptomDetail = ({ symptom = 'cough', percentage = '3'}) => {
  return <div className='flex items-center justify-between font-display mb-1 mr-1'>
  <div>{symptom}</div>
  <div>{percentage} %</div>
</div>
}

export default SymptomDetail