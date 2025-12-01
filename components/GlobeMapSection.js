import Image from "next/image";
import Link from "next/link";
import React from "react";
import FadeInUpContainer from "./framer-motion/FadeInUpContainer";

function GlobeMapSection({ worldMapData, location }) {
	return (
		<div className="bg-[#F3FFF8] bg-[url('/home/globeBackground.svg')] h-full  bg-[length:360px_400px] bg-repeat z-10">
			<div className="g-page_structure">
				<div className={`${location ? "pt-24 md:pt-28" : "pt-24 md:pt-32"}  pb-24 md:pb-32`}>
					<FadeInUpContainer>
						<div className="main-content  m-auto">
							<h2 className="g__section-heading text-center font-bold">
								{worldMapData?.title_first_line} <br className="hidden xl:block" /> {worldMapData?.title_second_line}
							</h2>
							<p className="g__section-description text-center ">{worldMapData?.description}</p>
						</div>

						<div className="globe_map flex justify-center my-[40px] md:my-[80px]">
							<Image
								src={`${worldMapData?.image.data ? worldMapData?.image.data?.attributes.url : "/home/WorldMap.svg"}`}
								height={680}
								width={1217}
								alt="world map for escaperoom marketing"
								className="hover:scale-105 duration-700 "
							/>

							
						</div>
					</FadeInUpContainer>
					<div className="flex justify-center">
						<Link
							href={`${worldMapData?.cta_slug ? worldMapData?.cta_slug : "/free-marketing"}`}
							className="font-openSans tracking-wider text-center bg-[#FF492C] hover:bg-[#E74329] md:w-[inherit] py-3 px-4 md:px-6 text-white xl:text-lg 2xl:text-[20px] rounded font-[700]"
						>
							<span className="g_cta-text"> {worldMapData?.cta ? worldMapData?.cta : "GET YOUR FREE MARKETING PLAN"}</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default GlobeMapSection;
