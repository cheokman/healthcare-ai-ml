import React from 'react';

const Pill = ({
  label = 'Pill',
  activeLabel = 'Pill',
  clickHandler,
  style = '',
}) => {
  return (
    <div
      className={`font-body font-normal ${
        label === activeLabel ? 'bg-blue text-white' : 'bg-white text-gray-500'
      } ${style} text-sm w-full px-2 py-1 rounded-md xs:rounded-none sm:px-2 sm:py-1 text-center cursor-pointer`}
      onClick={() => clickHandler(label)}
    >
      {label}
    </div>
  );
};

export default Pill;
