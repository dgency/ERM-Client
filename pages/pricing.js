/* eslint-disable react/no-unescaped-entities */
import PricingCalculator from "@/components/PricingCalculator";
import TeamHero from "@/components/others/TeamHero";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";

import Error from "next/error";

function Pricing({ pricingPageData, allPriceData, seoData, error }) {
	// const [pricingData, setPricingData] = useState(props.pricingPageData);

	if (error) {
		return <Error statusCode={error.statusCode} title={error.message} />;
	}

	return (
		<div className=" relative">
			<Head>
				<title>{seoData && seoData.data.attributes.seo?.metaTitle}</title>
				<meta name="description" content={`${seoData && seoData.data.attributes.seo?.metaDescription}`} />
				<meta name="keywords" content={`${seoData && seoData.data.attributes.seo?.keywords}`} />
				<meta name="robots" content={`${seoData && seoData.data.attributes.seo?.metaRobots}`} />
				<meta property="og:image" content={`${seoData && seoData.data.attributes.seo?.metaImage.data?.attributes.url}`} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:image" content={`${seoData && seoData.data.attributes.seo?.metaImage.data?.attributes.url}`} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="canonical" href={`${seoData && seoData.data.attributes.seo?.canonicalURL}`} />

				{seoData &&
					seoData.data.attributes.seo?.structuredData?.map((data, i) => {
						return (
							<script
								key={i}
								type="application/ld+json"
								dangerouslySetInnerHTML={{
									__html: JSON.stringify(data),
								}}
							/>
						);
					})}
			</Head>
			{/* <div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center -mt-5 bg-[var(--section-bg-lightred)]"></div> */}
			<TeamHero
				heroData={allPriceData && allPriceData.data.attributes}
				bodyColor="bg-[var(--section-bg-lightred)]"
				imgFirst="/pricing/Pricing-Page-Left-Side-01.svg"
				imgSecond="/pricing/Pricing-Page-Middle-01.svg"
				imgThird="/pricing/Pricing-Page-Right-Side-01-01.svg"
				pricing={true}
			/>
			<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>

			<div className="px-[10px] md:px-8 bg-[var(--section-bg-lightblue)]">
				<div className=" flex justify-center ">
					<div className="-mt-28  max-w-md md:max-w-5xl lg:max-w-6xl 2xl:max-w-7xl bg-white rounded-md drop-shadow-md pt-8 md:pt-14 pb-8 md:pb-14 px-6 z-">
						<h2 className="g__section-heading text-center px-[10px] lg:px-8 font-extrabold">
							{allPriceData && allPriceData.data.attributes.price_card_heading}
						</h2>
						<p className="  md:text-lg text-center mt-2.5 pb-3">{allPriceData && allPriceData.data.attributes.price_card_description}</p>
						{/* <div className="">
							<Image src="/pricing/doller.svg" alt="" height={100} width={500} className="mx-auto pt-4" />
						</div> */}
						<PricingCalculator pricingPageData={pricingPageData} cardNote={allPriceData && allPriceData.data.attributes.price_card_inside_note} />
					</div>
				</div>
				<div className="pt-[25px] ">
					<div className="note pb-20 md:pb-28 max-w-md md:max-w-5xl lg:max-w-6xl 2xl:max-w-7xl mx-auto">
						<div className="max-w-5xl">
							<p className=" text-[13px] text-[#6f6f6f] italic">
								<span className="text-[15px] font-semibold">Note:</span> {allPriceData && allPriceData.data.attributes.price_card_outside_note}
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="break_line image bg-[url('/section_break_blue-footer.svg')] h-[80px] bg-[length:2500px_90px] bg-center"></div> */}
			<div className="break_line image bg-[url('/footer_top_cta_top.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-10 mt-[-35px] bg-center"></div>
		</div>
	);
}

export async function getStaticProps() {
	// let URL = "https://escaperoommarketer.com";
	try {
		// Fetch data from external API
		let data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/prices?populate[service_item][populate]=*`);
		let pricingPageData = await data.json();
		let allDetails = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/price-page-information`);
		let allPriceData = await allDetails.json();

		let seo = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/price-page-information?populate[seo][populate]=*`);
		let seoData = await seo.json();
		// Pass data to the page via props
		return {
			props: { pricingPageData, allPriceData, seoData },
			revalidate: 60,
		};
	} catch (error) {
		return { props: { error: { ok: false, reason: "some error description for your own consumption, not for client side" } } };
	}
}

export default Pricing;
