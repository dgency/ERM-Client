import Link from "next/link";
import React from "react";
import { BiChevronLeft } from "react-icons/bi";

function Quizhero({ heroFirst, heroSecond }) {
	return (
		<div>
			{/* <div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center -mt-5 bg-[var(--section-bg-lightred)]"></div> */}
			<div className="quizzes_hero  g-page_structure bg-[#FFF7F5]  relative before:content-[''] before:absolute before:top-[-20px] before:right-0 before:bottom-[-40px] before:left-0 z-10 before:bg-[url('/resources/quiz_hero_background.png')] before:bg-[length:300px_300px] before:bg-center before:opacity-10">
				<div className="max-w-[1050px] xl:max-w-[1250px] mx-auto pt-14 sm:pt-20 flex">
					<Link
						href="/quizzes"
						className="text-[#FF492C] relative z-20 hover:text-[#E74329] text-center  font-bold text-[12px] md:text-[14px] flex items-center decoration-  underline underline-offset-4 "
					>
						<BiChevronLeft className="text-2xl" /> BACK TO All QUIZZES
					</Link>
				</div>

				<div className="pt-6 xl:pt-16 pb-14 md:pb-24">
					<h1 className="hero_heading relative z-20 leading-[1.2] text-center font-bold  ">
						{heroFirst} <br className="hidden lg:block" /> {heroSecond}
					</h1>
				</div>
			</div>
			{/* <div className="break_line image bg-[url('/home_hero_down2.svg')] h-[80px] bg-[length:3200px_90px] -mt-[40px] rotate-180 bg-center"></div> */}
			<div className="break_line image bg-[url('/footer_top_cta_top.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-30 mt-[-60px] rotate-180 bg-center"></div>
		</div>
	);
}

export default Quizhero;
