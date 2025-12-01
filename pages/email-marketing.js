/* eslint-disable react/no-unescaped-entities */
import CaseStudySection from "@/components/CaseStudySection";
import DedicatedTeam from "@/components/DedicatedTeam";
import FooterTopCta from "@/components/FooterTopCta";
import KeyServeice from "@/components/KeyServeice";
import ReportGraph from "@/components/ReportGraph";
import ConversionMarketing from "@/components/service/ConversionMarketing";
import FaqSection from "@/components/service/FaqSection";
import Hero from "@/components/service/Hero";
import ListOfServeice from "@/components/service/ListOfServeice";
import MarketingCompanies from "@/components/service/MarketingCompanies";
import MarketingPlanCta from "@/components/service/MarketingPlanCta";
import OurWork from "@/components/service/OurWork";
import Payperclick from "@/components/service/Payperclick";
import CardContent from "@/components/service/seo_convertion_specific/CardContent";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import Error from "next/error";
import TestimonialCarousel from "@/components/TestimonialCarousel";

function EmailMarketingAgency({ heroData, ourWork, handlingEmailData, emailDomainPriorityData, seoData, error }) {
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
		const APIurl = `${process.env.NEXT_PUBLIC_API_URL}/api/email-marketing`;

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
					caseStudyCard={caseStudyCard && caseStudyCard}
					bodyColor="bg-[var(--section-bg-lightblue)]"
					cardColor="bg-[#ffffff]"
					isEmail="true"
					slug="emailMarketingAgency"
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center  "></div>
				<ListOfServeice
					listOfServeiceData={listOfServeiceData && listOfServeiceData.data.attributes.list_of_service}
					bodyColor="bg-[var(--section-bg-lightred)]"
					mobileImage="emailMarketingAgency/escaperoom-marketer-email-marketing-agency-list.svg"
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
				<CaseStudySection caseStudyData={caseStudySectionData && caseStudySectionData.data.attributes.casestudy_section} />
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center  "></div>

				<div className="two_flexitem g-page_structure bg-[var(--section-bg-lightred)]">
					<h1 className="g__section-heading pt-9 md:pt-16  text-center mx-auto font-extrabold ">
						{handlingEmailData && handlingEmailData.data.attributes.customer_handling_email.title_first_line} <br className="hidden xl:block" />
						{handlingEmailData && handlingEmailData.data.attributes.customer_handling_email.title_second_line}
					</h1>
					<p className="g__section-description text-center ">
						{handlingEmailData && handlingEmailData.data.attributes.customer_handling_email.description}
					</p>
					<div className="flex justify-center gap-10 max-w-[400px] md:max-w-[1100px] mx-auto mt-16 pb-10 md:pb-20 flex-wrap md:flex-nowrap">
						<div className="shadow py-10 px-4  bg-white rounded">
							<h3 className="text-center text-xl md:text-[22px] text-[#010101] font-bold mb-2">
								{handlingEmailData && handlingEmailData.data.attributes.customer_handling_email.card_title1}
							</h3>
							<p className="text-center text-lg mb-12 ">
								{handlingEmailData && handlingEmailData.data.attributes.customer_handling_email.card_description1}
								{/* <br className="email-card-br-tag" /> */}
							</p>
							<div className="px-4 md:px-16">
								<Image
									src="/serveice/emailMarketingAgency/tlc-email-framework-escape-room-marketer.svg"
									alt=""
									width={300}
									height={100}
									className="h-[160px] w-[232px] mx-auto"
								/>
							</div>
						</div>
						<div className="shadow py-10 px-4  bg-white rounded">
							<h3 className="text-center text-xl md:text-[22px] text-[#010101] font-bold mb-2">
								{handlingEmailData && handlingEmailData.data.attributes.customer_handling_email.card_title2}
							</h3>
							<p className="text-center text-lg mb-12">
								{handlingEmailData && handlingEmailData.data.attributes.customer_handling_email.card_description2}
								{/* <br className="email-card-br-tag" /> */}
							</p>
							<div className="px-4 md:px-16">
								<Image
									src="/serveice/emailMarketingAgency/b2b-email-escape-room-marketer.svg"
									alt=""
									width={300}
									height={100}
									className="h-[160px] w-[232px] mx-auto"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
				<div className="two_flexitem g-page_structure bg-[var(--section-bg-lightblue)]">
					<h1 className="g__section-heading pt-9 md:pt-16   text-center mx-auto font-extrabold">
						{emailDomainPriorityData && emailDomainPriorityData.data.attributes.email_domain_priority.title_first_line}
						<br className="hidden xl:block" />
						{emailDomainPriorityData && emailDomainPriorityData.data.attributes.email_domain_priority.title_second_line}
					</h1>
					<p className="g__section-description text-center ">
						{emailDomainPriorityData && emailDomainPriorityData.data.attributes.email_domain_priority.description}
					</p>
					<div className="flex justify-center gap-14 mt-16 pb-14 md:pb-24 flex-wrap md:flex-nowrap">
						<div className="shadow py-10 px-5  bg-white rounded">
							<h3 className="text-center text-xl md:text-[22px] text-[#010101] font-bold mb-2">
								{emailDomainPriorityData && emailDomainPriorityData.data.attributes.email_domain_priority.card_title}
							</h3>
							<p className="text-center text-lg mb-10 ">
								{emailDomainPriorityData && emailDomainPriorityData.data.attributes.email_domain_priority.card_description}
							</p>
							<div className="px-4 md:px-16">
								<Image
									src="/serveice/emailMarketingAgency/take-care-of-everything-escape-room-marketer.svg"
									alt=""
									width={400}
									height={100}
									className="h-[200px] w-[395px]"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center  "></div>
				<KeyServeice
					bodyColor="bg-[var(--section-bg-lightred)]"
					cardColor="bg-[#ffffff]"
					keyServeiceData={keyServeice && keyServeice.data.attributes.choose_how_you_work}
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
				<MarketingPlanCta
					bodyColor="bg-[var(--section-bg-lightblue)]"
					marketingData={sectionBreakCtaData && sectionBreakCtaData.data.attributes.section_break_cta}
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center  "></div>
				<ConversionMarketing
					bodyColor="bg-[var(--section-bg-lightred)]"
					cardColor="bg-[#ffffff]"
					otherServices={otherServicesData && otherServicesData.data.attributes.other_services}
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
				<DedicatedTeam
					bodyColor="bg-[var(--section-bg-lightblue)]"
					dedicatedTeam={dedicatedTeamData && dedicatedTeamData.data.attributes.dedicated_team}
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center  "></div>
				<ReportGraph bodyColor="bg-[var(--section-bg-lightred)]" reportGraph={reportGraph && reportGraph.data.attributes.report_graph} />
				{/* <div className="break_line image bg-[url('/test_break.svg')] h-[90px] w-full bg-[length:2500px_90px] absolute z-10 -mt-[0px]  bg-center "></div> */}
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
				<FaqSection bodyColor="bg-[var(--section-bg-lightblue)]" faqSectionData={faqData && faqData.data.attributes.faq_section} />
				<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center rotate-180"></div> 
				 <TestimonialCarousel
					testimonialData={testimonialCarousel && testimonialCarousel.data.attributes.testimonial_carousel}
					bodyColor="bg-[var(--section-bg-lightred)]"
				/>
				<FooterTopCta   footerTopCta={footerTopCta && footerTopCta.data.attributes.footer_top_cta} />
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

export async function getStaticProps() {
	// let URL = "https://escaperoommarketer.com";
	let newUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/email-marketing`;
	try {
		let newData = await fetch(`${newUrl}?populate[hero][populate]=*`);
		let heroData = await newData.json();

		let ourWorkData = await fetch(
			`${newUrl}?populate[0]=usp_section&populate[1]=usp_section.card_content&populate[2]=usp_section.card_content.card_image`
		);
		let ourWork = await ourWorkData.json();

		let handlingEmail = await fetch(`${newUrl}?populate[customer_handling_email][populate]=*`);
		let handlingEmailData = await handlingEmail.json();

		let emailDomainPriority = await fetch(`${newUrl}?populate[email_domain_priority][populate]=*`);
		let emailDomainPriorityData = await emailDomainPriority.json();

		let seo = await fetch(`${newUrl}?populate[seo][populate]=*`);
		let seoData = await seo.json();

		// let cardContent = await fetch(`${URL}/api/cardcontent?slug=emailMarketingAgency`);
		// let cardContentData = await cardContent.json();

		// let data = await fetch(`${URL}/api/companies?slug=ppcAgency`);
		// let companiesData = await data.json();

		// let keyserveicedata = await fetch(`${URL}/api/keyserveice?slug=emailMarketingAgency`);
		// let keyServeice = await keyserveicedata.json();

		// let faqSectiondata = await fetch(`${URL}/api/faqsection?slug=emailMarketingAgency`);
		// let faqData = await faqSectiondata.json();

		// let ourWorkData = await fetch(`${URL}/api/ourwork?slug=emailMarketingAgency`);
		// let ourWork = await ourWorkData.json();

		// let listOfServeice = await fetch(`${URL}/api/listofserveice?slug=emailMarketingAgency`);
		// let listOfServeiceData = await listOfServeice.json();

		// let caseData = await fetch(`${URL}/api/casestudycard`);
		// let cardData = await caseData.json();
		return {
			props: { heroData, ourWork, handlingEmailData, emailDomainPriorityData, seoData }, // will be passed to the page component as props
			revalidate: 60,
		};
	} catch (error) {
		return { props: { error: { ok: false, reason: "some error description for your own consumption, not for client side" } } };
	}
}

export default EmailMarketingAgency;
