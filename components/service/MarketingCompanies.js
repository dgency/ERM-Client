import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

function MarketingCompanies({ companiesData, fineWebsiteData, bodyColor, titleFirst, titleSecond, pera }) {
	return (
		<div className={`g-page_structure ${bodyColor}`}>
			<div className="m-auto">
				<h2 className="g__section-heading text-center pt-12 md:pt-20 md:px-16 font-bold">
					{fineWebsiteData && fineWebsiteData.title_first_line} <br className="hidden lg:block" />
					{fineWebsiteData && fineWebsiteData.title_second_line}
				</h2>
				<p className="g__section-description md:text-lg xl:text-xl text-center">{fineWebsiteData && fineWebsiteData.description}</p>
			</div>
			<div className=" pt-10 md:pt-16 pb-24 max-w-[950px] mx-auto grid grid-cols-3 sm:grid-cols-6 gap-y-24">
				{companiesData &&
					companiesData.companies.map((data, i) => {
						return (
							<div
								className={`${
									companiesData.companies.length % 6 === 0
										? ""
										: data.id === 13
										? "sm:col-start-3 sm:-ml-60 2xl:-ml-72"
										: data.id === 14
										? "sm:-ml-60 2xl:-ml-72"
										: data.id === 15
										? "sm:-ml-24 2xl:-ml-36"
										: ""
								}`}
								key={data.id}
							>
								<Image
									src={`/serveice/companies/${data.image}`}
									alt=""
									width={70}
									height={150}
									className="mx-auto w-[] h-[50px] opacity-80 object-contain custom-grayscale"
								/>
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default MarketingCompanies;
