import Image from "next/image";
import React from "react";
import story1 from "@/public/templet/thrillTheme/storyLine/storyLine1.png";
import coma from "@/public/templet/thrillTheme/coma.png";
import buttonLeft from "@/public/templet/thrillTheme/hero/button_left.svg";
import buttonRight from "@/public/templet/thrillTheme/hero/button_right.svg";

function StoryLineCard({ id, item }) {
	return (
		<div className=" flex flex-col-reverse xl:grid xl:grid-cols-5 w-full ">
			<div className={` xl:self-center max-w-[760px] xl:max-w-[570px] px-2.5   ${id % 2 !== 0 ? " xl:col-span-2 xl:ml-auto " : "xl:col-start-4 xl:col-end-6 xl:ml-5"}`}>
				<p className="font_poppins text-[#8CA482] text-[19px] mb-[18px] font-[500] uppercase">{item.storyCategory}</p>
				<h2 className="header_2  bg-[linear-gradient(90deg,_#CAFFBC_0%,_#172817_100%)] bg-clip-text text-transparent">
					{item.title}
				</h2>
				<p className="mt-[25px] font_poppins text-[#8CA482] text-[18px]">
					{item.description}
				</p>
				<div className="relative">
					<Image src={coma} alt="" height={34} width={44} className="h-[34px] w-auto object-cover absolute  top-[-15px] left-0 opacity-[0.4]" />
					<p className="mt-[48px] italic font_puritan text-[#2C732C] ml-[20px] relative z-10">
						{item.testimonial}
					</p>
					<p className="mt-[13px] ml-[20px] italic text-[14px] font_puritan text-[#2C732C]">—{item.name} </p>
				</div>
				{/* <button className="text-white bg-[url('/templet/thrillTheme/storyLine/button.svg')] bg-no-repeat bg-[length:100%_100%] px-[50px] py-[15px] mt-[73px]">
					<span className="font_bandex">will you survive?</span>
				</button> */}
				<button className="box box-b ml-1.5 mt-[50px] px-[50px] py-[15px] font_bandex text-[#FFFFFF] text-[20px] bg-[#FF050535] relative">
					<Image src={buttonLeft} alt="" height={71} width={9} className="h-full absolute left-[-4px] top-0" />
					<Image src={buttonRight} alt="" height={71} width={9} className="h-full absolute right-[-4px] top-0" />
					{item.button}
				</button>
			</div>
			<Image
				src={item.image}
				alt=""
				height={758}
				width={1213}
				quality={60}
				priority={true}
				className={` w-full  ${id % 2 !== 0 ? "xl:col-start-3 xl:col-end-6 " : "xl:col-start-1 xl:col-end-4 xl:row-start-1"}`}
			/>
		</div>
	);
}

export default StoryLineCard;
