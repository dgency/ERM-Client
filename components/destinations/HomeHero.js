import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";

function HomeHero() {
	return (
		<div className=" pb-4 bg-[var(--section-bg-lightred)]">
			{/* <div className="break_line image bg-[url('/breakline_white.svg')] h-[80px] w-full bg-[length:2500px_90px] absolute z-10 -mt-1 bg-center rotate-180 "></div> */}
			<div className=" bg-[url('/destinations/destination_hero.png')]  text-center ">
				<div className=" pt-14 md:pt-20 pb-32 md:pb-36">
					<div className="pt-10 md:pt-20 pb-2 ">
						<h1 className="hero_heading text-center text-[#fff_!important] max-w-[1050px] mx-auto">Top Escape Room Destinations Worldwide</h1>
						<p className="text-[18px] text-[#F0F0F0] max-w-[962px] mx-auto pt-2.5">
							Explore thrilling escape rooms from around the globe! We’ve been connecting adventurers with the most exciting and immersive
							experiences, helping you unlock the fun and challenge of escape games.
						</p>
					</div>

					<div className="max-w-[420px] mx-auto mt-[40px] border-[2px] border-[#FF492C] rounded-full bg-[#fff] py-2.5 px-5">
						<div className="flex items-center justify-between w-full">
							<div className="flex items-center gap-2">
								<IoLocationSharp className="text-[18px]" />
								<span className="text-[20px] font-[700]">FIND YOUR LOCATION</span>
							</div>
							<FaChevronDown />
						</div>
					</div>
				</div>
			</div>
			<div className=" lg:flex justify-center ">
				<div className="max-w-[450px] lg:max-w-none mx-auto bg-white px-[14px] py-[16px] shadow-md rounded-md relative z-30 flex flex-col lg:flex-row  gap-3 lg:gap-10   lg:-mt-[60px]">
					<div className="flex gap-4 items-center justify-center lg:justify-start bg-[#FFFBEA] py-2 pl-3 pr-20 shadow rounded-md ">
						<Image src={"/contactus/choose-your-time.svg"} height={50} width={50} alt="" />
						<div>
                            <p className="text-[36px] font-[700]">100</p>
                            <p className="text-[14px] text-[#222]">CITIES</p>
                        </div>
					</div>
					{/* <Image src={"/contactus/Line.svg"} height={50} width={50} alt="" className="w-[30px] rotate-90 lg:rotate-0 self-center" /> */}
					<div className="flex gap-4 items-center justify-center lg:justify-start bg-[#EFF8FF] py-2 pl-3 pr-20 shadow rounded-md ">
						<Image src={"/contactus/provide-your-details.svg"} height={50} width={50} alt="" />
						<div>
                            <p className="text-[36px] font-[700]">500</p>
                            <p className="text-[14px] text-[#222]">COMPANIES</p>
                        </div>
					</div>
					{/* <Image src={"/contactus/Line.svg"} height={50} width={50} alt="" className=" w-[30px] rotate-90 lg:rotate-0 self-center" /> */}
					<div className="flex gap-4 items-center justify-center lg:justify-start bg-[#EFFFF3] py-2 pl-3 pr-20 shadow rounded-md ">
						<Image src={"/contactus/let’s-talk-growth.svg"} height={50} width={50} alt="" />
						<div>
                            <p className="text-[36px] font-[700]">2000</p>
                            <p className="text-[14px] text-[#222]">GAMES</p>
                        </div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeHero;
