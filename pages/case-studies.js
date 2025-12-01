import CaseStudyCard from "@/components/CaseStudyCard";
import FooterTopCta from "@/components/FooterTopCta";
import TeamHero from "@/components/others/TeamHero";
import Image from "next/image";
import React, { useState } from "react";
import Error from "next/error";
import CaseStudySection from "@/components/CaseStudySection";
import Head from "next/head";

function CaseStudies({ caseData, error, caseStudy, caseStudyCardData, footerTopCta, seoData }) {
	// const [caseStudyCard, setCaseStudyCard] = useState(props.cardData);
	const [caseStudyCard, setCaseStudyCard] = useState(caseStudyCardData);

	console.log(caseStudyCard);
	if (error) {
		return <Error statusCode={error.statusCode} title={error.message} />;
	}

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
				heroData={caseData && caseData.data.attributes.hero}
				bodyColor="bg-[var(--section-bg-lightblue)]"
				imgFirst="results/allcasestudy/Case-Studies-Page-Left-Side-01-01.svg"
				imgSecond="results/allcasestudy/Case-Studies-Page-Middle-01.svg"
			/>
			<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center "></div>

			<CaseStudySection
				caseStudyData={caseStudy && caseStudy.data.attributes.casestudy_section}
				caseStudyCard={caseStudyCard}
				setCaseStudyCard={setCaseStudyCard}
				itemTOShow={true}
				bodyColor="bg-[var(--section-bg-lightred)]"
			/>
			{/* <div className="g-page_structure  bg-[var(--section-bg-lightblue)]">
				<h2 className="g__section-heading pt-14 md:pt-20  text-center mx-auto font-extrabold">
					From Hustling on Craigslist, To Working With Billion-Dollar Companies
				</h2>
				<p className="g__section-description text-center text-[16px] mx-auto md:text-xl">
					Everything that costs a buck to get a click. Our management services include all paid advertising platforms, from Google ads to LinkedIn ads
					to Bing ads, and everything in between.
				</p>

				<div className="max-w-md md:max-w-3xl lg:max-w-5xl mx-auto pb-14 md:pb-24 mt-10 md:mt-16 grid md:grid-cols-2  gap-7">
					{caseStudyCard.case_card.map((d) => {
						return <CaseStudyCard key={d.id} item={d} />;
					})}
				</div>
			</div> */}
			<FooterTopCta footerTopCta={footerTopCta && footerTopCta.data.attributes.footer_top_cta} />
		</div>
	);
}

export async function getStaticProps(context) {
	let URL = `${process.env.NEXT_PUBLIC_API_URL}`;
	try {
		// Fetch data from external API
		let data = await fetch(`${URL}/api/case-studies-page?populate[hero][populate]=*`);
		let caseData = await data.json();

		let caseStudyData = await fetch(`${URL}/api/case-studies-page?populate[casestudy_section][populate]=*`);
		let caseStudy = await caseStudyData.json();

		// let caseStudyCardData = await fetch(`${URL}/api/case-studies?populate=*`);
		// let caseStudyCard = await caseStudyCardData.json();
		let caseStudyCard = await fetch(`${URL}/api/case-studies?pagination[page]=1&pagination[pageSize]=15&sort[0]=id:asc&populate=*`);
		let caseStudyCardData = await caseStudyCard.json();

		let footerData = await fetch(`${URL}/api/case-studies-page?populate[footer_top_cta][populate]=*`);
		let footerTopCta = await footerData.json();

		let seo = await fetch(`${URL}/api/case-studies-page?populate[seo][populate]=*`);
		let seoData = await seo.json();
		// Pass data to the page via props
		return {
			props: { caseData, caseStudy, caseStudyCardData, footerTopCta, seoData },
			revalidate: 60,
		};
	} catch (error) {
		return { props: { error: { ok: false, reason: "some error description for your own consumption, not for client side" } } };
	}
}

export default CaseStudies;
