/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { HiMenu } from "react-icons/hi";
import { BiChevronRight } from "react-icons/bi";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import Button3D from "./animation/Button3D";

let nav_id;
let mb_service_count = 0;
let mb_count = 0;

function Navbar({ marketingBanner }) {
	const router = useRouter();
	// console.log(marketingBanner);
	const [open, setOpen] = useState(false);
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [serviceMenubar, setServiceMenubar] = useState(false);

	const [resourcesOpen, setResourcesOpen] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);

	const [quizeState, setQuizeState] = useState(false);
	const [mobileQuizeState, setMobileQuizeState] = useState(false);

	const [moreState, setMoreState] = useState(false);
	const [mobileMoreState, setMobileMoreState] = useState(false);

	const [contact, setContact] = useState(false);
	const [mobileContact, setMobileContact] = useState(false);

	const [quizzData, setQuizzData] = useState();
	const [quizzSortedData, setQuizzSortedData] = useState();

	const serveiceRef = useRef();
	const serviceBtnRef = useRef();
	const sidebarMainref = useRef();
	const sidebarServiceref = useRef();
	const hamburgRef = useRef();
	const resourceBtnRef = useRef();
	const navRef = useRef();

	const quizzesRef = useRef();
	const moreNavRef = useRef();
	const contactRef = useRef();

	const handlePopup = (e) => {
		setServiceMenubar(!serviceMenubar);
	};

	const handleHamburg = () => {
		const navbar = document.getElementById("navbar");
		setSidebarOpen(true);
		document.body.classList.add("overflow-hidden");
		// this is for free marketing page top banner style
		navbar.style.top = "0";
	};

	const closeSidebar = () => {
		const navbar = document.getElementById("navbar");
		setSidebarOpen(false);
		document.body.classList.remove("overflow-hidden");
		// this is for free marketing page top banner style
		if (marketingBanner === true) {
			navbar.style.top = "56px";
		}
		setMobileQuizeState(false);
		setMobileMoreState(false);
		setMobileContact(false);
		setMobileOpen(false);
		setOpen(false);
	};

	useEffect(() => {
		//veriables
		let nav2Item = document.getElementById("nav2");
		let nav_results = document.getElementById("nav6");
		let navItemClick = document.getElementsByClassName("nav_item");
		let serveiceClick = document.getElementsByClassName("serveice_list");
		let resourcesClick = document.getElementsByClassName("resources_content");
		const navbar = document.getElementById("navbar");

		// all popup close functionality , if click outside of the popup then it will close. also navigation select color add or remove

		document.addEventListener("click", (e) => {
			if (sidebarMainref.current) {
				if (!sidebarMainref.current.contains(e.target) && !hamburgRef.current.contains(e.target)) {
					setSidebarOpen(false);
				}
				// mobile nav service item active off
				if (e.target.classList.contains("logo_img") || e.target.classList.contains("marketing_plan")) {
					if (mb_service_count > 0) {
						let mbNavServiceItem = document.querySelector(".mb-nav-service_item");
						mbNavServiceItem.classList.remove("text-[#ff492c]");
						mbNavServiceItem.classList.remove("mb-nav-service_item");
						mb_service_count = 0;
					}
				}
			}

			if (serveiceRef.current) {
				if (!serveiceRef.current.contains(e.target) && !serviceBtnRef.current.contains(e.target)) {
					setServiceMenubar(false);
				}
			}

			if (resourceBtnRef.current) {
				if (!resourceBtnRef.current.contains(e.target)) {
					setResourcesOpen(false);
				}
			}
			if (quizzesRef.current) {
				if (!quizzesRef.current.contains(e.target)) {
					setQuizeState(false);
				}
			}
			if (moreNavRef.current) {
				if (!moreNavRef.current.contains(e.target)) {
					setMoreState(false);
				}
			}
			if (contactRef.current) {
				if (!contactRef.current.contains(e.target)) {
					setContact(false);
				}
			}
		});

		// Navbar OnScroll functionality

		var lastScrollTop = 0;

		window.addEventListener("scroll", function () {
			let scrollTop = window.scrollY || document.documentElement.scrollTop;
			// if (scrollTop > 100) {
			if (scrollTop > lastScrollTop) {
				navbar.style.top = "-120px";
				setServiceMenubar(false);
				setResourcesOpen(false);
				setQuizeState(false);
				setMoreState(false);
			} else if (lastScrollTop > scrollTop + 20) {
				navbar.style.top = "0";
			} else if (scrollTop === 0) {
				if (marketingBanner === true) {
					navbar.style.top = "56px";
				} else if (marketingBanner === false) {
					navbar.style.top = "0";
				}
			}

			// }

			lastScrollTop = scrollTop;
		});
	});

	//api call for dynamic quizz navbar

	useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/quizz-details?populate[nav_icon].[populate]=*`)
			.then((res) => res.json())
			.then((data) => setQuizzData(data));
	}, []);

	useEffect(() => {
		if (quizzData) {
			let finalData = quizzData.data.reduce(function (accumulator, currentValue) {
				if (typeof currentValue.id === "number") {
					// Insert currentValue into the correct position in the accumulator array
					const index = accumulator.findIndex((item) => item.id >= currentValue.id);
					if (index === -1) {
						accumulator.push(currentValue);
					} else {
						accumulator.splice(index, 0, currentValue);
					}
				}
				return accumulator;
			}, []);
			setQuizzSortedData(finalData);
		}
	}, [quizzData]);

	//--------------------------//

	// when the route is changed then have to positioned the navbar

	useEffect(() => {
		const navbar = document.getElementById("navbar");

		if (marketingBanner === true) {
			navbar.style.top = "56px";
		} else {
			navbar.style.top = "0";
		}
		setQuizeState(false);
		setMoreState(false);
		setServiceMenubar(false);
		setResourcesOpen(false);
		setSidebarOpen(false);
		setContact(false);

		document.body.classList.remove("overflow-hidden");
	}, [router, marketingBanner]);
	// marketingBanner

	// mobile menu sub menu style and onclick sub menu NavItem, menu bar will be closed

	const handleMobileMenuService = (e) => {
		setSidebarOpen(false);
		document.body.classList.remove("overflow-hidden");
	};

	//for mobile sidebar menu common function and  nav menu item active color on

	const handleMainSingleMenu = (e) => {
		setOpen(false);
		setMobileQuizeState(false);
		setMobileOpen(false);
		setMobileMoreState(false);
	};

	//for mobile sidebar sub menu list

	const handleSidebarService = (e) => {
		setOpen(!open);
		setMobileQuizeState(false);
		setMobileOpen(false);
		setMobileMoreState(false);
		setMobileContact(false);
	};

	const handleResourcePopup = () => {
		setResourcesOpen(!resourcesOpen);
	};

	const handleResourcePopupMobile = () => {
		setMobileOpen(!mobileOpen);
		setMobileQuizeState(false);
		setMobileMoreState(false);
		setMobileContact(false);
		setOpen(false);
	};

	const handleQuizePopup = () => {
		setQuizeState(!quizeState);
	};

	const handleQuizePopupMobile = () => {
		setMobileQuizeState(!mobileQuizeState);
		setMobileMoreState(false);
		setMobileContact(false);
		setMobileOpen(false);
		setOpen(false);
	};

	const handleMorePopupMobile = () => {
		setMobileMoreState(!mobileMoreState);
		setMobileQuizeState(false);
		setMobileContact(false);
		setMobileOpen(false);
		setOpen(false);
	};

	const handleContactPopupMobile = () => {
		setMobileContact(!mobileContact);
		setMobileQuizeState(false);
		setMobileMoreState(false);
		setMobileOpen(false);
		setOpen(false);
	};

	const handleClick = (e) => {
		e.preventDefault(); // Prevent immediate navigation
		setTimeout(() => {
			router.push("/free-marketing"); // Navigate after delay
		}, 600); // Delay in milliseconds
	};

	return (
		<div id="navbar" className={`z-50 sticky w-full bg-white duration-300 pt-4  ${marketingBanner === true ? "top-14" : "top-0"} `}>
			<div>
				<div ref={navRef} className="nav_container ">
					<div className="flex justify-between items-center  relative ">
						<Link href={"/"} className="cursor-pointer ">
							<Image
								src="/logo.svg"
								alt="logo"
								height={40}
								width={170}
								quality={100}
								className="logo_img h-[40px] w-[120px] sm:w-[150px] lg:w-[170px]"
							/>
						</Link>

						<div className="nav_elements flex gap-3 md:gap-[10px] xl:gap-10 items-center ">
							<ul className="hidden lg:flex lg:gap-[14px] xl:gap-[20px] font-[600]  ">
								<li id="nav1" className=" hover:text-[#ff492c] duration-300 flex items-center text-[14px] xl:text-[15px] xl:mr-2">
									<Link href={"/pricing"} className={` ${router.asPath === "/pricing" ? "text-[#ff492c]" : " "}`}>
										PRICING
									</Link>
								</li>
								<li
									id="nav2"
									ref={serviceBtnRef}
									onClick={handlePopup}
									className={` group cursor-pointer flex items-center gap-0 xl:gap-1 text-[14px] xl:text-[15px] hover:text-[#ff492c] duration-300 ${
										router.asPath === "/services" ||
										router.asPath === "/google-ads" ||
										router.asPath === "/microsoft-ads" ||
										router.asPath === "/seo" ||
										router.asPath === "/facebook-ads" ||
										router.asPath === "/linkedin-ads" ||
										router.asPath === "/social-media-management" ||
										router.asPath === "/landing-page-development" ||
										router.asPath === "/website-development" ||
										router.asPath === "/email-marketing"
											? "text-[#ff492c]"
											: ""
									}`}
								>
									SERVICES{" "}
									<MdKeyboardArrowDown className={`arrow_rotate text-xl xl:text-[22px] duration-300 ${serviceMenubar ? "rotate-180" : ""}`} />
								</li>
								<div ref={resourceBtnRef} className="relative">
									<li
										// nav_item
										id="nav6"
										onClick={handleResourcePopup}
										className={`cursor-pointer flex items-center text-[14px] xl:text-[15px] gap-0 xl:gap-1 hover:text-[#ff492c] duration-300 ${
											router.asPath === "/case-studies" || router.asPath === "/testimonials" || router.asPath === "/projects" ? "text-[#ff492c]" : ""
										}`}
									>
										RESULTS <MdKeyboardArrowDown className={`text-xl xl:text-[22px] duration-300 ${resourcesOpen ? "rotate-180" : ""}`} />
									</li>

									<div
										className={`serveice_popup w-[450px]  absolute top-12 left-[-150px] bg-white px-8 py-8 shadow-md ${
											resourcesOpen ? "block" : "hidden"
										}`}
									>
										<ul>
											<li id="q2" className=" group mb-4">
												<Link href={"/case-studies"} className={`result-item `}>
													<div
														className={`${
															router.asPath === "/case-studies" ? "text-[#ff492c] bg-[#FFF7F5]" : "bg-[#F5FAFF] group-hover:bg-[#FFF7F5]"
														} shadow flex items-center rounded gap-1 px-2 py-2  `}
													>
														<Image src="/navbar/results/Case-Studies-01.svg" alt="" height={60} width={60} className="" />
														<div>
															<p className="group-hover:text-[#ff5056] duration-300 font-semibold text-[14px] xl:text-[16px] flex items-center gap-1">
																Case Studies{" "}
																<BiChevronRight
																	className={`${
																		router.asPath === "/case-studies" ? "text-[#ff492c] " : "text-[#515e6f] group-hover:text-[#ff5056]"
																	}  pt-[2px] text-xl `}
																/>{" "}
															</p>
															<p className="text-[12px] font-[400] leading-[1.8] text-[#515E6F]">Success stories that inspire action</p>
														</div>
													</div>
												</Link>
											</li>
											<li id="q1" className=" group mb-4">
												<Link href={"/testimonials"} className={`result-item `}>
													<div
														className={`${
															router.asPath === "/testimonials" ? "text-[#ff492c] bg-[#FFF7F5]" : "bg-[#F5FAFF] group-hover:bg-[#FFF7F5]"
														} shadow flex items-center rounded gap-1 px-2 py-2  `}
													>
														<Image src="/navbar/results/Testimonials-01.svg" alt="" height={60} width={60} className="" />
														<div>
															<p className="group-hover:text-[#ff5056] duration-300 font-semibold flex text-[14px] xl:text-[16px] items-center gap-1">
																Testimonials{" "}
																<BiChevronRight
																	className={`${
																		router.asPath === "/testimonials" ? "text-[#ff492c] " : "text-[#515e6f] group-hover:text-[#ff5056]"
																	}  pt-[2px] text-xl `}
																/>{" "}
															</p>
															<p className="text-[12px] font-[400] leading-[1.8] text-[#515E6F]">Praise that proves our puzzle prowess</p>
														</div>
													</div>
												</Link>
											</li>
											<li id="q3" className=" group">
												<Link href={"/projects"} className={`result-item ${router.asPath === "/projects" ? "text-[#ff492c]" : " "}`}>
													<div
														className={`${
															router.asPath === "/projects" ? "text-[#ff492c] bg-[#FFF7F5]" : "bg-[#F5FAFF] group-hover:bg-[#FFF7F5]"
														} shadow flex items-center rounded gap-1 px-2 py-2  `}
													>
														<Image src="/navbar/results/Our-Works-01.svg" alt="" height={60} width={60} className="" />
														<div>
															<p className="group-hover:text-[#ff5056] duration-300 font-semibold flex text-[14px] xl:text-[16px] items-center gap-1">
																Projects{" "}
																<BiChevronRight
																	className={`${
																		router.asPath === "/projects" ? "text-[#ff492c] " : "text-[#515e6f] group-hover:text-[#ff5056]"
																	}  pt-[2px] text-xl `}
																/>{" "}
															</p>
															<p className="text-[12px] font-[400] leading-[1.8] text-[#515E6F]">Behind-the-scenes of escape room victories</p>
														</div>
													</div>
												</Link>
											</li>
										</ul>
									</div>
								</div>
								{/* <div ref={quizzesRef} className="relative">
									<li
										id="nav3"
										onClick={handleQuizePopup}
										className={` hover:text-[#ff492c] duration-300 flex items-center text-[14px] xl:text-[15px] gap-0 xl:gap-1 cursor-pointer ${
											router.pathname === "/quizzes/[quizDetails]" ? "text-[#ff492c]" : router.pathname === "/quizzes" ? "text-[#ff492c]" : ""
										}`}
									>
										QUIZZES <MdKeyboardArrowDown className={`text-xl xl:text-[22px] duration-300 ${quizeState ? "rotate-180" : ""}`} />
									</li>
									<div className={`serveice_popup absolute bg-white p-6 w-[450px] -left-[170px] top-12 shadow-md ${quizeState ? "block" : "hidden"}`}>
										<div className=" mb-2 font-bold flex">
											<Link href={"/quizzes"} className="group text-[#ff5056] hover:text-[#E74329] duration-300 font-bold flex items-center ">
												ALL QUIZZES <BiChevronRight className="group-hover:translate-x-2 text-[28px] -ml-1 duration-300" />
											</Link>
										</div>
										<ul className="border-t-[1px] pt-5">
											{quizzSortedData &&
												quizzSortedData.map((data) => {
													return (
														<li className=" group mb-4" key={data.id}>
															<Link href={`/quizzes/${data.attributes.slug}`} className={``}>
																<div
																	className={`${
																		router.asPath === `/quizzes/${data.attributes.slug}`
																			? "text-[#ff492c] bg-[#FFF7F5]"
																			: " bg-[#F5FAFF] group-hover:bg-[#FFF7F5]"
																	} shadow flex items-center rounded gap-4   px-2 py-2`}
																>
																	<Image src={data.attributes.nav_icon.data.attributes.url} alt="" height={60} width={45} className="" />
																	<div>
																		<p className="group-hover:text-[#ff5056] duration-300 font-semibold flex text-[14px] xl:text-[16px] items-center gap-1">
																			{data.attributes.quizz_title}{" "}
																			<BiChevronRight
																				className={`${
																					router.asPath === `/quizzes/${data.attributes.slug}`
																						? "text-[#ff492c]"
																						: "group-hover:text-[#ff5056] text-[#515e6f]"
																				}  pt-[2px] text-xl `}
																			/>{" "}
																		</p>
																		<p className="text-[12px] font-[400] leading-[1.8] text-[#515E6F]">{data.attributes.nav_short_description} </p>
																	</div>
																</div>
															</Link>
														</li>
													);
												})}
										</ul>
									</div>
								</div> */}
								<div ref={moreNavRef} className="relative">
									<li
										onClick={() => setMoreState(!moreState)}
										className={` hover:text-[#ff492c] duration-300 flex items-center gap-0 xl:gap-1 text-[14px] xl:text-[15px] cursor-pointer ${
											router.asPath === "/about" || router.asPath === "/team" || router.asPath === "/career" || router.asPath === "/faqs"
												? "text-[#ff492c]"
												: ""
										}`}
									>
										MORE <MdKeyboardArrowDown className={`text-xl xl:text-[22px] duration-300 ${moreState ? "rotate-180" : ""}`} />
									</li>
									<div className={`serveice_popup absolute bg-white p-6 w-[450px] -left-[170px] top-12 shadow-md ${moreState ? "block" : "hidden"}`}>
										<ul className="">
											<li className=" group mb-4">
												<Link href={"/about"}>
													<div
														className={`${
															router.asPath === "/about" ? "text-[#ff492c] bg-[#FFF7F5]" : "bg-[#F5FAFF] group-hover:bg-[#FFF7F5] "
														} shadow flex items-center rounded gap-1 px-2 py-2`}
													>
														<Image src="/navbar/more/About-01.svg" alt="" height={60} width={60} className="" />
														<div>
															<p className="group-hover:text-[#ff5056] duration-300 font-semibold flex text-[14px] xl:text-[16px] items-center gap-1">
																About{" "}
																<BiChevronRight
																	className={`${
																		router.asPath === "/about" ? "text-[#ff492c] " : "group-hover:text-[#ff5056] text-[#515e6f] "
																	} pt-[2px] text-xl `}
																/>{" "}
															</p>
															<p className="text-[12px] font-[400] leading-[1.8] text-[#515E6F]">Our mission: Unlocking your potential</p>
														</div>
													</div>
												</Link>
											</li>
											<li className=" group mb-4">
												<Link href={"/team"}>
													<div
														className={`${
															router.asPath === "/team" ? "text-[#ff492c] bg-[#FFF7F5]" : "bg-[#F5FAFF] group-hover:bg-[#FFF7F5] "
														} shadow flex items-center rounded gap-1 px-2 py-2`}
													>
														<Image src="/navbar/more/Team-01.svg" alt="" height={60} width={60} className="" />
														<div>
															<p className="group-hover:text-[#ff5056] duration-300 font-semibold text-[14px] xl:text-[16px] flex items-center gap-1">
																Team{" "}
																<BiChevronRight
																	className={`${
																		router.asPath === "/team" ? "text-[#ff492c] " : "group-hover:text-[#ff5056] text-[#515e6f] "
																	} pt-[2px] text-xl `}
																/>{" "}
															</p>
															<p className="text-[12px] font-[400] leading-[1.8] text-[#515E6F]">Meet the architects of adventure</p>
														</div>
													</div>
												</Link>
											</li>
											<li className=" group mb-4">
												<Link href={"/career"}>
													<div
														className={`${
															router.asPath === "/career" ? "text-[#ff492c] bg-[#FFF7F5]" : "bg-[#F5FAFF] group-hover:bg-[#FFF7F5] "
														} shadow flex items-center rounded gap-1 px-2 py-2`}
													>
														<Image src="/navbar/more/Career-01.svg" alt="" height={60} width={60} className="" />
														<div>
															<p className="group-hover:text-[#ff5056] duration-300 font-semibold text-[14px] xl:text-[16px] flex items-center gap-1">
																Career{" "}
																<BiChevronRight
																	className={`${
																		router.asPath === "/career" ? "text-[#ff492c] " : "group-hover:text-[#ff5056] text-[#515e6f] "
																	} pt-[2px] text-xl `}
																/>{" "}
															</p>
															<p className="text-[12px] font-[400] leading-[1.8] text-[#515E6F]">Your next clue to a dream job</p>
														</div>
													</div>
												</Link>
											</li>
											<li className=" group mb-4">
												<Link href={"/faqs"}>
													<div
														className={`${
															router.asPath === "/faqs" ? "text-[#ff492c] bg-[#FFF7F5]" : "bg-[#F5FAFF] group-hover:bg-[#FFF7F5] "
														} shadow flex items-center rounded gap-1 px-2 py-2`}
													>
														<div className="">
															<Image src="/navbar/more/FAQs-01.svg" alt="" height={60} width={60} className="" />
														</div>
														<div>
															<p className="group-hover:text-[#ff5056] duration-300 font-semibold text-[14px] xl:text-[16px] flex items-center gap-1">
																FAQs{" "}
																<BiChevronRight
																	className={`${
																		router.asPath === "/faqs" ? "text-[#ff492c] " : "group-hover:text-[#ff5056] text-[#515e6f] "
																	} pt-[2px] text-xl `}
																/>{" "}
															</p>
															<p className="text-[12px] font-[400] leading-[1.8] text-[#515E6F]">Answers for the curious minds</p>
														</div>
													</div>
												</Link>
											</li>
										</ul>
									</div>
								</div>

								<li id="nav1" className=" hover:text-[#ff492c] duration-300 flex items-center text-[14px] xl:text-[15px]">
									<Link href={"/blog"} className={`${router.asPath === "/blog" ? "text-[#ff492c]" : " "}`}>
										BLOG
									</Link>
								</li>
								<div ref={contactRef} className="relative">
									<li
										onClick={() => setContact(!contact)}
										id="nav1"
										className={`${
											router.asPath === "/contact" || router.asPath === "/client-call" || router.asPath === "/demo-call" ? "text-[#ff492c]" : " "
										} cursor-pointer hover:text-[#ff492c] duration-300 flex items-center gap-0 xl:gap-1 text-[14px] xl:text-[15px] xl:ml-2`}
									>
										CONTACT
										<MdKeyboardArrowDown className={`text-xl xl:text-[22px] duration-300 ${contact ? "rotate-180" : ""}`} />
									</li>
									<div className={`serveice_popup absolute bg-white p-6 w-[450px] -left-[170px] top-12 shadow-md ${contact ? "block" : "hidden"}`}>
										<ul className="">
											<li className=" group mb-4">
												<Link href={"/contact"}>
													<div
														className={`${
															router.asPath === "/contact" ? "text-[#ff492c] bg-[#FFF7F5]" : " bg-[#F5FAFF] group-hover:bg-[#FFF7F5]"
														} shadow flex items-center rounded gap-1 px-2 py-2`}
													>
														<Image src="/navbar/contact/contact-us-01.svg" alt="" height={60} width={60} className="" />
														<div>
															<p className="group-hover:text-[#ff5056] duration-300 font-semibold flex text-[14px] xl:text-[16px] items-center gap-1">
																Contact Us{" "}
																<BiChevronRight
																	className={`${
																		router.asPath === "/contact" ? "text-[#ff492c] " : "group-hover:text-[#ff5056] text-[#515e6f] "
																	} pt-[2px] text-xl `}
																/>{" "}
															</p>
															<p className="text-[12px] font-[400] leading-[1.8] text-[#515E6F]"> Reach out for any reason</p>
														</div>
													</div>
												</Link>
											</li>
											<li className=" group mb-4">
												<Link href={"/client-call"}>
													<div
														className={`${
															router.asPath === "/client-call" ? "text-[#ff492c] bg-[#FFF7F5]" : " bg-[#F5FAFF] group-hover:bg-[#FFF7F5]"
														} shadow flex items-center rounded gap-1 px-2 py-2`}
													>
														<Image src="/navbar/contact/exclusive-client-call-01.svg" alt="" height={60} width={60} className="" />
														<div>
															<p className="group-hover:text-[#ff5056] duration-300 font-semibold flex text-[14px] xl:text-[16px] items-center gap-1">
																Exclusive Client Call{" "}
																<BiChevronRight
																	className={`${
																		router.asPath === "/client-call" ? "text-[#ff492c] " : "group-hover:text-[#ff5056] text-[#515e6f] "
																	} pt-[2px] text-xl `}
																/>{" "}
															</p>
															<p className="text-[12px] font-[400] leading-[1.8] text-[#515E6F]">Valued clients, please schedule here</p>
														</div>
													</div>
												</Link>
											</li>
											<li className=" group mb-4">
												<Link href={"/demo-call"}>
													<div
														className={`${
															router.asPath === "/demo-call" ? "text-[#ff492c] bg-[#FFF7F5]" : " bg-[#F5FAFF] group-hover:bg-[#FFF7F5]"
														} shadow flex items-center rounded gap-1 px-2 py-2`}
													>
														<Image src="/navbar/contact/book-a-demo-01.svg" alt="" height={60} width={60} className="" />
														<div>
															<p className="group-hover:text-[#ff5056] duration-300 font-semibold flex text-[14px] xl:text-[16px] items-center gap-1">
																Book a Demo{" "}
																<BiChevronRight
																	className={`${
																		router.asPath === "/demo-call" ? "text-[#ff492c] " : "group-hover:text-[#ff5056] text-[#515e6f] "
																	} pt-[2px] text-xl `}
																/>{" "}
															</p>
															<p className="text-[12px] font-[400] leading-[1.8] text-[#515E6F]">Witness our marketing spells in action</p>
														</div>
													</div>
												</Link>
											</li>
										</ul>
									</div>
								</div>

								{/* ....login button.......... */}
								<Link
									href={"https://crm.escaperoommarketer.com/authentication/login"}
									target="_blank"
									className="group relative z-20 hidden lg:flex items-center gap-1.5 cursor-pointer"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="18"
										height="17"
										viewBox="0 0 18 17"
										fill="none"
										className="group-hover:scale-105 duration-300"
									>
										<path
											d="M17.2096 0.404053H11.4742C11.106 0.404053 10.8076 0.702496 10.8076 1.07063V2.82842C10.9314 2.86056 11.0512 2.91634 11.1602 2.9973C11.6135 3.33412 11.7079 3.97466 11.371 4.42798L10.8077 5.18615V7.21912H12.4687V7.17696C12.4687 6.58697 13.1504 6.25369 13.616 6.6163L15.4461 8.04178C15.8112 8.32615 15.8117 8.87827 15.4461 9.16309L13.616 10.5886C13.1506 10.9511 12.4687 10.6181 12.4687 10.0279V9.98575H10.8077V15.7375C10.8077 16.1056 11.1061 16.4041 11.4742 16.4041H17.2097C17.5778 16.4041 17.8762 16.1056 17.8762 15.7375V1.07063C17.8762 0.702496 17.5778 0.404053 17.2096 0.404053Z"
											// fill="#575757"
											className="fill-[#7a7a7a] group-hover:fill-[#ff492c] duration-300"
										/>
										<path
											d="M7.2098 3.65665C8.00901 3.65665 8.65689 3.00876 8.65689 2.20955C8.65689 1.41034 8.00901 0.762451 7.2098 0.762451C6.41058 0.762451 5.7627 1.41034 5.7627 2.20955C5.7627 3.00876 6.41058 3.65665 7.2098 3.65665Z"
											// fill="#575757"
											className="fill-[#7a7a7a] group-hover:fill-[#ff492c] duration-300"
										/>
										<path
											d="M10.9419 3.2912C10.651 3.07499 10.2398 3.13556 10.0236 3.42655L8.72936 5.16812L7.47835 4.74035L8.11732 4.82318C8.02399 4.50785 7.7545 4.25972 7.40762 4.21086L5.61318 3.96262C5.248 3.91211 4.87647 3.98589 4.55826 4.17207L2.44062 5.41133C2.22577 5.53729 2.10075 5.77398 2.11777 6.02243L2.32254 9.00783C2.34736 9.36993 2.66127 9.64272 3.02226 9.61776C3.3839 9.59297 3.657 9.27969 3.63218 8.91804L3.45522 6.33817L4.3182 5.83219L3.84773 9.01303C3.8246 9.16936 3.80768 9.32656 3.797 9.48424L3.64795 11.6848L0.809137 12.1745C0.380472 12.2485 0.092915 12.6559 0.166867 13.0846C0.240819 13.5133 0.648232 13.8009 1.07697 13.7269L4.52588 13.1319C4.88392 13.0701 5.15328 12.7714 5.17782 12.4089L5.34053 10.0062L6.27226 10.1592L7.17491 12.0741L7.55809 15.699C7.60375 16.1308 7.9906 16.4452 8.42419 16.3995C8.85677 16.3538 9.1704 15.966 9.12467 15.5334L8.72745 11.776C8.71816 11.6882 8.69424 11.6027 8.65662 11.5229L7.58305 9.24543L7.96092 6.51413L7.05356 5.98246L8.75793 6.56527C9.02915 6.65797 9.32756 6.56388 9.49714 6.33568L11.0771 4.20948C11.2934 3.91856 11.2328 3.5074 10.9419 3.2912Z"
											// fill="#575757"
											className="fill-[#7a7a7a] group-hover:fill-[#ff492c] duration-300"
										/>
										<path
											d="M12.8876 9.56718V10.0278C12.8876 10.2713 13.1675 10.4076 13.3592 10.2583L15.1893 8.83283C15.3394 8.71588 15.3394 8.48886 15.1893 8.37192L13.3592 6.94644C13.1678 6.79729 12.8876 6.93323 12.8876 7.1769V7.6376H10.4133C10.2414 7.6376 10.1021 7.77694 10.1021 7.94883V9.25591C10.1021 9.42781 10.2414 9.56715 10.4133 9.56715H12.8876V9.56718Z"
											// fill="#CCCCCE"
											className="fill-[#7a7a7a] group-hover:fill-[#ff492c] duration-300"
										/>
									</svg>
									<p className="text-[14px] xl:text-[15px] uppercase group-hover:text-[#ff492c] duration-300">Login</p>
								</Link>
							</ul>
							{router.asPath !== "/free-marketing" && (
								<div className="">
									{/* -----------desktop view nav marketing plan button--------- */}
									<Button3D>
										<Link
											href={"/free-marketing"}
											onClick={handleClick}
											className="button group marketing_pla flex items-center gap-1 md:gap-2.5 font-[700] flex-[2] "
										>
											<Image
												src="/components/faq/lock_close.svg"
												height={20}
												width={18}
												alt=""
												className="w-[15px] h-[20px] mb-[1px] hidden md:inline-block group-hover:hidden"
											/>
											<Image
												src="/components/faq/lock_open.svg"
												height={20}
												width={18}
												alt=""
												className="w-[15px] h-[20px] mb-[1px] hidden md:group-hover:inline-block"
											/>

											<span className="">
												<span className="inline-block xl:hidden">FREE</span>
												<span className="hidden xl:inline-block">UNLOCK</span>
												<span> MARKETING PLAN</span>
											</span>
										</Link>
									</Button3D>

									{/* -----mobile view nav marketing plan button-------- */}
									<Link
										href={"/free-marketing"}
										className="group lg:hidden marketing_plan md:flex items-center gap-2.5 font-[700] flex-[2] ml-[0] xl:ml-[6px] rounded border-2 border-[#ff492c]  text-[#ff492c]  hover:bg-[#ff492c] hover:text-white"
									>
										<Image
											src="/components/faq/lock_close.svg"
											height={20}
											width={18}
											alt=""
											className="w-[23px] h-[30px] hidden md:inline-block group-hover:hidden"
										/>
										<Image
											src="/components/faq/lock_open.svg"
											height={20}
											width={18}
											alt=""
											className="w-[23px] h-[30px] hidden md:group-hover:inline-block"
										/>
										<span className="inline-block md:hidden">FREE</span>
										<span>
											<span className="hidden md:inline-block">UNLOCK</span>
											<span> MARKETING PLAN</span>
										</span>
									</Link>
									{/* ------------------------- */}
								</div>
							)}
							<div ref={hamburgRef} className="lg:hidden cursor-pointer">
								<HiMenu id="hamburg" onClick={handleHamburg} className="text-[34px] md:text-[42px] " />
							</div>
						</div>
						<div
							ref={serveiceRef}
							className={`serveice_popup shadow md:px-6 md:py-6 rounded  absolute left-0 top-14 right-0  z-30 bg-white ${
								serviceMenubar ? "block" : "hidden"
							} `}
						>
							<div className=" mb-2 flex">
								<Link
									onClick={() => setServiceMenubar(!serviceMenubar)}
									href={"/services"}
									className="group text-[#ff5056] hover:text-[#E74329] font-bold flex items-center "
								>
									ALL SERVICES <BiChevronRight className="group-hover:translate-x-2 duration-300 text-[26px] -ml-1" />
								</Link>
							</div>
							<div className=" grid grid-cols-3 grid-rows-8 gap-5 border-t-[1px] pt-5">
								<ul className="flex flex-col gap-3 col-start-1 row-start-1 row-end-4">
									<h3 className="font-openSans text-[16px] font-[700] ">SEARCH ENGINE MARKETING</h3>

									<li>
										<Link href={"/google-ads"} className={`group `}>
											<div
												className={`${
													router.asPath === "/google-ads" ? "text-[#ff5056] bg-[#FFF7F5]" : "bg-[#F5FAFF] group-hover:bg-[#FFF7F5] "
												} flex items-center gap-2  p-2 rounded shadow `}
											>
												<div className="">
													<Image
														src="/navbar/Google Ads Agency-01.svg"
														alt=""
														height={60}
														width={60}
														className="group-hover:scale-105 duration-500"
													/>
												</div>
												<div className="">
													<p className="group-hover:text-[#ff5056] font-semibold flex text-[14px] xl:text-[16px] items-center gap-1">
														Google Ads{" "}
														<BiChevronRight
															className={`${
																router.asPath === "/google-ads" ? "text-[#ff5056]" : "text-[#515e6f] group-hover:text-[#ff5056]"
															}  pt-[2px] text-xl `}
														/>{" "}
													</p>
													<p className="text-[12px] leading-[1.8] text-[#515E6F]">Campaigns that put more dollars in your pocket</p>
												</div>
											</div>
										</Link>{" "}
									</li>
									<li>
										<Link href={"/microsoft-ads"} className={`group `}>
											<div
												className={`${
													router.asPath === "/microsoft-ads" ? "text-[#ff5056] bg-[#FFF7F5]" : "bg-[#F5FAFF] group-hover:bg-[#FFF7F5] "
												} flex items-center gap-2  p-2 rounded shadow `}
											>
												<div className="">
													<Image src="/navbar/Microsoft-Ads-01.svg" alt="" height={60} width={60} className="" />
												</div>
												<div className="">
													<p className="group-hover:text-[#ff5056] font-semibold text-[14px] xl:text-[16px] flex items-center gap-1">
														{" "}
														Microsoft Ads{" "}
														<BiChevronRight
															className={`${
																router.asPath === "/microsoft-ads" ? "text-[#ff5056]" : "text-[#515e6f] group-hover:text-[#ff5056]"
															}  pt-[2px] text-xl `}
														/>{" "}
													</p>
													<p className="text-[12px] leading-[1.8] text-[#515E6F]">Ads that capture untapped revenue streams</p>
												</div>
											</div>
										</Link>{" "}
									</li>
									<li>
										<Link href={"/seo"} className={`group `}>
											<div
												className={`${
													router.asPath === "/seo" ? "text-[#ff5056] bg-[#FFF7F5]" : "bg-[#F5FAFF] group-hover:bg-[#FFF7F5] "
												} flex items-center gap-2  p-2 rounded shadow `}
											>
												<div className="">
													<Image src="/navbar/SEO Agency-01.svg" alt="" height={60} width={60} className="" />
												</div>
												<div className="">
													<p className="group-hover:text-[#ff5056] font-semibold text-[14px] xl:text-[16px] flex items-center gap-1">
														Search Engine Optimization
														<BiChevronRight
															className={`${
																router.asPath === "/seo" ? "text-[#ff5056]" : "text-[#515e6f] group-hover:text-[#ff5056]"
															}  pt-[2px] text-xl `}
														/>{" "}
													</p>
													<p className="text-[12px] leading-[1.8] text-[#515E6F]">SEO that builds a bonding with Google's algo</p>
												</div>
											</div>
										</Link>
									</li>
								</ul>
								<ul className="flex flex-col gap-3 col-start-2 row-start-1 row-end-4">
									<h3 className="font-openSans text-[16px] font-[700]">SOCIAL MEDIA MARKETING</h3>

									<li>
										<Link href={"/facebook-ads"} className={`group `}>
											<div
												className={`${
													router.asPath === "/facebook-ads" ? "text-[#ff5056] bg-[#FFF7F5]" : "bg-[#F5FAFF] group-hover:bg-[#FFF7F5] "
												} flex items-center gap-2  p-2 rounded shadow `}
											>
												<div className="">
													<Image src="/navbar/Facebook Ads Agency-01.svg" alt="" height={60} width={60} className="" />
												</div>
												<div className="">
													<p className="group-hover:text-[#ff5056] font-semibold flex text-[14px] xl:text-[16px] items-center gap-1">
														Facebook Ads
														<BiChevronRight
															className={`${
																router.asPath === "/facebook-ads" ? "text-[#ff5056]" : "text-[#515e6f] group-hover:text-[#ff5056]"
															}  pt-[2px] text-xl `}
														/>{" "}
													</p>
													<p className="text-[12px] leading-[1.8] text-[#515E6F]">Ads that target mystery lovers via Zuck's code</p>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link href={"/linkedin-ads"} className={`group `}>
											<div
												className={`${
													router.asPath === "/linkedin-ads" ? "text-[#ff5056] bg-[#FFF7F5]" : "bg-[#F5FAFF] group-hover:bg-[#FFF7F5] "
												} flex items-center gap-2  p-2 rounded shadow `}
											>
												<div className="">
													<Image src="/navbar/Monthly-LinkedIn-Ads-Management-01.svg" alt="" height={60} width={60} className="" />
												</div>
												<div className="">
													<p className="group-hover:text-[#ff5056] font-semibold flex text-[14px] xl:text-[16px] items-center gap-1">
														LinkedIn Ads
														<BiChevronRight
															className={`${
																router.asPath === "/linkedin-ads" ? "text-[#ff5056]" : "text-[#515e6f] group-hover:text-[#ff5056]"
															}  pt-[2px] text-xl `}
														/>{" "}
													</p>
													<p className="text-[12px] leading-[1.8] text-[#515E6F]">Ads that put your games on corporate maps</p>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link href={"/social-media-management"} className={`group`}>
											<div
												className={`${
													router.asPath === "/social-media-management" ? "text-[#ff5056] bg-[#FFF7F5]" : "bg-[#F5FAFF] group-hover:bg-[#FFF7F5] "
												} flex items-center gap-2  p-2 rounded shadow `}
											>
												<div className="">
													<Image src="/navbar/PPC Management-01.svg" alt="" height={60} width={60} className="" />
												</div>
												<div className="">
													<p className="group-hover:text-[#ff5056] font-semibold flex text-[14px] xl:text-[16px] items-center gap-1">
														Social Media Management{" "}
														<BiChevronRight
															className={`${
																router.asPath === "/social-media-management" ? "text-[#ff5056]" : "text-[#515e6f] group-hover:text-[#ff5056]"
															}  pt-[2px] text-xl `}
														/>{" "}
													</p>
													<p className="text-[12px] leading-[1.8] text-[#515E6F]">Contents that create viral escape room buzz</p>
												</div>
											</div>
										</Link>
									</li>
								</ul>
								<ul className="flex flex-col gap-3 col-start-3 row-start-1 row-end-3">
									<h3 className=" font-openSans text-[16px] font-[700] ">CONVERSION RATE OPTIMIZATION</h3>

									<li>
										<Link href={"/landing-page-development"} className={`group `}>
											<div
												className={`${
													router.asPath === "/landing-page-development" ? "text-[#ff5056] bg-[#FFF7F5]" : "bg-[#F5FAFF] group-hover:bg-[#FFF7F5] "
												} flex items-center gap-2  p-2 rounded shadow `}
											>
												<div className="">
													<Image src="/navbar/Landing Page Agency-01.svg" alt="" height={60} width={60} className="" />
												</div>
												<div className="">
													<p className="group-hover:text-[#ff5056] font-semibold flex text-[14px] xl:text-[16px] items-center gap-1">
														Landing Page Development
														<BiChevronRight
															className={`${
																router.asPath === "/landing-page-development" ? "text-[#ff5056]" : "text-[#515e6f] group-hover:text-[#ff5056]"
															}  pt-[2px] text-xl `}
														/>{" "}
													</p>
													<p className="text-[12px] leading-[1.8] text-[#515E6F]">Design that converts clicks to game plays</p>
												</div>
											</div>
										</Link>
									</li>
									<li>
										<Link href={"/website-development"} className={`group `}>
											<div
												className={`${
													router.asPath === "/website-development" ? "text-[#ff5056] bg-[#FFF7F5]" : "bg-[#F5FAFF] group-hover:bg-[#FFF7F5] "
												} flex items-center gap-2  p-2 rounded shadow `}
											>
												<div className="">
													<Image src="/navbar/Landing Page Design-01.svg" alt="" height={60} width={60} className="" />
												</div>
												<div className="">
													<p className="group-hover:text-[#ff5056] font-semibold flex text-[14px] xl:text-[16px] items-center gap-1">
														Website Development
														<BiChevronRight
															className={`${
																router.asPath === "/website-development" ? "text-[#ff5056]" : "text-[#515e6f] group-hover:text-[#ff5056]"
															}  pt-[2px] text-xl `}
														/>{" "}
													</p>
													<p className="text-[12px] leading-[1.8] text-[#515E6F]">Web experiences that immerse site visitors</p>
												</div>
											</div>
										</Link>
									</li>
								</ul>
								<ul className="col-start-3 row-start-3">
									<h3 className=" font-openSans text-[16px] font-[700]  pb-3">EMAIL MARKETING</h3>
									<Link href={"/email-marketing"} className={`group `}>
										<div
											className={`${
												router.asPath === "/email-marketing" ? "text-[#ff5056] bg-[#FFF7F5]" : "bg-[#F5FAFF] group-hover:bg-[#FFF7F5] "
											} flex items-center gap-2  p-2 rounded shadow `}
										>
											<div className="">
												<Image src="/navbar/Email Marketing Agency-01.svg" alt="" height={60} width={60} className="" />
											</div>
											<div className="">
												<p className="group-hover:text-[#ff5056] font-semibold flex text-[14px] xl:text-[16px] items-center gap-1">
													Email Marketing
													<BiChevronRight
														className={`${
															router.asPath === "/email-marketing" ? "text-[#ff5056]" : "text-[#515e6f] group-hover:text-[#ff5056]"
														}  pt-[2px] text-xl `}
													/>{" "}
												</p>
												<p className="text-[12px] leading-[1.8] text-[#515E6F]">Love letters that clue in customers</p>
											</div>
										</div>
									</Link>
								</ul>
							</div>
						</div>
					</div>

					<div
						ref={sidebarMainref}
						id="sidebar"
						className={` sidebar_shadow sm:drop-shadow  lg:hidden bg-white  w-full sm:w-[60%]  absolute  top-0 right-0   z-10 ${
							sidebarOpen ? "block sidebar_menu_open" : "hidden"
						}
					`}
					>
						<div className="overflow-scroll lg:overflow-hidden h-screen lg:h-0 pb-24 lg:pb-0">
							<div className={`pl-[20px] md:pl-14 relative`}>
								<div onClick={closeSidebar} className="w-full h-16 lg:h-0">
									<div className=" rounded-[100%] text-3xl lg:text-[10px] flex justify-center items-center  border-2 border-black w-10 lg:w-0 h-10 lg:h-0 absolute top-4 right-4">
										<p className="text-[40px] rotate-45">+</p>
									</div>
								</div>
								<ul className="font-[600] flex flex-col gap-3 mb-12">
									<li className="text-[18px] pt-3">
										<Link
											href={"/pricing"}
											onClick={handleMainSingleMenu}
											className={`hover:text-[#FF492C]  ${router.asPath === "/pricing" ? "text-[#ff492c]" : " "}`}
										>
											PRICING
										</Link>
									</li>
									<li
										onClick={handleSidebarService}
										className={`group cursor-pointer flex items-center gap-2 text-[18px] pt-3 ${open ? "text-[#FF492C]" : ""} ${
											router.asPath === "/services" ||
											router.asPath === "/google-ads" ||
											router.asPath === "/microsoft-ads" ||
											router.asPath === "/seo" ||
											router.asPath === "/facebook-ads" ||
											router.asPath === "/linkedin-ads" ||
											router.asPath === "/social-media-management" ||
											router.asPath === "/landing-page-development" ||
											router.asPath === "/website-development" ||
											router.asPath === "/email-marketing"
												? "text-[#ff492c]"
												: ""
										} `}
									>
										SERVICES <MdKeyboardArrowDown className={`arrow_rotate text-2xl transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
									</li>

									<div ref={sidebarServiceref} className={`pb-4  ${open ? "block" : "hidden"}`}>
										<ul className="flex-1">
											<div className="pl-[3px] pb-3 flex gap-2 items-center">
												<div className=" self-start">
													<Image src="/navbar/SEO Agency-01.svg" alt="" height={45} width={60} className="" />
												</div>
												<div>
													<h3 className=" text-[18px] font-[700] pt-2 pr-2 text-[#020202] ">SEARCH ENGINE MARKETING</h3>
													<p className="text-[14px] max-w-[300px] text-[#515E6F] font-[400]">SEO that builds a bonding with algorithms</p>
												</div>
											</div>
											<div className="pl-[70px] flex flex-col gap-2.5 text-[16px] font-normal">
												<li>
													<Link
														href={"/google-ads"}
														// id="014"
														onClick={handleMobileMenuService}
														className={`mobile-serveice_list hover:text-[#FF492C]  whitespace-nowrap flex items-center gap-1 font-[600] ${
															router.asPath === "/google-ads" ? "text-[#ff5056]" : " "
														}`}
													>
														Google Ads{" "}
														<BiChevronRight
															className={` pt-[2px] text-xl ${router.asPath === "/google-ads" ? "text-[#ff5056]" : "text-[#515e6f] "}`}
														/>
													</Link>{" "}
												</li>
												<li>
													<Link
														href={"/microsoft-ads"}
														// id="015"
														onClick={handleMobileMenuService}
														className={`mobile-serveice_list hover:text-[#FF492C] flex items-center gap-1 font-[600] ${
															router.asPath === "/microsoft-ads" ? "text-[#ff5056]" : " "
														}`}
													>
														Microsoft Ads <BiChevronRight className=" pt-[2px] text-xl text-[#515e6f]" />
													</Link>{" "}
												</li>
												<li>
													<Link
														href={"/seo"}
														// id="016"
														onClick={handleMobileMenuService}
														className={`mobile-serveice_list hover:text-[#FF492C] flex items-center gap-1 font-[600] ${
															router.asPath === "/seo" ? "text-[#ff5056]" : " "
														}`}
													>
														Search Engine Optimization <BiChevronRight className=" pt-[2px] text-xl text-[#515e6f]" />
													</Link>
												</li>
											</div>
										</ul>
										<ul className="flex-1">
											<div className="pl-[3px] pb-3 pt-8 flex gap-2 items-center">
												<div className=" self-start">
													<Image src="/navbar/PPC Agency-01.svg" alt="" height={45} width={60} className="" />
												</div>
												<div>
													<h3 className=" text-[18px] font-[700] pr-2  text-[#020202]">SOCIAL MEDIA MARKETING</h3>
													<p className="text-[14px] max-w-[300px] text-[#515E6F] font-[400]">Ads that captivate, connect, and create buzz</p>
												</div>
											</div>
											<div className="pl-[70px] flex flex-col gap-2.5  font-normal text-[16px]">
												<li>
													<Link
														href={"/facebook-ads"}
														// id="017"
														onClick={handleMobileMenuService}
														className={`serveice_list hover:text-[#FF492C]  flex items-center gap-1 font-[600] ${
															router.asPath === "/facebook-ads" ? "text-[#ff5056]" : " "
														}`}
													>
														Facebook Ads
														<BiChevronRight className=" pt-[2px] text-xl text-[#515e6f]" />
													</Link>
												</li>
												<li>
													<Link
														href={"/linkedin-ads"}
														// id="018"
														onClick={handleMobileMenuService}
														className={`serveice_list hover:text-[#FF492C] flex items-center gap-1 font-[600]  ${
															router.asPath === "/linkedin-ads" ? "text-[#ff5056]" : " "
														}`}
													>
														LinkedIn Ads
														<BiChevronRight className=" pt-[2px] text-xl text-[#515e6f]" />
													</Link>
												</li>
												<li>
													<Link
														href={"/social-media-management"}
														// id="019"
														onClick={handleMobileMenuService}
														className={`serveice_list hover:text-[#FF492C] flex items-center gap-1 font-[600] ${
															router.asPath === "/social-media-management" ? "text-[#ff5056]" : " "
														}`}
													>
														Social Media Management <BiChevronRight className=" pt-[2px] text-xl text-[#515e6f]" />
													</Link>
												</li>
											</div>
										</ul>
										<ul className="flex-1">
											<div className="pl-[3px] pb-3 pt-8 flex gap-2 items-center">
												<div className="self-start">
													<Image src="/navbar/Conversion Rate Optimization-01.svg" alt="" height={45} width={60} className="" />
												</div>
												<div>
													<h3 className="text-[18px] font-[700] pr-1 text-[#020202]  ">CONVERSION RATE OPTIMIZATION</h3>
													<p className="text-[14px] max-w-[300px] text-[#515E6F] font-[400]">Web experiences that immerse site visitors</p>
												</div>
											</div>
											<div className="pl-[70px] flex flex-col gap-2.5 text-[16px]  font-normal">
												<li>
													<Link
														href={"/landing-page-development"}
														// id="020"
														onClick={handleMobileMenuService}
														className={`serveice_list hover:text-[#FF492C]  flex items-center gap-1 font-[600] ${
															router.asPath === "/landing-page-development" ? "text-[#ff5056]" : " "
														}`}
													>
														Landing Page Development <BiChevronRight className=" pt-[2px] text-xl text-[#515e6f]" />
													</Link>
												</li>

												<li>
													<Link
														href={"/website-development"}
														// id="022"
														onClick={handleMobileMenuService}
														className={`serveice_list hover:text-[#FF492C] flex items-center gap-1 font-[600] ${
															router.asPath === "/website-development" ? "text-[#ff5056]" : " "
														}`}
													>
														Website Development
														<BiChevronRight className=" pt-[2px] text-xl text-[#515e6f]" />
													</Link>
												</li>
											</div>
										</ul>
										<ul className="flex-1 ">
											<div className="pl-[3px] pb-3 pt-8 flex gap-2 items-center">
												<div className="self-start">
													<Image src="/navbar/Email Marketing Agency-01.svg" alt="" height={45} width={60} className="" />
												</div>
												<div>
													<h3 className=" text-[18px] font-[700] pr-2 text-[#020202]">EMAIL MARKETING</h3>
													<p className="text-[14px] max-w-[300px] text-[#515E6F] font-[400]">Love letters that clue in customers</p>
												</div>
											</div>

											<li>
												<Link
													href={"/email-marketing"}
													id="023"
													onClick={handleMobileMenuService}
													className={`serveice_list pl-[70px] hover:text-[#FF492C] flex items-center gap-1 font-[600] ${
														router.asPath === "/email-marketing" ? "text-[#ff5056]" : " "
													}`}
												>
													Email Marketing
													<BiChevronRight className=" pt-[2px] text-xl text-[#515e6f]" />
												</Link>
											</li>

											<div className="mt-[28px] flex">
												<Link
													// onClick={() => setServiceMenubar(!serviceMenubar)}
													href={"/services"}
													className={`${
														router.asPath === "/services" ? "text-[#ff492c]" : "text-[#020202]"
													} group pl-[70px] flex items-center gap-2 text-[18px] font-[700] `}
												>
													ALL SERVICES{" "}
													<BiChevronRight
														className={`${
															router.asPath === "/services" ? "text-[#ff492c]" : "text-[#515e6f]"
														}group-hover:translate-x-2 duration-300 text-[24px] -ml-1 `}
													/>
												</Link>
											</div>
										</ul>
									</div>

									<div className="mobile_result">
										<li
											onClick={handleResourcePopupMobile}
											className={`text-[18px] pt-3 flex items-center gap-2 cursor-pointer ${
												router.asPath === "/case-studies" || router.asPath === "/testimonials" || router.asPath === "/our-projects"
													? "text-[#ff492c]"
													: ""
											} ${mobileOpen ? "text-[#ff492c]" : ""}`}
										>
											RESULTS <MdKeyboardArrowDown className={`text-2xl  transition-transform duration-300 ${mobileOpen ? "rotate-180" : ""}`} />
										</li>

										<div className={`pl-6 text-[16px]  ${mobileOpen ? "block" : "hidden"}`}>
											<ul>
												<li className="">
													<Link
														href={"/case-studies"}
														// onClick={handleMainSingleMenu}
														className={`serveice_list hover:text-[#FF492C]  whitespace-nowrap inline-flex items-center gap-1 mb-3 pt-4 ${
															router.asPath === "/case-studies" ? `text-[#ff492c] ` : " "
														}`}
													>
														Case Studies <BiChevronRight className=" pt-[2px] text-xl text-[#515e6f]" />
													</Link>
												</li>
												<li>
													<Link
														href={"/testimonials"}
														// onClick={handleMainSingleMenu}
														className={`serveice_list hover:text-[#FF492C]  whitespace-nowrap inline-flex items-center gap-1 mb-3  ${
															router.asPath === "/testimonials" ? "text-[#ff492c]" : " "
														}`}
													>
														Testimonials <BiChevronRight className=" pt-[2px] text-xl text-[#515e6f]" />
													</Link>
												</li>
												<li>
													<Link
														href={"/projects"}
														// onClick={handleMainSingleMenu}
														className={`serveice_list hover:text-[#FF492C]  whitespace-nowrap inline-flex items-center gap-1 mb-3 ${
															router.asPath === "/projects" ? "text-[#ff492c]" : " "
														}`}
													>
														Projects <BiChevronRight className=" pt-[2px] text-xl text-[#515e6f]" />
													</Link>
												</li>
											</ul>
										</div>
									</div>

									{/* <div className="mobile_quizzes">
										<li
											onClick={handleQuizePopupMobile}
											className={`text-[18px] pt-3 flex items-center gap-2 cursor-pointer ${
												router.pathname === "/quizzes/[quizDetails]" || router.asPath === "/quizzes" ? "text-[#ff492c]" : ""
											} ${mobileQuizeState ? "text-[#ff492c]" : ""}`}
										>
											QUIZZES <MdKeyboardArrowDown className={`text-2xl transition-transform duration-300 ${mobileQuizeState ? "rotate-180" : ""}`} />
										</li>

										<div className={`pl-6 text-[16px]  ${mobileQuizeState ? "block" : "hidden"}`}>
											<ul>
												{quizzSortedData &&
													quizzSortedData.map((data) => {
														return (
															<li key={data.id}>
																<Link
																	href={`/quizzes/${data.attributes.slug}`}
																	className={`serveice_list hover:text-[#FF492C]  whitespace-nowrap inline-flex items-center gap-1 pt-4 ${
																		router.asPath === `/quizzes/${data.attributes.slug}` ? "text-[#ff492c]" : " "
																	}`}
																>
																	{data.attributes.quizz_title} <BiChevronRight className=" pt-[2px] text-xl text-[#515e6f]" />
																</Link>
															</li>
														);
													})}

												<div className="mt-[20px] flex">
													<Link
														// onClick={() => setServiceMenubar(!serviceMenubar)}
														href={"/quizzes"}
														className={`${
															router.asPath === "/quizzes" ? "text-[#ff492c]" : "text-[#020202]"
														} group flex items-center gap-2 text-[16px] font-[700] `}
													>
														ALL QUIZZES{" "}
														<BiChevronRight
															className={`${
																router.asPath === "/quizzes" ? "text-[#ff492c]" : "text-[#515e6f]"
															} group-hover:translate-x-2 duration-300 text-[24px] -ml-1 `}
														/>
													</Link>
												</div>
											</ul>
										</div>
									</div> */}

									<div className="mobile_more">
										<li
											onClick={handleMorePopupMobile}
											className={`text-[18px] pt-3 flex items-center gap-2 cursor-pointer ${
												router.asPath === "/about" || router.asPath === "/team" || router.asPath === "/career" || router.asPath === "/faqs"
													? "text-[#ff492c]"
													: ""
											} ${mobileMoreState ? "text-[#ff492c]" : ""}`}
										>
											MORE <MdKeyboardArrowDown className={`text-2xl transition-transform duration-300 ${mobileMoreState ? "rotate-180" : ""}`} />
										</li>

										<div className={`pl-6 text-[16px]  ${mobileMoreState ? "block" : "hidden"}`}>
											<ul>
												<li>
													<Link
														href={"/about"}
														// onClick={handleMainSingleMenu}
														className={`serveice_list hover:text-[#FF492C]  whitespace-nowrap inline-flex items-center gap-1 mb-3 pt-4 ${
															router.asPath === "/about" ? "text-[#ff492c]" : " "
														}`}
													>
														About <BiChevronRight className=" pt-[2px] text-xl text-[#515e6f]" />
													</Link>
												</li>
												<li>
													<Link
														href={"/team"}
														// onClick={handleMainSingleMenu}
														className={`serveice_list hover:text-[#FF492C]  whitespace-nowrap inline-flex items-center gap-1 mb-3 ${
															router.asPath === "/team" ? "text-[#ff492c]" : " "
														}`}
													>
														Team <BiChevronRight className=" pt-[2px] text-xl text-[#515e6f]" />
													</Link>
												</li>
												<li>
													<Link
														href={"/career"}
														// onClick={handleMainSingleMenu}
														className={`serveice_list hover:text-[#FF492C]  whitespace-nowrap inline-flex items-center gap-1 mb-3 ${
															router.asPath === "/career" ? "text-[#ff492c]" : " "
														}`}
													>
														Career <BiChevronRight className=" pt-[2px] text-xl text-[#515e6f]" />
													</Link>
												</li>
												<li>
													<Link
														href={"/faqs"}
														// onClick={handleMainSingleMenu}
														className={`serveice_list hover:text-[#FF492C]  whitespace-nowrap inline-flex items-center gap-1 mb-3 ${
															router.asPath === "/faqs" ? "text-[#ff492c]" : " "
														}`}
													>
														FAQs <BiChevronRight className=" pt-[2px] text-xl text-[#515e6f]" />
													</Link>
												</li>
											</ul>
										</div>
									</div>

									<li className="text-[18px] pt-3">
										<Link
											href={"/blog"}
											onClick={handleMainSingleMenu}
											className={`hover:text-[#FF492C]  ${router.asPath === "/blog" ? "text-[#ff492c]" : " "}`}
										>
											BLOG
										</Link>
									</li>
									<div>
										<li
											onClick={handleContactPopupMobile}
											className={`text-[18px] pt-3 flex items-center gap-2 cursor-pointer ${
												router.asPath === "/contact" || router.asPath === "/client-call" || router.asPath === "/demo-call" ? "text-[#ff492c]" : " "
											}${mobileContact ? "text-[#ff492c]" : ""}`}
										>
											CONTACT <MdKeyboardArrowDown className={`text-2xl transition-transform duration-300 ${mobileContact ? "rotate-180" : ""}`} />
										</li>
										<div className={`pl-6 text-[16px]  ${mobileContact ? "block" : "hidden"}`}>
											<ul>
												<li>
													<Link
														href={"/contact"}
														className={`serveice_list hover:text-[#FF492C]  whitespace-nowrap inline-flex items-center gap-1 mb-3 pt-4 ${
															router.asPath === "/contact" ? "text-[#ff492c]" : " "
														}`}
													>
														Contact Us <BiChevronRight className=" pt-[2px] text-xl text-[#515e6f]" />
													</Link>
												</li>
												<li>
													<Link
														href={"/client-call"}
														className={`serveice_list hover:text-[#FF492C]  whitespace-nowrap inline-flex items-center gap-1 mb-3 pt-4 ${
															router.asPath === "/client-call" ? "text-[#ff492c]" : " "
														}`}
													>
														Exclusive Client Call <BiChevronRight className=" pt-[2px] text-xl text-[#515e6f]" />
													</Link>
												</li>
												<li>
													<Link
														href={"/demo-call"}
														className={`serveice_list hover:text-[#FF492C]  whitespace-nowrap inline-flex items-center gap-1 mb-3 pt-4 ${
															router.asPath === "/demo-call" ? "text-[#ff492c]" : " "
														}`}
													>
														Book a Demo <BiChevronRight className=" pt-[2px] text-xl text-[#515e6f]" />
													</Link>
												</li>
											</ul>
										</div>
									</div>

									{/* ....login button.......... */}
									<Link
										href={"https://crm.escaperoommarketer.com/authentication/login"}
										target="_blank"
										className="group relative z-20 flex lg:hidden items-center gap-1.5 cursor-pointer pt-3"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="18"
											height="17"
											viewBox="0 0 18 17"
											fill="none"
											className="group-hover:scale-105 duration-300"
										>
											<path
												d="M17.2096 0.404053H11.4742C11.106 0.404053 10.8076 0.702496 10.8076 1.07063V2.82842C10.9314 2.86056 11.0512 2.91634 11.1602 2.9973C11.6135 3.33412 11.7079 3.97466 11.371 4.42798L10.8077 5.18615V7.21912H12.4687V7.17696C12.4687 6.58697 13.1504 6.25369 13.616 6.6163L15.4461 8.04178C15.8112 8.32615 15.8117 8.87827 15.4461 9.16309L13.616 10.5886C13.1506 10.9511 12.4687 10.6181 12.4687 10.0279V9.98575H10.8077V15.7375C10.8077 16.1056 11.1061 16.4041 11.4742 16.4041H17.2097C17.5778 16.4041 17.8762 16.1056 17.8762 15.7375V1.07063C17.8762 0.702496 17.5778 0.404053 17.2096 0.404053Z"
												// fill="#575757"
												className="fill-[#7a7a7a] group-hover:fill-[#ff492c] duration-300"
											/>
											<path
												d="M7.2098 3.65665C8.00901 3.65665 8.65689 3.00876 8.65689 2.20955C8.65689 1.41034 8.00901 0.762451 7.2098 0.762451C6.41058 0.762451 5.7627 1.41034 5.7627 2.20955C5.7627 3.00876 6.41058 3.65665 7.2098 3.65665Z"
												// fill="#575757"
												className="fill-[#7a7a7a] group-hover:fill-[#ff492c] duration-300"
											/>
											<path
												d="M10.9419 3.2912C10.651 3.07499 10.2398 3.13556 10.0236 3.42655L8.72936 5.16812L7.47835 4.74035L8.11732 4.82318C8.02399 4.50785 7.7545 4.25972 7.40762 4.21086L5.61318 3.96262C5.248 3.91211 4.87647 3.98589 4.55826 4.17207L2.44062 5.41133C2.22577 5.53729 2.10075 5.77398 2.11777 6.02243L2.32254 9.00783C2.34736 9.36993 2.66127 9.64272 3.02226 9.61776C3.3839 9.59297 3.657 9.27969 3.63218 8.91804L3.45522 6.33817L4.3182 5.83219L3.84773 9.01303C3.8246 9.16936 3.80768 9.32656 3.797 9.48424L3.64795 11.6848L0.809137 12.1745C0.380472 12.2485 0.092915 12.6559 0.166867 13.0846C0.240819 13.5133 0.648232 13.8009 1.07697 13.7269L4.52588 13.1319C4.88392 13.0701 5.15328 12.7714 5.17782 12.4089L5.34053 10.0062L6.27226 10.1592L7.17491 12.0741L7.55809 15.699C7.60375 16.1308 7.9906 16.4452 8.42419 16.3995C8.85677 16.3538 9.1704 15.966 9.12467 15.5334L8.72745 11.776C8.71816 11.6882 8.69424 11.6027 8.65662 11.5229L7.58305 9.24543L7.96092 6.51413L7.05356 5.98246L8.75793 6.56527C9.02915 6.65797 9.32756 6.56388 9.49714 6.33568L11.0771 4.20948C11.2934 3.91856 11.2328 3.5074 10.9419 3.2912Z"
												// fill="#575757"
												className="fill-[#7a7a7a] group-hover:fill-[#ff492c] duration-300"
											/>
											<path
												d="M12.8876 9.56718V10.0278C12.8876 10.2713 13.1675 10.4076 13.3592 10.2583L15.1893 8.83283C15.3394 8.71588 15.3394 8.48886 15.1893 8.37192L13.3592 6.94644C13.1678 6.79729 12.8876 6.93323 12.8876 7.1769V7.6376H10.4133C10.2414 7.6376 10.1021 7.77694 10.1021 7.94883V9.25591C10.1021 9.42781 10.2414 9.56715 10.4133 9.56715H12.8876V9.56718Z"
												// fill="#CCCCCE"
												className="fill-[#7a7a7a] group-hover:fill-[#ff492c] duration-300"
											/>
										</svg>
										<p className="text-[18px] uppercase group-hover:text-[#ff492c] duration-300">Login</p>
									</Link>
								</ul>
							</div>
							<div onClick={closeSidebar} className="flex justify-center mb-14">
								<Link
									href={"/free-marketing"}
									className="font-circularMedium rounded-md border-2 border-[#FF492C] px-5 pb-2.5 pt-[11px] text-[#FF492C] font-[700] text-[16px] "
								>
									GET YOUR FREE MARKETING PLAN
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="break_line image bg-[url('/page_broke.png')] h-[75px] w-full bg-[length:1800px_90px] absolute -z-10 -mt-10 sm:-mt-7 md:-mt-7 bg-center"></div>
				{/* <div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center absolute z-40 -mt-6 md:-mt-4 "></div> */}
			</div>
		</div>
	);
}

export default Navbar;
