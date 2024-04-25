import React, { useState, useEffect } from "react";
import "./styles.css";

import Carousel from "./swip";

import PopUp from "../Reviews/PopUp";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { useDispatch } from "react-redux";
import Link from "next/link";

function SuggestionCard(props) {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleImageClick = () => {
    props.setPopupVisible(true);
  };
  const handleclick = async (id, category) => {
    // const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/getSingleProduct?id=${id}`;
    // const response = await axios.get(url);
    // const data = response.data;
    // dispatch({ type: "FETCH_ROOM_REQUEST", payload: id });
    // router.push(`/product`);
  };

  //   const [slide, setSlide] = useState(0);
  //   const [isHovered, setIsHovered] = useState(false);

  //   const nextSlide = () => {
  //     setSlide(slide === props.imgSrc.length - 1 ? 0 : slide + 1);
  //   };

  //   const prevSlide = () => {
  //     setSlide(slide === 0 ? props.imgSrc.length - 1 : slide - 1);
  //   };
  // useEffect(() => {

  // }, [dispatch]);

  console.log(props.title.replace(' ', '-').toLowerCase());
  return (
    <>
      <div key={props.cardkey} className="pb-8  cursor-pointer ">
        <Link href={`/suggestion/${props.title.replace(' ', '-').toLowerCase()}`}>
          <div className="flex h-full w-full items-center justify-center cursor-pointer  overflow-hidden">
            <Image
              src={props.imgSrc}
              alt="NA"
              height={600}
              width={600}
              className={"aspect-square w-full object-cover "}
            />
          </div>

          <div
            className={`${props.bgColorClass} p-8 h-[220px] overflow-hidden`}
          >
            <div className="text-lg font-semibold hover:underline  text-ellipsis mb-1">
              {props.title}
            </div>
            <div className={`text-sm overflow-hidden text-ellipsis `}>
              {props.desc}
            </div>
          </div>
        </Link>
      </div>
      {props.isPopupVisible && (
        <PopUp
          isPopupVisible={props.isPopupVisible}
          closePopup={props.closePopup}
        />
      )}
    </>
  );
}

export default SuggestionCard;
