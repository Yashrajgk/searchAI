"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { selectVirtualData } from "@/components/Features/Slices/virtualSlice";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "@/components/Features/Slices/virtualDataSlice";
const page = ({ params }) => {
  const searchparams = useSearchParams();
  const text = searchparams.get("search");
  const [selected, setSelected] = useState("");
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const dataSelector = useSelector(selectVirtualData);
  console.log("dataSelector", dataSelector);

  useEffect(() => {
    dispatch({
      type: "VIRTUAL_REQUEST",
    });
  }, []);
  useEffect(() => {
    if (dataSelector) {
      const uniqueCategoriesArray = [
        ...new Set(dataSelector.map((product) => product.category)),
      ].map((category) => {
        const productsInCategory = dataSelector.filter(
          (product) => product.category === category
        );
        const firstImage =
          productsInCategory.length > 0
            ? productsInCategory[0].images[0]
            : null;
        return { category, img: firstImage };
      });
      console.log(uniqueCategoriesArray);

      setData(uniqueCategoriesArray);
    }
  }, [dataSelector]);
  console.log("data", data);

  const handleClick = (category) => {
    setSelected(category);
    dispatch(setCategory(category));
  };
  return (
    <div className="py-20 text-center ">
      <h1>Choose Your Category</h1>
      {/* <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
        <div
          onClick={() => setSelected("Curtains")}
          className={`w-[250px] h-[200px] bg-gray-400 rounded-md flex items-center justify-center ${
            selected === "Curtains"
              ? "outline outline-offset-4 outline-black"
              : ""
          }`}
        >
          Curtains
        </div>
        <div
          onClick={() => setSelected("Wallpaper")}
          className={` ${
            selected === "Wallpaper"
              ? "outline outline-offset-4 outline-black"
              : ""
          } w-[250px] h-[200px] bg-gray-400 rounded-md flex  items-center justify-center`}
        >
          Wallpaper
        </div>
        <div
          onClick={() => setSelected("Blinds")}
          className={`w-[250px] h-[200px] bg-gray-400 rounded-md flex  items-center justify-center ${
            selected === "Blinds"
              ? "outline outline-offset-4 outline-black"
              : ""
          }`}
        >
          Blinds
        </div>
        <div
          onClick={() => setSelected("Flooring")}
          className={`w-[250px] h-[200px] bg-gray-400 rounded-md flex  items-center justify-center ${
            selected === "Flooring"
              ? "outline outline-offset-4 outline-black"
              : ""
          }`}
        >
          Flooring
        </div>
      </div> */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
        {data?.map((item) => {
          return (
            <div
              onClick={() => handleClick(item.category)}
              className={`w-[250px] h-[200px] bg-gray-400 rounded-md flex items-center justify-center ${
                selected === item.category
                  ? "outline outline-offset-4 outline-black"
                  : ""
              }`}
            >
              <div className="parent relative w-full h-full">
                <img
                  className="child absolute object-cover w-full h-full"
                  src={item.img}
                  alt={item.category}
                />
                <h3 className="child absolute right-0 bottom-0 bg-white text-black">
                  {" "}
                  {item.category}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
      {selected && (
        <Link
          href={{
            pathname:
              params.choosecategory === "freesample"
                ? "/freesample"
                : params.choosecategory === "freedesign"
                ? "/freedesign"
                : "/virtualexperience",
            query: { category: selected },
          }}
        >
          <div className="bg-gray-500 text-white whitespace-nowrap py-2 px-4 inline-flex rounded-md mt-10">
            Go to Rooms
          </div>
        </Link>
      )}
    </div>
  );
};

export default page;
