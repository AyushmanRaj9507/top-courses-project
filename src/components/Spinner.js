import React from 'react';
import "./Spinner.css";

const Spinner = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className='spinner'></div>
      <p className="text-bgDark text-lg font-semibold">{message}</p>
      <p className="text-sm text-gray-500">Please wait while we load the content…</p>
    </div>
  )
}

export default Spinner;
