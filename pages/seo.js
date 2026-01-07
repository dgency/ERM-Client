import CaseStudySection from "@/components/CaseStudySection";
import DedicatedTeam from "@/components/DedicatedTeam";
import FooterTopCta from "@/components/FooterTopCta";
import KeyServeice from "@/components/KeyServeice";
import ReportGraph from "@/components/ReportGraph";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ConversionMarketing from "@/components/service/ConversionMarketing";
import FaqSection from "@/components/service/FaqSection";
import Hero from "@/components/service/Hero";
import ListOfServeice from "@/components/service/ListOfServeice";
import MarketingCompanies from "@/components/service/MarketingCompanies";
import MarketingPlanCta from "@/components/service/MarketingPlanCta";
import OurWork from "@/components/service/OurWork";
import Payperclick from "@/components/service/Payperclick";
import CardContent from "@/components/service/seo_convertion_specific/CardContent";
import SeoHandle from "@/components/service/seo_convertion_specific/SeoHandle";
import Head from "next/head";
import React, { useEffect, useState } from "react";

import Error from "next/error";
import Image from "next/image";

function SeoAgency({ heroData, companiesData, ourWork, seoData, fineWebsiteData, error }) {
	// const [ourWork, setOurWork] = useState();
	const [payperclickData, setPayperclickData] = useState();
	const [caseStudySectionData, setCaseStudySectionData] = useState();
	const [caseStudyCard, setCaseStudyCard] = useState();
	const [cardContentData, setCardContentData] = useState();
	// const [companies, setCompanies] = useState(companiesData);
	const [listOfServeiceData, setlistOfServeiceData] = useState();
	const [keyServeice, setKeyServeice] = useState();
	const [sectionBreakCtaData, setSectionBreakCtaData] = useState();
	const [otherServicesData, setOtherServicesData] = useState();
	const [dedicatedTeamData, setDedicatedTeamData] = useState();
	const [reportGraph, setReportGraph] = useState();
	const [faqData, setFaqData] = useState();
	const [footerTopCta, setFooterTopCta] = useState();
	const [testimonialCarousel, setTestimonialCarousel] = useState();

	useEffect(() => {
		const APIurl = `${process.env.NEXT_PUBLIC_API_URL}/api/search-engine-optimization`;

		//fetch data for OurWork section
		// fetch(`${APIurl}?populate[0]=usp_section&populate[1]=usp_section.card_content&populate[2]=usp_section.card_content.card_image`)
		// 	.then((res) => res.json())
		// 	.then((data) => setOurWork(data));

		//fetch data for Payperclick section
		fetch(`${APIurl}?populate[cro_opportunities][populate]=*`)
			.then((res) => res.json())
			.then((data) => setPayperclickData(data));

		//fetch data for cardcontent section
		fetch(`${APIurl}?populate[content_types][populate]=*`)
			.then((res) => res.json())
			.then((data) => setCardContentData(data));

		//fetch data for CaseStudy  section
		fetch(`${APIurl}?populate[casestudy_section][populate]=*`)
			.then((res) => res.json())
			.then((data) => setCaseStudySectionData(data));
		fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/case-studies?populate=*`)
			.then((res) => res.json())
			.then((data) => setCaseStudyCard(data));

		//fetch data for listOfServeice section
		fetch(`${APIurl}?populate[list_of_service][populate]=*`)
			.then((res) => res.json())
			.then((data) => setlistOfServeiceData(data));

		//fetch data for Payperclick section
		fetch(
			`${APIurl}?populate[0]=choose_how_you_work&populate[1]=choose_how_you_work.others_card&populate[2]=choose_how_you_work.long_first_card&populate[3]=choose_how_you_work.long_first_card.image&populate[4]=choose_how_you_work.others_card.image`
		)
			.then((res) => res.json())
			.then((data) => setKeyServeice(data));

		//fetch data for SectionBreakCta section
		fetch(`${APIurl}?populate[section_break_cta][populate]=*`)
			.then((res) => res.json())
			.then((data) => setSectionBreakCtaData(data));

		//fetch data for OtherServices section
		fetch(
			`${APIurl}?populate[0]=other_services&populate[1]=other_services.other_services_card&populate[2]=other_services.other_services_card.card_image`
		)
			.then((res) => res.json())
			.then((data) => setOtherServicesData(data));

		//fetch data for dedicatedTeam section
		fetch(`${APIurl}?populate[dedicated_team][populate]=*`)
			.then((res) => res.json())
			.then((data) => setDedicatedTeamData(data));

		//fetch data for report section
		fetch(`${APIurl}?populate[report_graph][populate]=*`)
			.then((res) => res.json())
			.then((data) => setReportGraph(data));

		//fetch data for faq section
		fetch(`${APIurl}?populate[faq_section][populate]=*`)
			.then((res) => res.json())
			.then((data) => setFaqData(data));

		//fetch data for testimonial section
		fetch(
			`${APIurl}?populate[0]=testimonial_carousel&populate[1]=testimonial_carousel.testimonial_data&populate[2]=testimonial_carousel.testimonial_data.persons_image&populate[3]=testimonial_carousel.testimonial_data.company_logo`
		)
			.then((res) => res.json())
			.then((data) => setTestimonialCarousel(data));

		//fetch data for footerTopCta section
		fetch(`${APIurl}?populate[footer_top_cta][populate]=*`)
			.then((res) => res.json())
			.then((data) => setFooterTopCta(data));
	}, []);

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
				<Hero heroData={heroData && heroData.data.attributes.hero} />
				<OurWork ourWorkData={ourWork && ourWork.data.attributes.usp_section} />
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center  "></div>
				<Payperclick
					bodyColor="bg-[var(--section-bg-lightred)]"
					payperclickData={payperclickData && payperclickData.data.attributes.cro_opportunities}
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
				<CardContent
					cardContentData={cardContentData && cardContentData.data.attributes.content_types}
					bodyColor="bg-[var(--section-bg-lightblue)]"
					cardColor="bg-[#ffffff]"
					slug="seoAgency"
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center  "></div>
				<ListOfServeice
					listOfServeiceData={listOfServeiceData && listOfServeiceData.data.attributes.list_of_service}
					bodyColor="bg-[var(--section-bg-lightred)]"
					mobileImage="seoAgency/escaperoom-marketer-seo-agency-list.svg"
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
				<CaseStudySection
					caseStudyData={caseStudySectionData && caseStudySectionData.data.attributes.casestudy_section}
					caseStudyCard={caseStudyCard && caseStudyCard}
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center  "></div>
				<MarketingCompanies
					companiesData={companiesData}
					fineWebsiteData={fineWebsiteData && fineWebsiteData.data.attributes.fine_tune_website}
					bodyColor="bg-[var(--section-bg-lightred)]"
					titleFirst="Website Technically Fine-tuned"
					titleSecond=" For Optimal SEO Performance"
					pera="Our skills extend beyond content creation. We delve into SEO's technical realm, resolving issues and strengthening your site's performance to ensure your online success."
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
				<KeyServeice
					bodyColor="bg-[var(--section-bg-lightblue)]"
					cardColor="bg-[#ffffff]"
					keyServeiceData={keyServeice && keyServeice.data.attributes.choose_how_you_work}
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center  "></div>
				<MarketingPlanCta
					bodyColor="bg-[var(--section-bg-lightred)]"
					marketingData={sectionBreakCtaData && sectionBreakCtaData.data.attributes.section_break_cta}
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
				<ConversionMarketing
					bodyColor="bg-[var(--section-bg-lightblue)]"
					cardColor="bg-white"
					otherServices={otherServicesData && otherServicesData.data.attributes.other_services}
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center  "></div>
				<DedicatedTeam
					bodyColor="bg-[var(--section-bg-lightred)]"
					dedicatedTeam={dedicatedTeamData && dedicatedTeamData.data.attributes.dedicated_team}
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
				<ReportGraph bodyColor="bg-[var(--section-bg-lightblue)]" reportGraph={reportGraph && reportGraph.data.attributes.report_graph} />
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center  "></div>
				<FaqSection bodyColor="bg-[var(--section-bg-lightred)]" faqSectionData={faqData && faqData.data.attributes.faq_section} />
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
				<TestimonialCarousel
					testimonialData={testimonialCarousel && testimonialCarousel.data.attributes.testimonial_carousel}
					bodyColor="bg-[var(--section-bg-lightblue)]"
				/>
				<FooterTopCta pageBreakBlue={true} footerTopCta={footerTopCta && footerTopCta.data.attributes.footer_top_cta} />
			</div>
		);
	} catch (error) {
		console.log(error);
		return (
			<>
				<div className="md:h-[800px] w-full bg-[#fff7f5] pb-20 md:pb-0 px-[10px]">
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

export async function getStaticProps() {
	let URL = "https://escaperoommarketer.com";
	let newUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/search-engine-optimization`;
	try {
		let newData = await fetch(`${newUrl}?populate[hero][populate]=*`);
		let heroData = await newData.json();

		let ourWorkData = await fetch(
			`${newUrl}?populate[0]=usp_section&populate[1]=usp_section.card_content&populate[2]=usp_section.card_content.card_image`
		);
		let ourWork = await ourWorkData.json();

		let seo = await fetch(`${newUrl}?populate[seo][populate]=*`);
		let seoData = await seo.json();
		// let cardContent = await fetch(`${URL}/api/cardcontent?slug=seoAgency`);
		// let cardContentData = await cardContent.json();

		let fineWebsite = await fetch(`${newUrl}?populate[fine_tune_website][populate]=*`);
		let fineWebsiteData = await fineWebsite.json();

		let data = await fetch(`${URL}/api/companies?slug=ppcAgency`);
		let companiesData = await data.json();

		// let keyserveicedata = await fetch(`${URL}/api/keyserveice?slug=seoAgency`);
		// let keyServeice = await keyserveicedata.json();

		// let faqSectiondata = await fetch(`${URL}/api/faqsection?slug=seoAgency`);
		// let faqData = await faqSectiondata.json();

		// let ourWorkData = await fetch(`${URL}/api/ourwork?slug=seoAgency`);
		// let ourWork = await ourWorkData.json();

		// let listOfServeice = await fetch(`${URL}/api/listofserveice?slug=seoAgency`);
		// let listOfServeiceData = await listOfServeice.json();

		// let caseData = await fetch(`${URL}/api/casestudycard`);
		// let cardData = await caseData.json();
		return {
			props: { heroData, companiesData, ourWork, fineWebsiteData, seoData }, // will be passed to the page component as props
			revalidate: 60,
		};
	} catch (error) {
		return { props: { error: { ok: false, reason: "some error description for your own consumption, not for client side" } } };
	}
}

export default SeoAgency;
