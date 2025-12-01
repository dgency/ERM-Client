import CeoStalk from "@/components/CeoStalk";
import FooterTopCta from "@/components/FooterTopCta";
import ProjectSliderSection from "@/components/ProjectSliderSection";
import TeamHero from "@/components/others/TeamHero";
import Error from "next/error";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Projects({ heroData, websites, googleAds, footerTopCta, htmlAds, seoData, error }) {
	const [state, setState] = useState({
		microsoftad: {},
		displayad: {},
		htmlad: {},
		socialad: {},
		seo: {},
		ceo: {},
	});

	useEffect(() => {
		const APIurl = `${process.env.NEXT_PUBLIC_API_URL}/api/our-work`;

		fetch(`${APIurl}?populate[microsoft_ads_section][populate]=*`)
			.then((res) => res.json())
			.then((data) => setState((prevState) => ({ ...prevState, microsoftad: { data } })));

		fetch(`${APIurl}?populate[display_ads_section][populate]=*`)
			.then((res) => res.json())
			.then((data) => setState((prevState) => ({ ...prevState, displayad: { data } })));

		fetch(`${APIurl}?populate[html_ads_section][populate]=*`)
			.then((res) => res.json())
			.then((data) => setState((prevState) => ({ ...prevState, htmlad: { data } })));

		fetch(`${APIurl}?populate[social_media_section][populate]=*`)
			.then((res) => res.json())
			.then((data) => setState((prevState) => ({ ...prevState, socialad: { data } })));

		fetch(`${APIurl}?populate[seo_section][populate]=*`)
			.then((res) => res.json())
			.then((data) => setState((prevState) => ({ ...prevState, seo: { data } })));

		fetch(`${APIurl}?populate[ceo_speach][populate]=*`)
			.then((res) => res.json())
			.then((data) => setState((prevState) => ({ ...prevState, ceo: { data } })));
	}, []);

	console.log();
	const image = ["/others/allinad.png", "/others/allinad.png"];
	if (error) {
		return <Error statusCode={error.statusCode} title={error.message} />;
	}
	// console.log(ourWorks.data.attributes.works.Website_images.data[0].attributes.url);
	try {
		return (
			<div className="">
				<Head>
					<title>{seoData && seoData.data.attributes.seo?.metaTitle}</title>
					<meta name="description" content={`${seoData && seoData.data.attributes.seo?.metaDescription}`} />
					<meta name="keywords" content={`${seoData && seoData.data.attributes.seo?.keywords}`} />
					<meta name="robots" content={`${seoData && seoData.data.attributes.seo?.metaRobots}`} />
					<meta property="og:image" content={`${seoData && seoData.data.attributes.seo?.metaImage.data?.attributes.url}`} />
					<meta property="og:image:width" content="400" />
					<meta property="og:image:height" content="300" />
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
				{/* <div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center -mt-10 bg-[var(--section-bg-lightred)]"></div> */}
				<TeamHero
					heroData={heroData && heroData.data.attributes.hero}
					bodyColor="bg-[var(--section-bg-lightred)]"
					imgFirst="/results/ourworks/Our-Works-Page-Left-Side-01.svg"
					imgSecond="/results/ourworks/Our-Works-Page-Middle-01.svg"
					imgThird="/results/ourworks/Our-Works-Page-Right-Side-01.svg"
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
				<ProjectSliderSection
					single={true}
					allData={websites && websites.data.attributes.website_section}
					bodyColor="bg-[var(--section-bg-lightblue)]"
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center  "></div>
				<ProjectSliderSection
					single={true}
					allData={googleAds && googleAds.data.attributes.google_ads_section}
					bodyColor="bg-[var(--section-bg-lightred)]"
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
				<ProjectSliderSection
					single={true}
					allData={state.microsoftad && state.microsoftad.data?.data.attributes.microsoft_ads_section}
					bodyColor="bg-[var(--section-bg-lightblue)]"
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center "></div>
				<ProjectSliderSection
					single={true}
					allData={state.displayad && state.displayad.data?.data.attributes.display_ads_section}
					bodyColor="bg-[var(--section-bg-lightred)]"
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
				<ProjectSliderSection
					allData={state.htmlad && state.htmlad.data?.data.attributes.html_ads_section}
					htmlAds={htmlAds && htmlAds.Ads}
					bodyColor="bg-[var(--section-bg-lightblue)]"
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center "></div>
				<ProjectSliderSection
					single={true}
					allData={state.socialad && state.socialad.data?.data.attributes.social_media_section}
					bodyColor="bg-[var(--section-bg-lightred)]"
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
				<ProjectSliderSection
					single={true}
					allData={state.seo && state.seo.data?.data.attributes.seo_section}
					bodyColor="bg-[var(--section-bg-lightblue)]"
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center "></div>
				<CeoStalk bodyColor="bg-[var(--section-bg-lightred)]" allData={state.ceo && state.ceo.data?.data.attributes.ceo_speach} />
				<FooterTopCta footerTopCta={footerTopCta && footerTopCta.data.attributes.footer_top_cta} />
			</div>
		);
	} catch (error) {
		return (
			<>
				<div className="h-[800px] w-full bg-[#fff7f5] ">
					<div className="flex justify-center pt-20">
						<Image src="/under_maintanence.svg" height={400} width={700} alt="this page is under maintanence" />
					</div>
					<h1 className="text-center text-[38px] pt-5 font-bold ">This Page Is Under Maintenance 🛠️</h1>
				</div>
				<div className="break_line image bg-[url('/footer_top_cta_bottom.svg')] h-[90px] w-full bg-[length:2500px_90px] absolute z-10 mt-[-80px]  bg-center"></div>
			</>
		);
	}
}

export async function getStaticProps(context) {
	let URL = `${process.env.NEXT_PUBLIC_API_URL}`;
	try {
		// Fetch data from external API
		let data = await fetch(`${URL}/api/our-work?populate[hero][populate]=*`);
		let heroData = await data.json();

		let websiteData = await fetch(`${URL}/api/our-work?populate[website_section][populate]=*`);
		let websites = await websiteData.json();

		let googleAdsData = await fetch(`${URL}/api/our-work?populate[google_ads_section][populate]=*`);
		let googleAds = await googleAdsData.json();

		let footerData = await fetch(`${URL}/api/our-work?populate[footer_top_cta][populate]=*`);
		let footerTopCta = await footerData.json();

		let htmlAdsData = await fetch("https://escaperoommarketer.com/api/keyserveice?slug=ppcAgency");
		let htmlAds = await htmlAdsData.json();

		let seo = await fetch(`${URL}/api/our-work?populate[seo][populate]=*`);
		let seoData = await seo.json();
		// Pass data to the page via props
		return {
			props: { heroData, websites, googleAds, footerTopCta, htmlAds, seoData },
			revalidate: 60,
		};
	} catch (error) {
		return { props: { error: { ok: false, reason: "some error description for your own consumption, not for client side" } } };
	}
}

export default Projects;
