"use client";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  enhancement,
  objectRemoval,
  refurnishing,
  renovation,
  repair,
  replacement,
  staging,
} from "@/lib/imagesPath";
import { useRouter } from "next/navigation";

const Main = () => {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelectionChange = (value) => {
    setSelectedCategory(value);
    setSelectedImage(null);
  };

  const selectionImage = (value) => {
    setSelectedImage(value);
  };

  const modelImages = {
    staging,
    refurnishing,
    renovation,
    enhancement,
    replacement,
    repair,
    objectRemoval,
  };
  const getImagesToShow = () => {
    if (selectedCategory === "all") {
      return Object.values(modelImages).flat();
    }
    return modelImages[selectedCategory] || [];
  };

  const imagesToShow = getImagesToShow();

  return (
    <div className="w-[90%] m-[50px_auto_20px_auto] flex flex-col h-[calc(100vh-70px)]">
      <div className="grid md:grid-cols-[1fr_300px] items-end">
        <div>
          <h1 className="text-[2rem] md:text-[3rem] font-[600] text-[#333333]">
            Welcome!
          </h1>
          <p className="text-[#333333]">
            Get Started by Selecting an Image from our Library
          </p>
        </div>
        <div className="mt-[30px] md:mt-[0px]">
          <strong className="text-[0.9rem] font-[500]">Show Images for</strong>
          <Select onValueChange={handleSelectionChange}>
            <SelectTrigger
              value={selectedCategory}
              className="max-w-[300px] w-full mt-[6px]">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="staging">Virtual Staging</SelectItem>
                <SelectItem value="refurnishing">
                  Virtual Refurnishing
                </SelectItem>
                <SelectItem value="renovation">Virtual Renovation</SelectItem>
                <SelectItem value="enhancement">Photo Enhancement</SelectItem>
                <SelectItem value="replacement">Sky Replacement</SelectItem>
                <SelectItem value="repair">Grass Repair</SelectItem>
                <SelectItem value="objectRemoval">AI Object Removal</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-rows-[1fr_100px] gap-[20px] w-full h-full mt-[40px]">
        <div className="relative rounded-[10px] overflow-hidden">
          <div className="overflow-y-auto h-full grid md:grid-cols-2 lg:grid-cols-3 gap-[8px] items-start absolute top-0 left-0 w-full">
            {imagesToShow.map((imageUrl, index) => (
              <div
                className={`h-full rounded-[23px] relative ${
                  selectedImage === imageUrl
                    ? "border-[1px] border-[#e3e3e3] p-[10px]"
                    : null
                }`}
                onClick={() => {
                  selectionImage(imageUrl);
                }}>
                <img
                  key={index}
                  src={imageUrl}
                  alt={`Gallery ${index}`}
                  className="h-full w-full object-cover object-center rounded-[10px]"
                />
                {selectedImage === imageUrl && (
                  <span className="absolute right-[30px] bottom-[30px] w-[40px] h-[40px] flex justify-center items-center rounded-[50%] bg-[#4A4BEF]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512">
                      <path
                        fill="#ffffff"
                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                      />
                    </svg>
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end items-center px-[10px]">
          <div className="flex justify-end items-center flex-wrap w-full">
            <button className="w-full md:w-[250px] h-[45px] md:h-[55px] font-[600] text-[0.9rem] flex justify-center items-center bg-black text-white rounded-[30px]">
              Upload Your Own Image
            </button>
            <button
              onClick={() => {
                router.push("/virtual-staging");
              }}
              disabled={!selectedImage}
              className={` w-full md:w-[200px] font-[600] text-[0.9rem] h-[45px] md:h-[55px] mt-[10px] md:mt-[0px] md:ml-[20px] flex justify-center items-center ${
                selectedImage ? "bg-[#4A4BEF]" : "bg-gray-300"
              } text-white rounded-[30px]`}>
              Confirm Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
