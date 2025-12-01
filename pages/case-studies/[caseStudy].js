/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import CaseStudy1 from "@/components/caseStudies/CaseStudy1";
import CaseStudy2 from "@/components/caseStudies/CaseStudy2";
import CaseStudy3 from "@/components/caseStudies/CaseStudy3";
import CaseStudy4 from "@/components/caseStudies/CaseStudy4";
import Casehero from "@/components/caseStudies/Casehero";
import FooterTopCta from "@/components/FooterTopCta";
import Error from "next/error";
import Head from "next/head";
import { BiChevronRight } from "react-icons/bi";
import styles from "../../styles/casestudies.module.css";

function CaseStudy({ caseStudyDetails, error }) {
	const [isScroll, setIsScroll] = useState();
	const router = useRouter();
	const dynamicpage = router.query.caseStudy;

	useEffect(() => {
		var lastScrollTop = 0;
		let sticyCard = document.querySelector(".sticy-card");
		window.addEventListener("scroll", function () {
			let scrollTop = window.scrollY || document.documentElement.scrollTop;

			if (scrollTop > lastScrollTop) {
				sticyCard.classList.add("lg:translate-y-[0px]");
			} else if (lastScrollTop > scrollTop + 20) {
				if (scrollTop > 800) {
					if (sticyCard.classList.contains("lg:translate-y-[0px]")) {
						sticyCard.classList.remove("lg:translate-y-[0px]");
						sticyCard.classList.add("lg:translate-y-[100px]");
					}
				} else {
					if (sticyCard.classList.contains("lg:translate-y-[100px]")) {
						sticyCard.classList.remove("lg:translate-y-[100px]");
						sticyCard.classList.add("lg:translate-y-[0px]");
					}
				}
			}

			console.log(scrollTop);

			lastScrollTop = scrollTop;
		});
	}, []);

	if (error) {
		return <Error statusCode={error.statusCode} title={error.message} />;
	}

	return (
		<div className="">
			<Head>
				<title>{caseStudyDetails && caseStudyDetails.data.attributes.seo?.metaTitle}</title>
				<meta name="description" content={`${caseStudyDetails && caseStudyDetails.data.attributes.seo?.metaDescription}`} />
				<meta name="keywords" content={`${caseStudyDetails && caseStudyDetails.data.attributes.seo?.keywords}`} />
				<meta name="robots" content={`${caseStudyDetails && caseStudyDetails.data.attributes.seo?.metaRobots}`} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="canonical" href={`${caseStudyDetails && caseStudyDetails.data.attributes.seo?.canonicalURL}`} />

				{caseStudyDetails &&
					caseStudyDetails.data.attributes.seo?.structuredData?.map((data, i) => {
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
			<Casehero heroData={caseStudyDetails.data.attributes} />
			<div className="g-page_structure bg-[#fff] ">
				<div className=" lg:grid grid-cols-3 pt-14 md:pt-[6rem] pb-14 md:pb-24 max-w-6xl mx-auto gap-6 ">
					<div className="col-start-1 col-end-3 lg:mr-6 xl:mr-10">
						{caseStudyDetails &&
							caseStudyDetails.data.attributes.case_details.map((data) => {
								return (
									<div className="flex flex-col gap-12 relative pb-12" key={data.id}>
										<div className="">
											<div className="relative">
												<Image src="/components/faq/lock_close.svg" alt="" width={25} height={50} className="absolute left-0 " />
												<h3 className="font-[700] text-[24px] md:text-3xl ml-10 text-[#FF492C]">{data.case_title}</h3>
											</div>
											<div className={styles.case_details}>
												<div className="mt-2 leading-[1.8] text-lg " dangerouslySetInnerHTML={{ __html: data.case_details }} />
											</div>
										</div>
									</div>
								);
							})}
						<div className="border-[1px] border-[#FF492C] bg-[#FFF7F5] rounded-md py-5 px-5">
							<p className="text-[18px] font-[600] text-[#010101] pb-2.5">{caseStudyDetails?.data?.attributes.case_details_note_title}</p>
							<p className="text-[16px] font-[400]">{caseStudyDetails?.data?.attributes.case_details_note_description}</p>
						</div>
					</div>
					<div className="case_study_details col-start-3 col-end-4 max-w-[100%] mx-auto lg:max-w-none  ">
						<div className={`sticy-card bg-[var(--section-bg-lightred)] mt-10 lg:mt-0  px-6 py-6 shadow sticky top-4 duration-300`}>
							<div className="mb-8">
								<h5 className="text-[16px] font-[700] mb-1">ABOUT THE CLIENT</h5>
								<p className=" text-[15px] leading-[1.7]">{caseStudyDetails && caseStudyDetails.data.attributes.about_client}</p>
							</div>
							<div className="mb-8">
								<h5 className="text-[16px] font-[700] mb-1">LOCATION</h5>
								<p className=" text-[15px] leading-[1.7]">{caseStudyDetails && caseStudyDetails.data.attributes.location}</p>
							</div>
							<div className="mb-8">
								<h5 className="text-[16px] font-[700] mb-1">BUSINESS TYPE</h5>
								<p className=" text-[15px]">{caseStudyDetails && caseStudyDetails.data.attributes.business_type}</p>
							</div>
							<div className="">
								<h5 className="text-[16px] font-[700] mb-1">SERVICES RENDERED</h5>
								{caseStudyDetails &&
									caseStudyDetails.data?.attributes.service_rendered?.map((item) => {
										return (
											<Link href={`${item.slug}`} key={item.id} className="group text-[15px] flex items-center hover:text-[#ff492c] leading-[2.3]">
												{item.title}{" "}
												<BiChevronRight
													className={`group-hover:translate-x-1 duration-300 text-[22px] -ml-[2px] mt-[2px] group-hover:text-[#ff492c] text-[#515e6f] `}
												/>
											</Link>
										);
									})}
								{/* <div
									className=" text-[15px] list-disc list-inside leading-[1.7"
									dangerouslySetInnerHTML={{ __html: caseStudyDetails && caseStudyDetails.data.attributes.service_rendered }}
								/> */}
								{/* <ul className=" text-[15px] list-disc list-inside leading-[1.7]">
									<li>Buyer Persona Analysis</li>
									<li>Google Search Ads</li>
									<li>Google Shopping Ads</li>
									<li>Programmatic Display Ads</li>
									<li>Dynamic Remarketing Ads</li>
									<li>User Testing</li>
									<li>Conversion Rate Optimization</li>
								</ul> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<FooterTopCta breakWhite={true} footerTopCta={caseStudyDetails && caseStudyDetails.data.attributes.footer_top_cta} />
		</div>
	);
}

export async function getStaticPaths() {
	const allCaseStudy = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/case-studies?populate=*`);
	const allCaseStudyData = await allCaseStudy.json();

	const paths = allCaseStudyData.data.map((item, index) => ({
		params: { caseStudy: item.attributes.slug.toString() },
	}));

	return {
		paths,
		fallback: "blocking",
	};
}

export async function getStaticProps({ params }) {
	let URL = `${process.env.NEXT_PUBLIC_API_URL}`;
	const slug = params.caseStudy;

	// /api/case-studies
	try {
		// Fetch data from external API
		let data = await fetch(`${URL}/api/case-studies/${slug}`);
		let caseStudyDetails = await data.json();

		// Pass data to the page via props

		if (data.status === 200) {
			return {
				props: { caseStudyDetails },
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

export default CaseStudy;
