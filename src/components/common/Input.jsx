import React from 'react';

const Input = ({ weight, type, value }) => {
  return (
    <input
      type={type ?? 'text'}
      value={value}
      className={`bg-transparent ${weight} border-b-2 border-white pr-2 text-center`}
    />
  );
};

export default Input;
