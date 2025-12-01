import Image from "next/image";
import Link from "next/link";
import React from "react";

function TeamHero({ imgFirst, imgSecond, imgThird, heroData, bodyColor, pricing }) {
	return (
		<div>
			<div className={`${bodyColor} pt-16 md:pt-24 ${pricing ? "pb-24 md:pb-32" : "pb-12 md:pb-16"}`}>
				<div className={`${pricing ? "pb-8 sm:pb-14" : "pb-6 sm:pb-8"} m-auto`}>
					<h1 className="hero_heading text-center ">
						{heroData && heroData.title_first_line} <br className="hidden xl:block" /> {heroData && heroData.title_second_line}
					</h1>
					{heroData.description && <p className=" g__section-description md:text-lg xl:text-xl text-center px-[10px]">{heroData.description}</p>}
				</div>

				{pricing !== true && (
					<div className=" sm:hidden flex justify-center pb-8">
						<Link
							href={`${heroData.hero_cta_slug ? heroData.hero_cta_slug : "/free-marketing"}`}
							className="  tracking-wider text-center bg-[#FF492C] hover:bg-[#E74329]  md:w-[inherit] py-3 px-4 md:px-6 text-white lg:text-lg 2xl:text-xl rounded font-[700]"
						>
							<span className="g_cta-text">{heroData.hero_cta ? heroData.hero_cta : "GET YOUR FREE MARKETING PLAN"}</span>
						</Link>
					</div>
				)}

				<div className="max-w-[1300px] mx-auto relative flex justify-between items-center ">
					<Image
						src={`${imgFirst}`}
						alt=""
						height={150}
						width={350}
						// className="h-[90px] md:h-[150px] w-[90px] md:w-[inherit] absolute left-0  lg:left-0 bottom-0 md:bottom-10  pt-6 md:pt-24 pb-16"
						className="h-[90px] md:h-[145px] w-[110px] md:w-[inherit] "
					/>
					{pricing !== true && (
						<div className="hidden sm:flex justify-center absolute left-[50%] translate-x-[-50%] min-w-[400px]">
							<Link
								href={`${heroData.hero_cta_slug ? heroData.hero_cta_slug : "/free-marketing"}`}
								className="  tracking-wider text-center bg-[#FF492C] hover:bg-[#E74329]  md:w-[inherit] py-3 px-4 md:px-6 text-white lg:text-lg 2xl:text-xl rounded font-[700]"
							>
								<span className="g_cta-text">{heroData.hero_cta ? heroData.hero_cta : "GET YOUR FREE MARKETING PLAN"}</span>
							</Link>
						</div>
					)}

					<Image src={`${imgSecond}`} alt="" height={100} width={350} className={"h-[90px] md:h-[145px] w-[110px] md:w-[inherit] "} />
					{pricing && <Image src={`${imgThird}`} alt="" height={100} width={150} className="h-[90px] md:h-[145px] w-[90px] md:w-[inherit] " />}
				</div>
			</div>
		</div>
	);
}

export default TeamHero;
