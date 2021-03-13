import React, { useState } from 'react';
import Pill from './PIll';

const Pills5 = () => {
  const timePeriod = ['Last Week', 'Last Month', '3 Months', 'Lifetime'];
  const [activeLabel, setActiveLabel] = useState(timePeriod[0]);
  return (
    <div className='xs:flex w-full xs:w-96'>
      <Pill
        clickHandler={setActiveLabel}
        label={timePeriod[0]}
        activeLabel={activeLabel}
        style='sm:w-40 mb-2 xs:mb-0 w-24 xs:rounded-l-lg'
      />
      <Pill
        clickHandler={setActiveLabel}
        label={timePeriod[1]}
        activeLabel={activeLabel}
        style='sm:w-40 mb-2 xs:mb-0 w-24'
      />
      <Pill
        clickHandler={setActiveLabel}
        label={timePeriod[2]}
        activeLabel={activeLabel}
        style='sm:w-40 mb-2 xs:mb-0 w-24'
      />
      <Pill
        clickHandler={setActiveLabel}
        label={timePeriod[3]}
        activeLabel={activeLabel}
        style='sm:w-40 mb-2 xs:mb-0 w-24 xs:rounded-r-lg'
      />
    </div>
  );
};

export default Pills5;
