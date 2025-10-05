import React from 'react'
import { FaMoneyCheck } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

const Card = ({icon,title,shortDescription,setOpenModal,handleClick}) => {



  return (
    <div className='border-gray-300 border-2 md:w-[300px] w-[300px] md:p-4 p-6 rounded-md flex flex-col gap-4'>
    {icon}
     <h2 className='text-primary font-bold'>{title}</h2>
     <span className='text-gray-500 text-wrap'>{shortDescription}</span>
     <div className="">
      <span className='flex text-[#D946EF] text-sm font-bold underline gap-0.5 cursor-pointer hover:text-[#e995f6]'  onClick={()=>{handleClick(); setOpenModal(prev=>!prev)}}>Know more <FaExternalLinkAlt/></span>
     </div>
    </div>
  )
}

export default Card