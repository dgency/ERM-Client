/* eslint-disable react/no-unescaped-entities */
"use client";
import FooterTopCta from "@/components/FooterTopCta";
import TeamHero from "@/components/others/TeamHero";
import Error from "next/error";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function Testimonials({ testimonial, heroData, footerTopCta, seoData, error }) {
	const [colleps, setColleps] = useState();
	const [storeId, setStoreId] = useState();
	const [isColleps, setIsColleps] = useState(true);

	const handleSpanText = (id, message) => {
		if (id === storeId) {
			setIsColleps(!isColleps);
		} else {
			setIsColleps(true);
			setStoreId(id);
			setColleps(message.length);
		}
	};

	if (error) {
		return <Error statusCode={error.statusCode} title={error.message} />;
	}

	try {
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
					imgFirst="/results/testimonial/Testimonials-Page-Right-Side-01.svg"
					imgSecond="/results/testimonial/Testimonials-Page-Left-Side-01.svg"
					// imgThird="/results/testimonial/Testimonials-Page-Right-Side-01.svg"
				/>
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
				<div className="g-page_structure bg-[var(--section-bg-lightblue)] ">
					<div className="flex flex-col items-center gap-[220px] md:gap-16 pt-[200px] md:pt-20 pb-14 md:pb-24">
						{testimonial &&
							testimonial.data.attributes.testimonials.testimonial_data.map((data) => {
								return (
									// <div
									// 	key={data.id}
									// 	className="testimonial-card w-[calc(300+20%)] max-w-[400px] md:max-w-3xl lg:max-w-5xl pb-6 md:pb-0 flex flex-col md:flex-row lg:gap-4 items-center bg-[#00B67A0D] relative rounded-xl "
									// >
									// 	<Image
									// 		src="/results/testimonial/client-corner.svg"
									// 		alt=""
									// 		height={100}
									// 		width={100}
									// 		className="absolute -top-[165px] left-[calc(100%-(300px+(50%-140px)))]  md:-top-4 md:-left-6 -rotate-6 z-10"
									// 	/>
									// 	<Image
									// 		src="/results/testimonial/testimonial_thumb.svg"
									// 		alt=""
									// 		height={95}
									// 		width={95}
									// 		className="absolute w-[60px] lg:w-[90px] right-[calc(100%-(300px+(50%-135px)))] md:-right-5 lg:-right-10 -top-[170px] md:-top-7 lg:-top-10 z-10"
									// 	/>
									// 	<Image
									// 		src={data.persons_image.data.attributes.url}
									// 		alt=""
									// 		height={100}
									// 		width={400}
									// 		className="w-[280px] md:w-[325px] lg:w-[400px] absolute md:static -top-[150px] "
									// 	/>
									// 	<div className="font-openSans px-4 md:px-8 pt-[150px] md:pt-5 md:pb-5 lg:pt-7 lg:pb-0">
									// 		<p className="hidden md:block text-lg md:text-sm lg:text-[18px] xl:text-xl lg:leading-[1.4] xl:leading-normal italic">
									// 			"{data.persons_message}"
									// 		</p>
									// 		<p
									// 			className={`block md:hidden text-lg md:text-sm lg:text-[18px] xl:text-xl lg:leading-[1.4] xl:leading-normal italic ${
									// 				colleps === 170 ? "max-h-[200px] duration-[1200ms]" : "max-h-[500px] duration-[2000ms]"
									// 			}`}
									// 		>
									// 			{data.persons_message.slice(0, data.id == storeId ? (isColleps ? colleps : 170) : 170)}
									// 			<span onClick={() => handleSpanText(data.id, data.persons_message)} className="text-[#FF492C] relative md:hidden pl-1">
									// 				See {`${data.id == storeId && isColleps ? "less" : "more"}`}
									// 			</span>
									// 			<span
									// 				className={`material-symbols-outlined absolute mt-1 text-[#FF492C] ${data.id == storeId && isColleps ? "rotate-180" : ""}`}
									// 			>
									// 				expand_more
									// 			</span>
									// 		</p>

									// 		<div className="flex gap-2 md:gap-6 items-center px-2 py-2 md:py-0 mt-6 bg-[#00B67A1A] rounded-md">
									// 			<Image src={data.company_logo.data.attributes.url} alt="" height={100} width={80} className="w-[80px] md:w-[90px]" />
									// 			<div className="">
									// 				<Image src="/results/testimonial/stars.svg" alt="" height={100} width={110} className="mb-3" />
									// 				<p className="text-base leading-3 font-semibold">{data.persons_name}</p>
									// 				<p className="text-[14px]">{data.persons_occupation}</p>
									// 			</div>
									// 		</div>
									// 	</div>
									// </div>
									<div
										// itemscope
										// itemtype="https://schema.org/NewsArticle"
										key={data.id}
										className="  w-[calc(300+20%)] max-w-md md:max-w-[700px] lg:max-w-[920px] xl:max-w-[970px]  mx-auto pb-6 md:pb-0 flex flex-col md:flex-row  items-center bg-[#00B67A0D] relative rounded-xl "
									>
										<Image
											src="/results/testimonial/client-corner.svg"
											alt=""
											height={100}
											width={100}
											className="absolute -top-[165px] left-[calc(100%-(300px+(50%-140px)))]  md:-top-4 md:-left-6 -rotate-6 z-10"
										/>

										<Image
											src={data.persons_image.data.attributes.url}
											alt=""
											height={100}
											width={400}
											className="h-[280px] md:h-[340px] w-[280px] md:w-[338px] absolute object-cover md:static  -top-[150px] md:-top-0 "
										/>
										{/* px-2.5 md:px-8 pt-[150px] md:pt-5 md:pb-5 lg:pt-7 lg:pb-0 */}
										<div className=" font-openSans pl-2.5 pr-2.5 lg:pl-5 lg:pr-7 pt-[170px] md:pt-2.5 pb-2.5">
											<div className="flex justify-center md:justify-start">
												<Image src="/results/testimonial/stars.svg" alt="" height={100} width={100} className="mb-[15px] h-[25px] w-[140px]" />
											</div>
											<p className="hidden md:block text-[#222222] text-[17px] md:text-sm lg:text-[18px] lg:leading-[1.4] xl:leading-normal italic">
												"{data.persons_message}"
											</p>
											<p
												className={`block md:hidden text-center text-[#222222] text-[17px] md:text-sm lg:text-[18px] xl:text-xl lg:leading-[1.4] xl:leading-normal italic ${
													colleps === 250 ? "max-h-[200px] duration-[1200ms]" : "max-h-[500px] duration-[2000ms]"
												}`}
											>
												{data.persons_message.slice(0, data.id == storeId ? (isColleps ? colleps : 250) : 250)}

												{data.persons_message.length > 250 && (
													<span
														onClick={() => handleSpanText(data.id, data.persons_message)}
														className="text-[#FF492C]  md:hidden ml-2 inline-flex items-center text-[16px] cursor-pointer"
													>
														See {`${data.id == storeId && isColleps ? "less" : "more"}`}
														<span
															className={`material-symbols-outlined inline-block mt- text-[#FF492C] ${
																data.id == storeId && isColleps ? "rotate-180" : ""
															}`}
														>
															expand_more
														</span>
													</span>
												)}
											</p>
											<div className="flex justify-center md:justify-start">
												<div className=" flex gap-2 md:gap-4 items-center pl-4 pr-[30px] py-2 mt-6 bg-[#00B67A10] rounded-md">
													<Image
														// itemprop="image"
														src={data.company_logo.data.attributes.url}
														alt=""
														height={100}
														width={150}
														className="w-[80px] md:w-[inherit] md:h-[50px] object-contain"
													/>
													<div className="">
														<p className="text-[15px] md:text-[16px] text-[#010101] leading-4 font-semibold mb-[5px]">{data.persons_name}</p>
														<p className="text-[13px] md:text-[14px] text-[#414141]">{data.persons_occupation}</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>

				<FooterTopCta pageBreakBlue={true} footerTopCta={footerTopCta && footerTopCta.data.attributes.footer_top_cta} />
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

export async function getStaticProps(context) {
	let URL = `${process.env.NEXT_PUBLIC_API_URL}`;
	try {
		// Fetch data from external API
		let data = await fetch(`${URL}/api/testimonial?populate[hero][populate]=*`);
		let heroData = await data.json();

		let testimonialData = await fetch(
			`${URL}/api/testimonial?populate[0]=testimonials&populate[1]=testimonials.testimonial_data&populate[2]=testimonials.testimonial_data.persons_image&populate[3]=testimonials.testimonial_data.company_logo`
		);
		let testimonial = await testimonialData.json();

		let footerData = await fetch(`${URL}/api/testimonial?populate[footer_top_cta][populate]=*`);
		let footerTopCta = await footerData.json();

		let seo = await fetch(`${URL}/api/testimonial?populate[seo][populate]=*`);
		let seoData = await seo.json();
		// Pass data to the page via props
		return {
			props: { heroData, testimonial, footerTopCta, seoData },
			revalidate: 60,
		};
	} catch (error) {
		return { props: { error: { ok: false, reason: "some error description for your own consumption, not for client side" } } };
	}
}

export default Testimonials;
