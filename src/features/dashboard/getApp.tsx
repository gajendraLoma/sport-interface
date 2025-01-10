import React from "react";

function getApp() {



  
  return (
    <div>
      <div className="relative bg-[#F6F6F6] dark:bg-[#1B1C21] rounded-xl mt-10">
        <div className="hero  overflow-hidden">
          <div className="absolute top-0 rounded-xl right-0 w-full h-full bg-[url('/images/getapp-image1.png')] bg-no-repeat bg-top-right bg-contain pointer-events-none"></div>
        </div>
        <div className="hero-content p-10 justify-start  relative z-10">
          <div className="lg:text-left">
            <p className="text-base	font-medium	 text-[#5742A9] dark:text-[#F5C451]">
              New Platform
            </p>
            <h5 className="text-2xl	 font-semibold	">
              Get one of our sports <br /> apps, which is only <br /> available
              on
            </h5>
            <p className="py-6 font-normal	text-base	">Download Apps :</p>
        <div className="">
          <img src="/images/app.png" alt="getapp-image2"  />
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default getApp;
