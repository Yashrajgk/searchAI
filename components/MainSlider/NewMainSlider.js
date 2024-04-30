import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper/core";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
SwiperCore.use([Autoplay, Navigation]);
import { selectSliderData } from "../Features/Slices/sliderSlice";

export default function NewMainSlider() {
  const dispatch = useDispatch();
  const SliderViewData = useSelector(selectSliderData);
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (!SliderViewData || SliderViewData.length === 0) {
      fetchData();
      // console.log("mainslider data fetched")
    }
  }, [page]);
  const fetchData = () => {
    dispatch({
      type: "FETCH_SLIDER_VIEW_REQUEST",
      payload: {
        page: page,
        limit: 4,
      },
    });
  };

  const [sliderApiData, setSliderApiData] = useState([]);
  useEffect(() => {
    if (SliderViewData && SliderViewData.result) {
      setSliderApiData(SliderViewData.result);
    }
  }, [SliderViewData]);
  const router = useRouter();
  const handleTab = () => {
    router.push("/room");
  };
  const [hov, setHov] = React.useState(false);
  const [navigationVisible, setNavigationVisible] = useState(false);
  const handleEnter = () => {
    setHov(true);
  };
  const handleLeave = () => {
    setHov(false);
  };
  return (
    <div
      onMouseEnter={() => setNavigationVisible(true)}
      onMouseLeave={() => setNavigationVisible(false)}
    >
      <Swiper
        className="swiper-slider h-[78vh]"
        centeredSlides={true}
        grabCursor={true}
        // freeMode={false}
        loop={true}
        mousewheel={false}
        keyboard={{
          enabled: true,
        }}
        style={{
          marginLeft: -60,
        }}
        // Enabled autoplay mode
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        // If we need navigation
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        // Responsive breakpoints
        breakpoints={{
          412: {
            slidesPerView: 1,
            spaceBetween: 5,
          },

          640: {
            slidesPerView: 1.25,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 5,
          },
        }}
      >
        <div className={`${navigationVisible ? "block" : "hidden"}`}>
          <Image
            src="/icon/arrow_right.svg"
            width={30}
            height={30}
            alt="arrow"
            className=" rotate-180  swiper-button-prev sm:-translate-y-[150px] sm:translate-x-[-80.8vw] absolute left-0"
          />
        </div>

        {sliderApiData.map((data) => {
          return (
            <SwiperSlide key={data?._id}>
              <div className="relative group h-[78vh] bg-gray-100">
                <Image
                  src={data?.imgSrc}
                  fill
                  alt="Swiper"
                  priority
                  className=" swiper-slide "
                  objectFit="cover"
                />
                <div className="absolute flex text-lg text-white bottom-6 left-20 md:bottom-[2.5rem] md:left-[3rem] flex-col md:flex-row gap-4 md:items-center">
                  <div className="w-full md:w-auto">
                    <button className="text-base px-5 py-2 bg-white text-black rounded-3xl border-none">
                      {data?.imgTitle}
                    </button>
                  </div>
                  <p className="text-xl font-[500] drop-shadow-xl">
                    Buy all living room products.
                  </p>
                </div>
                <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-opacity opacity-0 group-hover:opacity-100">
                  <div onMouseEnter={handleEnter} className="cursor-pointer">
                    <div class="border-2 border-neutral-300 hover:border-white top-28 left-40 absolute hover:bg-[rgba(0,0,0,0.3)] rounded-full size-[30px] flex items-center justify-center transition-all duration-200 before:content-[''] before:size-3 before:bg-white  before:rounded-full before:hover:size-2 before:transition-all before:duration-200" />
                  </div>
                  {hov && (
                    <div
                      className={`flex-row z-10 p-2 sm:-ml-[350px] sm:-mt-[100px] flex items-center pb-3 bg-white cursor-pointer absolute top-36 sm:top-60 left-44 sm:left-[34rem] drop-shadow-2xl`}
                      onClick={handleTab}
                      onMouseLeave={handleLeave}
                    >
                      <div className="flex flex-row">
                        <div
                          className="flex flex-col basis-3/4 w-36 flex-grow ml-1 mr-2.5 pr-4"
                          key={data?._id}
                        >
                          <h1 className="text-[12px] text-sky-700 font-[600]">
                            AYATRIO Family price
                          </h1>
                          <h2 className="text-[14px] font-bold">
                            {data?.circles[0].productTitle}
                          </h2>
                          <p className="text-[14px]">
                            {data?.circles[0].productCategory}
                          </p>
                          <p className="flex items-center gap-1 text-2xl">
                            <sub className="text-sm">Rs</sub>
                            {data?.circles[0].productPrice}
                          </p>
                        </div>
                        <div className="absolute top-0 right-0 flex items-center justify-end h-full border-l border-gray-200">
                          <Image
                            className="flex ml-2"
                            src="/icon/arrow_right.svg"
                            height={20}
                            width={20}
                            alt="arrow"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className={`${navigationVisible ? "block" : "hidden"}`}>
          <Image
            src="/icon/arrow_right.svg"
            width={30}
            height={30}
            alt="arrow"
            className={`swiper-button-next sm:-translate-y-[150px]`}
          />
        </div>
      </Swiper>
    </div>
  );
}
