"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import Lottie from "lottie-react";
import chooseServiceAnimation from "../public/pricing/Choose-Your-Services.json";
import { sendPricingForm } from "@/lib/pricingapi";
import { phoneSchema } from "@/validation/PhoneNumberValidation";

let obj = {};
let finalobj = {};
let prevObjectLength;
let serviceItemIndex = [];

function PricingCalculator({ pricingPageData, cardNote }) {
	const { ref: discountRef, inView: myElementIsVisible } = useInView();

	const mobileToolTipRef = useRef();

	const [category, setCategory] = useState(null);
	const [firstItemOpen, setFirstItemOpen] = useState(true);
	const [itemCategory, setItemCategory] = useState(null);
	const [toggle, setToggle] = useState(true);
	let [sum, setSum] = useState(0);
	let [discountPrice, setDiscountPrice] = useState(0);
	let [totalDiscountSum, setTotalDiscountSum] = useState(0);
	let [load, setLoad] = useState(false);
	let [accordion, setAccordion] = useState(false);
	let [discountPercent, setDiscountPercent] = useState("");
	let [pricingData, setPricingData] = useState();
	const [clickedItem, setClickedItem] = useState(null);
	const [toolTip, setToolTip] = useState(false);

	const [name, setName] = useState("");
	const [company, setCompany] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [country, setCountry] = useState("");

	const [isPhoneValid, setIsphoneValid] = useState("");
	const [phoneCountryCode, setPhoneCountryCode] = useState("");

	//contact form country code can not erase
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

		setCountry(country.name);
		setPhone(value);
	};

	const marketingCategoryHandler = (index, data) => {
		if (category === index) {
			setCategory(null);
		} else if (index === 0) {
			setFirstItemOpen(!firstItemOpen);
			setCategory(null);
		} else {
			setCategory(index);
			setFirstItemOpen(false);
		}

		setAccordion(true);

		setTimeout(() => {
			setAccordion(false);
		}, 900);

		setToggle(!toggle);

		// console.log(Object.keys(obj).map((i) => i===));
		// console.log(Object.keys(obj).map((i) => i)[0], data.main_item.map((j) => j.item_title)[0]);
	};

	//Form Submit button color condition for active or not

	// useEffect(() => {
	// 	const formSubmit = document.getElementById("form_submit");

	// 	(async function anyNameFunction() {
	// 		try {
	// 			let isvalid = await phoneSchema.validate({ phone });
	// 			if (name !== "" && company !== "" && email !== "" && isvalid.phone !== "" && Object.keys(obj).length !== 0) {
	// 				formSubmit.classList.remove("bg-[#6B7280]");
	// 				formSubmit.classList.add("bg-[#FF492C]");
	// 			}
	// 			if (name == "" || company == "" || email === "" || email.indexOf("@") === -1 || Object.keys(obj).length === 0) {
	// 				formSubmit.classList.remove("bg-[#FF492C]");
	// 				formSubmit.classList.add("bg-[#6B7280]");
	// 			}
	// 		} catch (error) {
	// 			// console.log(error.errors[0]);
	// 			formSubmit.classList.remove("bg-[#FF492C]");
	// 			formSubmit.classList.add("bg-[#6B7280]");
	// 		}
	// 	})();
	// });

	const serveiceSelectHandler = (mainTitleId, itemIndex, itemId, name, price, e) => {
		setItemCategory(itemIndex);
		const itemid = document.getElementById(itemId + "item");
		const itemTitle = document.getElementById(itemIndex + name);
		const itemCheck = document.getElementById(name);
		// to render this Component, have to change state
		setToggle(!toggle);

		if (e.target.classList.contains("tooltip")) {
		} else {
			if (itemid.classList.contains("bg-[var(--section-bg-lightred)]")) {
				Object.entries(obj).map(([key, value]) => {
					if (name === key) {
						delete obj[key];
						itemTitle.classList.remove("text-[#000]");
						itemid.classList.remove("bg-[var(--section-bg-lightred)]");
						itemCheck.classList.remove("border-[#FF492C]");
						itemCheck.firstChild.classList.remove("block");
						itemCheck.firstChild.classList.add("hidden");
					}
				});
			} else {
				itemTitle.classList.add("text-[#000]");
				itemid.classList.add("bg-[var(--section-bg-lightred)]");
				obj[name] = price;
				prevObjectLength = Object.keys(obj).length;
				itemCheck.classList.remove("border-gray-500");
				itemCheck.classList.add("border-[#FF492C]");
				itemCheck.firstChild.classList.remove("hidden");
				itemCheck.firstChild.classList.add("block");
				// console.log(itemCheck);
			}
			if (prevObjectLength > Object.keys(obj).length) {
				setSum(sum - price);
				let objLength = Object.keys(obj).length;

				if (objLength < 2) {
					setDiscountPrice(0);
				} else {
					let substractTotal = sum - price;
					let discountedTotal = 0;
					if (objLength >= 2 && objLength <= 4) {
						discountedTotal = (substractTotal * 10) / 100;

						setDiscountPercent("10%");
					} else if (objLength >= 5 && objLength <= 6) {
						discountedTotal = (substractTotal * 15) / 100;

						setDiscountPercent("15%");
					}else if(objLength >= 7 && objLength <= 8){
						discountedTotal = (substractTotal * 20) / 100;

						setDiscountPercent("20%");
					}else{
						discountedTotal = (substractTotal * 25) / 100;

						setDiscountPercent("25%");
					}
					setDiscountPrice(substractTotal - discountedTotal);
					setTotalDiscountSum(discountedTotal);
				}
			} else {
				Object.entries(obj).map(([key, value], i) => {
					let objLength = Object.keys(obj).length;
					let getDiscount = 0;
					if (i === objLength - 1) {
						setSum((sum += value));

						if (objLength > 1) {
							if (objLength >= 2 && objLength <= 4) {
								getDiscount = (sum * 10) / 100;

								setDiscountPercent("10%");
							} else if (objLength >= 5 && objLength <= 6) {
								getDiscount = (sum * 15) / 100;

								setDiscountPercent("15%");
							}else if (objLength >= 7 && objLength <= 8){
								getDiscount = (sum * 20) / 100;

								setDiscountPercent("20%");
							}else{
								getDiscount = (sum * 25) / 100;

								setDiscountPercent("25%");
							}

							let discountPrice = sum - getDiscount;
							setDiscountPrice(discountPrice);
							setTotalDiscountSum(sum - discountPrice);
						}
					}
				});
			}
		}
	};

	const mailSendHandler = async (e) => {
		if (name !== "" && company !== "" && email !== "") {
			e.preventDefault();
		}

		if (phone !== "") {
			e.preventDefault();
			try {
				await phoneSchema.validate({ phone });
				console.log("Phone number is valid");

				if (name !== "" && company !== "" && email !== "" && email.includes("@") && Object.keys(obj).length !== 0) {
					setLoad(true);
					console.log("from submit button");

					finalobj = {
						data: { ...obj, name, phone, company, email, Country: country, TotalSum: sum, DiscountedSum: totalDiscountSum },
						subject: "Pricing - Escape Room Marketer",
						form: "pricing",
					};

					const thankYouParam = name.split(" ")[0];
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
					}, 1000);

					try {
						await sendPricingForm(finalobj);
					} catch (error) {
						console.log(error);
					}
				}
			} catch (error) {
				console.error(error.errors[0]);
				setIsphoneValid(error.errors[0]);
				setTimeout(() => {
					setIsphoneValid("");
				}, 800);
			}
		} else {
			setPhone(null);
			setTimeout(() => {
				setPhone("");
			}, 800);
		}
	};

	useEffect(() => {
		const finalData = pricingPageData.data.reduce(function (accumulator, currentValue) {
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
		setPricingData(finalData);
	}, [pricingPageData]);
	// console.log(pricingPageData);

	useEffect(() => {
		document.addEventListener("click", (e) => {
			if (!e.target.classList.contains("tooltip")) {
				setClickedItem(null);
			}
		});
	});

	const handleItemClick = (index) => {
		setClickedItem(index);
		if (clickedItem !== index) {
			setToolTip(true);
		} else {
			setToolTip(!toolTip);
		}
	};

	return (
		<div className=" font-openSans mt-10 md:mt-16 flex flex-col md:flex-row">
			{/* left side button section */}

			<div className="flex-1 md:border-r-[#D9D9D9] md:border-r-[2px]">
				<div className=" md:ml-2 2xl:ml-14 md:mr-6 xl:mr-14">
					{pricingData &&
						pricingData.map((data, i) => {
							return (
								<div className="" key={data.id}>
									<div
										onClick={() => marketingCategoryHandler(i, data)}
										id={data.id}
										className={`${
											firstItemOpen == true && i === 0
												? "text-[#202020] border-[#202020] bg-[#fafafa]"
												: category === i
												? "text-[#202020] border-[#202020] bg-[#fcfcfc]"
												: "border-[#b7b7b7] text-[#6b6b6b] bg-[#f5f5f5]"
										} price_category font-[700] hover:text-[#202020] hover:border-[#202020] cursor-pointer rounded-md border-[1.5px] text-lg md:text-[20px] px-4 py-3 md:px-8  md:py-4 mb-5  flex justify-between items-center`}
									>
										<p className="">{data.attributes.service_title}</p>

										<MdKeyboardArrowDown
											className={`text-3xl transition-transform duration-300 ${
												firstItemOpen === true && i === 0 ? "rotate-180" : category === i ? "rotate-180" : ""
											}`}
										/>
									</div>
									<div
										className={` transition-all duration-500 ${
											firstItemOpen === true && i === 0
												? accordion
													? "overflow-y-hidden max-h-[700px]  "
													: "max-h-[700px] "
												: category === i && category !== null
												? accordion
													? "overflow-y-hidden max-h-[400px] "
													: "max-h-[400px] "
												: "overflow-y-hidden max-h-0 "
										}`}
									>
										<div className={` ml-7 pb-6 `}>
											{/* <ul>
												<li className="mb-5 md:mb-6 ml-4 xl:ml-7 font-[500] list-disc">You can choose multiple options</li>
											</ul> */}

											{data &&
												data.attributes.service_item.map((item, a) => {
													return (
														<div key={item.id}>
															<div
																className="relative mr-1 pt-2"
																onClick={(e) => serveiceSelectHandler(data.id, a, item.id, item.item_title, item.price, e)}
															>
																<div
																	id={item.item_title}
																	className={`			
															         absolute mt-6 -ml-7 cursor-pointer w-4 md:w-5 h-4 md:h-5 border-[#6B7280] md:hover:border-[#FF492C]  border-2  p-[2px] rounded  flex justify-center items-center`}
																>
																	<Image src="/pricing/check_mark.svg" alt="" height={15} width={15} className="hidden" />
																	<div className="w-3 h-3   rounded-full"></div>
																</div>
																<div
																	id={item.id + "item"}
																	className={`${
																		itemCategory === a ? "" : ""
																	} flex items-center cursor-pointer min-h-[70px] bg-[var(--section-bg-lightblue)] md:hover:bg-[var(--section-bg-lightred)] rounded-md shadow hover:drop-shadow-md mb-6 xl:ml-2 px-2 md:px-3 py-2 md:py-1`}
																>
																	<div className="group flex items-center gap-2 md:gap-4 w-full lg:pr-5">
																		{item.image.data && (
																			<Image
																				src={`${item.image.data && item.image.data.attributes.url}`}
																				alt=""
																				height={60}
																				width={60}
																				className=" ml-1 w-[50px] md:w-[60px]"
																			/>
																		)}
																		<p id={a + item.item_title} className=" md:text-[18px] font-[600] ">
																			{item.item_title}
																		</p>
																	</div>
																	<div ref={mobileToolTipRef} className="group">
																		<Image
																			onClick={() => handleItemClick(a)}
																			src="/tooltip.svg"
																			alt=""
																			height={20}
																			width={20}
																			className={`${
																				clickedItem === a && toolTip ? "opacity-0 md:opacity-100" : "opacity-100"
																			} tooltip md:group-hover:opacity-0 `}
																		/>
																		<Image
																			onClick={() => handleItemClick(a)}
																			src="/tooltip_orange.svg"
																			alt=""
																			height={20}
																			width={20}
																			className={`${
																				clickedItem === a && toolTip ? "block md:hidden" : "hidden"
																			} tooltip md:group-hover:block absolute -mt-[19.83px]`}
																		/>
																		<div
																			className={`${
																				clickedItem === a && toolTip ? "block md:hidden" : "hidden"
																			} tooltip text-[13px] text-[#6f6f6f] leading-[1.7] md:group-hover:block drop-shadow-md md:drop-shadow-none  rounded absolute bottom-[85px] left-[-20px] z-10  ml-4 bg-[var(--section-bg-lightred)] px-4 py-2 before:content-[''] before:absolute before:left-[10%] before:top-[100%]  before:border-[15px] before:border-solid before:border-[#fff7f5] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]`}
																		>
																			{item.description}
																		</div>
																	</div>
																</div>
															</div>
														</div>
													);
												})}
										</div>
									</div>
								</div>
							);
						})}
				</div>
			</div>

			<div ref={discountRef} className="flex-1 md:min-w-[350px]">
				<div className="ml-0 md:ml-6 xl:ml-14 mr-2 2xl:mr-16">
					<div className="flex justify-center">
						<h4 className="font-[600] text-center px-2 py-1 mt-3 md:mt-0 text-base lg:text-[17px] rounded-md relative">
							<span className="font-[700] text-[#FF492C] text-lg">Save up to 25%</span>
							<br className="block lg:hidden" /> <span> by bundling services!</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="140"
								height="12"
								viewBox="0 0 136 10"
								fill="none"
								className="discount_animation hidden lg:block absolute left-0 -rotate-2 "
							>
								<path
									d="M1 8.97475C23.6667 4.14142 82.1 -3.52525 134.5 4.47475"
									stroke="#FF492C"
									strokeWidth="1.5"
									strokeLinecap="round"
									className={`${myElementIsVisible ? "animation_line " : ""}`}
								/>
							</svg>
						</h4>
					</div>

					<div
						className={`pricing_calculator mt-6 md:mt-[36px] w-full h-[320px]  resize-none border-none outline-none bg-[#F8F8F8]  ${
							Object.keys(obj).length >= 6 ? "overflow-y-scroll" : ""
						} `}
					>
						{/* <Image
							src="/pricing/Element for Price Section.json"
							alt=""
							width={300}
							height={300}
							className={`w-full h-[320px] ${Object.keys(obj).length > 0 ? "hidden" : "block"}`}
						/> */}
						<Lottie loop={true} animationData={chooseServiceAnimation} className={`${Object.keys(obj).length > 0 ? "hidden" : "block"} h-full`} />
						<div className="px-4 md:px-8 py-4">
							<ul>
								{obj !== null &&
									Object.entries(obj).map(([key, value], i) => {
										return (
											<li key={i} className="flex justify-between items-center gap-2 pt-1 pb-1.5 border-b-[1px] ">
												{" "}
												<h5 className="text-[14px] font-[600] text-[#3e3e3e] ">{key}</h5>{" "}
												<p className="text-[16px] md:text-[18px] font-[600] text-[#72BD39]">${value}</p>{" "}
											</li>
										);
									})}
							</ul>
						</div>
					</div>
					<div className="bg-[#EFFFE3] rounded-md px-3 xl:px-8 py-4 mt-5 md:mt-[35px]">
						<div className="flex justify-between items-center">
							{discountPrice === 0 ? (
								<p className="md:text-[16px] lg:text-lg font-[500]">Your Current Estimate</p>
							) : (
								<div className="">
									<button className=" text-[14px] lg:text-[15px] border-[2px] bg-[#fff7f5] border-[#FF492C] rounded-md px-1 md:px-3 md:py-1 text-[#202020] font-semibold ">
										You SAVED {discountPercent}
									</button>
									<span className="ml-2 text-[14px] lg:text-[16px] font-semibold">(${totalDiscountSum})</span>
								</div>
							)}

							<div className=" text-[20px] md:text-[22px] lg:text-[28px] text-[#5E9733] font-bold ">
								<p className="">${sum.toFixed(2)}</p>
								<div
									className={`${
										sum === 0 || Object.keys(obj).length < 2
											? "hidden"
											: sum >= 1000
											? sum >= 10000
												? "w-[110px] lg:w-[149px]"
												: "w-[100px] lg:w-[139px]"
											: "w-[90px] md:w-[100px] xl:w-[130px] block"
									} -mt-4 lg:-mt-[20px] pb-6 -ml-2 border-t-[2px] lg:border-t-2 rotate-[-8deg] border-[#FF492C] relative z-30 `}
									// -left-1 top-3 lg:top-5 rotate-[9deg]
								></div>
							</div>
						</div>
						{discountPrice !== 0 && (
							<div className="flex justify-between items-center mt-1 ">
								<p className="md:text-[16px] lg:text-lg font-[500]">Your Current Estimate</p>
								<p className="text-xl md:text-[22px] lg:text-[28px] text-[#FF492C] font-bold">${discountPrice.toFixed(2)}</p>
							</div>
						)}
						{discountPrice === 0 && (
							<div className="clip-path text-center mt-2 text-white px-2 py-1 rounded">
								<p className=" text-[14px] sm:text-lg text-[#202020] font-[500] ">Select multiple services to see your discount.</p>
							</div>
						)}
					</div>
					<div className="mt-[20px] max-">
						<form>
							<div className="md:flex">
								<input
									onChange={(e) => setName(e.target.value)}
									type="text"
									placeholder="Your name"
									required
									className="w-full  mt-3 md:mt-0 mb-4 md:mb-0 md:mr-2 bg-[#F5F5F5] outline-none rounded-md border-[1px] px-2 py-[8px] md:py-1"
								/>
								<input
									onChange={(e) => setCompany(e.target.value)}
									type="text"
									placeholder="Your website"
									required
									className=" w-full mb-4 md:mb-0 bg-[#F5F5F5] outline-none rounded-md border-[1px] px-2 py-[8px] md:py-1"
								/>
							</div>
							<div className="md:flex md:mt-3">
								<input
									onChange={(e) => setEmail(e.target.value)}
									type="email"
									placeholder="Your email"
									required
									className=" w-full mb-4 md:mb-0 md:mr-3 bg-[#F5F5F5] outline-none rounded-md border-[1px] px-2 py-[8px] md:py-1"
								/>
								<div className="w-full relative">
									<PhoneInput
										country={"us"}
										preferredCountries={["us", "ca", "gb", "au"]}
										onChange={handleChange}
										onKeyDown={handleKeyDown}
										value={phone}
										type="number"
										inputStyle={{ width: "100%", backgroundColor: "#F5F5F5", border: "1px solid #e2e8f0", borderRadius: "6px", outline: "#FF492C" }}
										inputProps={{
											required: true,
										}}
										className=""
									/>
									{phone === null && (
										<p className="text-[14px] rounded absolute bottom-[-45px] left-[15%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:top-[-50%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
											⚠️ Please fill out this field
										</p>
									)}
									{isPhoneValid !== "" && (
										<p className="text-[14px] rounded absolute bottom-[-45px] left-[15%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:top-[-50%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
											⚠️ {isPhoneValid}
										</p>
									)}
								</div>
							</div>
							<input
								type="submit"
								value={load === true ? "Please wait... 😎" : "GET YOUR QUOTE + MARKETING PLAN"}
								id="form_submit"
								onClick={mailSendHandler}
								className={`${
									load ? "bg-red-200 text-black" : "bg-[#FF492C] text-white"
								} cursor-pointer w-full text-[13px] md:text-lg px-3 py-2 font-[600] rounded-md mt-3`}
							/>
						</form>
					</div>
					<p className="text-[13px] text-[#6f6f6f] mt-5">
						{cardNote && cardNote}
						{/* NB: This pricing applies to single-location businesses with up to 5 game rooms.
						<span className="text-[#FF492C] font-[500]">
							<Link href="/contactUs"> Contact Us</Link>
						</span>{" "}
						for custom proposals for multi-locations or unique projects. */}
					</p>
				</div>
			</div>
		</div>
	);
}

export default PricingCalculator;
