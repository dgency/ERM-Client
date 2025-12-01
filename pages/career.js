"use client";

import DescriptiveCta from "@/components/DescriptiveCta";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function career({ heroData, employeeQualityData, jobPostData, seoData }) {
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

			<div className=" pt-16 md:pt-24 pb-12 md:pb-16 bg-[var(--section-bg-lightred)]">
				<div className=" px-2 md:px-0  m-auto mb-6">
					<h1 className="hero_heading text-center">
						{heroData && heroData.data.attributes.hero.title_first_line} <br className="hidden xl:block" />{" "}
						{heroData && heroData.data.attributes.hero.title_second_line}
					</h1>
					{heroData && (
						<p className=" g__section-description md:text-lg xl:text-xl text-center px-[10px]">{heroData.data.attributes.hero.description}</p>
					)}
				</div>

				<div className=" sm:hidden flex justify-center pb-8">
					<Link
						href="#open_positions"
						// scroll={false}
						onClick={(e) => {
							e.preventDefault();
							document.getElementById("open_positions").scrollIntoView({ behavior: "smooth" });
						}}
						className="font-openSans tracking-wider bg-[#FF492C] hover:bg-[#E74329]  py-3 px-3 md:px-6 text-white lg:text-lg 2xl:text-xl rounded font-[700]"
					>
						{heroData && heroData.data.attributes.hero.hero_cta}
					</Link>
				</div>

				<div className="max-w-[1300px] mx-auto relative flex justify-between items-center ">
					<Image
						src={`/results/career/Career-Page-Middle-01.svg`}
						alt=""
						height={150}
						width={350}
						// className="h-[90px] md:h-[150px] w-[90px] md:w-[inherit] absolute left-0  lg:left-0 bottom-0 md:bottom-10  pt-6 md:pt-24 pb-16"
						className="h-[90px] md:h-[150px] w-[110px] md:w-[inherit]"
					/>

					<div className="hidden sm:flex justify-center absolute left-[50%] translate-x-[-50%] min-w-[400px]">
						<Link
							href="#open_positions"
							// scroll={false}
							onClick={(e) => {
								e.preventDefault();
								document.getElementById("open_positions").scrollIntoView({ behavior: "smooth" });
							}}
							className="font-openSans tracking-wider bg-[#FF492C] hover:bg-[#E74329]  py-3 px-2 md:px-6 text-white lg:text-lg 2xl:text-xl rounded font-[700]"
						>
							{heroData && heroData.data.attributes.hero.hero_cta}
						</Link>
					</div>

					<Image
						src={`/results/career/Career-Page-Right-Side-01-01.svg`}
						alt=""
						height={100}
						width={350}
						// className="h-[90px] md:h-[130px] w-[110px] md:w-[inherit] absolute left-[50%] bottom-0 md:-bottom-5 translate-x-[-50%]"
						className={"h-[90px] md:h-[130px] w-[110px] md:w-[inherit]"}
					/>
				</div>
			</div>
			<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
			<div className="g-page_structure bg-[var(--section-bg-lightblue)]">
				<div className="pt-14 md:pt-20 pb-14 md:pb-20">
					<div className="main-content  m-auto">
						<h2 className=" g__section-heading text-center  text-xl font-bold ">
							{employeeQualityData && employeeQualityData.data.attributes.employee_quality.title_first_line} <br className="hidden xl:block" />{" "}
							{employeeQualityData && employeeQualityData.data.attributes.employee_quality.title_second_line}
						</h2>
						<p className="g__section-description text-center">
							{employeeQualityData && employeeQualityData.data.attributes.employee_quality.description}
						</p>
					</div>
					<div className="q-card_first-row font-openSans max-w-sm md:max-w-[1200px] mx-auto mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 ">
						{employeeQualityData &&
							employeeQualityData.data.attributes.employee_quality.employee_quality_card.map((data) => {
								return (
									<div className="px-2.5 md:px-8 py-10 rounded bg-white shadow" key={data.id}>
										<h3 className="font-bold text-center text-xl text-[#010101] ">{data.title}</h3>
										<p className="text-[#222] text-[16px] md:text-lg text-center mt-3 ">{data.description}</p>
										<Image height={200} width={200} src={data.image.data.attributes.url} alt="" className="w-[200px] h-[180px] mx-auto mt-8 " />
									</div>
								);
							})}
					</div>
					<DescriptiveCta
						ctaSlug={employeeQualityData && employeeQualityData.data.attributes.employee_quality.descriptive_cta_slug}
						cta={employeeQualityData && employeeQualityData.data.attributes.employee_quality.descriptive_cta}
					/>
				</div>
			</div>
			<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center  "></div>
			<div id="open_positions" className="g-page_structure  bg-[var(--section-bg-lightred)]">
				<h2 className="g__section-heading pt-9 md:pt-16  text-center mx-auto font-extrabold">
					{" "}
					{jobPostData && jobPostData.data?.attributes.job_post.title_first_line} <br className="hidden xl:block" />{" "}
					{jobPostData && jobPostData.data?.attributes.job_post.title_second_line}
				</h2>{" "}
				<p className="g__section-description text-center mx-auto">{jobPostData && jobPostData.data?.attributes.job_post.description}</p>
				<div className="font-openSans max-w-md md:max-w-3xl lg:max-w-5xl mx-auto pb-10 md:pb-24 mt-10 md:mt-16 grid md:grid-cols-2  gap-7">
					{jobPostData &&
						jobPostData.data?.attributes.job_post.career_details?.data?.map((data) => {
							return (
								<div className="shadow rounded-lg p-8 bg-white" key={data.id}>
									<p className="text-[26px] font-[600] pb-2 ">{data.attributes.job_title}</p>
									<p className="pb-10">{data.attributes.short_description}</p>
									<Link
										href={`/career/${data.attributes.slug}`}
										className=" font-[600] bg-white hover:bg-[#FF492C] text-[#FF492C] hover:text-white cursor-pointer px-7 py-2 rounded-md border-[2px] border-[#FF492C]"
									>
										LEARN MORE & APPLY
									</Link>
								</div>
							);
						})}
				</div>
			</div>
			{/* <div className="break_line image bg-[url('/section_break_red-footer.svg')] h-[80px] bg-[length:3200px_90px]  bg-center"></div> */}
			<div className="break_line image bg-[url('/footer_top_cta_top_red.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-10 mt-[-30px] bg-center"></div>
		</div>
	);
}

export async function getStaticProps(context) {
	let URL = `${process.env.NEXT_PUBLIC_API_URL}`;
	try {
		// Fetch data from external API
		let data = await fetch(`${URL}/api/career?populate[hero][populate]=*`);
		let heroData = await data.json();

		let employeeQuality = await fetch(
			`${URL}/api/career?populate[0]=employee_quality&populate[1]=employee_quality.employee_quality_card&populate[2]=employee_quality.employee_quality_card.image`
		);
		let employeeQualityData = await employeeQuality.json();

		let jobPost = await fetch(`${URL}/api/career?populate[job_post][populate]=*`);
		let jobPostData = await jobPost.json();

		let seo = await fetch(`${URL}/api/career?populate[seo][populate]=*`);
		let seoData = await seo.json();
		// Pass data to the page via props
		return {
			props: { heroData, employeeQualityData, jobPostData, seoData },
			revalidate: 60,
		};
	} catch (error) {
		return { props: { error: { ok: false, reason: "some error description for your own consumption, not for client side" } } };
	}
}

export default career;
