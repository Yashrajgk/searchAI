import React from "react";
import Image from "next/image";
const Phone = () => {
  return (
    <div>
      <div className="lg:relative flex flex-col h-auto  items-center sm:px-[50px] px-[20px] ">
        <div className=" lg:absolute md:top-20 text-center flex flex-col items-center justify-center gap-3 lg:w-[40vw] w-[80vw] ">
          <div className="font-bold xl:text-4xl text-xl">
            Why Ayatrio is the best place to buy home farnising
          </div>
          <div className="text-base lg:w-[35vw] w-[70vw]">
            You can choose a payment option that works for you, pay less with a
            trade-in, connect your new iPhone to your carrier, and get set up
            quickly. You can also chat with a Specialist anytime.
          </div>

          <a href="#" className="text-sky-600 lg:text-lg text-sm">
            Learn more &gt;
          </a>
        </div>
        <div>
          <Image
            src="/images/apple.webp"
            alt=""
            width={1350}
            height={500}
            style={{ width: "100vw", height: "auto" }}
            className="h-auto  md:w-100vw  w-full"
          />
        </div>
      </div>
      <br />
    </div>
  );
};

export default Phone;
