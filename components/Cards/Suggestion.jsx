import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PopUp from "../Reviews/PopUp";
import "./styles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/mousewheel";
import "swiper/css/scrollbar";
import {
  Pagination,
  Navigation,
  Scrollbar,
  Mousewheel,
  FreeMode,
} from "swiper/modules";
// import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { selectTrendingData } from "../Features/Slices/trendingSlice";
import SuggestionCard from "./SuggestionCard";

let suggestionsArr = [
  {
    _id: "1",
    image: "https://source.unsplash.com/random/800x600/?nature",
    title: "First Content",
    description: "This is the description of the first content item.",
    url: "https://example.com/content1",
  },
  {
    _id: "2",
    image: "https://source.unsplash.com/random/800x600/?travel",
    title: "Second Content",
    description: "Description for the second content item goes here.",
    url: "https://example.com/content2",
  },
  {
    _id: "3",
    image: "https://source.unsplash.com/random/800x600/?technology",
    title: "Third Content",
    description: "Details about the third content item are provided here.",
    url: "https://example.com/content3",
  },
  {
    _id: "4",
    image: "https://source.unsplash.com/random/800x600/?business",
    title: "Fourth Content",
    description: "Description of the fourth content item is included.",
    url: "https://example.com/content4",
  },
  {
    _id: "5",
    image: "https://source.unsplash.com/random/800x600/?food",
    title: "Fifth Content",
    description: "This is the description for the fifth content item.",
    url: "https://example.com/content5",
  },
];

const backgroundColors = [
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-pink-400",
  "bg-purple-400",
];

const Suggestion = () => {
  const [newTrendingData, setNewTrendingData] = useState([]);
  const trendingData = useSelector(selectTrendingData);
  const dispatch = useDispatch();
  const [swiperRef, setSwiperRef] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const handleImageClick = () => {
    setPopupVisible(true);
  };
  useEffect(() => {
    if (trendingData.length === 0) {
      dispatch({ type: "FETCH_TRENDING_DATA", payload: "trending" });
      //console.log("trendingData fetched")
    }
    if (trendingData) {
      setNewTrendingData(trendingData);
    }
  }, [trendingData]);
  const swiperUseref = useRef(null);
  const swiperOptions2 = {
    slidesPerView: 4.08,
    centeredSlides: false,
    spaceBetween: 1,
    modules: [Pagination, Scrollbar, Mousewheel, FreeMode],
    navigation: {
      nextEl: ".custom-next-button",
      prevEl: ".custom-prev-button",
    },
    noSwiping: true,
    allowSlidePrev: true,
    allowSlideNext: true,
  };
  const closePopup = () => {
    setPopupVisible(false);
  };
  const swiper1Ref = useRef(null);
  const swiper2Ref = useRef(null);

  return (
    <div>
      <div className="pt-12 mb-20  bg-whit sm:px-[50px] px-[20px]">
        <div className="mb-2 w-full flex justify-between items-center">
          <h2 className="font-semibold text-2xl py-[15px]">
            {suggestionsArr && suggestionsArr.length === 0
              ? "Inspiration and suggestion"
              : "Inspiration and suggestion"}
          </h2>
          <div className="Slidenav flex  bg-white text-2xl cursor-pointer  text-white rounded-full gap-2">
            <div
              onClick={() => swiper1Ref.current.swiper.slidePrev()}
              className="custom-prev-button bg-slate-500  rounded-full  hover:bg-400 hover:scale-110 hover:text-slate-100"
            ></div>
            <div
              onClick={() => swiper1Ref.current.swiper.slideNext()}
              className="custom-next-button bg-slate-500  rounded-full hover:bg-400 hover:scale-110 hover:text-slate-100"
            ></div>
          </div>
        </div>
        <PopUp isPopupVisible={isPopupVisible} closePopup={closePopup} />
        <Swiper
          ref={swiper1Ref}
          {...swiperOptions2}
          scrollbar={{
            hide: false,
            draggable: true,
          }}
          mousewheel={{
            forceToAxis: true,
            invert: false,
          }}
          freeMode={{
            enabled: false,
            sticky: true,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 5,
            },

            640: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
          }}
          allowSlideNext={true}
          allowSlidePrev={true}
          slideNextClass="custom-next-button"
          slidePrevClass="custom-prev-button"
          onSwiper={setSwiperRef}
          className="px-10"
        >
          {!suggestionsArr ? (
            <SwiperSlide>
              <div className="flex"></div>
            </SwiperSlide>
          ) : (
            suggestionsArr.map((suggestion, idx) => {
              return (
                <SwiperSlide key={idx} className="ml-0">
                  <div className="">
                    <SuggestionCard
                      title={suggestion.title}
                      desc={suggestion.description}
                      imgSrc={suggestion.image}
                      key={idx}
                      bgColorClass={
                        backgroundColors[idx % backgroundColors.length]
                      }
                      id={suggestion._id}
                      setPopupVisible={setPopupVisible}
                      //   cssClass={"card1flex"}
                    />
                  </div>
                </SwiperSlide>
              );
            })
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Suggestion;
