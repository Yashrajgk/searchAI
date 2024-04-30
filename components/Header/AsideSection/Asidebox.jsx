import React, { useState } from "react";
import Link from "next/link";
import Displaybox from "./Displaybox";
// import { AsideSectionList } from "@/Model/Dropdown/AsideData/AsideData";

const Asidebox = ( props ) => {
  const [defaultLinkIndex, setDefaultLinkIndex] = useState(0);
  const [selectedData, setSelectedData] = useState(props.asideSectionList[0]);
  console.log(props.asideSectionList)

  const handleMouseEnter = (index, data) => {
    setDefaultLinkIndex(index);
    setSelectedData(data);
  };

  return (
    <div className="absolute top-[3.5rem] left-0 bg-white flex noto-sans-200 transition-all duration-300 ease-linear w-full">
      <aside className=" w-1/4 p-4 border-r space-y-2">
        {props.asideSectionList?.map((value, idx) => (
          <Link
            key={idx}
            onMouseEnter={() => handleMouseEnter(idx, value)}
            className={`block p-2 text-lg font-medium ${
              defaultLinkIndex === idx ? "text-blue-600" : ""
            }`}
            href="#"
          >
            {value.label}
          </Link>
        ))}
      </aside>
      <Displaybox selectedHeading={selectedData.label} data={selectedData.data}/>
    </div>
  );
};

export default Asidebox;
