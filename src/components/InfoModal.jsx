import React, { useContext, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { ModalContext } from "../context/ModalContext";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaGlobeAfrica } from "react-icons/fa";
import { IoAnalyticsSharp } from "react-icons/io5";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { AiOutlineDashboard } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";

const iconStyle = {
  color: "#D946EF",
  className: "text-lg",
};
const modalContent = [

  {
    id: 0,
    title: "Payment Gateway Orchestration",
    desc: " Our Payment Gateway Orchestration product offers intelligent routing for multiple country-specific gateways, ensuring seamless transactions and optimized performance. It simplifies backend processes, allowing businesses to focus on growth while we handle the complexities of payment processing.",
    subHeading: "Key Features",
    pointer: [
      {
        icon: (
          <FaArrowRightArrowLeft
            className={iconStyle.className}
            color={iconStyle.color}
          />
        ),
        content: {
          heading: "Smart Routing",
          content: "Intelligently routes transactions to the most suitable gateway based on location, currency, and performance metrics.",
        },
      },
      {
        icon: <FaGlobeAfrica
        className={iconStyle.className}
        color={iconStyle.color}
        />,
        content: {
          heading: "Multi-Country Support",
          content: "Supports a wide range of payment methods and gateways across multiple countries, ensuring global reach.",
        },
      },
      {
        icon: <IoAnalyticsSharp
        className={iconStyle.className}
        color={iconStyle.color}
        />,
        content: {
          heading: "Real-Time Analytics",
          content: "Provides real-time monitoring and analytics to track performance, identify issues, and optimize payment strategies.",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Student Prepaid cum ID Cards",
    desc: " Empower students with financial independence and controlled spending through our innovative prepaid cum ID cards. Manage allowances, track expenses, and ensure secure transactions, all in one card.",
    subHeading: "Key Features",
    pointer: [
      {
        icon: (
          <FaMoneyCheckDollar
            className={iconStyle.className}
            color={iconStyle.color}
          />
        ),
        content: {
          heading: "Controlled Spending",
          content: "Set daily, weekly, or monthly spending limits to help students manage their finances responsibly.",
        },
      },
      {
        icon: <FaClock
        className={iconStyle.className}
        color={iconStyle.color}
        />,
        content: {
          heading: "Real-Time Tracking",
          content: "Track transactions in real-time through our mobile app, providing transparency and control over spending.",
        },
      },
      {
        icon: <MdOutlineVerifiedUser
        className={iconStyle.className}
        color={iconStyle.color}
        />,
        content: {
          heading: "Enhanced Security",
          content: "Secure transactions with chip and PIN technology, ensuring safety against unauthorized use.",
        },
      },
      {
        icon: <ImProfile
        className={iconStyle.className}
        color={iconStyle.color}
        />,
        content: {
          heading: "Dual Functionality",
          content: "Use the card as a student ID for campus access and other student-related activities.",
        },
      },
    ],
  },
  {
    id:3,
    title: "Advanced Analytics",
    desc: " Gain deeper insights into your financial performance with our advanced analytics tools. Track key metrics, identify trends, and make data-driven decisions to optimize your financial strategies.",
    subHeading: "Key Features",
    pointer: [
      {
        icon: (
          <FaArrowRightArrowLeft
            className={iconStyle.className}
            color={iconStyle.color}
          />
        ),
        content: {
          heading: "Customizable Dashboards",
          content: "",
        },
      },
      {
        icon: <FaGlobeAfrica
        className={iconStyle.className}
        color={iconStyle.color}
        />,
        content: {
          heading: "Real-time Data Tracking",
          content: " ",
        },
      },
      {
        icon: <IoAnalyticsSharp
        className={iconStyle.className}
        color={iconStyle.color}
        />,
        content: {
          heading: "Predictive Analytics",
          content: " "
        },
      },
    ],
  },
];

const InfoModal = ({index}) => {
  const { openModal, setOpenModal } = useContext(ModalContext);
  console.log(index,"index is")

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  if (!openModal) return null;

  const data = modalContent[index];

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 ">
        <div className="bg-white w-[380px] min-h-[380px] max-h-[760px] md:min-h-[380px] md:max-h-[750px] p-2 px-4 rounded-xl shadow-xl md:w-[490px] text-center lg:w-[490px] flex flex-col">
          <div className="">
            <MdClose
              onClick={() => setOpenModal(!openModal)}
              className="text-primary-dark text-2xl cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-2 lg:gap-4 mt-2">
            <div className="flex flex-col gap-2">
              <h1 className="text-left text-primary font-bold">
                {data?.title}
              </h1>
              <span className="inline-block text-left text-sm text-gray-500 leading-5">
                {data?.desc}
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-left font-medium">{data?.subHeading}</h2>

              {data?.pointer?.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-2 justify-center items-center text-left"
                >
                  <div>{item.icon}</div>
                  <div className="bg-pink-50 flex flex-col flex-1 p-2 rounded-md">
                    <h3 className="font-semibold text-sm">{item.content.heading}</h3>
                    <span className="text-sm text-gray-500 leading-4">{item.content.content}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoModal;
