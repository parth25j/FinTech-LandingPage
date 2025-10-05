import React from 'react'

const Section = ({children}) => {
  return (
    <div className=" lg:w-[1400px] w-[1000px] sm:w-[600px] md:p-0 px-4 py-16 sm:px-10 lg:px-20 xl:px-40 md:py-16" id="home">
        {children}
    </div>
  )
}

export default Section