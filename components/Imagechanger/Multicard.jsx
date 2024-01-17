import React, { useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "./styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import MultiCardContent from "../compounds/MultiCardContent";
import { multiCardData } from "@/Model/MultiCard/MultiCardData";

const Multicard = () => {
  const swiper1Ref = useRef(null);

  return (
    <div>
      <div className="bg-zinc-50 pt-[5rem] pb-[2rem] sm:pl-[50px] pl-[20px] overflow-x-auto">
        <div className="sm:text-3xl text-xl font-medium w-full pb-8">
          Why Ayatrio so innovative
          <br />
          for home furnishing.
        </div>
        <Swiper
          ref={swiper1Ref}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          navigation={{
            nextEl: ".right",
            prevEl: ".back",
          }}
          draggable={true}
          style={{ "--swiper-navigation-size": "24px" }}
          breakpoints={{
            450: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3.5,
            },
          }}
        >
          {multiCardData.map((curElement) => {
            return (
              <SwiperSlide>
                <MultiCardContent
                  iconPath={curElement.iconPath}
                  iconSize={curElement.iconSize}
                  title={curElement.title}
                  text={curElement.text}
                />
              </SwiperSlide>
            );
          })}

          <div className="flex flex-row items-end justify-end gap-4">
            <Image
              src="/leftvector.svg"
              width={20}
              height={20}
              alt="Arrow"
              className="back bg-gray-300 rounded-full h-7 w-7"
            />
            <Image
              src="/rightvector.svg"
              width={20}
              height={20}
              alt="Arrow"
              className="right mr-16  bg-gray-300 rounded-full h-7 w-7"
            />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Multicard;
