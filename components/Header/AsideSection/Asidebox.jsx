import React, { useState } from "react";
import Link from "next/link";
import Displaybox from "./Displaybox";
import { homeDecorCategoryData } from "@/Model/Dropdown/CategoryData/HomeDecorCategoryData";
import { flooringCategoryData } from "@/Model/Dropdown/CategoryData/FlooringCategoryData";
import { wallDecorCategoryData } from "@/Model/Dropdown/CategoryData/WallDecorCategoryData";
import Midsection from "../Midsection/Midsection";
// import { AsideSectionList } from "@/Model/Dropdown/AsideData/AsideData";

const Asidebox = (props) => {
  let asideCategory;
  let parentCategory;
  switch (props.hoveredIndex) {
    case 0:
      asideCategory = homeDecorCategoryData;
      parentCategory = "homedecor";
      break;
    case 1:
      asideCategory = wallDecorCategoryData;
      parentCategory = "walldecor";
      break;
    case 2:
      asideCategory = flooringCategoryData;
      parentCategory = "flooring";
      break;
    default:
      asideCategory = null;
  }
  const [defaultLinkIndex, setDefaultLinkIndex] = useState(0);
  const [selectedData, setSelectedData] = useState(asideCategory ? asideCategory[0] : '');

  const handleMouseEnter = (index, data) => {
    setDefaultLinkIndex(index);
    setSelectedData(data);
  };

  return (
    <>
      {
        asideCategory && (
          <div className="absolute px-[50px] top-[4.2rem] left-0 bg-white flex noto-sans-200 transition-all duration-300 ease-linear w-full">
            <aside className=" w-1/6 py-4 space-y-2">
              {asideCategory?.map((value, idx) => (
                <Link
                  key={idx}
                  onMouseEnter={() => handleMouseEnter(idx, value)}
                  className={`block p-2 text-lg font-medium ${
                    defaultLinkIndex === idx ? "text-blue-600" : ""
                  }`}
                  href="#"
                >
                  {value.categoryHeading}
                </Link>
              ))}
            </aside>
            <Displaybox
              parentCategory={parentCategory}
              defaultLinkIndex={defaultLinkIndex}
              data={selectedData}
            />
          </div>
        )
      }
    </>
  );
};

export default Asidebox;
