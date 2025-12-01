import CaseStudySection from "@/components/CaseStudySection";
import FooterTopCta from "@/components/FooterTopCta";
import TeamHero from "@/components/others/TeamHero";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Lottie from "lottie-react";
import aboutAnimation from "../public/about/About-Page.json";
import Script from "next/script";
import Error from "next/error";

function About({ heroData, portFolioData, whyChooseUsData, caseStudySectionData, footerTopCta, seoData, error }) {
	// const [caseCard, setCaseCard] = useState(props.cardData);



	if (error) {
		return <Error statusCode={error.statusCode} title={error.message} />;
	}
	return (
		<div>
			{" "}
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
			<TeamHero
				heroData={heroData && heroData.data.attributes.hero}
				bodyColor="bg-[var(--section-bg-lightred)]"
				imgFirst="/about/Our-Works-Page-Left-Side-01.svg"
				imgSecond="/about/Our-Works-Page-Right-Side-01.svg"
				// imgThird="/about/Our-Works-Page-Right-Side-01.svg"
			/>
			<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
			<div className="g-page_structure  bg-[var(--section-bg-lightblue)]">
				<h2 className="g__section-heading pt-14 md:pt-20   text-center mx-auto font-extrabold">
					{portFolioData && portFolioData.data.attributes.portfolio.title_first_line} <br className="hidden xl:block" />{" "}
					{portFolioData && portFolioData.data.attributes.portfolio.title_second_line}
				</h2>
				<p className="g__section-description text-center mx-auto">{portFolioData && portFolioData.data.attributes.portfolio.description}</p>

				<div className="font-openSans max-w-md md:max-w-none  lg:max-w-screen-xl md:px-10 mx-auto flex flex-col pt-10 md:pt-16 pb-14 md:pb-24 gap-20">
					{portFolioData &&
						portFolioData.data?.attributes.portfolio.portfolio_year.map((item, i) => {
							return (
								<div
									className={`${i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} flex flex-col-reverse  md:items-center gap-8 md:gap-16`}
									key={i}
								>
									<div className="flex-2 md:flex-1 my-auto ">
										<p className="text-[#FF492C] font-semibold mb-2 xl:text-xl">{item?.title}</p>
										<p className="text-lg xl:text-[22px]">{item?.description}</p>
									</div>
									<div className="flex-1 ">
										<Image src={item?.image.data?.attributes.url} height={200} width={350} alt="" className="  w-full" />
									</div>
								</div>
							);
						})}
				</div>
			</div>
			<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center  "></div>
			<div className="g-page_structure bg-[var(--section-bg-lightred)]">
				<h2 className="g__section-heading text-center mx-auto pt-9 md:pt-16">
					{whyChooseUsData && whyChooseUsData.data.attributes.why_choose_us.title_first_line} <br className="hidden xl:block" />{" "}
					{whyChooseUsData && whyChooseUsData.data.attributes.why_choose_us.title_second_line}
				</h2>
				{/* <Image src="/team/team_party.svg" alt="" height={100} width={900} className="mx-auto py-20" /> */}
				<Lottie loop={true} animationData={aboutAnimation} className="py-20 max-w-[1100px] mx-auto" />

				<div className="font-openSans max-w-sm md:max-w-6xl mx-auto flex flex-col md:flex-row gap-5 lg:gap-10 ">
					<div className="text-center rounded-lg shadow bg-[#F4FFE8] px-4 md:px-6 py-6">
						<h4 className="text-[22px] font-extrabold mb-3">{whyChooseUsData && whyChooseUsData.data.attributes.why_choose_us.card_one_title}</h4>
						<p className="md:text-lg ">{whyChooseUsData && whyChooseUsData.data.attributes.why_choose_us.card_one_description}</p>
					</div>
					<div className="text-center rounded-lg shadow bg-[#FFF4E5] px-4 lg:px-6 py-6">
						<h4 className="text-[22px] font-extrabold mb-3">{whyChooseUsData && whyChooseUsData.data.attributes.why_choose_us.card_two_title}</h4>
						<p className="md:text-lg ">{whyChooseUsData && whyChooseUsData.data.attributes.why_choose_us.card_two_description}</p>
					</div>
					<div className="text-center rounded-lg shadow bg-[#E8FAFF] px-4 lg:px-6 py-6">
						<h4 className="text-[22px] font-extrabold mb-3">{whyChooseUsData && whyChooseUsData.data.attributes.why_choose_us.card_three_title}</h4>
						<p className="md:text-lg ">{whyChooseUsData && whyChooseUsData.data.attributes.why_choose_us.card_three_description}</p>
					</div>
				</div>
				<div className="max-w-sm md:max-w-[760px] mx-auto flex flex-col md:flex-row gap-5 lg:gap-10 pt-5 lg:pt-10 pb-10 md:pb-20">
					<div className="text-center rounded-lg shadow bg-[#E8FAFF] px-4 md:px-6 py-6">
						<h4 className="text-[22px] font-extrabold mb-3">{whyChooseUsData && whyChooseUsData.data.attributes.why_choose_us.card_four_title}</h4>
						<p className="md:text-lg ">{whyChooseUsData && whyChooseUsData.data.attributes.why_choose_us.card_four_description}</p>
					</div>
					<div className="text-center rounded-lg shadow bg-[#F4FFE8] px-4 lg:px-6 py-6">
						<h4 className="text-[22px] font-extrabold mb-3">{whyChooseUsData && whyChooseUsData.data.attributes.why_choose_us.card_five_title}</h4>
						<p className="md:text-lg ">{whyChooseUsData && whyChooseUsData.data.attributes.why_choose_us.card_five_description}</p>
					</div>
				</div>
			</div>
			<FooterTopCta footerTopCta={footerTopCta && footerTopCta.data.attributes.footer_top_cta} />
		</div>
	);
}

export async function getStaticProps(context) {
	let URL = `${process.env.NEXT_PUBLIC_API_URL}`;
	try {
		// Fetch data from external API
		let data = await fetch(`${URL}/api/about?populate[hero][populate]=*`);
		let heroData = await data.json();

		let portFolio = await fetch(`${URL}/api/about?populate[0]=portfolio.portfolio_year.image`);
		let portFolioData = await portFolio.json();

		let whyChooseUs = await fetch(`${URL}/api/about?populate[why_choose_us][populate]=*`);
		let whyChooseUsData = await whyChooseUs.json();

		let caseStudySection = await fetch(`${URL}/api/about?populate[casestudy_section][populate]=*`);
		let caseStudySectionData = await caseStudySection.json();

		let footerData = await fetch(`${URL}/api/about?populate[footer_top_cta][populate]=*`);
		let footerTopCta = await footerData.json();

		let seo = await fetch(`${URL}/api/about?populate[seo][populate]=*`);
		let seoData = await seo.json();
		// Pass data to the page via props
		return {
			props: { heroData, portFolioData, whyChooseUsData, caseStudySectionData, footerTopCta, seoData },
			revalidate: 60,
		};
	} catch (error) {
		return { props: { error: { ok: false, reason: "some error description for your own consumption, not for client side" } } };
	}
}

export default About;
