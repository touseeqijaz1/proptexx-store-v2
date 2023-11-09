"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <>
      <img src="sidebg.svg" alt="bg" className="absolute left-0 top-0 w-full" />
      <button
        onClick={() => {
          router.push("/");
        }}
        className="flex flex-col justify-center z-10 relative items-center p-[98px_10px_0px_10px] m-auto">
        <img
          src="logo.svg"
          alt="Proptexx Ai"
          className="max-w-[200px] w-[100%] object-contain"
        />
        <strong className="text-[0.9rem] text-white font-[500] tracking-[20px] pl-[20px] mt-[10px] uppercase">
          Generator
        </strong>
      </button>

      {pathname === "/virtual-staging" && (
        <>
          <div className=" max-w-[400px] w-[90%] m-[50px_auto]">
            <div className="relative z-10 bg-white rounded-[6px] w-full overflow-hidden p-[10px]">
              <Select>
                <SelectTrigger className="w-full !bg-[#ececec]">
                  <SelectValue placeholder="AI Photo Improvement" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">AI Photo Improvement</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div>
                <div className="grid grid-cols-4 mt-[20px]">
                  <div className="flex flex-col justify-center items-center text-center">
                    <div className="bg-[#0233E4] p-[10px] rounded-[5px]">
                      <svg
                        width="40"
                        height="27"
                        viewBox="0 0 40 27"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.33444 14.6955C6.33444 15.5079 7.00882 16.1666 7.84055 16.1666H31.8276C32.6598 16.1666 33.3342 15.5079 33.3342 14.6951V11.3271C33.3342 9.952 34.2153 8.76805 35.4816 8.31384V3.92506C35.4816 2.13708 33.9976 0.6875 32.167 0.6875H7.50204C5.67108 0.6875 4.18701 2.13708 4.18701 3.92549V8.31384C5.45334 8.76805 6.33444 9.95243 6.33444 11.3271V14.6955ZM34.216 14.6958V11.3274C34.216 10.0293 35.2933 8.97754 36.6217 8.97754H37.2635C38.592 8.97754 39.6692 10.0297 39.6692 11.3274V20.1962C39.6692 21.4938 38.592 22.546 37.2635 22.546L36.7884 25.3621C36.7231 25.7487 36.3811 26.032 35.9804 26.032C35.5798 26.032 35.2377 25.7483 35.1725 25.3621L34.6973 22.546H4.97188L4.49673 25.3621C4.43149 25.7487 4.08946 26.032 3.6888 26.032C3.28814 26.032 2.9461 25.7483 2.88087 25.3621L2.40572 22.546C1.07724 22.546 0 21.4938 0 20.1962V11.3274C0 10.0293 1.07724 8.97754 2.40572 8.97754H3.04748C4.37596 8.97754 5.4532 10.0297 5.4532 11.3274V14.6958C5.4532 15.9839 6.5225 17.0284 7.84128 17.0284H31.8279C33.1467 17.0284 34.216 15.9839 34.216 14.6958Z"
                          fill="#ffffff"
                        />
                      </svg>
                      {/* #a6a6a6 */}
                    </div>
                    <strong className="text-[0.6rem] mt-[3px] text-[#0233E4]">
                      Virtual Staging
                    </strong>
                  </div>
                  <div className="flex flex-col justify-center items-center text-center">
                    <div className=" p-[10px] rounded-[5px]">
                      <svg
                        width="39"
                        height="32"
                        viewBox="0 0 39 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.29358 0H34.904V13.4645C33.6145 12.8794 32.1155 12.5523 30.5019 12.423V6.82656C30.5019 6.72023 30.4659 6.61706 30.3997 6.53407C30.3335 6.45108 30.2412 6.39321 30.1379 6.36998C29.302 6.18218 28.5184 6.37044 27.8116 6.57319C27.1048 6.77571 26.4591 6.99031 25.895 6.99031C25.2546 6.99031 24.5874 6.75019 23.8513 6.53224C23.1152 6.31429 22.2891 6.12455 21.3913 6.37597C21.2933 6.40341 21.2069 6.4623 21.1454 6.54366C21.0839 6.62503 21.0506 6.72438 21.0505 6.82656V12.357H17.147V6.82656C17.147 6.72017 17.1109 6.61696 17.0446 6.53396C16.9784 6.45095 16.8859 6.39313 16.7825 6.36998C15.9448 6.18238 15.1602 6.37044 14.4532 6.57319C13.7462 6.77574 13.1013 6.99031 12.54 6.99031C11.8968 6.99031 11.2289 6.75016 10.4929 6.53224C9.75696 6.31433 8.93183 6.12433 8.03591 6.37597C7.93798 6.40347 7.8517 6.46239 7.79023 6.54375C7.72876 6.62511 7.69548 6.72442 7.69547 6.82656V12.4241C6.08294 12.5547 4.58374 12.8834 3.29358 13.4698V0Z"
                          fill="#a6a6a6"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M8.8795 7.19273C9.31374 7.18562 9.75204 7.28929 10.2292 7.43059C10.9233 7.63611 11.6784 7.92698 12.5398 7.92698C13.32 7.92698 14.0354 7.66669 14.7084 7.47388C15.2429 7.32076 15.7407 7.20936 16.2151 7.23514V12.3578H9.41426C9.14974 12.3578 8.88714 12.3625 8.62695 12.3714V7.21029C8.71112 7.20004 8.79524 7.19413 8.8795 7.19273Z"
                          fill="#a6a6a6"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.2361 7.19273C22.6716 7.18557 23.1106 7.28932 23.5877 7.43059C24.2817 7.63608 25.0353 7.92698 25.8948 7.92698C26.6769 7.92698 27.3938 7.66674 28.0669 7.47388C28.601 7.32085 29.0977 7.20967 29.5701 7.23514V12.3708C29.3145 12.3621 29.0566 12.3578 28.7967 12.3578H21.9819V7.21044C22.0667 7.2001 22.1513 7.19414 22.2361 7.19273Z"
                          fill="#a6a6a6"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.41399 13.293H28.7965C31.4598 13.293 33.8432 13.7744 35.5155 14.8587C37.0844 15.8759 38.0693 17.3864 38.1852 19.6983H0.0113525C0.127751 17.3869 1.11646 15.8764 2.6893 14.859C4.36592 13.7744 6.75313 13.293 9.41399 13.293Z"
                          fill="#a6a6a6"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 20.6338H38.1971V28.1808H0V20.6338Z"
                          fill="#a6a6a6"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.74578 29.2549C2.68436 29.2541 2.62346 29.2798 2.5666 29.3305C2.50974 29.3813 2.45804 29.456 2.41447 29.5506C2.3709 29.6451 2.33632 29.7576 2.31272 29.8814C2.28912 30.0052 2.27698 30.1381 2.27698 30.2722C2.27698 30.4063 2.28912 30.5391 2.31272 30.663C2.33632 30.7868 2.3709 30.8993 2.41447 30.9938C2.45804 31.0884 2.50974 31.1632 2.5666 31.2139C2.62346 31.2647 2.68436 31.2903 2.74578 31.2895H7.40385C7.46527 31.2903 7.52617 31.2647 7.58303 31.2139C7.63989 31.1632 7.69159 31.0884 7.73516 30.9938C7.77874 30.8993 7.81331 30.7868 7.83691 30.663C7.86051 30.5391 7.87265 30.4063 7.87265 30.2722C7.87265 30.1381 7.86051 30.0052 7.83691 29.8814C7.81331 29.7576 7.77874 29.6451 7.73516 29.5506C7.69159 29.456 7.63989 29.3813 7.58303 29.3305C7.52617 29.2798 7.46527 29.2541 7.40385 29.2549H2.74578Z"
                          fill="#a6a6a6"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M30.793 29.2549C30.7316 29.2541 30.6707 29.2798 30.6138 29.3305C30.557 29.3813 30.5053 29.456 30.4617 29.5506C30.4181 29.6451 30.3836 29.7576 30.36 29.8814C30.3364 30.0052 30.3242 30.1381 30.3242 30.2722C30.3242 30.4063 30.3364 30.5391 30.36 30.663C30.3836 30.7868 30.4181 30.8993 30.4617 30.9938C30.5053 31.0884 30.557 31.1632 30.6138 31.2139C30.6707 31.2647 30.7316 31.2903 30.793 31.2895H35.4511C35.5125 31.2903 35.5734 31.2647 35.6303 31.2139C35.6871 31.1632 35.7388 31.0884 35.7824 30.9938C35.826 30.8993 35.8606 30.7868 35.8842 30.663C35.9077 30.5391 35.9199 30.4063 35.9199 30.2722C35.9199 30.1381 35.9077 30.0052 35.8842 29.8814C35.8606 29.7576 35.826 29.6451 35.7824 29.5506C35.7388 29.456 35.6871 29.3813 35.6303 29.3305C35.5734 29.2798 35.5125 29.2541 35.4511 29.2549H30.793Z"
                          fill="#a6a6a6"
                        />
                      </svg>

                      {/* #a6a6a6 */}
                    </div>
                    <strong className="text-[0.6rem] mt-[3px] text-[#a6a6a6]">
                      Refurnishing
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center z-20 relative mt-[20px]">
              <button className="flex justify-center items-center mr-[20px]">
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_254_4974)">
                    <path
                      d="M19.1406 12.25C15.0828 12.25 11.4078 13.7659 8.575 16.2313L3.0625 10.7188V24.5H16.8438L11.3006 18.9569C13.4291 17.1806 16.1394 16.0781 19.1406 16.0781C24.5613 16.0781 29.1703 19.6153 30.7781 24.5L34.4072 23.3056C32.2787 16.8897 26.2609 12.25 19.1406 12.25Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_254_4974">
                      <rect width="36.75" height="36.75" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-[#ffffff] font-[600] ml-[5px]">Undo</span>
              </button>
              <button className="flex justify-center items-center">
                <svg
                  width="37"
                  height="37"
                  viewBox="0 0 37 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_254_4979)">
                    <path
                      d="M17.6719 12.25C21.7297 12.25 25.4047 13.7659 28.2375 16.2313L33.75 10.7188V24.5H19.9688L25.5119 18.9569C23.3834 17.1806 20.6731 16.0781 17.6719 16.0781C12.2512 16.0781 7.64219 19.6153 6.03437 24.5L2.40531 23.3056C4.53375 16.8897 10.5516 12.25 17.6719 12.25Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_254_4979">
                      <rect
                        width="36.75"
                        height="36.75"
                        fill="white"
                        transform="matrix(-1 0 0 1 36.8125 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <span className="text-[#ffffff] font-[600] ml-[5px]">Redo</span>
              </button>
            </div>

            <div className="relative mt-[50px]">
              <Select>
                <SelectTrigger className="w-full !h-[60px] !px-[30px] !rounded-[50px] !bg-[#ffffff]">
                  <SelectValue placeholder="Bedroom" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Bedroom</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-full !h-[60px] !px-[30px] !rounded-[50px] !bg-[#ffffff] !mt-[10px]">
                  <SelectValue placeholder="Rustic" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="rustic">Rustic</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <button className="flex m-[auto] w-full max-w-[240px] h-[55px] cursor-pointer justify-center items-center bg-black text-white rounded-[30px] text-[0.9rem] font-[500]">
            Generate Design
          </button>
        </>
      )}
    </>
  );
};

export default SideBar;
