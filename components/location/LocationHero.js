/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SharedHero from "./hero/SharedHero";

function LocationHero({ heroData }) {
	return (
		<div
			style={{ backgroundImage: `url(${heroData?.background_image?.data?.attributes.url})` }}
			className="hero_cover w-full bg-[var(--section-bg-lightred)]  bg-cover bg-center relative overflow-hidden"
		>
			<div className="text-container  m-auto pt-16 md:pt-24 relative z-20">
				<h1 className="hero_heading tracking-tighter text-center font-extrabold">
					{heroData?.title_first_line} <br className="hidden lg:block" />
					{heroData?.title_second_line}
				</h1>

				<p className=" g__hero_description text-center max-w-2xl font-[400] xl:max-w-4xl mx-auto px-2.5 md:px-0 py-4">{heroData?.description}</p>
			</div>
			{/* flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between  */}
			<SharedHero  heroData={heroData}/>
		</div>
	);
}

export default LocationHero;
