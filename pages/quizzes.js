/* eslint-disable react/no-unescaped-entities */
import FooterTopCta from "@/components/FooterTopCta";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

function Quizzes({ quizzPage, allQuizzData, seoData }) {
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
			{/* <div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center -mt-5 bg-[var(--section-bg-lightred)]"></div> */}
			<div className="quizzes_hero relative before:content-[''] before:absolute before:top-[-20px] before:right-0 before:bottom-[-40px] before:left-0 z-10 before:bg-[url('/resources/quiz_hero_background.png')] before:bg-[length:300px_300px] before:bg-center before:opacity-10 bg-[#FFF7F5]">
				<div className="relative z-20 pt-16 md:pt-28 pb-9 md:pb-14">
					<h1 className="hero_heading text-center font-semibold ">
						{quizzPage && quizzPage.data.attributes.hero_title_first_line} <br className="hidden xl:block" />{" "}
						{quizzPage && quizzPage.data.attributes.hero_title_second_line}
					</h1>
					<p className="g__section-description text-center pt-3 px-2.5">{quizzPage && quizzPage.data.attributes.description}</p>
				</div>
			</div>
			<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:3200px_90px]  bg-center"></div>
			<div className="g-page_structure bg-[#F9FCFF] font-openSans">
				<div className="max-w-[25rem] md:max-w-none mx-auto  md:gap-[72px] pt-14 md:pt-20 pb-14 md:pb-24">
					{allQuizzData &&
						allQuizzData.data.map((data) => {
							return (
								<div
									className="quiz-card flex flex-col md:flex-row items-center gap-4 md:gap-7 md:w-[750px] lg:w-[980px] mx-auto  bg-[url('/resources/quizzes/quiz_background.svg')] bg-[#FFF7F5] px-5 md:px-7 py-6 md:py-0 shadow rounded mb-12"
									key={data.id}
								>
									<div className="">
										<Image
											src={data.attributes.quizz_card_image.data.attributes.url}
											alt=""
											width={100}
											height={200}
											className=" w-[100%] h-[260px] "
										/>
									</div>
									<div className="w-full">
										<p className="text-lg text-[#FF492C] font-semibold">{data.attributes.quizz_tag}</p>
										<h3 className="text-3xl font-bold pb-2">{data.attributes.quizz_title}</h3>
										<p className="text-lg">{data.attributes.card_description}</p>
										<Link
											href={`/quizzes/${data.attributes.slug}`}
											className="group bg-[#FF492C] hover:bg-[#E74329]  w-full py-2 text-white rounded mt-3 flex items-center justify-center gap-2"
										>
											{data.attributes.quizz_card_cta} <BsArrowRight className="text-xl mt-1 group-hover:translate-x-1 duration-300" />
										</Link>
									</div>
								</div>
							);
						})}
					{/* <div className="quiz-card flex flex-col md:flex-row items-center gap-4 md:gap-7 md:w-[750px] lg:w-[980px] mx-auto  bg-[url('/resources/quizzes/quiz_background.svg')] bg-[#FFF7F5] px-7 py-6 md:py-0  shadow rounded">
						<div className="">
							<Image src="/resources/quizzes/conversion_quiz.svg" alt="" width={100} height={200} className=" w-[350px] h-[260px]" />
						</div>
						<div className="">
							<p className="text-lg text-[#FF492C] font-semibold">ESCAPE ROOM WEBSITE</p>
							<h3 className="text-3xl font-bold pb-2">Conversion Quiz</h3>
							<p className="text-lg">Stop trying to guess what metrics mean and trying to figure out why your PPC ads aren't performing as well.</p>
							<Link
								href={"/quiz-details/conversion-micro-quiz"}
								className="group bg-[#FF492C] hover:bg-[#E74329]  w-full py-2 text-white rounded mt-3 flex items-center justify-center gap-2"
							>
								Start Here Know Your Score <BsArrowRight className="text-xl mt-1 group-hover:translate-x-1" />
							</Link>
						</div>
					</div>
					<div className="quiz-card flex flex-col md:flex-row items-center gap-4 md:gap-7 md:w-[750px] lg:w-[980px] mx-auto  bg-[url('/resources/quizzes/quiz_background.svg')] bg-[#FFF7F5] px-7 py-6 md:py-0 shadow rounded">
						<div className="">
							<Image src="/resources/quizzes/email_marketing_quiz.svg" alt="" width={100} height={200} className=" w-[350px] h-[260px]" />
						</div>
						<div className="">
							<p className="text-lg text-[#FF492C] font-semibold">ESCAPE ROOM WEBSITE</p>
							<h3 className="text-3xl font-bold pb-2">Email Marketing Quiz</h3>
							<p className="text-lg">Stop trying to guess what metrics mean and trying to figure out why your PPC ads aren't performing as well.</p>
							<Link
								href={"/quiz-details/email-marketing-micro-quiz"}
								className="group bg-[#FF492C] hover:bg-[#E74329] w-full py-2 text-white rounded mt-3 flex items-center justify-center gap-2"
							>
								Start Here Know Your Score <BsArrowRight className="text-xl mt-1 group-hover:translate-x-1" />
							</Link>
						</div>
					</div>
					<div className="quiz-card flex flex-col md:flex-row gap-4 md:gap-7 items-center md:w-[750px] lg:w-[980px] mx-auto  bg-[url('/resources/quizzes/quiz_background.svg')] bg-[#FFF7F5] px-7 py-6 md:py-0 shadow rounded">
						<div className="">
							<Image src="/resources/quizzes/google_ads_quiz.svg" alt="" width={100} height={200} className=" w-[350px] h-[260px]" />
						</div>
						<div className="">
							<p className="text-lg text-[#FF492C] font-semibold">ESCAPE ROOM WEBSITE</p>
							<h3 className="text-3xl font-bold pb-2">Google Ads Quiz</h3>
							<p className="text-lg">Stop trying to guess what metrics mean and trying to figure out why your PPC ads aren't performing as well.</p>
							<Link
								href={"/quiz-details/google-ads-micro-quiz"}
								className="group bg-[#FF492C] hover:bg-[#E74329] w-full py-2 text-white rounded mt-3 flex items-center justify-center gap-2"
							>
								Start Here Know Your Score <BsArrowRight className="text-xl mt-1 group-hover:translate-x-1" />
							</Link>
						</div>
					</div>
					<div className="quiz-card flex flex-col md:flex-row items-center gap-4 md:gap-7  md:w-[750px] lg:w-[980px] mx-auto  bg-[url('/resources/quizzes/quiz_background.svg')] bg-[#FFF7F5] px-7 py-6 md:py-0 shadow rounded">
						<div className="">
							<Image src="/resources/quizzes/facebook_ads_quiz.svg" alt="" width={100} height={200} className=" w-[350px] h-[260px]" />
						</div>
						<div className="">
							<p className="text-lg text-[#FF492C] font-semibold">ESCAPE ROOM WEBSITE</p>
							<h3 className="text-3xl font-bold pb-2">Facebook Ads Quiz</h3>
							<p className="text-lg">Stop trying to guess what metrics mean and trying to figure out why your PPC ads aren't performing as well.</p>
							<Link
								href={"/quiz-details/facebook-ads-micro-quiz"}
								className="group bg-[#FF492C] hover:bg-[#E74329] w-full py-2 text-white rounded mt-3 flex items-center justify-center gap-2"
							>
								Start Here Know Your Score <BsArrowRight className="text-xl mt-1 group-hover:translate-x-1" />
							</Link>
						</div>
					</div>
					<div className="quiz-card flex flex-col md:flex-row items-center gap-4 md:gap-7 md:w-[750px] lg:w-[980px] mx-auto  bg-[url('/resources/quizzes/quiz_background.svg')] bg-[#FFF7F5] px-7 py-6 md:py-0 shadow rounded">
						<div className="">
							<Image src="/resources/quizzes/creative_asset_quiz.svg" alt="" width={100} height={200} className=" w-[350px] h-[260px]" />
						</div>
						<div className="">
							<p className="text-lg text-[#FF492C] font-semibold">ESCAPE ROOM WEBSITE</p>
							<h3 className="text-3xl font-bold pb-2">Creative Asset Quiz</h3>
							<p className="text-lg">Stop trying to guess what metrics mean and trying to figure out why your PPC ads aren't performing as well.</p>
							<Link
								href={"/quiz-details/creative-asset-micro-quiz"}
								className="group bg-[#FF492C] hover:bg-[#E74329] w-full py-2 text-white rounded mt-3 flex items-center justify-center gap-2"
							>
								Start Here Know Your Score <BsArrowRight className="text-xl mt-1 group-hover:translate-x-1" />
							</Link>
						</div>
					</div> */}
				</div>
			</div>
			<FooterTopCta pageBreakBlue={true} footerTopCta={quizzPage && quizzPage.data.attributes.footer_top_cta} />
		</div>
	);
}

export async function getStaticProps(context) {
	let URL = `${process.env.NEXT_PUBLIC_API_URL}`;
	try {
		// Fetch data from external API
		let data = await fetch(`${URL}/api/quizz?populate=*`);
		let quizzPage = await data.json();

		let allQuiz = await fetch(`${URL}/api/quizz-details?populate=*`);
		let allQuizzData = await allQuiz.json();

		let seo = await fetch(`${URL}/api/quizz?populate[seo][populate]=*`);
		let seoData = await seo.json();

		// let ourWorksData = await fetch(`${URL}/api/our-work?populate[0]=works&populate[1]=works.Website_images &populate[2]=works.ads_images`);
		// let ourWorks = await ourWorksData.json();

		// let footerData = await fetch(`${URL}/api/our-work?populate[footer_top_cta][populate]=*`);
		// let footerTopCta = await footerData.json();
		// Pass data to the page via props
		return {
			props: { quizzPage, allQuizzData, seoData },
			revalidate: 60,
		};
	} catch (error) {
		return { props: { error: { ok: false, reason: "some error description for your own consumption, not for client side" } } };
	}
}

export default Quizzes;
