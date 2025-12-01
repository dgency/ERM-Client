import React, { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Casehero({ heading, heroData }) {
	const router = useRouter();
	const selfNum = parseInt(router.query.i) + 1;
	const numOfCase = router.query.t;

	return (
		<div className=" pb-4">
			{/* <div className="break_line image bg-[url('/breakline_white.svg')] h-[80px] w-full bg-[length:2500px_90px] absolute z-10 -mt-1 bg-center rotate-180 "></div> */}
			<div className=" case_study-hero  text-center ">
				<div className=" pt-14 md:pt-20 pb-32 md:pb-36">
					{/* <div className="g-page_structure flex md:block justify-center">
						<Link
							href="/all-case-study"
							className="text-[#FF492C] hover:text-[#E74329] text-center  font-bold text-base flex items-center absolute top-[140px] "
						>
							<BiChevronLeft className="text-2xl" /> Go Back To All Case Study
						</Link>
					</div> */}
					<div className="max-w-[1050px] xl:max-w-[1250px] mx-auto flex mb-3 md:mb-0">
						<Link
							href="/case-studies"
							className="text-[#FFf] relative z-20 text-center  font-bold text-[12px] md:text-[14px] flex items-center decoration-  underline underline-offset-4 "
						>
							<BiChevronLeft className="text-2xl" /> BACK TO All CASE STUDIES
						</Link>
					</div>
					{/* <Image src={heroData && heroData.hero_logo.data.attributes.url} alt="" height={100} width={150} className="mx-auto pt-6 " /> */}
					<div className="pt-10 md:pt-20 pb-2 ">
						<button className="text-[14px] bg-[#FF492C] text-white cursor-text mb-1  md:mb-2.5 py-[4px] px-5 font-[700]">
							CASE STUDY {selfNum} OF {numOfCase}
						</button>
						<h1 className="hero_heading text-center text-[#fff_!important] max-w-[1050px] mx-auto">{heroData.title}</h1>
					</div>
				</div>
			</div>
			<div className=" mx-[10px] md:mx-20 2xl:mx-[250px]">
				<div className="max-w-xl md:max-w-[1000px]  2xl:max-w-[1370px] mx-auto drop-shadow-xl flex flex-col md:flex-row md:justify-between md:items-end gap-0 xl:gap-6  bg-[#f7f7f7] pl-7 lg:pl-10 pr-2 2xl:pr-8 pt-6  -mt-16 ">
					<div className="border-l-[4px] border-[#1ccdaa]  pl-2 md:pl-0 lg:pl-2 sm:pt-4">
						<p className="pl-2 pt-2 md:pt-0 text-[42px] md:text-[36px]  lg:text-[46px] text-[#1ccdaa] font-bold">
							{heroData && heroData.statistic_1}
						</p>
						<p className="pl-2 pb-5 md:pb-4 text-[16px] lg:text-lg font-[600]">{heroData && heroData.statistic_1_title}</p>
					</div>
					<div className="border-l-[4px] border-[#fd585b] pl-2 md:pl-0 lg:pl-2 sm:pt-4">
						<p className="pl-2 pt-2 md:pt-0  text-[42px] md:text-[36px]  lg:text-[46px] text-[#fd585b] font-bold">
							{heroData && heroData.statistic_2}
						</p>
						<p className="pl-2 pb-5 md:pb-4 text-[16px] lg:text-lg font-[600]">{heroData && heroData.statistic_2_title}</p>
					</div>
					<div className="border-l-[4px] border-[#8f6bfc] pl-2 md:pl-0 lg:pl-2 sm:pt-4">
						<p className="pl-2 pt-2 md:pt-0 text-[42px]  md:text-[36px]  lg:text-[46px] text-[#8f6bfc] font-bold">
							{heroData && heroData.statistic_3}
						</p>
						<p className="pl-2 pb-5 md:pb-4 text-[16px] lg:text-lg font-[600]">{heroData && heroData.statistic_3_title}</p>
					</div>
					<div className=" border-l-[4px] border-[#1ccdaa] pl-2 md:pl-0 lg:pl-2 sm:pt-4">
						<p className="pl-2 pt-2 md:pt-0 text-[42px]  md:text-[36px]  lg:text-[46px] text-[#1ccdaa] font-bold">
							{heroData && heroData.statistic_4}
						</p>
						<p className="pl-2 pb-5 md:pb-4 text-[16px] lg:text-lg font-[600]">{heroData && heroData.statistic_4_title}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Casehero;
