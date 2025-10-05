import React from "react";

const Hero = () => {
  return (
    // <div
    //   className="relative min-h-[480px] w-full rounded-lg overflow-hidden flex flex-col items-start justify-end p-8 sm:p-12 bg-[url('/HeroSectionImg.png')] bg-blend-darken "
    //   style={{
    //     style:
    //       "background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%)",
    //     backgroundRepeat: "no-repeat",
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    // >
    //   <div className="max-w-2xl text-white">
    //     <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tighter text-white">
    //       Empowering Financial Innovation
    //     </h1>
    //     <p class="mt-4 text-base lg:text-lg text-gray-200">
    //       We provide cutting-edge solutions to streamline your financial
    //       operations and drive growth.
    //     </p>
    //   </div>
    // </div>

    <div className="relative min-h-[480px] w-full rounded-lg overflow-hidden flex flex-col items-start justify-end p-8 sm:p-12 bg-[url('/HeroSectionImg.png')] bg-cover bg-center">
      {/* Overlay layer */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Text content */}
      <div className="max-w-2xl text-white relative z-10">
        <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tighter">
          Empowering Financial Innovation
        </h1>
        <p className="mt-4 text-base lg:text-lg text-gray-200">
          We provide cutting-edge solutions to streamline your financial
          operations and drive growth.
        </p>
      </div>
      <div className="mt-4">
      <a href="#solutions" className="relative z-10 mt-4 px-4 py-2 text-xs font-bold rounded-lg bg-secondary text-textP cursor-pointer hover:bg-primary-light hover:text-gray-500">
        Explore Products
      </a>
      </div>
    </div>
  );
};

export default Hero;
