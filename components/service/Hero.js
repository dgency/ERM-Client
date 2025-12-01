"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonMagnito from "../animation/ButtonMagnito";

function Hero({ firstPic, secondPic, thirdPic, heroData, handleOpen }) {
	return (
		<div className="">
			{/* <div className="break_line image bg-[url('/navbar_breakline.svg')] h-[110px] bg-[length:2500px_100px]  -mb-4    bg-center  "></div> */}
			{/* <div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center -mt-5 bg-[var(--section-bg-lightred)]"></div> */}
			<div
				className={
					thirdPic
						? `hero_cover  pb-[250px] md:pb-[300px] lg:pb-[400px]  w-full   bg-[#FFF7F5]  md:pt-12 relative`
						: `hero_cover w-full bg-[#FFF7F5] relative`
				}
			>
				{/* {firstPic && (
					<div>
						<img
							src={`${firstPic}`}
							className="absolute left-2 md:left-4 -bottom-6 md:bottom-0  h-[250px] w-[172px] md:h-[280px] md:w-[300px] lg:h-[430px] lg:w-[391px]  xl:h-[430px] xl:w-[391px] "
							alt=""
						/>
					</div>
				)} */}
				{/* {secondPic && (
					<div>
						<img
							src={`${secondPic}`}
							className="absolute right-2 md:right-4 -bottom-7 md:bottom-0  h-[250px] w-[172px]  md:h-[280px]  md:w-[300px] lg:h-[430px] lg:w-[391px]  xl:h-[430px] xl:w-[391px]"
							alt=""
						/>
					</div>
				)} */}
				{/* {thirdPic && (
					<div className="">
						<img
							src={`${thirdPic}`}
							className="px-10  absolute right-[50%] translate-x-[50%] bottom-[0] md:-bottom-[13%] translate-y-[-40%] "
							alt=""
						/>
					</div>
				)} */}
				<div className="text-container pt-16  md:pt-24 pb-10 md:pb-0 m-auto">
					<h1 className="hero_heading text-center font-extrabold">
						{heroData && heroData.title_first_line} <br className="hidden lg:block" /> {heroData && heroData.title_second_line}{" "}
					</h1>
					<p className="g__hero_description px-[10px] md:px-0  text-center max-w-2xl font-[400] xl:max-w-4xl mx-auto py-2">
						{heroData && heroData.hero_description}
					</p>
					{/* <div className={thirdPic ? `flex justify-center mt-6` : `flex justify-center mt-6 md:mt-10 md:mb-4`}>
						<button className="bg-[#ff5056] py-3 px-8 text-white lg:text-lg 2xl:text-2xl rounded font-semibold">Get Your Free Marketing Plan</button>
					</div> */}
					<div className=" block lg:hidden pt-4">
						<div className="flex justify-center mx-[10px]">
							{!handleOpen && (
								<Link
									href={`${heroData && heroData.hero_cta_slug ? heroData.hero_cta_slug : "/free-marketing"}`}
									className="  tracking-wider text-center bg-[#FF492C] hover:bg-[#E74329]  md:w-[inherit] py-3 px-4 md:px-6 text-white lg:text-lg 2xl:text-xl rounded font-[700]"
								>
									<span className="g_cta-text">{heroData ? heroData.hero_cta : "GET YOUR FREE MARKETING PLAN"}</span>
								</Link>
							)}
							{handleOpen && (
								<div
									onClick={handleOpen}
									className="tracking-wider cursor-pointer bg-[#FF492C] hover:bg-[#E74329]  py-3 px-4 md:px-6 text-white xl:text-lg 2xl:text-[20px] rounded font-[700]"
								>
									{heroData ? heroData.hero_cta : "GET YOUR FREE MARKETING PLAN"}
								</div>
							)}
						</div>
						<p className=" text-[#222] text-center pt-2 text-[14px] xl:text-lg max-w-[500px] px-[10px] mx-auto">
							{heroData && heroData.description_under_cta}
						</p>
					</div>
				</div>
				<div className="flex w-full justify-between 2xl:justify-around gap-2 md:mt-[35px] ">
					<Image
						src={heroData && heroData.left_image.data.attributes.url}
						alt=""
						height={100}
						width={470}
						className=" h-[150px] sm:h-[200px] md:h-[280px] xl:h-[430px]  "
					/>
					{/* <CldImage
						width="960"
						height="600"
						src="https://res.cloudinary.com/duvvlysie/image/upload/v1699423224/google_ads_agency_hero_left_escape_room_marketer_01_01_f8d7628e32.svg"
						alt="Description of my image"
					/> */}

					<div className="font-openSans hidden lg:block">
						<div className="flex justify-center min-w-[450px]">
							{!handleOpen && (
								<ButtonMagnito>
									<Link
										href={`${heroData && heroData.hero_cta_slug ? heroData.hero_cta_slug : "/free-marketing"}`}
										className="magneto tracking-wider bg-[#FF492C] hover:bg-[#E74329]  py-3 px-4 md:px-6 text-white xl:text-lg 2xl:text-[20px] rounded font-[700] flex justify-center items-center"
									>
										<span className="text">{heroData ? heroData.hero_cta : "GET YOUR FREE MARKETING PLAN"}</span>
									</Link>
								</ButtonMagnito>
							)}
							{handleOpen && (
								<div
									onClick={handleOpen}
									className="tracking-wider cursor-pointer bg-[#FF492C] hover:bg-[#E74329]  py-3 px-4 md:px-6 text-white xl:text-lg 2xl:text-[20px] rounded font-[700]"
								>
									{heroData ? heroData.hero_cta : "GET YOUR FREE MARKETING PLAN"}
								</div>
							)}
						</div>
						<p className="text-[#222] text-center pt-6 text-[14px] xl:text-lg max-w-md mx-auto">{heroData && heroData.description_under_cta}</p>
					</div>

					<Image
						src={heroData && heroData.right_image.data.attributes.url}
						alt=""
						height={100}
						width={450}
						className="h-[150px] sm:h-[200px] md:h-[280px] xl:h-[430px]  "
					/>
				</div>
			</div>
			<div className="break_line image bg-[url('/home_hero_down2.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-10 -mt-[58px] rotate-180 bg-center "></div>
			{/* <div className="break_line image bg-[url('/page_broke.png')] h-[90px] w-full  bg-[length:2500px_90px] bg-[#c7e1fb] -mt-[70px]  bg-center"></div> */}
			{/* <Image src="/test_break.svg" alt="" height={100} width={100} className="w-full h-[150px] absolute z-10 -mt-32" /> */}
		</div>
	);
}

export default Hero;
