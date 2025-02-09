import React from "react";
import Image from "next/image";

import "./styles.css";
import { useSelector } from "react-redux";
import { selectProductImages } from "../Features/Slices/imageDataSlice";

export default function RoomImageList() {
  const data = useSelector(selectProductImages);
  console.log(data);
  return (
    <>
      <div className="imggallery mt-[50px] w-[60vw]">
        <div className="sm:grid hidden sm:grid-cols-2 sm:grid-rows-2 gap-3">
          {data[0]?.images?.map((image, index) => (
            <div
              key={index}
              className={`sm:col-span-1 sm:row-start-${index + 1}`}
            >
              <Image
                src={image}
                alt={`Room Image ${index + 1}`}
                width={800}
                height={800}
                className="sm:w-full aspect-square object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
