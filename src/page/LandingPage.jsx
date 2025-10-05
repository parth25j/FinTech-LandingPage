import React from "react";
import Navbar from "../components/Navbar";
import Section from "../layout/Section";
import Hero from "../components/Hero";
import Solutions from "../components/Solutions";
import { ModalContext } from "../context/ModalContext";
import { useContext } from "react";
import InfoModal from "../components/InfoModal";
import Pricing from "../components/Pricing";
import About from "../components/About";

const LandingPage = () => {
  const { openModal, setOpenModal } = useContext(ModalContext);
  return (
    <>
      <div className="">
        <div className="w-full h-[50px] md:px-2 border-b-1 border-[#e5e7eb]">
          <Navbar />
        </div>
        <div className="flex  justify-center">
          <Section>
            <Hero />
            <Solutions />
            <About/>
            <Pricing/>
          </Section>
        </div>
      </div>
    </>
  );
};

export default LandingPage;


