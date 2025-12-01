"use client";

import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import Head from "next/head";
import styles from "../../styles/casestudies.module.css";

function CareerDetails({ careerDetails }) {
	const router = useRouter();
	const dynamicpage = router.query.careerDetails;

	console.log(careerDetails);

	return (
		<div className="">
			<Head>
				<title>{careerDetails && careerDetails.data.attributes.seo?.metaTitle}</title>
				<meta name="description" content={`${careerDetails && careerDetails.data.attributes.seo?.metaDescription}`} />
				<meta name="keywords" content={`${careerDetails && careerDetails.data.attributes.seo?.keywords}`} />
				<meta name="robots" content={`${careerDetails && careerDetails.data.attributes.seo?.metaRobots}`} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="canonical" href={`${careerDetails && careerDetails.data.attributes.seo?.canonicalURL}`} />

				{careerDetails &&
					careerDetails.data.attributes.seo?.structuredData?.map((data, i) => {
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

			<div>
				<div className="bg-[var(--section-bg-lightred)] pt-24 md:pt-32 pb-9 md:pb-20 relative">
					<div className="g-page_structure flex md:block justify-center">
						<Link
							href="/career#open_positions"
							// scroll={false}
							className=" text-[#FF492C] font-bold text-base absolute  top-[60px] md:top-[80px] z-10 "
						>
							<div className="flex items-center cursor-pointer text-[12px] md:text-[14px] underline underline-offset-4">
								<BiChevronLeft className="text-2xl" /> BACK TO ALL OPEN POSITIONS
							</div>
						</Link>
					</div>
					<div className=" px-2 md:px-0 m-auto">
						<h1 className="hero_heading text-center">
							{careerDetails?.data.attributes.title_first_line}
							<br className="hidden md:block" /> {careerDetails?.data.attributes.title_second_line}
						</h1>
					</div>
					<div className="flex justify-center mt-6">
						<a
							href="mailto:hr@escaperoommarketer.com"
							className="font-openSans tracking-wider cursor-pointer bg-[#FF492C] hover:bg-[#E74329] py-2 px-2 md:px-6 text-white md:text-lg rounded font-[700]"
						>
							SEND YOUR CV
						</a>
					</div>
				</div>
				<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center"></div>
				<div className="g-page_structure bg-[var(--section-bg-lightblue)] ">
					<div className=" md:flex pt-14 md:pt-24 pb-14 md:pb-24 max-w-6xl mx-auto gap-12 ">
						<div className="flex flex-col gap-12 ">
							{careerDetails &&
								careerDetails.data.attributes.career_details?.map((item, i) => {
									return (
										<div className="" key={i}>
											<div className="relative">
												<Image src="/components/faq/lock_close.svg" alt="" width={25} height={50} className="absolute left-0 " />
												<h3 className=" font-[700] text-[24px] md:text-3xl ml-10 text-[#FF492C]">{item.title}</h3>
											</div>
											<div className={styles.case_details}>
												<div className="mt-2 leading-[1.8] text-lg " dangerouslySetInnerHTML={{ __html: item.details }} />
											</div>
										</div>
									);
								})}
						</div>

						<div className=" bg-[#f7f7f7] mt-10 md:mt-0  px-6 py-6  h-full sticky top-0 shadow md:max-w-md">
							<div className="mb-8">
								<h5 className="text-[16px] font-[700] mb-3">ABOUT THE COMPANY</h5>
								<p className="text-[15px] leading-[1.7]">{careerDetails?.data.attributes.about_company}</p>
							</div>
							<div className="mb-8">
								<h5 className="text-[16px] font-[700] mb-3">HEADQUARTERS</h5>
								<p className=" text-[15px] leading-[1.7]">{careerDetails?.data.attributes.location}</p>
							</div>
							<div className="mb-8">
								<h5 className="text-[16px] font-[700] mb-3">INDUSTRY</h5>
								<p className=" text-[15px] leading-[1.7]">{careerDetails?.data.attributes.business_type}</p>
							</div>
							<div className="">
								<h5 className="text-[16px] font-[700] mb-3">FACILITIES</h5>
								<div className={styles.case_details}>
									<div className=" text-[15px] " dangerouslySetInnerHTML={{ __html: careerDetails?.data.attributes.facilities }} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="break_line image bg-[url('/section_break_blue-footer.svg')] h-[80px] bg-[length:2500px_90px] bg-center"></div>
		</div>
	);
}

export async function getStaticPaths() {
	const careerDetails = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/career-details?populate=*`);
	const careerDetailsData = await careerDetails.json();

	const paths = careerDetailsData.data.map((item, index) => ({
		params: { careerDetails: item.attributes.slug.toString() },
	}));

	return {
		paths,
		fallback: "blocking",
	};
}

export async function getStaticProps({ params }) {
	let URL = `${process.env.NEXT_PUBLIC_API_URL}`;
	const slug = params.careerDetails;

	// /api/case-studies
	try {
		// Fetch data from external API
		let data = await fetch(`${URL}/api/career-details/${slug}`);
		let careerDetails = await data.json();

		// Pass data to the page via props

		if (data.status === 200) {
			return {
				props: { careerDetails },
				revalidate: 10,
			};
		} else {
			return {
				notFound: true,
			};
		}
	} catch (error) {
		return { props: { error: { ok: false, reason: "some error description for your own consumption, not for client side" } } };
	}
}

export default CareerDetails;
