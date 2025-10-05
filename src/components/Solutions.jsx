import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { FaMoneyCheck } from "react-icons/fa6";
import { PiStudent } from "react-icons/pi";
import { IoAnalyticsSharp } from "react-icons/io5";
import { ModalContext } from "../context/ModalContext";
import InfoModal from "./InfoModal";

const cardContent = [
  {
    icon: <FaMoneyCheck color="#D946EF" className="sm:text-3xl text-2xl" />,
    title: "Payment Gateway Orchchestration",
    shortDescription:
      "Simplify and optimize your payment processing with our advanced gateway orchestration platform.",
  },
  {
    icon: <PiStudent color="#D946EF" className="sm:text-3xl text-2xl" />,
    title: "Student Prepaid ID Cards",
    shortDescription:
      "Provide secure and convenient payment solutions for students with our prepaid ID cards",
  },
  {
    icon: <IoAnalyticsSharp color="#D946EF" className="sm:text-3xl text-2xl" />,
    title: "Financial Analytics Platform",
    shortDescription:
      "Gain valuable insights into your financial data with our comprehensive analytics platform",
  },
];

const Solutions = () => {
  const { openModal, setOpenModal } = useContext(ModalContext);

   const [index, setIndex] = useState();
   useEffect(()=>{
   console.log(index)
   },[index])

  return (
    <div className="p-4 py-16 md:py-24 w-full relative" id="solutions">
      <div className=" flex flex-col gap-8 items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          <h1 className="text-primary md:text-6xl sm:text-4xl text-3xl font-bold md:leading-20 leading-15 ">
            Our Solutions
          </h1>
          <span className="text-gray-500 block lg:text-2xl text-center">
            Discover our comprehensive suite of solutions tailored for your
            business.
          </span>
        </div>
        <div className=" flex flex-col md:flex-row md: gap-8">
          {cardContent.map((ele, idx) => {
             
            return <Card {...ele} setOpenModal={setOpenModal} handleClick ={()=>setIndex(idx)} />;
          })}
        </div>
        <div className=""></div>
      </div>
      {openModal ? <InfoModal index={index} /> : ""}
    </div>
  );
};

export default Solutions;
