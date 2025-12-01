/* eslint-disable react/no-unescaped-entities */
"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
// import { sendContactForm } from "@/lib/api";
import { sendPricingForm } from "@/lib/pricingapi";
import { phoneSchema } from "../validation/PhoneNumberValidation";
import Link from "next/link";
import FooterTopCta from "@/components/FooterTopCta";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import FreeMarketingBanner from "@/components/others/FreeMarketingBanner";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Head from "next/head";
import ButtonMagnito from "@/components/animation/ButtonMagnito";
// import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "@/styles/Freemarketing.module.css";

let initValues = {};
let finalobj = {};

const initState = { values: initValues };

function Freemarketing({ heroData, cardData, videoSectionData, marketingPlanData, testimonialData, marketingStrategyData, footerTopCta, seoData }) {
	const [state, setState] = useState(initState);
	const [count, setCount] = useState(0);
	const [load, setLoad] = useState(false);
	const [colleps, setColleps] = useState(170);
	const [storeId, setStoreId] = useState();
	const [isColleps, setIsColleps1] = useState(false);
	const [isPhoneValid, setIsphoneValid] = useState("");

	const [phone, setPhone] = useState("");
	const [phoneCountryCode, setPhoneCountryCode] = useState("");

	const { values } = state;

	const screenRef = useRef(null);

	const handleClick = (e) => {
		event.preventDefault();
		//  setBgcolor(!bgcolor)

		setState((prev) => ({
			...prev,
			values: {
				...prev.values,
				[e.target.name]: e.target.value,
			},
		}));

		if (myref.current || secondRef.current) {
			if (e.target.classList.contains("bg-white")) {
				e.target.classList.remove("bg-white");
				e.target.classList.add("bg-red-100", "text-red-500", "border-red-500");
				setCount(count + 1);
				alartRef.current.classList.add("hidden");
				alartRef2.current.classList.add("hidden");
			} else if (e.target.classList.contains("bg-red-100")) {
				e.target.classList.remove("bg-red-100", "text-red-500", "border-red-500");
				e.target.classList.add("bg-white");
				// console.log(e.target.classList);
				setCount(count - 1);
			}
		}

		if (values) {
			alartRef3.current.classList.remove("flex");
			alartRef3.current.classList.add("hidden");
		}
	};

	//phone input function

	const handleKeyDown = (e) => {
		// Prevent the backspace key from removing the country code
		const isBackspaceOrDelete = e.key === "Backspace" || e.key === "Delete";
		const isCursorAtStart = e.target.selectionStart === phoneCountryCode.length;

		if (isBackspaceOrDelete && isCursorAtStart) {
			e.preventDefault();
		}
		console.log(phoneCountryCode.length);
	};

	const handleChange = (value, country, event) => {
		const countryCode = `+${country.dialCode}`;
		setPhoneCountryCode(countryCode);

		setPhone(value);
		// console.log(value);

		setState((prev) => ({
			...prev,
			values: {
				...prev.values,
				phone: value,
				country: country.name,
			},
		}));
	};

	useEffect(() => {
		screenRef.current = window.screen.width;
	}, []);

	const myref = useRef();
	const secondRef = useRef();
	const thirdRef = useRef();
	const alartRef = useRef();
	const alartRef2 = useRef();
	const alartRef3 = useRef();

	const onSubmit = async (e) => {
		// form field validation

		// console.log(values.phone);

		if (values.phone !== "") {
			e.preventDefault();
			const phone = values.phone;
			try {
				await phoneSchema.validate({ phone });
				if (values.name && values.email && values.phone && values.website) {
					const emailIndex = values.email.indexOf("@");
					if (emailIndex !== -1) {
						e.preventDefault();
						setLoad(true);
						setState((prev) => ({
							...prev,
						}));

						finalobj = { data: { ...values }, subject: "Free Marketing - Escape Room Marketer", form: "free-marketing" };

						const thankYouParam = values.name.split(" ")[0];
						let hexValue = [];

						for (let i = 0; i < thankYouParam.length; i++) {
							hexValue.push(
								"%" + (i === 0 ? thankYouParam.charAt(0).toUpperCase().charCodeAt(0).toString(16) : thankYouParam.charCodeAt(i).toString(16))
							);
						}

						let hexString = hexValue.join("");
						let urlEncodedString = encodeURIComponent(hexString);

						setTimeout(() => {
							location.replace(`https://escaperoommarketer.com/thank-you?%256e=${urlEncodedString}`);
							setLoad(false);
						}, 700);

						try {
							await sendPricingForm(finalobj);
						} catch (error) {
							console.log(error);
						}
					}
				} else {
					e.preventDefault();
					alartRef3.current.classList.remove("hidden");
					alartRef3.current.classList.add("flex");
				}
			} catch (error) {
				console.error(error.errors[0]);
				setIsphoneValid(error.errors[0]);
				setTimeout(() => {
					setIsphoneValid("");
				}, 800);
			}
		}
	};

	const changeHandler = (a, e) => {
		if (screenRef.current < 1024) {
			setTimeout(() => {
				window.scrollTo(0, 400);
			}, 1000);
		}

		if (count !== 0) {
			setLoad(true);
			e.target.classList.add("bg-[#f9868a]");
			setCount(0);
			if (a == 1) {
				// e.target.classList.add("hidden");
				// chakraRef.current.classList.remove("hidden");
				// chakraRef1.current.classList.remove("hidden");
				setTimeout(() => {
					myref.current.classList.remove("block");
					myref.current.classList.add("hidden");
					secondRef.current.classList.remove("hidden");
					// chakraRef.current.classList.add("hidden");
					setLoad(false);
				}, 1000);
			} else if (a == 2) {
				// e.target.classList.add("hidden");
				// chakraRef1.current.classList.remove("hidden");
				setTimeout(() => {
					secondRef.current.classList.add("hidden");
					thirdRef.current.classList.remove("hidden");
					setLoad(false);
				}, 1000);
			}
		} else {
			if (a == 1) {
				alartRef.current.classList.remove("hidden");
				alartRef.current.classList.add("flex");
			} else if (a == 2) {
				alartRef2.current.classList.remove("hidden");
				alartRef2.current.classList.add("flex");
			}
			console.log(alartRef);
		}
	};

	//testimonial mobile view text spand function

	const handleSpanText = (id, message) => {
		setStoreId(id);
		if (isColleps == false) {
			setColleps(message.length);
			setIsColleps1(true);
		} else {
			setColleps(170);
			setIsColleps1(false);
		}
	};

	//draw canvas , spider effect

	useEffect(() => {
		// setTimeout(() => {
		// 	let banner = document.querySelector(".bannerr");
		// 	let canvas = document.getElementById("dotsCanvas");
		// 	let ctx = canvas.getContext("2d");
		// 	canvas.width = banner.offsetWidth;
		// 	canvas.height = banner.offsetHeight;
		// 	if (banner) {
		// 		console.log(banner.offsetHeight);
		// 	}
		// 	let dots = [];
		// 	let arrayColors = ["#088F8F", "#545454", "#596d91", "#696541", "#bb5a68"];
		// 	for (let index = 0; index < 60; index++) {
		// 		dots.push({
		// 			x: Math.floor(Math.random() * canvas.width),
		// 			y: Math.floor(Math.random() * canvas.height),
		// 			size: Math.random() * 3 + 2,
		// 			color: arrayColors[Math.floor(Math.random() * 5)],
		// 		});
		// 	}
		// 	const drawDots = () => {
		// 		dots.forEach((dot) => {
		// 			ctx.fillStyle = dot.color;
		// 			ctx.beginPath();
		// 			ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
		// 			ctx.fill();
		// 		});
		// 	};
		// 	drawDots();
		// 	const handleMouseMove = (event) => {
		// 		ctx.clearRect(0, 0, canvas.width, canvas.height);
		// 		drawDots();
		// 		let mouse = {
		// 			x: event.pageX - banner.getBoundingClientRect().left - window.scrollX,
		// 			y: event.pageY - banner.getBoundingClientRect().top - window.scrollY, // Adjust upward by 20px
		// 		};
		// 		dots.forEach((dot) => {
		// 			let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
		// 			if (distance < 300) {
		// 				ctx.strokeStyle = dot.color;
		// 				ctx.lineWidth = 1;
		// 				ctx.beginPath();
		// 				ctx.moveTo(dot.x, dot.y);
		// 				ctx.lineTo(mouse.x, mouse.y);
		// 				ctx.stroke();
		// 			}
		// 		});
		// 	};
		// 	const handleMouseOut = () => {
		// 		ctx.clearRect(0, 0, canvas.width, canvas.height);
		// 		drawDots();
		// 	};
		// 	banner.addEventListener("mousemove", handleMouseMove);
		// 	banner.addEventListener("mouseout", handleMouseOut);
		// }, 1000);
		// Cleanup event listeners and context on unmount
		// return () => {
		// 	banner.removeEventListener("mousemove", handleMouseMove);
		// 	banner.removeEventListener("mouseout", handleMouseOut);
		// 	ctx.clearRect(0, 0, canvas.width, canvas.height);
		// };
	}, []);

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
			{/* there are a banner component that is renderd from _app.js page */}
			<div className="w-full h-full">
				<div className="hero_section bannerr relative  bg-[var(--section-bg-lightred)] 2xl:h-[inherit] pb-[100px] md:pb-20 ">
					<div className="hero_text pt-16 md:pt-24">
						<h1 className=" hero_heading text-center  font-extrabold ">
							{heroData && heroData.data.attributes.hero_title_first_line} <br className="hidden xl:block" />{" "}
							{heroData && heroData.data.attributes.hero_title_second_line}
						</h1>
						<p className="g__section-description text-center m-auto px-[10px]">{heroData && heroData.data.attributes.description}</p>
					</div>
					<div className="mx-[10px]">
						<div className="max-w-lg lg:flex justify-between lg:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto pt-28 lg:pt-24  relative">
							<div className="hero_img ">
								<Image src={`/freemarketing/free-marketing-left.svg`} alt="" height={100} width={220} className="hidden lg:block -mt-8 2xl:ml-20" />
							</div>
							<Image
								src={`/freemarketing/escape-room-free-marketing.svg`}
								alt=""
								height={100}
								width={600}
								className="lg:hidden h-[150px] absolute -top-[55px]   left-[50%] translate-x-[-50%] opacity-[0.1]"
							/>
							<div className="">
								<div
									ref={myref}
									className="form_card lg:max-w-4xl 2xl:max-w-5xl block lg:absolute z-10 shadow  left-[50%] lg:translate-x-[-50%] bg-white w-[100%] lg:w-[1000px] px-4 sm:px-16 md:px-20 py-8"
								>
									<h3 className="font-[700] text-center text-xl ">{cardData && cardData.data.attributes.card_view.card_view_first.card_title}</h3>
									<p className=" text-lg text-center pb-6">{cardData && cardData.data.attributes.card_view.card_view_first.card_sub_title}</p>
									<form action="" className=" flex flex-col lg:grid lg:grid-cols-6 items-center gap-3 lg:gap-6">
										<button
											onClick={handleClick}
											name="serveice1"
											value={cardData && cardData.data.attributes.card_view.card_view_first.service1}
											className={`border-[1px] border-[#d7d7d7] w-full md:hover:bg-red-50 rounded px-4 py-3 text-[18px] lg:text-[16px] font-[500] col-start-[1] col-end-[3] bg-white duration-300 shadow `}
										>
											{cardData && cardData.data.attributes.card_view.card_view_first.service1}
										</button>

										<button
											onClick={handleClick}
											name="serveice2"
											value={cardData && cardData.data.attributes.card_view.card_view_first.service2}
											className={`border-[1px] border-[#d7d7d7] w-full md:hover:bg-red-50 rounded shadow px-4 py-3 text-[18px] lg:text-[16px] font-[500] col-start-[3] col-end-[5] duration-300 bg-white`}
										>
											{cardData && cardData.data.attributes.card_view.card_view_first.service2}
										</button>
										<button
											onClick={handleClick}
											name="serveice3"
											value={cardData && cardData.data.attributes.card_view.card_view_first.service3}
											className="border-[1px] border-[#d7d7d7] w-full  md:hover:bg-red-50 rounded shadow px-4 py-3 text-[18px] lg:text-[16px] font-[500] col-start-[5] col-end-[7] duration-300 bg-white"
										>
											{cardData && cardData.data.attributes.card_view.card_view_first.service3}
										</button>
										<button
											onClick={handleClick}
											name="serveice4"
											value={cardData && cardData.data.attributes.card_view.card_view_first.service4}
											className="border-[1px] border-[#d7d7d7] w-full  md:hover:bg-red-50 rounded shadow px-4 py-3 text-[18px] lg:text-[16px] font-[500] col-start-[1] col-end-[3] duration-300 bg-white"
										>
											{cardData && cardData.data.attributes.card_view.card_view_first.service4}
										</button>
										<button
											onClick={handleClick}
											name="serveice5"
											value={cardData && cardData.data.attributes.card_view.card_view_first.service5}
											className="border-[1px] border-[#d7d7d7] w-full md:hover:bg-red-50 rounded shadow px-4 py-3 text-[18px] lg:text-[16px] font-[500] col-start-[3] col-end-[4] duration-300 bg-white"
										>
											{cardData && cardData.data.attributes.card_view.card_view_first.service5}
										</button>
										<button
											onClick={handleClick}
											name="serveice6"
											value={cardData && cardData.data.attributes.card_view.card_view_first.service6}
											className="border-[1px] border-[#d7d7d7] w-full  md:hover:bg-red-50 rounded shadow px-4 py-3 text-[18px] lg:text-[16px] font-[500] col-start-[4] col-end-[7] duration-300 bg-white"
										>
											{cardData && cardData.data.attributes.card_view.card_view_first.service6}
										</button>
										<button
											onClick={handleClick}
											name="serveice7"
											value={cardData && cardData.data.attributes.card_view.card_view_first.service7}
											className="border-[1px] border-[#d7d7d7] w-full  md:hover:bg-red-50 rounded shadow px-4 py-3 text-[18px] lg:text-[16px] font-[500] col-start-[1] col-end-[3] duration-300 bg-white"
										>
											{cardData && cardData.data.attributes.card_view.card_view_first.service7}
										</button>
										<button
											onClick={handleClick}
											name="serveice8"
											value={cardData && cardData.data.attributes.card_view.card_view_first.service8}
											className="border-[1px] border-[#d7d7d7] w-full  md:hover:bg-red-50 rounded shadow px-4 py-3 text-[18px] lg:text-[16px] font-[500] col-start-[3] col-end-[5] duration-300 bg-white"
										>
											{cardData && cardData.data.attributes.card_view.card_view_first.service8}
										</button>
										<button
											onClick={handleClick}
											name="serveice9"
											value={cardData && cardData.data.attributes.card_view.card_view_first.service9}
											className="border-[1px] border-[#d7d7d7] w-full  md:hover:bg-red-50 rounded shadow px-4 py-3 text-[18px] lg:text-[16px] font-[500] col-start-[5] col-end-[7] duration-300 bg-white"
										>
											{cardData && cardData.data.attributes.card_view.card_view_first.service9}
										</button>
									</form>
									<div className="flex justify-center mt-8">
										{/* <ButtonMagnito> */}
											<button
												onClick={(e) => changeHandler(1, e)}
												className="magneto bg-[#FF492C] hover:bg-[#E74329] py-3 px-5 lg:px-8 text-white  md:text-lg  rounded font-bold flex justify-center items-center"
											>
												<span className="text select-none">
													{load === true ? "Please wait..." : cardData && cardData.data.attributes.card_view.card_view_first.card_cta}
												</span>
											</button>
										{/* </ButtonMagnito> */}
									</div>

									{/* <div ref={chakraRef} className="chakra_loading  hidden">
						<Skeleton startColor="pink.500" endColor="green.500" height="25px" />
					</div> */}

									<div ref={alartRef} className="alart hidden items-center gap-6 mt-4 bg-orange-100 py-1 pl-6 rounded">
										<RiErrorWarningFill className="text-2xl text-orange-400 font-bold " />
										<p className="text-[12px] md:text-[16px]">You must choose at least one service to continue</p>
									</div>
								</div>
								<div
									ref={secondRef}
									className="second_card hidden lg:max-w-4xl 2xl:max-w-5xl lg:absolute z-10 shadow  left-[50%] lg:translate-x-[-50%] bg-white w-[100%] lg:w-[1000px] px-8 md:px-20 pt-10 pb-8"
								>
									<h3 className="font-[700] text-center text-xl ">{cardData && cardData.data.attributes.card_view.card_view_second.card_title}</h3>
									<p className=" text-lg text-center pb-6">{cardData && cardData.data.attributes.card_view.card_view_second.card_sub_title}</p>
									<form action="" className=" flex flex-col lg:grid lg:grid-cols-6 items-center gap-3 lg:gap-6">
										<button
											onClick={handleClick}
											name="goal1"
											value={cardData && cardData.data.attributes.card_view.card_view_second.goal_1}
											className={`border-[1px] border-[#d7d7d7] w-full md:hover:bg-red-50 rounded shadow px-4 py-3 text-[18px] lg:text-[16px] font-[500] col-start-[1] col-end-[3] duration-300 bg-white `}
										>
											{cardData && cardData.data.attributes.card_view.card_view_second.goal_1}
										</button>

										<button
											onClick={handleClick}
											name="goal3"
											value={cardData && cardData.data.attributes.card_view.card_view_second.goal_3}
											className="border-[1px] border-[#d7d7d7] w-full  md:hover:bg-red-50 rounded shadow px-4 py-3 text-[18px] lg:text-[16px] font-[500] col-start-[3] col-end-[5] duration-300 bg-white"
										>
											{cardData && cardData.data.attributes.card_view.card_view_second.goal_3}
										</button>
										<button
											onClick={handleClick}
											name="goal4"
											value={cardData && cardData.data.attributes.card_view.card_view_second.goal_4}
											className="border-[1px] border-[#d7d7d7] w-full  md:hover:bg-red-50 rounded shadow px-4 py-3 text-[18px] lg:text-[16px] font-[500] col-start-[5] col-end-[7] duration-300 bg-white"
										>
											{cardData && cardData.data.attributes.card_view.card_view_second.goal_4}
										</button>
										<button
											onClick={handleClick}
											name="goal2"
											value={cardData && cardData.data.attributes.card_view.card_view_second.goal_2}
											className={`border-[1px] border-[#d7d7d7] w-full md:hover:bg-red-50 rounded shadow px-2 py-3 text-[18px] lg:text-[16px] font-[500] col-start-[1] col-end-[4] duration-300 bg-white`}
										>
											{cardData && cardData.data.attributes.card_view.card_view_second.goal_2}
										</button>
										<button
											onClick={handleClick}
											name="goal5"
											value={cardData && cardData.data.attributes.card_view.card_view_second.goal_5}
											className="border-[1px] border-[#d7d7d7] w-full md:hover:bg-red-50 rounded shadow px-4 py-3 text-[18px] lg:text-[16px] font-[500] col-start-[4] col-end-[7] duration-300 bg-white"
										>
											{cardData && cardData.data.attributes.card_view.card_view_second.goal_5}
										</button>
										<button
											onClick={handleClick}
											name="goal6"
											value={cardData && cardData.data.attributes.card_view.card_view_second.goal_6}
											className="border-[1px] border-[#d7d7d7] w-full md:hover:bg-red-50 rounded shadow px-4 py-3 text-[18px] lg:text-[16px] font-[500] col-start-[2] col-end-[4] duration-300 bg-white"
										>
											{cardData && cardData.data.attributes.card_view.card_view_second.goal_6}
										</button>
										<button
											onClick={handleClick}
											name="goal7"
											value={cardData && cardData.data.attributes.card_view.card_view_second.goal_7}
											className="border-[1px] border-[#d7d7d7] w-full md:hover:bg-red-50 rounded shadow px-4 py-3 text-[18px] lg:text-[16px] font-[500] col-start-[4] col-end-[6] duration-300 bg-white"
										>
											{cardData && cardData.data.attributes.card_view.card_view_second.goal_7}
										</button>
									</form>
									<div className="flex justify-center mt-8">
										<button
											onClick={(e) => changeHandler(2, e)}
											className="bg-[#FF492C] hover:bg-[#E74329] py-3 px-14 text-white  md:text-lg  rounded font-semibold"
										>
											{load === true ? "Please wait..." : cardData && cardData.data.attributes.card_view.card_view_second.card_cta}
										</button>
									</div>
									<div ref={alartRef2} className="alart2 hidden items-center gap-6 mt-4 bg-orange-100 py-1 pl-6 rounded">
										<RiErrorWarningFill className="text-2xl text-orange-400 font-bold " />
										<p className="text-[12px] md:text-[16px]">You must choose at least one goal to continue</p>
									</div>
								</div>
								<div
									ref={thirdRef}
									className="third-form hidden lg:max-w-4xl 2xl:max-w-5xl lg:absolute z-10 shadow  left-[50%] lg:translate-x-[-50%] bg-white w-[100%] lg:w-[1000px] "
								>
									<div className="">
										<div className="px-4 md:px-14 py-8 md:py-10">
											<h3 className="font-[600] text-center max-w-[600px] mx-auto text-xl ">
												{cardData && cardData.data.attributes.card_view.card_view_third.card_title}
											</h3>
											<form action="" className=" text-xl mt-8">
												<div className="flex flex-col items-center gap-3">
													<div className="flex flex-col lg:flex-row justify-center items-center gap-5">
														<div>
															<label htmlFor="name" className="text-[16px] font-[500]">
																Your name<span className="text-[20px] text-[#FF492C]">*</span>
															</label>{" "}
															<br />
															<input
																type="text"
																id="name"
																name="name"
																required
																onChange={handleClick}
																className="p-2 w-[280px] border-[1px] border-[#d7d7d7] outline-[#FF492C] mt-1"
															/>
														</div>
														<div>
															<label htmlFor="email" className="text-[16px] font-[500]">
																Your business email<span className="text-[20px] text-[#FF492C]">*</span>
															</label>
															<br />
															<input
																type="email"
																id="email"
																name="email"
																required={true}
																onChange={handleClick}
																className="p-2 border-[1px] w-[280px] border-[#d7d7d7] outline-[#FF492C] mt-1"
															/>
														</div>
													</div>
													<div className="flex flex-col lg:flex-row justify-center items-center gap-5">
														<div>
															<label htmlFor="email" className="text-[16px] font-[500]">
																Your website<span className="text-[20px] text-[#FF492C]">*</span>
															</label>
															<br />
															<input
																type="text"
																id="website"
																name="website"
																required={true}
																onChange={handleClick}
																className="p-2 border-[1px] w-[280px] border-[#d7d7d7] outline-[#FF492C] mt-1"
															/>
														</div>
														<div className="relative">
															<label htmlFor="phone" className="text-[16px] font-[500]">
																Your phone number<span className="text-[20px] text-[#FF492C]">*</span>
															</label>
															<br />
															<PhoneInput
																country={"us"}
																preferredCountries={["us", "ca", "gb", "au"]}
																inputProps={{
																	required: true,
																}}
																onChange={handleChange}
																onKeyDown={handleKeyDown}
																value={phone}
																type="number"
																id="phone"
																name="phone"
																inputStyle={{
																	width: "280px",
																	height: "45px",
																	border: "1px solid #d7d7d7",
																	borderRadius: "0px ",
																}}
																className="input-phone-number w-[280px] border-[#d7d7d7] mt-1"
															/>
															{isPhoneValid !== "" && (
																<p className="text-[14px] text-[] rounded absolute bottom-[-55px] left-[10%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:top-[-45%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
																	⚠️ {isPhoneValid}
																</p>
															)}
														</div>
													</div>
												</div>

												<div className="flex justify-center mt-8 lg:mt-8">
													<input
														type="submit"
														onClick={onSubmit}
														value={load === true ? "Please Wait..." : cardData && cardData.data.attributes.card_view.card_view_third.card_cta}
														className="bg-[#FF492C] cursor-pointer hover:bg-[#E74329] py-3 px-5 lg:px-10 text-white text-[15px]  sm:text-lg rounded font-bold"
													/>
												</div>
											</form>
											<div ref={alartRef3} className="alart3 hidden items-center gap-6 mt-4 bg-orange-100 pr-8 py-1 pl-4 md:pl-6 rounded ">
												<RiErrorWarningFill className="text-2xl text-orange-400 font-bold " />
												<p className="text-[12px] md:text-[14px]">You must fill out the required fields to continue</p>
											</div>
										</div>
										{/* <div className="flex-[2] max-w-[100%] bg-[#f9f9f9] border-[8px] border-[#f2f2f2] py-8 px-4">
											<div className="img-text flex flex-col items-center border-b-[3px] border-gray-300 pb-6 ">
												<Image src={"/contactus/phone-call.svg"} alt="" width={70} height={100} />
												<h1 className=" font-semibold text-xl pt-4">Prefer to call?</h1>
												<p className=" text-lg text-center 2xl:w-[200px]">Call us directly and we can get the ball rolling.</p>
											</div>
											<div className="text-center mt-4">
												<h1 className="text-lg lg:text-xl font-bold">CALL NOW</h1>
												<p className="text-xl pt-2 text-red-500 font-semibold">
													{cardData && cardData.data.attributes.card_view.card_view_third.phone_number}
												</p>
											</div>
										</div> */}
									</div>
								</div>
							</div>

							<div className="hero_img ">
								<Image
									src={`/freemarketing/free-marketing-right.svg`}
									alt=""
									height={100}
									width={220}
									className=" hidden lg:block -mt-8 2xl:mr-20 absolut"
								/>
							</div>
						</div>
					</div>

					<canvas
						id="dotsCanvas"
						style={{ height: "100%", width: "100%" }}
						className="absolute bg-transparent pointer-events-none top-0 left-0 z-40 opacity-30 "
					></canvas>
				</div>

				<div className="break_line image bg-[url('/footer_top_cta_bottom.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-10 mt-[-65px] rotate-180 bg-center"></div>
			</div>
		</div>
	);
}

export async function getStaticProps(context) {
	let URL = `${process.env.NEXT_PUBLIC_API_URL}`;
	try {
		// Fetch data from external API
		let data = await fetch(`${URL}/api/free-marketing-plan`);
		let heroData = await data.json();

		let card = await fetch(`${URL}/api/free-marketing-plan?populate[card_view][populate]=*`);
		let cardData = await card.json();

		let videoSection = await fetch(`${URL}/api/free-marketing-plan?populate[video_section][populate]=*`);
		let videoSectionData = await videoSection.json();

		let marketingPlan = await fetch(
			`${URL}/api/free-marketing-plan?populate[0]=marketing_plan&populate[1]=marketing_plan.marketing_card&populate[2]=marketing_plan.marketing_card.image`
		);
		let marketingPlanData = await marketingPlan.json();

		let testimonial = await fetch(
			`${URL}/api/free-marketing-plan?populate[0]=testimonial&populate[1]=testimonial.testimonial_data&populate[2]=testimonial.testimonial_data.persons_image&populate[3]=testimonial.testimonial_data.company_logo`
		);
		let testimonialData = await testimonial.json();

		let marketingStrategy = await fetch(
			`${URL}/api/free-marketing-plan?populate[0]=marketing_strategy&populate[1]=marketing_strategy.marketing_plan_card&populate[2]=marketing_strategy.marketing_plan_card.image`
		);
		let marketingStrategyData = await marketingStrategy.json();

		let footerData = await fetch(`${URL}/api/free-marketing-plan?populate[footer_top_cta][populate]=*`);
		let footerTopCta = await footerData.json();

		let seo = await fetch(`${URL}/api/free-marketing-plan?populate[seo][populate]=*`);
		let seoData = await seo.json();
		// Pass data to the page via props
		return {
			props: { heroData, cardData, videoSectionData, marketingPlanData, testimonialData, marketingStrategyData, footerTopCta, seoData },
			revalidate: 60,
		};
	} catch (error) {
		return { props: { error: { ok: false, reason: "some error description for your own consumption, not for client side" } } };
	}
}

export default Freemarketing;
