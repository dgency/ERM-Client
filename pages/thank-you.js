/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import thankYouAnimation from "../public/others/Thank You Page - Escape Room Marketer.json";
import Router from "next/router";
import { useRouter } from "next/router";
import Script from "next/script";
import Link from "next/link";
import styles from "@/styles/blogdetails.module.css";
import NotFound from "./404";

function ThankYou() {
	const router = useRouter();
	const [state, setState] = useState();
	const [name, setName] = useState();

	useEffect(() => {
		// window.location.reload();
		const APIurl = `${process.env.NEXT_PUBLIC_API_URL}/api/thank-you`;

		fetch(`${APIurl}?populate=*`)
			.then((res) => res.json())
			.then((data) => setState(data));

		//redirect url if direct thank-you url hit

		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);

		// Get the value of the 'name' parameter
		const name = urlParams.get("%6e");
		let decodeName = decodeURIComponent(name)
		setName(decodeName);

		if (name === null) {
			location.replace("https://escaperoommarketer.com/");
		}
	}, [router]);

	if (name !== null) {
		return (
			<div className=" ">
				{/* <div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center -mt-10 bg-[var(--section-bg-lightred)]"></div> */}
				<div className="g-page_structure  bg-[var(--section-bg-lightred)]">
					<div className="max-w-[400px] mx-auto pt-8 md:pt-10 pb-8 md:pb-12">
						<Lottie loop={true} animationData={thankYouAnimation} className="" />
					</div>
				</div>
				{/* <div className="break_line image bg-[url('/section_break_red-footer.svg')] h-[80px] bg-[length:3200px_90px]    bg-center"></div> */}
				<div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:2500px_90px]  bg-center"></div>
				<div className="g-page_structur px-[15px]  bg-[var(--section-bg-lightblue)]">
					<div className="text-[18px] pt-8 md:pt-14 pb-10 md:pb-12 max-w-[1000px] mx-auto text-[#353535] font-[400]">
						<ul className=" ">
							<li className="mb-6">
								Congrats{" "}
								<span className="font-bold pl-1"> {name && name}</span>
								!
							</li>
							<div className={styles.blog_details} dangerouslySetInnerHTML={{ __html: state && state.data.attributes.calender_top_message }} />

							<li className="mb-6">
								Booking calendar will load in a second (
								<Link
									href={`${
										state && state.data.attributes.calenly_url ? state.data.attributes.calenly_url : "https://calendly.com/escaperoommarketer/30min"
									}`}
									className="text-blue-500 underline"
								>
									click here
								</Link>{" "}
								if it isn't loading properly):
							</li>
						</ul>

						<div className="my-6 h-[1100px] lg:h-[700px]">
							<div
								className="calendly-inline-widget"
								data-url={`${
									state && state.data.attributes.calenly_url
										? state.data.attributes.calenly_url
										: "https://calendly.com/escaperoommarketer/30min?hide_gdpr_banner=1"
								}`}
								style={{ maxWidth: "1000px", height: "100%" }}
							></div>
							<Script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></Script>
						</div>

						<div className="my-16">
							<div className={styles.blog_details} dangerouslySetInnerHTML={{ __html: state && state.data.attributes.calender_bottom_message }} />
						</div>

						<div className=" flex flex-col md:flex-row items-center gap-5">
							<Image
								src={`${
									state && state.data.attributes.image.data
										? state.data.attributes.image.data.attributes.url
										: "/others/h_m-hamiduzjaman_escaperoom-marketer_founder.png"
								}`}
								height={100}
								width={140}
								alt=""
								className=""
							/>
							<div className="flex flex-col items-center md:items-start text-center md:text-left">
								<Image src="/others/Hamid Signature.svg" height={100} width={100} alt="" className="object-cover mb-2  " />
								<h5 className="text-xl font-bold">Hamid Shawon</h5>
								<p className=" text-lg text-[#808080]">Captain, Escape Room Marketer</p>
							</div>
						</div>
					</div>
				</div>
				<div className="break_line image bg-[url('/section_break_blue-footer.svg')] h-[80px] bg-[length:3200px_90px]    bg-center"></div>
			</div>
		);
	} else {
		return <NotFound />;
	}
}

export default ThankYou;
