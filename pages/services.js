/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import Hero from "@/components/service/Hero";
import ConversionMarketing from "@/components/service/ConversionMarketing";
import Image from "next/image";
import FaqSection from "@/components/service/FaqSection";
import Link from "next/link";
import FooterTopCta from "@/components/FooterTopCta";
import Head from "next/head";

import Error from "next/error";

function Services({ heroData, otherServicesData, marketingPlanData, faqData, footerTopCta, seoData, error }) {
	// const [faqSection, setFaqSection] = useState(props.faqData);

	if (error) {
		return <Error statusCode={error.statusCode} title={error.message} />;
	}
	try {
		return (
			<div>
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

				<Hero
					heroData={heroData && heroData.data.attributes.hero}
					firstPic="/services/all-service-list-page-hero-left-escape-room-marketer-01.svg"
					secondPic="/services/all-service-list-page-hero-right-escape-room-marketer-01.svg"
					title="We’ll Make You Excessively More and  Money Than Any Other Marketing Team"
					pera="Increase your conversion rates to lower your cost per conversion and get a higher conversion volume. All leading to more revenue as well."
				/>
				<ConversionMarketing
					bodyColor="bg-[#F9FCFF]"
					cardColor="bg-white"
					otherServices={otherServicesData && otherServicesData.data.attributes.other_services}
					title="Improve One Channel or Rapidly Scale Performance Across All of Them at Once"
					pera="Work with specialized teams that rapidly adapt, expand, and scale as one cohesive unit."
					paidAdvertising
					conversionRateOptimization
					emailMarketing
					searchEngineOptimization
				/>
				<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:3200px_90px]  bg-center rotate-180"></div>
				<div className=" g-page_structure bg-[#FFF7F5]">
					<div className="main-content  m-auto">
						<h2 className="g__section-heading text-center md:pt-14 pt-4 text-xl md:text-3xl xl:text-5xl font-bold">
							{marketingPlanData && marketingPlanData.data.attributes.marketing_plan.title_first_line} <br className="hidden xl:block" />{" "}
							{marketingPlanData && marketingPlanData.data.attributes.marketing_plan.title_second_line}
						</h2>
						<p className="g__section-description md:text-lg xl:text-xl 2xl:text-2xl text-center ">
							{marketingPlanData && marketingPlanData.data.attributes.marketing_plan.description}
						</p>
					</div>
					<div className="q-card 2xl:w-[1000px] mx-0 2xl:mx-auto   mt-20 grid gap-x-12 gap-y-12 md:grid-cols-2 pb-9 md:pb-20">
						{marketingPlanData &&
							marketingPlanData.data.attributes.marketing_plan.marketing_card.map((data) => {
								return (
									<div className="px-10 py-10  rounded bg-white shadow" key={data.id}>
										<h4 className="font-bold text-xl md:text-[22px] text-[#010101]  text-center">{data.card_title}</h4>
										<p className="text-lg text-center mt-3">{data.card_description}</p>
										<Image height={200} width={200} src={data.image.data?.attributes.url} alt="" className="w-[200px] h-[180px] mx-auto mt-8 " />
									</div>
								);
							})}
						{/* <div className="px-10 py-10 rounded bg-white shadow">
							<h4 className="font-bold text-xl md:text-[22px] text-[#010101] text-center">The Bottom Feeding Approach</h4>
							<p className="text-lg text-center mt-3">We’ll build you a high performing engine and you run it by yourself.</p>
							<Image height={200} width={200} src="/services/bottomfeeding.svg" alt="" className="w-[200px] h-[180px] mx-auto mt-8" />
						</div>
	
						<div className="px-10 py-10 rounded bg-white shadow">
							<h4 className="font-bold text-xl md:text-[22px] text-[#010101] text-center">Single Keyword Ad Groups</h4>
							<p className="text-lg text-center mt-3">Get detailed to-do’s to hit your goals faster than ever before.</p>
							<Image height={200} width={200} src="/services/singlead.svg" alt="" className="w-[200px] h-[180px] mx-auto mt-8" />
						</div>
	
						<div className="px-10 py-10 rounded bg-white shadow">
							<h4 className="font-bold text-xl md:text-[22px] text-[#010101] text-center">Keyword Tapering</h4>
							<p className="text-lg text-center mt-3">Revenue split partnership. Less risk for you, higher reward for us.</p>
							<Image height={200} width={200} src="/services/keywordtapering.svg" alt="" className="w-[200px] h-[180px] mx-auto mt-8" />
						</div>
						<div className="px-10 py-10 rounded bg-white shadow">
							<h4 className="font-bold text-xl md:text-[22px] text-[#010101] text-center">The Iceberg Effect</h4>
							<p className="text-lg text-center mt-3">Get ongoing step-by-step advice with data-driven prioritization.</p>
							<Image height={200} width={200} src="/services/iceberg.svg" alt="" className="w-[200px] h-[180px] mx-auto mt-8" />
						</div>
						<div className="px-10 py-10 rounded bg-white shadow">
							<h4 className="font-bold text-xl md:text-[22px] text-[#010101] text-center">TLC Email Framework</h4>
							<p className="text-lg text-center mt-3">Revenue split partnership. Less risk for you, higher reward for us.</p>
							<Image height={200} width={200} src="/services/emailframework.svg" alt="" className="w-[200px] h-[180px] mx-auto mt-8" />
						</div> */}
					</div>
				</div>
				<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:3200px_90px]  bg-center"></div>
				<FaqSection bodyColor="bg-[#F9FCFF]" faqSectionData={faqData && faqData.data.attributes.faq_section} />
				<FooterTopCta pageBreakBlue={true} footerTopCta={footerTopCta && footerTopCta.data.attributes.footer_top_cta} />
			</div>
		);
	} catch (error) {
		return (
			<>
				<div className="md:h-[800px] w-full bg-[#fff7f5] pb-28 md:pb-0 px-[10px]">
					<div className="flex justify-center pt-20">
						<Image src="/under_maintanence.svg" height={400} width={700} alt="this page is under maintanence" />
					</div>
					<h1 className="text-center text-[28px] md:text-[38px] pt-5 font-bold ">This Page Is Under Maintenance 🛠️</h1>
				</div>
				<div className="break_line image bg-[url('/footer_top_cta_bottom.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-10 mt-[-65px] rotate-180 bg-center"></div>
			</>
		);
	}
}

export async function getStaticProps(context) {
	let URL = `${process.env.NEXT_PUBLIC_API_URL}`;
	try {
		// Fetch data from external API
		let data = await fetch(`${URL}/api/all-service-page?populate[hero][populate]=*`);
		let heroData = await data.json();

		let otherServices = await fetch(
			`${URL}/api/all-service-page?populate[0]=other_services&populate[1]=other_services.other_services_card&populate[2]=other_services.other_services_card.card_image`
		);
		let otherServicesData = await otherServices.json();

		let marketingPlan = await fetch(
			`${URL}/api/all-service-page?populate[0]=marketing_plan&populate[1]=marketing_plan.marketing_card&populate[2]=marketing_plan.marketing_card.image`
		);
		let marketingPlanData = await marketingPlan.json();

		let faq = await fetch(`${URL}/api/all-service-page?populate[faq_section][populate]=*`);
		let faqData = await faq.json();

		let footerData = await fetch(`${URL}/api/all-service-page?populate[footer_top_cta][populate]=*`);
		let footerTopCta = await footerData.json();

		let seo = await fetch(`${URL}/api/all-service-page?populate[seo][populate]=*`);
		let seoData = await seo.json();
		// Pass data to the page via props
		return {
			props: { heroData, otherServicesData, faqData, marketingPlanData, footerTopCta, seoData },
			revalidate: 60,
		};
	} catch (error) {
		return { props: { error: { ok: false, reason: "some error description for your own consumption, not for client side" } } };
	}
}

export default Services;
