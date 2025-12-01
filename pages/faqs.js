import FooterTopCta from "@/components/FooterTopCta";
import Quizhero from "@/components/quizDetails/quizDetailsHero/Quizhero";
import FaqSection from "@/components/service/FaqSection";
import React, { useState } from "react";
import Error from "next/error";
import Head from "next/head";

function Faqs({ allFaqData, seoData, error }) {
	// const [faqSection, setFaqSection] = useState(props.faqData);

	if (error) {
		return <Error statusCode={error.statusCode} title={error.message} />;
	}

	return (
		<div className="pt-[.5rem] md:pt-[1.2rem]">
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
			<div className="faqs_hero g-page_structure bg-[#FFF7F5]  relative before:content-[''] before:absolute before:top-[-10px] before:right-0 before:bottom-[-10px] before:left-0 z-10 before:bg-[url('/resources/quiz_hero_background.png')] before:bg-[length:300px_300px] before:bg-center before:opacity-10">
				<div className="relative z-20 pt-14 md:pt-24 pb-16 md:pb-24">
					<h1 className="hero_heading  leading-[1.2] text-center font-bold  ">
						{allFaqData && allFaqData.data.attributes.hero_title_first_line} <br className="hidden xl:block" />{" "}
						{allFaqData && allFaqData.data.attributes.hero_title_second_line}
					</h1>
					<p className="g__section-description text-center m-auto">{allFaqData && allFaqData.data.attributes.description}</p>
				</div>
			</div>
			{/* <div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:3200px_90px]  bg-center"></div> */}
			<div className="break_line image bg-[url('/footer_top_cta_top.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-30 mt-[-60px] rotate-180 bg-center"></div>
			<div className="">
				<FaqSection bodyColor="bg-[var(--section-bg-lightblue)]" faqSectionData={allFaqData && allFaqData.data.attributes} allFaq="true" />
			</div>
			<FooterTopCta pageBreakBlue={true} footerTopCta={allFaqData && allFaqData.data.attributes.footer_top_cta} />
		</div>
	);
}

export async function getStaticProps(context) {
	let URL = `${process.env.NEXT_PUBLIC_API_URL}`;
	try {
		// Fetch data from external API
		let data = await fetch(`${URL}/api/faq?populate=*`);
		let allFaqData = await data.json();

		let seo = await fetch(`${URL}/api/faq?populate[seo][populate]=*`);
		let seoData = await seo.json();

		// let ourWorksData = await fetch(`${URL}/api/our-work?populate[0]=works&populate[1]=works.Website_images&populate[2]=works.ads_images`);
		// let ourWorks = await ourWorksData.json();

		// let footerData = await fetch(`${URL}/api/our-work?populate[footer_top_cta][populate]=*`);
		// let footerTopCta = await footerData.json();
		// Pass data to the page via props
		return {
			props: { allFaqData, seoData },
			revalidate: 60,
		};
	} catch (error) {
		return { props: { error: { ok: false, reason: "some error description for your own consumption, not for client side" } } };
	}
}

export default Faqs;
