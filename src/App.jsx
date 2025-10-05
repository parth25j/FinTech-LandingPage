import React from "react";
import LandingPage from "./page/LandingPage";
import Section from "./layout/Section";
import { ModalContextProvider } from "./context/ModalContext";


const App = () => {
 
  return (
    <>
 <ModalContextProvider>

      <LandingPage />
     {

     }

 </ModalContextProvider>
   
    </>
  );
};

export default App;
