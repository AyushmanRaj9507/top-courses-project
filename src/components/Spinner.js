import React from 'react'
import "./Spinner.css"
const Spinner = () => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className='spinner'></div>
      <p className="text-bgDark text-lg font-semibold">Loading....</p>
      <p className="text-bgDark text-lg font-semibold">Please wait while we load the content…</p>

    </div>
  )
}

export default Spinner
