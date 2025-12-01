/* eslint-disable react/no-unescaped-entities */
"use client";
import ContactHero from "@/components/others/ContactHero";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/contactus.module.css";
import Script from "next/script";
import FooterTopCta from "@/components/FooterTopCta";
import { useRouter } from "next/router";
import Link from "next/link";

function DemoCall({ contactData, seoData }) {
	const router = useRouter();
	// const [state, setState] = useState({
	// 	contactData: {},
	// 	seoData: {},
	// });

	useEffect(() => {
		// window.location.reload();
		// const APIurl = `${process.env.NEXT_PUBLIC_API_URL}/api/demo-call`;

		// fetch(`${APIurl}?populate=*`)
		// 	.then((res) => res.json())
		// 	.then((data) => setState((prevState) => ({ ...prevState, contactData: { data } })));

		if (!localStorage.getItem("pageReloaded")) {
			// Reload the page
			window.location.reload();

			// Set a flag in local storage to prevent further reloads
			localStorage.setItem("pageReloaded", "true");
		}

		setTimeout(() => {
			localStorage.removeItem("pageReloaded");
		}, 4000);

		return () => {
			localStorage.removeItem("pageReloaded");
		};
	}, [router.asPath]);

	try {
		return (
			<div>
				<ContactHero contactData={contactData && contactData} />

				<div className="pb-14 bg-[#F9FCFF]">
					<div className="g-page_structure">
						<div className=" lg:flex justify-center pt-12 sm:pt-16 lg:pt-0">
							<div className="max-w-[450px] lg:max-w-none mx-auto bg-white px-[14px] py-[16px] shadow-md rounded-md relative z-30 flex flex-col lg:flex-row  gap-3 lg:gap-0   lg:-mt-[70px]">
								<div className="flex gap-4 items-center justify-center lg:justify-start bg-[#FFFBEA] py-2 pl-3 pr-6 shadow rounded-md ">
									<Image src={"/contactus/choose-your-time.svg"} height={50} width={50} alt="" />
									<p className="">Choose Your Time</p>
								</div>
								<Image src={"/contactus/Line.svg"} height={50} width={50} alt="" className="w-[30px] rotate-90 lg:rotate-0 self-center" />
								<div className="flex gap-4 items-center justify-center lg:justify-start bg-[#EFF8FF] py-2 pl-3 pr-6 shadow rounded-md ">
									<Image src={"/contactus/provide-your-details.svg"} height={50} width={50} alt="" />
									<p className="">Provide Your Details</p>
								</div>
								<Image src={"/contactus/Line.svg"} height={50} width={50} alt="" className=" w-[30px] rotate-90 lg:rotate-0 self-center" />
								<div className="flex gap-4 items-center justify-center lg:justify-start bg-[#EFFFF3] py-2 pl-3 pr-6 shadow rounded-md ">
									<Image src={"/contactus/let’s-talk-growth.svg"} height={50} width={50} alt="" />
									<p className="">Let’s Talk Growth</p>
								</div>
							</div>
						</div>
						<div className={`pt-14 md:pt-24 max-w-[1240px] mx-auto`}>
							<h2 className="text-[26px] text-center font-[700] mb-8 md:mb-12">{contactData && contactData.data?.attributes.section_title}</h2>
							<div className=" text-[#222] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
								{contactData &&
									contactData.data?.attributes.lists.map((data) => {
										return (
											<div className=" max-w-[400px] sm:max-w-none mx-auto bg-white text-center rounded-lg shadow px-3 py-6" key={data.id}>
												<h3 className="text-[20px] sm:text-[18px] font-[700] sm:font-[600] text-[#010101] mb-3">{data.title}</h3>
												<p className="text-[16px] text-[#222222]">{data.card_description}</p>
											</div>
										);
									})}
							</div>
						</div>
						{contactData && (
							<div className="text-center my-10 relative z-20">
								Booking calendar will load in a second (
								<Link href={`${contactData && contactData.data?.attributes.calendar_url}`} target="_blank" className="text-blue-500 underline">
									click here
								</Link>{" "}
								if it isn't loading properly):
							</div>
						)}
					</div>

					<div className="max-w-[800px] mx-auto pt-10">
						<iframe
							src={`${contactData && contactData.data?.attributes.calendar_url}`}
							// style="border: 0"
							width="100%"
							// height="700px"
							frameborder="0"
							className="h-[1200px] sm:h-[700px]"
						></iframe>
					</div>
				</div>
				<FooterTopCta pageBreakBlue={true} clientCall={true} footerTopCta={contactData && contactData.data?.attributes.footer_top_cta} />
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

export async function getStaticProps(context) {
	let URL = `${process.env.NEXT_PUBLIC_API_URL}`;
	try {
		// Fetch data from external API
		let data = await fetch(`${URL}/api/demo-call?populate=*`);
		let contactData = await data.json();

		let seo = await fetch(`${URL}/api/schedule-a-call?populate[seo][populate]=*`);
		let seoData = await seo.json();

		// Pass data to the page via props
		return {
			props: { contactData, seoData },
			revalidate: 60,
		};
	} catch (error) {
		return { props: { error: { ok: false, reason: "some error description for your own consumption, not for client side" } } };
	}
}

export default DemoCall;
