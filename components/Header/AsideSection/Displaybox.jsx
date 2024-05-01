import React, { useEffect, useState } from "react";
import ListContent from "./ListContent";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Displaybox = (props) => {

  const router = useRouter();
  const [currentCategory, setCurrentCategory] = useState("");

  const handleClick = (value) => {
    const category = value.replace(/\s+/g, "-").toLowerCase();
    const newPath = `/${props.parentCategory}/${currentCategory}/${category}`;
    router.push(newPath);
  };

  useEffect(() => {
    console.log(props.data.categoryHeading)
    if (props.data.categoryHeading) {
      const category = props.data.categoryHeading.replace(/\s+/g, "-").toLowerCase();
      setCurrentCategory(category);
    }
  }, [props.data.categoryHeading]);

  return (
    <main className="w-5/6 p-4 noto-sans-200">
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
