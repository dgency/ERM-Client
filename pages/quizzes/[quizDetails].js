/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import SeoRelatedQuiz from "@/components/quizDetails/SeoRelatedQuiz";
import ConversionRelatedQuiz from "@/components/quizDetails/ConversionRelatedQuiz";
import EmailMarketingRelatedQuiz from "@/components/quizDetails/EmailMarketingRelatedQuiz";
import GoogleAdsRelatedQuiz from "@/components/quizDetails/GoogleAdsRelatedQuiz";
import FacebookRelatedQuiz from "@/components/quizDetails/FacebookRelatedQuiz";
import CreativeAssetRelatedQuiz from "@/components/quizDetails/CreativeAssetRelatedQuiz";
import FooterTopCta from "@/components/FooterTopCta";
import Quizhero from "@/components/quizDetails/quizDetailsHero/Quizhero";
import Head from "next/head";

let pageReloaded = false;

function QuizDetails({ quizzDetails }) {
	const [toggle,setToggle] = useState(false)
	const router = useRouter();
	const dynamicpage = router.query.quizDetails;

	useEffect(() => {
		if (!localStorage.getItem("pageReloaded")) {
			// Reload the page
			window.location.reload();

			// Set a flag in local storage to prevent further reloads
			localStorage.setItem("pageReloaded", "true");
		}

		setTimeout(() => {
			localStorage.removeItem("pageReloaded");
		}, 8000);

		return () => {
			localStorage.removeItem("pageReloaded");
		};
	}, [dynamicpage]);

	const handlQuiz = () => {
		let quizHead = document.querySelector(".quiz_head");
		let quizBody = document.querySelector(".gozenEmbed");

		console.log(quizHead);
		quizHead.classList.add("hidden");
		quizBody.classList.remove("hidden");
		setToggle(true)
	};

	console.log(quizzDetails);

	try {
		return (
			<div>
				<div className="">
					<Head>
						<title>{quizzDetails && quizzDetails.data.attributes.seo?.metaTitle}</title>
						<meta name="description" content={`${quizzDetails && quizzDetails.data.attributes.seo?.metaDescription}`} />
						<meta name="keywords" content={`${quizzDetails && quizzDetails.data.attributes.seo?.keywords}`} />
						<meta name="robots" content={`${quizzDetails && quizzDetails.data.attributes.seo?.metaRobots}`} />
						<meta property="og:image:url" content={`${quizzDetails && quizzDetails.data.attributes.seo?.metaImage.data?.attributes.url}`} />
						<meta property="og:image:secure_url" content={`${quizzDetails && quizzDetails.data.attributes.seo?.metaImage.data?.attributes.url}`} />
						<meta property="og:image:type" content="image/jpeg" />
						<meta name="twitter:card" content="summary_large_image" />
						<meta name="twitter:image" content={`${quizzDetails && quizzDetails.data.attributes.seo?.metaImage.data?.attributes.url}`} />
						<meta name="viewport" content="width=device-width, initial-scale=1" />
						<link rel="canonical" href={`${quizzDetails && quizzDetails.data.attributes.seo?.canonicalURL}`} />

						{quizzDetails &&
							quizzDetails.data.attributes.seo?.structuredData?.map((data, i) => {
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
					<Quizhero
						heroFirst={quizzDetails && quizzDetails.data.attributes.hero_title_first_line}
						heroSecond={quizzDetails && quizzDetails.data.attributes.hero_title_second_line}
					/>
					{/* <Quizhero heading='Website Seo Score'/> */}
					<div className={`bg-[#F9FCFF] relative z-20 sm:grid grid-cols-10 px-[10px] pt-[20px] sm:px-0 overflow-hidden ${toggle?"h-[100vh] sm:h-[80vh]":""}  `}>
						<Image
							src={quizzDetails && quizzDetails.data.attributes.quizz_image_left.data.attributes.url}
							alt=""
							height={100}
							width={350}
							className="opacity-40 hidden sm:block h-full object-cover col-start-1 col-end-2"
						/>
						<div className=" font-openSans text-center py-12 sm:py-[100px] mb-0 col-start-2 col-end-10 w-full h-full">
							<div className="quiz_head flex items-center h-full">
								<div className=" pt-14 md:pt-0 pb-14 md:pb-0 max-w-[700px] mx-auto">
									<p className=" lg:text-lg text-[#FF492C] font-semibold pb-1">{quizzDetails && quizzDetails.data.attributes.quizz_tag}</p>
									<h3 className="text-2xl lg:text-4xl font-bold pb-1 lg:pb-3">{quizzDetails && quizzDetails.data.attributes.quizz_title}</h3>
									<div className="" dangerouslySetInnerHTML={{ __html: quizzDetails && quizzDetails.data.attributes.body_description }} />
									{}
									{/* <p className="text-[18px] lg:text-[22px] font-semibold py-3 lg:py-6">
								Answer up to 19 questions and we'll tell you how <br className="hidden md:block" /> you measure up.
							</p>
							<p className="text-[20px] lg:text-2xl font-semibold pb-6">No email required to get your results</p> */}
									<button onClick={handlQuiz} className="bg-[#FF492C] hover:bg-[#E74329] px-20 py-2 text-white font-semibold rounded mt-8">
										{quizzDetails && quizzDetails.data.attributes.body_cta}
									</button>
								</div>
							</div>
							<div className="gozenEmbed h-full m-auto hidden">
								<div
									className="h-[100%] w-[100%]"
									dangerouslySetInnerHTML={{
										__html: quizzDetails && quizzDetails.data.attributes.main_quiz_link,
									}}
								/>
								{/* <div
									id="zf-widget"
									data-zf-embed-id="10bce5e3-9669-46e6-982b-70a5301fd2c7"
									data-zf-id="v95ajtXigEZCTNPrNu4A"
									data-zf-d_id="RoE31ykdcwJnZeEZO"
									data-zf-type="standard"
									style={{ height: "100%", width: "100%", margin: "auto" }}
								></div>

								<Script src="https://form-assets.forms.gozen.io/cdn/scripts/embed-v1.21.js"></Script> */}
							</div>
						</div>
						<Image
							src={quizzDetails && quizzDetails.data.attributes.quizz_image_right.data.attributes.url}
							alt=""
							height={100}
							width={350}
							className="opacity-40 hidden sm:block  h-full object-cover col-start-10 col-end-11"
						/>
					</div>

					<FooterTopCta pageBreakBlue={true} footerTopCta={quizzDetails && quizzDetails.data.attributes.footer_top_cta} />
				</div>
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

export default QuizDetails;

export async function getStaticPaths() {
	let URL = `${process.env.NEXT_PUBLIC_API_URL}`;
	let allQuiz = await fetch(`${URL}/api/quizz-details?populate=*`);
	let allQuizData = await allQuiz.json();

	const paths = allQuizData.data.map((quiz) => ({
		params: { quizDetails: quiz.attributes.slug.toString() },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	let URL = `${process.env.NEXT_PUBLIC_API_URL}`;
	console.log(params.quizDetails);
	try {
		// Fetch data from external API
		let data = await fetch(`${URL}/api/quizz-details/${params.quizDetails}`);
		let quizzDetails = await data.json();
		// Pass data to the page via props

		if (data.status === 200) {
			return {
				props: { quizzDetails },
				revalidate: 60,
			};
		} else {
			return {
				notFound: true,
				revalidate: 60,
			};
		}
	} catch (error) {
		return { props: { error: { ok: false, reason: "some error description for your own consumption, not for client side" } } };
	}
}

{
	/* <div
id="zf-widget"
data-zf-id="uPiMvCNgOF0sN1N6s2DM"
data-zf-d_id=ZLXBivsWppYpIA8zF
data-zf-type="standard"
style="height: 30vh; width: 700px;"
></div> */
}

// <script src="https://form-assets.forms.gozen.io/cdn/scripts/embed.js"></script>
