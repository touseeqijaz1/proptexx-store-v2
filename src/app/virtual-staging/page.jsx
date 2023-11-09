import SideBar from "@/components/sideBar";
import React from "react";

const VirtualStaging = () => {
  return (
    <div className="grid md:grid-cols-[450px_1fr] min-h-[100vh]">
      <aside className="bg-[#efecff] lg:rounded-[0px_50px_0px_0px] relative overflow-hidden min-h-[300px] z-10 pb-[40px]">
        <SideBar />
      </aside>
      <main className="w-full h-screen relative ml-[-50px] selected_image_width">
        <img
          src="https://storage.googleapis.com/store-gallery-img-results/object_removal/before/1.jpg"
          alt="images"
          className="h-full z-[1]"
        />

        <div className="flex justify-center items-center absolute md right-[10px] bottom-[10px] md:right-[80px] md:bottom-[50px]">
          <button className="w-[150px] p-[10px_20px] md:p-[0] md:w-[200px] h-[45px] md:h-[55px] font-[600] text-[0.9rem] flex justify-center items-center bg-black text-white rounded-[30px]">
            Upload Image
          </button>
          <button
            className={`w-[150px] md:w-[200px] font-[600] text-[0.9rem] h-[45px] md:h-[55px] ml-[20px] flex justify-center items-center ${
              false ? "bg-[#4A4BEF]" : "bg-gray-300"
            } text-white rounded-[30px]`}>
            Download Image
          </button>
        </div>
      </main>
    </div>
  );
};

export default VirtualStaging;
