/* eslint-disable react/no-unescaped-entities */
// this is a line break design
// <div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center -mt-8 bg-[#FAFAFA]"></div>

// "use client";
import Head from "next/head";
import dynamic from "next/dynamic";

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { RiErrorWarningFill } from "react-icons/ri";
// import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import DedicatedTeam from "@/components/DedicatedTeam";
import FooterTopCta from "@/components/FooterTopCta";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ConversionMarketing from "@/components/service/ConversionMarketing";
// import Payperclick from "@/components/service/Payperclick";

import Lottie from "lottie-react";
import heroRightSide from "../public/home/home_hero_right_side.json";
import leftCoinAnimation from "../public/Coin_Left.json";

import KeyServeice from "@/components/KeyServeice";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import DescriptiveCta from "@/components/DescriptiveCta";
import GlobeMapSection from "@/components/GlobeMapSection";
import OurClients from "@/components/home/OurClients";
import OnlyErmAgency from "@/components/home/OnlyErmAgency";
import WiningStrategy from "@/components/home/WiningStrategy";
import FadeInUpContainer from "@/components/framer-motion/FadeInUpContainer";
import CaseStudySection from "@/components/CaseStudySection";
import ButtonMagnito from "@/components/animation/ButtonMagnito";

const Payperclick = dynamic(() => import("../components/service/Payperclick"));

async function fetchHomePageSection(apiUrl, query, section) {
	let response;
	try {
		response = await fetch(`${apiUrl}/api/home-page?${query}`);
	} catch (error) {
		throw new Error(`CMS request for homepage "${section}" section failed`, { cause: error });
	}

	if (!response.ok) {
		throw new Error(`CMS request for homepage "${section}" section failed with status ${response.status}`);
	}

	let data;
	try {
		data = await response.json();
	} catch (error) {
		throw new Error(`CMS returned invalid JSON for homepage "${section}" section`, { cause: error });
	}

	if (!data?.data?.attributes?.[section]) {
		throw new Error(`CMS response is missing homepage "${section}" section`);
	}

	return data;
}

export default function Home({
	heroData,
	worldMapData,
	payperclickData,
	analyticsData,
	otherServicesData,
	ourClients,
	onlyErmAgency,
	keyServeice,
	teamResponse,
	winingStrategy,
	testimonialCarousel,
	footerTopCta,
	seoData,
	caseStudySectionData,
	caseStudyCard,
}) {
	return (
			<>
				<Head>
					<title>{seoData && seoData.data.attributes.seo?.metaTitle}</title>
					<meta name="description" content={`${seoData && seoData.data.attributes.seo?.metaDescription}`} />
					<meta name="keywords" content={`${seoData && seoData.data.attributes.seo?.keywords}`} />
					<meta name="robots" content={`${seoData && seoData.data.attributes.seo?.metaRobots}`} />
					<meta property="og:image" content={`${seoData?.data?.attributes?.seo?.metaImage?.data?.attributes?.url || ""}`} />
					<meta name="twitter:card" content="summary_large_image" />
					<meta name="twitter:image" content={`${seoData?.data?.attributes?.seo?.metaImage?.data?.attributes?.url || ""}`} />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="canonical" href={`${seoData && seoData.data.attributes.seo?.canonicalURL}`} />
					<link rel="preload" href="/home/home_mobile.png" as="image" />
					<link rel="preload" href="/home/home_right.png" as="image" />
					<link rel="preload" href="/home/home_left.png" as="image" />

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
				<main className="section_body">
					{/* <div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center -mt-4 bg-[]"></div> */}
					<div className="hero_cove shb-v2 w-full bg-[var(--section-bg-lightred)] relative overflow-hidden ">
						<div className="text-container  m-auto pt-16 md:pt-24 relative z-10">
							<h1 className="hero_heading tracking-tighter text-center font-extrabold">
								{heroData && heroData.data.attributes.hero.title_first_line} <br className="hidden lg:block" />
								{heroData && heroData.data.attributes.hero.title_second_line}
							</h1>

							<p className=" g__hero_description text-center max-w-2xl font-[400] xl:max-w-4xl mx-auto px-2.5 md:px-0 py-4">
								{heroData && heroData.data.attributes.hero.hero_description}
							</p>
						</div>

						{/* flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between  */}
						<div className="flex flex-col lg:flex-row  lg:w-full items-center lg:items-start lg:justify-between">
							<div className="flex-1">
								{/* <Image
									src={heroData && heroData.data.attributes.hero.left_image.data.attributes.url}
									alt=""
									height={300}
									width={580}
									loading="eager"
									className="hidden lg:block homeHeroImage w-full"
								/> */}
							</div>
							<div className="md:min-w-[350px] max-w-[600px] mx-auto flex-1 relative z-10">
								<div>
									<div className="flex justify-center mt-5 md:mt-0  xl:mt-[35px] ">
										<ButtonMagnito>
											<Link
												href="/free-marketing"
												className="magneto flex md:block justify-center items-center gap-2.5 tracking-wider text-center bg-[#FF492C] hover:bg-[#E74329] py-3 px-[14px] md:px-6 text-white text-[16px] xl:text-lg 2xl:text-[20px] rounded font-[700]"
											>
												<Image
													src="/components/faq/lock_close.svg"
													height={20}
													width={18}
													alt=""
													className="hero-cta_image w-[23px] h-[30px] inline-block md:hidden"
												/>

												<span className="text hidden md:inline-block">{heroData && heroData.data.attributes.hero.hero_cta}</span>
												<span className="g_cta-text inline-block md:hidden">UNLOCK YOUR MARKETING PLAN</span>
											</Link>
										</ButtonMagnito>
									</div>
									<p className="text-[#222] text-center text-[14px] xl:text-lg  pt-4 xl:pt-6 pb-24 sm:pb-36 lg:pb-32 px-4 md:px-0 flex justify-center">
										{heroData && heroData.data.attributes.hero.description_under_cta}
									</p>
								</div>
							</div>
							<div className="flex-1">
								{/* <Lottie loop={true} animationData={heroRightSide} height={300} width={900} className=" homeHeroImage w-full block" /> */}
							</div>
						</div>
						<div className="hidden lg:block bg-[url('/home/home_left.png')] bg-no-repeat bg-contain h-full w-[50%] absolute top-0 left-0 "></div>
						<div className="hidden lg:block bg-[url('/home/home_right.png')] bg-no-repeat bg-contain bg-right  h-full w-[50%] absolute top-0 right-0"></div>
						<div className=" lg:hidden bg-[url('/home/home_mobile.png')] bg-no-repeat bg-[length:100%_auto] bg-bottom h-full w-full absolute bottom-0 left-0"></div>
					</div>
					{/* <div className="break_line image bg-[url('/footer_top_cta_top_red.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-10 -mt-[8px] bg-center "></div> */}

					<GlobeMapSection worldMapData={worldMapData && worldMapData.data?.attributes.world_map} />
					<div className="break_line image bg-[url('/home_hero_down2.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-40 -mt-[65px]  bg-center rotate-180 "></div>
					<Payperclick
						bodyColor="bg-[var(--section-bg-lightblue)]"
						payperclickData={payperclickData && payperclickData.data.attributes.cro_opportunities}
					/>
					<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center  "></div>
					<ConversionMarketing
						bodyColor="bg-[var(--section-bg-lightred)]"
						cardColor="bg-white"
						otherServices={otherServicesData && otherServicesData.data.attributes.other_services}
					/>
					<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
					<TestimonialCarousel
						testimonialData={testimonialCarousel && testimonialCarousel.data.attributes.testimonial_carousel}
						bodyColor="bg-[var(--section-bg-lightblue)]"
					/>
					<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center  "></div>
					<CaseStudySection
						caseStudyData={caseStudySectionData && caseStudySectionData.data.attributes.casestudy_section}
						caseStudyCard={caseStudyCard}
						bodyColor="bg-[var(--section-bg-lightred)]"
					/>
					<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
					<OurClients ourClients={ourClients} />
					<div className="break_line image bg-[url('/footer_top_cta_top.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-10 mt-[-20px] bg-center"></div>
					{/* <div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center  "></div> */}
					<GoogleAnalytics analyticsData={analyticsData && analyticsData.data.attributes.google_analytics} />
					<div className="break_line image bg-[url('/footer_top_cta_top_red.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-10 mt-[-60px] md:mt-[-70px] bg-center rotate-180"></div>
					<OnlyErmAgency onlyErmAgency={onlyErmAgency} />
					{/* <div className="break_line image bg-[url('/page_brokefafafa2.png')] h-[75px] bg-[length:1600px_90px] bg-center bg-[#FAFAFA]   rotate-180"></div> */}
					<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
					<KeyServeice
						bodyColor="bg-[var(--section-bg-lightblue)]"
						cardColor="bg-[#ffffff]"
						keyServeiceData={keyServeice && keyServeice.data.attributes.choose_how_you_work}
					/>

					{/* <div className={`g-page_structure items-center gap-8 bg-[var(--section-bg-lightred)]`}>
						<div className="pt-9  md:pt-16 pb-10 md:pb-20">
							<FadeInUpContainer>
								<div className="main-content  m-auto flex-1 ">
									<h2 className="g__section-heading text-center px-3 md:px-0 ">
										{customMarketing && customMarketing.data.attributes.custom_marketing_plan.title_first_line} <br className="hidden xl:block" />
										{customMarketing && customMarketing.data.attributes.custom_marketing_plan.title_second_line}
									</h2>
									<p className="g__section-description text-center">
										{customMarketing && customMarketing.data.attributes.custom_marketing_plan.description}
									</p>
								</div>
								<div className="pt-10 md:pt-16 flex justify-center ">
									<Image
										src={customMarketing && customMarketing.data.attributes.custom_marketing_plan.team_image.data.attributes.url}
										alt="escape-room-marketer-marketing plan"
										width={300}
										height={300}
										className="md:w-[381px] md:h-[350px]"
									/>
								</div>
							</FadeInUpContainer>
							<DescriptiveCta
								ctaSlug={customMarketing && customMarketing.data.attributes.custom_marketing_plan.descriptive_cta_slug}
								cta={customMarketing && customMarketing.data.attributes.custom_marketing_plan.descriptive_cta}
							/>
						</div>
					</div> */}

					<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center  "></div>
					<div className="big_goals g-page_structure relative bg-[var(--section-bg-lightred)]">
						<div className="pt-9 md:pt-16 pb-10 md:pb-20">
							<FadeInUpContainer>
								<div className="main-content  m-auto">
									<h2 className="g__section-heading text-center ">
										{teamResponse && teamResponse.data.attributes.your_team_response.title_first_line} <br className="hidden xl:block" />
										{teamResponse && teamResponse.data.attributes.your_team_response.title_second_line}
									</h2>
									<p className="g__section-description text-center">{teamResponse && teamResponse.data.attributes.your_team_response.description}</p>
								</div>
							</FadeInUpContainer>
							<div className="q-card font-openSans max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-none 2xl:w-[1000px] mx-auto mt-10 md:mt-16 grid gap-x-10 lg:gap-x-20 gap-y-6 md:gap-y-12 md:grid-cols-2">
								<div className=" md:col-span-2 ">
									<FadeInUpContainer>
										<div className="px-2.5 md:px-10 py-7 md:py-9 rounded bg-white shadow  grid md:grid-cols-2 gap-5 items-center justify-items-center relative">
											<div className=" text-center ">
												<h4 className="font-bold text-xl md:text-[22px] text-[#010101]">
													{teamResponse && teamResponse.data.attributes.your_team_response.long_first_card.card_title}
												</h4>
												<p
													className="text-[#222] text-[16px] md:text-lg mt-2"
													dangerouslySetInnerHTML={{
														__html: teamResponse && teamResponse.data.attributes.your_team_response.long_first_card.short_description,
													}}
												/>
												{}
											</div>
											<Image
												src={teamResponse && teamResponse.data.attributes.your_team_response.long_first_card.image.data.attributes.url}
												alt=""
												height={100}
												width={100}
												className="w-[325px] h-[220px] mt-6 md:mt-6"
											/>
											{/* <Image
										src="/most_populer.svg"
										alt=""
										height={100}
										width={100}
										className="w-[90px] lg:w-[120px] xl:w-[140px] absolute top-0 md:-top-4 -left-[18px] md:-left-10 -rotate-45"
									/> */}
										</div>
									</FadeInUpContainer>
								</div>
								{teamResponse &&
									teamResponse.data.attributes.your_team_response.others_card.map((data) => (
										<FadeInUpContainer key={data.id}>
											<div className="px-2.5 md:px-10 pt-10 pb-8  rounded bg-white shadow" key={data.id}>
												<h4 className="font-bold text-xl md:text-[22px] text-[#010101] text-center">{data.card_title}</h4>
												<p className="text-[#222] text-[16px] md:text-lg pt-2 text-center">{data.short_description}</p>
												<Image src={data.image.data.attributes.url} height={100} width={100} alt="" className="mt-6 mx-auto w-[180px] h-[180px]" />
											</div>
										</FadeInUpContainer>
									))}
							</div>
							<DescriptiveCta
								ctaSlug={teamResponse && teamResponse.data.attributes.your_team_response.descriptive_cta_slug}
								cta={teamResponse && teamResponse.data.attributes.your_team_response.descriptive_cta}
							/>
						</div>
						{/* <HiArrowNarrowRight className="text-3xl font-bold group-hover:translate-x-1 mt-2" /> */}
					</div>
					<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
					<WiningStrategy winingStrategy={winingStrategy} bodyColor="bg-[var(--section-bg-lightblue)]" />
					{/* <div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center  "></div> */}

					<FooterTopCta footerTopCta={footerTopCta && footerTopCta.data.attributes.footer_top_cta} pageBreakBlue={true} />
				</main>
			</>
		);
}

export async function getStaticProps() {
	const apiUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/+$/, "");
	if (!apiUrl) {
		throw new Error("NEXT_PUBLIC_API_URL must be configured to generate the homepage");
	}

	try {
		const heroData = await fetchHomePageSection(apiUrl, "populate[hero][populate]=*", "hero");
		const worldMapData = await fetchHomePageSection(apiUrl, "populate[world_map][populate]=*", "world_map");
		const payperclickData = await fetchHomePageSection(apiUrl, "populate[cro_opportunities][populate]=*", "cro_opportunities");
		const analyticsData = await fetchHomePageSection(apiUrl, "populate[google_analytics][populate]=*", "google_analytics");
		const otherServicesData = await fetchHomePageSection(
			apiUrl,
			"populate[0]=other_services&populate[1]=other_services.other_services_card&populate[2]=other_services.other_services_card.card_image",
			"other_services"
		);
		const ourClients = await fetchHomePageSection(apiUrl, "populate[our_clients][populate]=*", "our_clients");
		const onlyErmAgency = await fetchHomePageSection(
			apiUrl,
			"populate[0]=only_erm_agency&populate[1]=only_erm_agency.only_erm_agency_card&populate[2]=only_erm_agency.only_erm_agency_card.image",
			"only_erm_agency"
		);
		const keyServeice = await fetchHomePageSection(
			apiUrl,
			"populate[0]=choose_how_you_work&populate[1]=choose_how_you_work.others_card&populate[2]=choose_how_you_work.long_first_card&populate[3]=choose_how_you_work.long_first_card.image&populate[4]=choose_how_you_work.others_card.image",
			"choose_how_you_work"
		);
		const teamResponse = await fetchHomePageSection(
			apiUrl,
			"populate[0]=your_team_response&populate[1]=your_team_response.long_first_card&populate[2]=your_team_response.others_card&populate[3]=your_team_response.long_first_card.image&populate[4]=your_team_response.others_card.image",
			"your_team_response"
		);
		const winingStrategy = await fetchHomePageSection(apiUrl, "populate[wining_strategy][populate]=*", "wining_strategy");
		const testimonialCarousel = await fetchHomePageSection(
			apiUrl,
			"populate[0]=testimonial_carousel&populate[1]=testimonial_carousel.testimonial_data&populate[2]=testimonial_carousel.testimonial_data.persons_image&populate[3]=testimonial_carousel.testimonial_data.company_logo",
			"testimonial_carousel"
		);
		const caseStudySectionData = await fetchHomePageSection(apiUrl, "populate[0]=casestudy_section.case_studies", "casestudy_section");
		const footerTopCta = await fetchHomePageSection(apiUrl, "populate[footer_top_cta][populate]=*", "footer_top_cta");
		const seoData = await fetchHomePageSection(apiUrl, "populate[seo][populate]=*", "seo");
		const caseStudyCardResponse = await fetch(`${apiUrl}/api/case-studies?fields=id`);
		if (!caseStudyCardResponse.ok) {
			throw new Error(`CMS request for homepage case study cards failed with status ${caseStudyCardResponse.status}`);
		}
		const caseStudyCard = await caseStudyCardResponse.json();
		if (!Array.isArray(caseStudyCard?.data) || !caseStudyCard?.meta?.pagination) {
			throw new Error("CMS response is missing homepage case study card data");
		}

		return {
			props: {
				heroData,
				worldMapData,
				payperclickData,
				analyticsData,
				otherServicesData,
				ourClients,
				onlyErmAgency,
				keyServeice,
				teamResponse,
				winingStrategy,
				testimonialCarousel,
				footerTopCta,
				seoData,
				caseStudySectionData,
				caseStudyCard,
			},
			revalidate: 60,
		};
	} catch (error) {
		console.error("Failed to generate homepage data", error);
		throw error;
	}
}
