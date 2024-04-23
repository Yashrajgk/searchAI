"use client";
import React from "react";
import "./styles.css";
import SearchModal from "./MobileSearch";
import Menu from "./menu";
import { useEffect, useState } from "react";
import Asidebox from "./AsideSection/Asidebox";
import Expandedbar from "./Expandedbar";

import TopLoader from "../AddOn/TopLoader";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import TopHeader from "./TopHeader";
import dynamic from "next/dynamic";
import { selectQuantity } from "../Features/Slices/calculationSlice";
import { headerLinks } from "@/Model/Dropdown/AsideData/AsideData";
import Midsection from "./Midsection/Midsection";
import { useSelector } from "react-redux";
import { MenuIcon, X } from "lucide-react";
// import NextTopLoader from "nextjs-toploader";

function Header({ howMuchScrolled }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const quantity = useSelector(selectQuantity);

  // Filter
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchEngine, SetSeacrhEngine] = useState("");

  // aside section toggle
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    setIsOpen(true);
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setIsOpen(false);
  };

  const handleClick = (idx) => {
    if (idx === 3) router.push("/customerservice");
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);
  const handleLoginNav = () => {
    router.push("/login");
  };
  const handleProfileNav = () => {
    // console.log("Profile");
    handleLinkClick("/login");
  };
  const onClose = () => {
    setSearchQuery("");
    SetSeacrhEngine("");
  };
  const loginStatus =
    typeof window !== "undefined" ? localStorage.getItem("Login") : null;

  const [isLoading, setIsLoading] = useState(false);
  const handleLinkClick = (path) => {
    // console.log(isLoading);
    setIsLoading(true);
    // console.log(isLoading);
    setTimeout(() => {
      router.push(path);
      setIsLoading(false);
    }, 1310);
  };

  const [isModalOPen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };
  const handleModalClose = (event) => {
    event.stopPropagation();
    setModalOpen(false);
    onClose();
  };

  // const [isFilterVisible, setIsFilterVisible] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsFilterVisible(
        currentScrollPos <= prevScrollPos || currentScrollPos < 100
      );
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const homeRoute = "/home";

  return (
    <div className="">
      {homeRoute === pathname && typeof window !== "undefined" ? (
        typeof window !== "undefined" && window.scrollY < 20 ? (
          <TopHeader />
        ) : null
      ) : null}
      <div
        className={`fixed w-full sm:bg-none ${
          homeRoute === pathname
            ? typeof window !== "undefined" && window.scrollY < 20
              ? "md:top-[30px] top-[0px]"
              : "top-0"
            : "top-0"
        } z-[99999]
       ${isScrolled ? "bg-white" : "bg-white"} 
      
      
      ${isFilterVisible ? "block" : "hidden"}
      `}
      >
        {/* {isLoading && <TopLoader />} */}
        {!searchQuery ? (
          <>
            <div
              className={`${
                isScrolled ? " border-b-[0.5px] border-slate-200" : ""
              } flex flex-row justify-between items-center py-[5px] sm:px-[30px] px-[10px]`}
            >
              {/* main-logo */}
              <div className=" flex items-center justify-start ">
                <div className="mainlogo md:pr-[60px]">
                  <Link href="/">
                    <Image
                      src="/images/ayatriologo.webp"
                      alt="logo"
                      width={300}
                      height={40}
                      priority
                      className="p-2 sm:w-44 object-cover"
                    />
                  </Link>
                </div>
              </div>
              {/* center-list */}
              <div className=" flex justify-center items-center gap-1 md:gap-5 ">
                {/* <div className=" profile-menu font-bold p-[9px] hover:bg-zinc-100 hover:rounded-full">
                <Menu />
              </div> */}
                {/* for only mobile search */}

                <div className="">
                  <nav className="hidden md:flex space-x-1 ">
                    {headerLinks.map((value, idx) => (
                      <div
                        key={idx}
                        onMouseEnter={() => handleMouseEnter(idx)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick(idx)}
                      >
                        <Link
                          className={`text-md  font-semibold  ${
                            isOpen ? "border-b-2 border-black" : ""
                          }`}
                          href="#"
                          onClick={toggleDropdown}
                        >
                          <p
                            className={`block p-2 py-3 text-lg font-medium border-b-2 ${
                              hoveredIndex === idx
                                ? "border-black"
                                : "border-transparent"
                            }`}
                          >
                            {value.label}
                          </p>
                        </Link>
                        {idx < 2 && hoveredIndex === idx && (
                          <Asidebox hoveredIndex={hoveredIndex} />
                        )}
                        {idx === 2 && hoveredIndex === idx && <Midsection />}
                      </div>
                    ))}
                  </nav>
                </div>
              </div>
              {/* search-bar */}

              <div className="flex flex-row items-center justify-end  gap-2">
                <div
                  onClick={handleModalOpen}
                  className="bg-[#f5f5f5] justify-end rounded-full w-[9rem] h-10 p-[9px] hover:bg-[#e5e5e5] hover:rounded-full cursor-pointer md:block hidden"
                >
                  <span>
                    <Image
                      src="/svg/icon/search.svg"
                      alt=""
                      className="absolute z-10 seachbar-div2-icon"
                      width={27}
                      height={27}
                    />
                  </span>
                  <p className="ml-6  text-gray-400">Search</p>
                </div>
                <div
                  className="md:hidden block w-10 h-10 p-[9px] hover:bg-zinc-100 hover:rounded-full cursor-pointer"
                  onClick={handleModalOpen}
                >
                  <Image
                    src="/svg/icon/search.svg"
                    alt=""
                    width={20}
                    height={20}
                    className="header-div-icon"
                  />
                </div>
                <div className="sm:block hidden w-10 h-10 p-[9px] hover:bg-zinc-100 hover:rounded-full cursor-pointer">
                  <Link href={"/login"}>
                    <Image
                      src="/svg/icon/like.svg"
                      alt=""
                      className="header-div-icon"
                      width={22}
                      height={22}
                    />
                  </Link>
                </div>
                <div className="w-10 h-10 p-[9px] hover:bg-zinc-100 hover:rounded-full cursor-pointer">
                  <Link href={"/cart"}>
                    <Image
                      src="/svg/icon/adtocart.svg"
                      alt=""
                      className="header-div-icon"
                      width={22}
                      height={22}
                    />
                  </Link>
                  <div className="cart-notification">{quantity}</div>
                </div>
                {loginStatus === "true" ? (
                  <div
                    className="pro flex p-[9px] hover:bg-zinc-100 hover:rounded-full whitespace-nowrap "
                    onClick={handleProfileNav}
                  >
                    <Image
                      src="/svg/icon/profile.svg"
                      alt=""
                      className="header-div-icon"
                      width={22}
                      height={22}
                    />
                  </div>
                ) : (
                  <div
                    className="pro flex p-[9px] hover:bg-zinc-100 hover:rounded-full whitespace-nowrap cursor-pointer "
                    onClick={handleProfileNav}
                  >
                    <Image
                      src="/svg/icon/profile.svg"
                      onClick={handleLoginNav}
                      alt=""
                      width={20}
                      height={20}
                      className="header-div-icon"
                    />
                  </div>
                )}

                <div className="w-10 h-10 p-[9px] hover:bg-zinc-100 hover:rounded-full cursor-pointer md:hidden">
                  <MenuIcon onClick={toggleMobileMenu} />
                </div>

                {/* for only mobole search */}
                {isModalOPen && (
                  /* <SearchModal
                isOpen={isModalOPen}
                onClose={handleModalClose}
                onSearch={(e) =>
                  dispatch(searchProductsRequest(e.target.value))
                }
              /> */
                  <Expandedbar
                    searchQuery={searchQuery}
                    onClose={handleModalClose}
                    onSearch={handleSearchChange}
                  />
                )}
              </div>
            </div>
          </>
        ) : (
          <Expandedbar
            searchQuery={searchQuery}
            onClose={onClose}
            onSearch={handleSearchChange}
          />
        )}
      </div>
      {isMobileMenuOpen && (
        <>
          <div className="fixed inset-0 flex flex-col px-[10px] overflow-y-hidden bg-zinc-50 z-[100000] md:hidden">
            <div className="flex justify-between items-center py-[5px]  w-full h-fit mb-4">
              <div className=" flex items-center justify-start ">
                <div className="mainlogo">
                  <Link href="/">
                    <Image
                      src="/images/ayatriologo.webp"
                      alt="logo"
                      width={300}
                      height={40}
                      priority
                      className="p-2  sm:w-44"
                    />
                  </Link>
                </div>
              </div>

              <div className="w-10 h-10 p-[9px] hover:bg-zinc-100 hover:rounded-full cursor-pointer md:hidden">
                <X onClick={toggleMobileMenu} />
              </div>
            </div>

            {/* <div className="flex"> */}
              <div className="flex flex-col space-y-2 ">
                {headerLinks.map((value, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => handleMouseEnter(idx)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(idx)}
                  >
                    <Link
                      className={`text-md  font-semibold  ${
                        isOpen ? "border-b-2 border-black" : ""
                      }`}
                      href="#"
                      onClick={toggleDropdown}
                    >
                      <p
                        className={`block p-2 text-lg font-medium border-b-2 ${
                          hoveredIndex === idx
                            ? "border-black"
                            : "border-transparent"
                        }`}
                      >
                        {value.label}
                      </p>
                    </Link>
                    {idx < 2 && hoveredIndex === idx && (
                      <Asidebox hoveredIndex={hoveredIndex} />
                    )}
                    {idx === 2 && hoveredIndex === idx && <Midsection />}
                  </div>
                ))}
              </div>
            {/* </div> */}
          </div>
        </>
      )}
    </div>
  );
}
export default Header;
