import React from "react";
import Image from "next/image";
const Phone = () => {
  return (
    <div className="px-[30px] sm:px-[50px]">
      <h1 className="font-bold xl:text-4xl text-2xl py-4">
        Ayatrio is a global leader in life at home.
      </h1>

      <div className="text-sm sm:text-base">
        Whether you just moved into a new home or looking to revamp your current
        one, we at Ayatrio are here to inspire you with affordable home
        furnishing solutions, there is a piece of furnish product including
        furniture to every corner of your home. Create a home that is perfect
        for you. Shopping at Ayatrio is a bit different and exciting compared to
        your shopping at an everyday retail. It is about experiencing solutions
        first hand and getting to know ideas and inspirations that can fit
        perfectly into your home. That’s why, we offer more than 3000 products,
        solutions at ourstore along with home furnishing ideas and services for
        you to explore. When you visit Ayatrio store, make yourself at home in
        our many room settings in the store. Squeeze the upholsteries, feel the
        oriental rugs,try the sofa beds and open the cabinets to feel the
        quality. On the price tag, you’ll find all you need to know about a
        product, including where in the store you can pick it up.
      </div>

      <p className=" w-5/6 font-normal py-4">
        Since most Ayatrio furnishing is flat-packed, they are quite easy to
        bring home when you buy from the store.
      </p>

      <p className=" w-5/6 font-semibold text-md sm:text-xl  py-4">
        Wallpaper | Flooring | curtain | blinds | Mattresses | Seating | Coffee
        tables | Wardrobes Storage | Bookshelves | Shoe racks | Décor | Bathroom
        | Textiles | Pots & plants Home electronics | Home improvement |
        Lighting
      </p>

      {/* <div>
          <Image
            src="/images/apple.webp"
            alt=""
            width={1350}
            height={500}
            style={{ width: "100vw", height: "auto" }}
            className="h-auto  md:w-100vw  w-full"
          />
        </div> */}

      <br />
    </div>
  );
};

export default Phone;
