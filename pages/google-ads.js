import Head from "next/head";
import DedicatedTeam from "@/components/DedicatedTeam";
import KeyServeice from "@/components/KeyServeice";
import ConversionMarketing from "@/components/service/ConversionMarketing";
import Hero from "@/components/service/Hero";
import ListOfServeice from "@/components/service/ListOfServeice";
import MarketingCompanies from "@/components/service/MarketingCompanies";
import MarketingPlanCta from "@/components/service/MarketingPlanCta";
import OthersSite from "@/components/service/OthersSite";
import OurWork from "@/components/service/OurWork";
import Payperclick from "@/components/service/Payperclick";
import React, { useEffect, useState } from "react";
import FaqSection from "@/components/service/FaqSection";
import FooterTopCta from "@/components/FooterTopCta";
import ReportGraph from "@/components/ReportGraph";
import CaseStudySection from "@/components/CaseStudySection";
import TestimonialCarousel from "@/components/TestimonialCarousel";

import Error from "next/error";
import Image from "next/image";

function GoogleAdsAgency({
	heroData,
	ourWork,
	seoData,
	// ourWork,
	// payperclickData,
	// caseStudySectionData,
	// listOfServeiceData,
	// keyServeice,
	// sectionBreakCtaData,
	// otherServicesData,
	// dedicatedTeamData,
	// faqData,
	error,
}) {
	// const [ourWork, setOurWork] = useState();
	const [payperclickData, setPayperclickData] = useState();
	const [caseStudySectionData, setCaseStudySectionData] = useState();
	const [caseStudyCard, setCaseStudyCard] = useState();
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
	// const [caseCard, setCaseCard] = useState(cardData);

	useEffect(() => {
		const APIurl = `${process.env.NEXT_PUBLIC_API_URL}/api/google-ads-agency`;
		const url = `${process.env.NEXT_PUBLIC_API_URL}`;

		//fetch data for OurWork section
		// fetch(`${APIurl}?populate[0]=usp_section&populate[1]=usp_section.card_content&populate[2]=usp_section.card_content.card_image`)
		// 	.then((res) => res.json())
		// 	.then((data) => setOurWork(data));

		//fetch data for Payperclick section
		fetch(`${APIurl}?populate[cro_opportunities][populate]=*`)
			.then((res) => res.json())
			.then((data) => setPayperclickData(data));

		//fetch data for CaseStudy  section
		fetch(`${APIurl}?populate[casestudy_section][populate]=*`)
			.then((res) => res.json())
			.then((data) => setCaseStudySectionData(data));
		fetch(`${url}/api/case-studies?fields=id`)
			.then((res) => res.json())
			.then((data) => setCaseStudyCard(data));

		//fetch data for listOfServeice section
		fetch(`${APIurl}?populate[list_of_service][populate]=*`)
			.then((res) => res.json())
			.then((data) => setlistOfServeiceData(data));

		//fetch data for keyService section
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

	// console.log(caseStudyCard);

	// console.log(otherServicesData && otherServicesData.data.attributes.other_services);
	try {
		return (
			<div>
				<Head>
					<title>{seoData && seoData.data.attributes.seo?.metaTitle}</title>
					<meta name="description" content={`${seoData && seoData.data.attributes.seo?.metaDescription}`} />
					<meta name="keywords" content={`${seoData && seoData.data.attributes.seo?.keywords}`} />
					<meta name="robots" content={`${seoData && seoData.data.attributes.seo?.metaRobots}`} />
					<meta property="og:image:url" content={`${seoData && seoData.data.attributes.seo?.metaImage.data?.attributes.url}`} />
					<meta property="og:image:secure_url" content={`${seoData && seoData.data.attributes.seo?.metaImage.data?.attributes.url}`} />
					<meta property="og:image:type" content="image/jpeg" />
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
				<div className="break_line image bg-[url('/paper-cropped_blue_green.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center  "></div>
				<Payperclick
					bodyColor="bg-[var(--section-bg-lightgreen)]"
					payperclickData={payperclickData && payperclickData.data.attributes.cro_opportunities}
				/>
				<div className="break_line image bg-[url('/paper-cropped_red_green.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180  "></div>
				<ListOfServeice
					listOfServeiceData={listOfServeiceData && listOfServeiceData.data.attributes.list_of_service}
					bodyColor="bg-[var(--section-bg-lightred)]"
					mobileImage="googleAdsAgency/escaperoom-marketer-google-ads-agency-list.svg"
				/>
				<div className="break_line image bg-[url('/paper-cropped_red_green.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center  "></div>
				<CaseStudySection
					caseStudyData={caseStudySectionData && caseStudySectionData.data.attributes.casestudy_section}
					caseStudyCard={caseStudyCard}
					bodyColor="bg-[var(--section-bg-lightgreen)]"
				/>
				<div className="break_line image bg-[url('/paper-cropped_blue_green.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
				<TestimonialCarousel
					testimonialData={testimonialCarousel && testimonialCarousel.data.attributes.testimonial_carousel}
					bodyColor="bg-[var(--section-bg-lightblue)]"
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center"></div>
				<KeyServeice
					bodyColor="bg-[var(--section-bg-lightred)]"
					cardColor="bg-[#ffffff]"
					keyServeiceData={keyServeice && keyServeice.data.attributes.choose_how_you_work}
				/>

				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
				<ConversionMarketing
					bodyColor="bg-[var(--section-bg-lightblue)]"
					cardColor="bg-white"
					otherServices={otherServicesData && otherServicesData.data.attributes.other_services}
				/>
				<div className="break_line image bg-[url('/paper-cropped_blue_green.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center  "></div>
				<FaqSection bodyColor="bg-[var(--section-bg-lightgreen)]" faqSectionData={faqData && faqData.data.attributes.faq_section} />
				<FooterTopCta breakGreen={true} footerTopCta={footerTopCta && footerTopCta.data.attributes.footer_top_cta} />
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

export async function getStaticProps() {
	let newUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/google-ads-agency`;
	// console.log(context);
	try {
		let newData = await fetch(`${newUrl}?populate[hero][populate]=*`);
		let heroData = await newData.json();

		let ourWorkData = await fetch(
			`${newUrl}?populate[0]=usp_section&populate[1]=usp_section.card_content&populate[2]=usp_section.card_content.card_image`
		);
		let ourWork = await ourWorkData.json();

		let seo = await fetch(`${newUrl}?populate[seo][populate]=*`);
		let seoData = await seo.json();
		// let Payperclick = await fetch(`${newUrl}?populate[cro_opportunities][populate]=*`);
		// let payperclickData = await Payperclick.json();
		// let caseStudySection = await fetch(`${newUrl}?populate[casestudy_section][populate]=*`);
		// let caseStudySectionData = await caseStudySection.json();
		// let listOfServeice = await fetch(`${newUrl}?populate[list_of_service][populate]=*`);
		// let listOfServeiceData = await listOfServeice.json();
		// let keyserveicedata = await fetch(
		// 	`${newUrl}?populate[0]=choose_how_you_work&populate[1]=choose_how_you_work.others_card&populate[2]=choose_how_you_work.long_first_card&populate[3]=choose_how_you_work.long_first_card.image&populate[4]=choose_how_you_work.others_card.image`
		// );
		// let keyServeice = await keyserveicedata.json();
		// let sectionBreakCta = await fetch(`${newUrl}?populate[section_break_cta][populate]=*`);
		// let sectionBreakCtaData = await sectionBreakCta.json();
		// let otherServices = await fetch(
		// 	`${newUrl}?populate[0]=other_services&populate[1]=other_services.other_services_card&populate[2]=other_services.other_services_card.card_image`
		// );
		// let otherServicesData = await otherServices.json();
		// let dedicatedTeam = await fetch(`${newUrl}?populate[dedicated_team][populate]=*`);
		// let dedicatedTeamData = await dedicatedTeam.json();
		// let data = await fetch(`${URL}/api/companies?slug=ppcAgency`);
		// let companiesData = await data.json();
		// let faqSectiondata = await fetch(`${newUrl}?populate[faq_section][populate]=*`);
		// let faqData = await faqSectiondata.json();
		return {
			props: {
				heroData,
				ourWork,
				seoData,
				// ourWork,
				// payperclickData,
				// caseStudySectionData,
				// companiesData,
				// listOfServeiceData,
				// keyServeice,
				// sectionBreakCtaData,
				// otherServicesData,
				// dedicatedTeamData,
				// faqData,
			}, // will be passed to the page component as props
			// error: { code: errorCode, message: "Error!" },
			revalidate: 60,
		};
	} catch (error) {
		return { props: { error: { ok: false, reason: "some error description for your own consumption, not for client side" } } };
	}
}

export default GoogleAdsAgency;
