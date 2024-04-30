import React, { useEffect, useState } from "react";
import ListContent from "./ListContent";
import Image from "next/image";

import { wallpaperCategoryData } from "@/Model/Dropdown/CategoryData/WallpaperCategoryData";
import { flooringCategoryData } from "@/Model/Dropdown/CategoryData/FlooringCategoryData";
import { blindsCategoryData } from "@/Model/Dropdown/CategoryData/BlindsCategoryData";
import { curtainsCategoryData } from "@/Model/Dropdown/CategoryData/CurtainsCategoryData";
import { inspirationCategoryData } from "@/Model/Dropdown/CategoryData/InspirationCategoryData";
import { useRouter } from "next/navigation";

const Displaybox = (props) => {
  // let asideCategory;
  // let parentCategory;

  // switch (props.defaultLinkIndex) {
  //   case 0:
  //     asideCategory = flooringCategoryData;
  //     parentCategory = "flooring";
  //     break;
  //   case 1:
  //     asideCategory = wallpaperCategoryData;
  //     parentCategory = "wallpaper";
  //     break;
  //   case 2:
  //     asideCategory = inspirationCategoryData;
  //     parentCategory = "inspiration";
  //     break;
  //   case 3:
  //     asideCategory = curtainsCategoryData;
  //     parentCategory = "curtains";
  //     break;
  //   case 4:
  //     asideCategory = blindsCategoryData;
  //     parentCategory = "blinds";
  //     break;
  //   default:
  //     asideCategory = wallpaperCategoryData;
  // }


  const router = useRouter();
  const [currentCategory, setCurrentCategory] = useState("");

  const handleClick = (value) => {
    console.log("check click")
    const category = value.replace(/\s+/g, "-").toLowerCase();
    const newPath = `/${props.parentCategory}/${currentCategory}/${category}`;
    router.push(newPath);
  };

  useEffect(() => {
    console.log(props.data.categoryHeading)
    if (props.data.categoryHeading) {
      const category = props.data.categoryHeading.replace(/\s+/g, "-").toLowerCase();
      console.log(category)
      setCurrentCategory(category);
    }
  }, [props.data.categoryHeading]);

  return (
    <main className="w-3/4 p-4 noto-sans-200">
      <h1 className="text-xl mb-4 font-semibold">{props.data.categoryHeading}</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {props.data && props.data.categoryData ? (
          props.data.categoryData.map((item) => (
            <div className="flex gap-4 p-2 items-center cursor-pointer hover:bg-zinc-200"
            onClick={() => handleClick(item.label)}
            >
              <Image
                src={item.image}
                alt={item.label}
                width={100}
                height={100}
                className="w-[50px] aspect-square "
              />
              <h2 className=" text-lg font-medium">{item.label}</h2>
            </div>
            // <div>
            //    <ListContent parentCategory={parentCategory} items={item} />
            //  </div>
          ))
        ) : (
          <p className="text-lg text-center font-medium">No data available</p>
        )}
      </div>
    </main>
  );
};

export default Displaybox;
