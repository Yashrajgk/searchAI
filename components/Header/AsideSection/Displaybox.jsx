import React, { useEffect, useState } from "react";
import Image from "next/image";

const Displaybox = (props) => {
  return (
    <main className="w-3/4 p-4 noto-sans-200">
      <h1 className="text-xl mb-4 font-semibold">{props.selectedHeading}</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {props.data && props.data.length > 0 ? (
          props.data.map((item) => (
            <div className="flex gap-4 p-2 items-center cursor-pointer hover:bg-zinc-200">
              <Image
                src={item.image}
                alt={item.label}
                width={100}
                height={100}
                className="w-[50px] aspect-square "
              />
              <h2 className=" text-lg font-medium">{item.label}</h2>
            </div>
          ))
        ) : (
          <p className="text-lg text-center font-medium">No data available</p>
        )}
      </div>
    </main>
  );
};

export default Displaybox;
