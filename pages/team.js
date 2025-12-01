/* eslint-disable react/no-unescaped-entities */
"use client";
import CaseStudySection from "@/components/CaseStudySection";
import FooterTopCta from "@/components/FooterTopCta";
import TeamHero from "@/components/others/TeamHero";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

import Error from "next/error";

function Team({ heroData, teamMemberData, caseStudySectionData, footerTopCta, seoData, error }) {
	const [storeId, setStoreId] = useState();
	const [isColleps, setIsColleps] = useState(true);

	const handleSpanText = (id) => {
		if (id === storeId) {
			setIsColleps(!isColleps);
		} else {
			setIsColleps(true);
			setStoreId(id);
			// setColleps(message.length);
		}
	};

	// const [caseCard, setCaseCard] = useState(props.cardData);

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
				heroData={heroData && heroData.data.attributes.hero}
				bodyColor="bg-[var(--section-bg-lightred)]"
				imgFirst="/team/Team-Page-Left-Side-01.svg"
				imgSecond="/team/Team-Page-Middle-01.svg"
				imgThird="/team/Team-Page-Right-Side-01.svg"
			/>
			<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>

			<div className="g-page_structure  bg-[var(--section-bg-lightblue)]">
				<h2 className="g__section-heading pt-14 md:pt-20 text-center mx-auto font-extrabold">
					{teamMemberData && teamMemberData.data.attributes.team_member.title_first_line} <br className="hidden xl:block" />{" "}
					{teamMemberData && teamMemberData.data.attributes.team_member.title_second_line}
				</h2>
				<p className="g__section-description text-center mx-auto">{teamMemberData && teamMemberData.data.attributes.team_member.description}</p>
				<div className="">
					<div className=" md:w-full pb-14 md:pb-24">
						{teamMemberData &&
							teamMemberData.data.attributes.team_member.single_member.map((data) => {
								return (
									<div className="font-openSans pt-[240px] sm:pt-[450px] md:pt-16 flex justify-center md:ml-[15px] xl:ml-0" key={data.id}>
										<div className=" md:ml-[330px] max-w-[800px] md:max-w-lg lg:max-w-2xl  bg-[#fff7f5] md:bg-inherit relative shadow md:shadow-inherit rounded-md md:rounded-none px-4 pb-5 md:px-0 md:pb-0">
											<div className="max-w-[800px] md:w-[350px] lg:w-[350px] md:h-full md:absolute -mt-[200px] sm:-mt-[380px] md:-mt-0 md:top-0  md:right-[100%] md:translate-x-[1%] z-10">
												<Image
													src={data.team_member_image.data.attributes.url}
													alt=""
													height={100}
													width={400}
													className="object-cover bg-[#fff7f5] w-full h-full md:shadow-[-4px_3px_4px_0px_rgba(0,0,0,0.05)] md:rounded-l-md"
												/>
											</div>
											<div className=" text-center md:text-start md:pl-8 pt-5 sm:pt-[30px] md:pt-0 ">
												<Image
													src={data.experience_image.data.attributes.url}
													alt=""
													height={100}
													width={60}
													className="hidden md:block absolute right-0 z-10"
												/>
												<h4 className="font-semibold text-[#202020] text-xl lg:text-[30px] md:pb-2">{data.name}</h4>
												<p className="text-[16px] md:pb-1 text-[#7e7e7e]">{data.position}</p>
												{/* <p className="text-gray-400">"Alexis, play..."</p> */}
												<div className="flex justify-center md:justify-start gap-3 pt-1 pb-2 md:pb-3 md:h-[40px]">
													{data.social_link && <Link href={`${data.social_link}`} target="_blank">
														<FaLinkedin className="text-xl" />
													</Link>}
												</div>
											</div>
											<div
												className={`md:shadow-[-2px_3px_4px_0px_rgba(0,0,0,0.05)] md:rounded-md md:bg-[#fff7f5] md:pl-8 md:pr-2 lg:pr-5  flex flex-col justify-around md:h-[325px] py-2  `}
											>
												<p className="team-card_text lg:text-[16px]  mr-2">
													{data.description}
													
													{/* <span
														onClick={() => handleSpanText(data.id)}
														className={`md:hidden text-[#FF492C] ml-2 font-[500] ${
															data.id == storeId ? (isColleps ? "absolute -bottom-0 left-0" : "") : ""
														}`}
													>
														See {`${data.id == storeId ? (isColleps ? "Less" : "More") : "More"}`}
														<span
															className={`material-symbols-outlined absolute mt-[2px] ${data.id == storeId ? (isColleps ? "rotate-180" : "") : ""}`}
														>
															expand_more
														</span>
													</span> */}
												</p>
												<p className={`team-card_text lg:text-[16px] pt-4 md:pt-0 font-[300] `}>{data.italic_short_quote}</p>
												<div className={`flex flex-col md:flex-row gap-4 justify-between pt-4 md:pt-0 pr-6 `}>
													<div className="">
														<h4 className="lg:text-lg font-semibold text-[#202020]">STRENGTHS</h4>
														<div className="team_card text-[14px] ml-4  lg:text-base " dangerouslySetInnerHTML={{ __html: data.strength }} />
													</div>
													<div className="">
														<h4 className="lg:text-lg font-semibold text-[#202020]">WEAKNESSES</h4>
														<div className="team_card text-[14px] ml-4  lg:text-base" dangerouslySetInnerHTML={{ __html: data.weakness }} />
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						{/* <div className="font-openSans pt-[270px] md:pt-20 flex justify-center">
							<div className="md:ml-[330px] max-w-sm md:max-w-lg  lg:max-w-2xl bg-[#FFF4E5] md:bg-inherit relative shadow md:shadow-inherit rounded-md md:rounded-none px-4 pb-5 md:px-0 md:pb-0">
								<Image
									src="/team/team_member.svg"
									alt=""
									height={100}
									width={400}
									className="w-[280px] md:w-[350px] lg:w-[350px] absolute -top-[220px] md:top-0 right-[50%] translate-x-[50%] md:right-[100%] md:translate-x-[7%] "
								/>
								<div className=" text-center md:text-start md:pl-10 pt-[150px] md:pt-0 ">
									<Image src="/team/experience5.svg" alt="" height={100} width={70} className="hidden md:block absolute right-0" />
									<h4 className="font-semibold text-[#FF492C] text-xl lg:text-[30px] md:pb-1">Benjamin Harrison</h4>
									<p className="text-lg md:text-xl md:pb-1">CEO</p>
									<p className="text-gray-400">"Alexis, play..."</p>
									<div className="flex justify-center md:justify-start gap-3 md:pt-1 md:pb-3">
										<FaLinkedin className="text-xl" />
										<FaLinkedin className="text-xl" />
									</div>
								</div>
								<div
									className={`md:shadow-md md:rounded-md md:bg-[#FFF4E5] md:pl-10 md:pr-2 lg:pr-5 flex flex-col justify-around md:h-[325px] ${
										cardColleps2 ? "relative pt-2 pb-7" : "py-2"
									} `}
								>
									<p className=" team-card_text lg:text-lg font-[500] mr-2">
										We Push Ourselves From better marketing performance to Spartan races, we never stay content. We Push Ourselves From better
										marketing performance to Spartan races.
										<span
											onClick={() => setCardColleps2(!cardColleps2)}
											className={`md:hidden text-[#FF492C] ml-1 font-[500] ${cardColleps2 ? "absolute -bottom-0 left-0" : ""}`}
										>
											See {`${cardColleps2 ? "Less" : "More"}`}{" "}
											<span className={`material-symbols-outlined absolute ${cardColleps2 ? "rotate-180" : ""}`}>expand_more</span>
										</span>
									</p>
									<p className={`team-card_text italic lg:text-lg pt-4 md:pt-0  ${cardColleps2 ? "" : "hidden md:inline"}`}>
										"Meet Jack Sparks, The IT owner who codes digital dreams into marketing realities!"
									</p>
									<div className={`flex flex-col md:flex-row gap-4 justify-between pt-4 md:pt-0 pr-6 ${cardColleps2 ? "" : "hidden md:flex"}`}>
										<div className="">
											<h4 className="lg:text-lg font-semibold">STRENGTHS</h4>
											<ul className="text-[14px] ml-4 lg:text-base list-disc list-outside">
												<li>Automatic Bid Optimizations</li>
												<li>Keyword Match Type Selections</li>
												<li>Quality Score Improvements</li>
											</ul>
										</div>
										<div className="">
											<h4 className="lg:text-lg font-semibold">WEAKNESSES</h4>
											<ul className="text-[14px] ml-4 lg:text-base list-disc list-outside">
												<li>Automatic Bid Optimizations</li>
												<li>Keyword Match Type Selections</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>

			{/* <div className="break_line image bg-[url('/section_break_red-footer.svg')] h-[80px] bg-[length:2500px_90px]  bg-center"></div> */}
			<FooterTopCta pageBreakBlue={true} footerTopCta={footerTopCta && footerTopCta.data.attributes.footer_top_cta} />
		</div>
	);
}

export async function getStaticProps(context) {
	let URL = `${process.env.NEXT_PUBLIC_API_URL}`;
	try {
		// Fetch data from external API
		let data = await fetch(`${URL}/api/team?populate[hero][populate]=*`);
		let heroData = await data.json();

		let teamMember = await fetch(
			`${URL}/api/team?populate[0]=team_member&populate[1]=team_member.single_member&populate[2]=team_member.single_member&populate[3]=team_member.single_member.team_member_image&populate[4]=team_member.single_member.experience_image`
		);
		let teamMemberData = await teamMember.json();

		let caseStudySection = await fetch(`${URL}/api/team?populate[casestudy_section][populate]=*`);
		let caseStudySectionData = await caseStudySection.json();

		let footerData = await fetch(`${URL}/api/team?populate[footer_top_cta][populate]=*`);
		let footerTopCta = await footerData.json();

		let seo = await fetch(`${URL}/api/team?populate[seo][populate]=*`);
		let seoData = await seo.json();
		// Pass data to the page via props
		return {
			props: { heroData, teamMemberData, caseStudySectionData, footerTopCta, seoData },
			revalidate: 60,
		};
	} catch (error) {
		return { props: { error: { ok: false, reason: "some error description for your own consumption, not for client side" } } };
	}
}

export default Team;
