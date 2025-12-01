/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import styles from "../styles/contactus.module.css";
import FooterTopCta from "@/components/FooterTopCta";
import Image from "next/image";
import { sendPricingForm } from "@/lib/pricingapi";
import { phoneSchema } from "../validation/PhoneNumberValidation";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Head from "next/head";
import ContactHero from "@/components/others/ContactHero";

function Contact({ contactData, seoData }) {
	const [name, setName] = useState("");
	const [websiteAddress, setWebsiteAddress] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [country, setCountry] = useState("");
	const [message, setMessage] = useState("");
	const [isPhoneValid, setIsphoneValid] = useState("");

	const [phoneCountryCode, setPhoneCountryCode] = useState("+1");

	let contactObj = {};

	const handleKeyDown = (e) => {
		// Prevent the backspace key from removing the country code
		const isBackspaceOrDelete = e.key === "Backspace" || e.key === "Delete";
		const isCursorAtStart = e.target.selectionStart === phoneCountryCode.length;

		if (isBackspaceOrDelete && isCursorAtStart) {
			e.preventDefault();
		}
		console.log(isCursorAtStart);
	};

	const handleChange = (value, country, event) => {
		const countryCode = `+${country.dialCode}`;
		setPhoneCountryCode(countryCode);

		setPhone(value);
		setCountry(country.name);

	};

	const handleSubmit = async (e) => {
		if (name !== "" && phone === "" && email.includes("@")) {
			e.preventDefault();
			setPhone(null);
			setTimeout(() => {
				setPhone("");
			}, 800);
		}

		// let phone = (await "+") + phone;
		if (phone !== "") {
			e.preventDefault();
			try {
				await phoneSchema.validate({ phone });
				console.log("Phone number is valid");

				if (name !== "" && email.includes("@") && websiteAddress !== "" && message !== "") {
					e.preventDefault();
					contactObj = { data: { name, email, phone, country, websiteAddress, message }, subject: "Contact - Escape Room Marketer", form: "contact" };

					const thankYouParam = name.split(" ")[0];
					let hexValue = [];
			
					for (let i = 0; i < thankYouParam.length; i++) {
						hexValue.push("%" +( i===0? thankYouParam.charAt(0).toUpperCase().charCodeAt(0).toString(16):thankYouParam.charCodeAt(i).toString(16)));
					}
			
					let hexString = hexValue.join("")
					let urlEncodedString = encodeURIComponent(hexString);
					

					setTimeout(() => {
						location.replace(`https://escaperoommarketer.com/thank-you?%256e=${urlEncodedString}`);
						// setLoad(false);
					}, 500);

					try {
						await sendPricingForm(contactObj);
					} catch (error) {
						console.log(error);
					}
				} else {
					e.preventDefault();
					if (websiteAddress === "") {
						setWebsiteAddress(null);
						setTimeout(() => {
							setWebsiteAddress("");
						}, 800);
					} else if (name === "") {
						setName(null);
						setTimeout(() => {
							setName("");
						}, 800);
					} else if (email === "" || email.indexOf("@") === -1) {
						setEmail(null);
						setTimeout(() => {
							setEmail("");
						}, 800);
					} else if (message === "") {
						setMessage(null);
						setTimeout(() => {
							setMessage("");
						}, 800);
					}
				}
			} catch (error) {
				console.error(error.errors[0]);
				setIsphoneValid(error.errors[0]);
				setTimeout(() => {
					setIsphoneValid("");
				}, 800);
			}
		}

		// const isValid = await phoneSchema.validate({ phone });
	};

	console.log(phone);

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
				<ContactHero contactData={contactData && contactData} />
				{/* <div className="break_line image bg-[url('/section_break.svg')] h-[80px] bg-[length:3200px_90px] -mt-10 bg-center "></div> */}
				<div className="g-page_structure bg-[#F9FCFF]">
					<div className="grid grid-cols-1 xl:grid-cols-3 gap-[65px] xl:gap-7 pt-20 md:pt-28 max-w-[1190px] mx-auto pb-16 md:pb-24 font-openSans">
						<div className={`${styles.form_size} xl:col-start-1 xl:col-end-2 md:max-w-2xl  xl:max-w-[415px] mx-auto`}>
							<h3 className="text-[24px] leading-[32.4px] font-[600]">
								{contactData && contactData.data.attributes.description_title_firstline}
								<br /> {contactData && contactData.data.attributes.description_title_secondline}
							</h3>
							<p className="pt-[15px] md:pt-5 pb-[30px]">{contactData && contactData.data.attributes.list_descriptor}</p>
							<div className="pb-[60px] pl-[36px] text-[#222]">
								{contactData &&
									contactData.data.attributes.lists.map((data) => {
										return (
											<div className="relative pb-4 " key={data.id}>
												<Image src={"/contactus/contactCheck.svg"} height={15} width={20} alt="" className="absolute left-[-36px] top-[5px] " />
												<p className=" ">{data.list}</p>
											</div>
										);
									})}
							</div>
							<div className="">
								<Image src={"/contactus/phone-call.svg"} height={100} width={60} alt="" className="animate_vibe" />
								<p className="text-[24px] leading-[32.4px] font-[600] pt-3">Prefer To Call?</p>
								<p className="text-[18px] font-[400]">Let's talk and get the ball rolling...</p>
								<div className="h-[2px] w-[200px] bg-[#D9D9D9] my-5"></div>
								<p className="text-[24px] leading-[32.4px] font-[600]">CALL NOW</p>
								<a
									href={`tel:${contactData && contactData.data.attributes.phone_number}`}
									className="text-[#FF492C] text-[18px] font-[600] tracking-[0.9px] cursor-pointer"
								>
									{contactData && contactData.data.attributes.phone_number}
								</a>
							</div>
						</div>
						<div
							className={`${styles.form_size} row-start-1 xl:col-start-2 xl:col-end-4  md:max-w-2xl xl:max-w-[735px] mx-auto  shadow bg-white px-5 md:px-12 lg:px-[43px] pt-[59px] pb-[39px] relative rounded-lg`}
						>
							<Image
								src="/contactus/key.svg"
								alt=""
								height={100}
								width={130}
								className="contact-key_image w-[70px] md:w-[100px] lg:w-[130px] absolute -top-5 md:-top-12 scale-x- -right-[10px] sm:-right-[30px]  lg:-right-[75px] "
							/>
							{/* <Image
								src="/contactus/key.svg"
								alt=""
								height={100}
								width={100}
								className="w-[80px] md:w-[130px] absolute -bottom-10 -left-3 md:-left-12"
							/> */}
							<h2 className="text-center text-[24px] md:text-3xl font-[800] md:font-bold">
								{contactData && contactData.data.attributes.contact_card_title}
							</h2>
							<div className="pt-[40px] md:pt-[50px] ">
								<form action="">
									<div className=" flex flex-col md:flex-row gap-[20px] md:gap-[50px] w-full">
										<div className="sm:w-full relative">
											<label htmlFor="" className="font-[400] text-[18px] text-[#222]">
												Your name<span className="text-[#FF492C] text-lg">*</span>
											</label>{" "}
											<br />
											<input
												onChange={(e) => setName(e.target.value)}
												type="text"
												required
												className="border border-[#C9CBCD] bg-[#FBFBFB] w-full h-[50px]  text-base px-2 py-1 mt-2 rounded-md outline-[#FF492C]"
											/>
											{name === null && (
												<p className="text-[14px] rounded absolute bottom-[-45px] left-[25%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:top-[-50%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
													⚠️ Please fill out this field
												</p>
											)}
										</div>
										<div className="sm:w-full relative">
											<label htmlFor="" className="font-[400] text-[18px] text-[#222]">
												Your business email<span className="text-[#FF492C] text-lg">*</span>
											</label>{" "}
											<br />
											<input
												onChange={(e) => setEmail(e.target.value)}
												type="email"
												required
												className="border border-[#C9CBCD] bg-[#FBFBFB] w-full h-[50px] text-base px-2 py-1 mt-2 rounded-md outline-[#FF492C]"
											/>
											{email === null && (
												<p className="text-[13px] rounded absolute bottom-[-45px] left-[15%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:bottom-[100%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
													⚠️ Please enter a valid email address
												</p>
											)}
										</div>
									</div>
									<div className="flex flex-col md:flex-row gap-[20px] md:gap-[50px] my-[20px] md:my-[29px]">
										<div className="sm:w-full relative">
											<label htmlFor="" className="font-[400] text-[18px] text-[#222]">
												Your phone number<span className="text-[#FF492C] text-lg">*</span>
											</label>{" "}
											<br />
											<PhoneInput
												country={"us"}
												preferredCountries={["us", "ca", "gb", "au"]}
												// onChange={(value) => setPhone(value)}
												onChange={handleChange}
												value={phone}
												onKeyDown={handleKeyDown}
												inputStyle={{
													width: "100%",
													height: "50px",
													backgroundColor: "#FBFBFB",
													border: "1px solid #C9CBCD",
													outlineColor: "#FF492C",
													borderRadius: "6px ",
												}}
												inputProps={{
													required: true,
												}}
												type="number"
												className="input-phone-number text-base mt-2"
											/>
											{phone === null && (
												<p className="text-[14px] rounded absolute bottom-[-45px] left-[25%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:top-[-50%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
													⚠️ Please fill out this field"
												</p>
											)}
											{isPhoneValid !== "" && (
												<p className="text-[14px] rounded absolute bottom-[-45px] left-[25%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:top-[-50%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
													⚠️ {isPhoneValid}
												</p>
											)}
										</div>
										<div className="sm:w-full relative">
											<label htmlFor="" className="font-[400] text-[18px] text-[#222]">
												Website address<span className="text-[#FF492C] text-lg">*</span>
											</label>{" "}
											<br />
											<input
												onChange={(e) => setWebsiteAddress(e.target.value)}
												type="text"
												className="border border-[#C9CBCD] bg-[#FBFBFB] w-full h-[50px] text-base px-2 py-1 mt-2.5 rounded-md outline-[#FF492C]"
											/>
											{websiteAddress === null && (
												<p className="text-[14px] rounded absolute bottom-[-45px] left-[25%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:top-[-50%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
													⚠️ Please fill out this field
												</p>
											)}
										</div>
									</div>
									<label htmlFor="" className="font-[400] text-[18px] text-[#222]">
										Message<span className="text-[#FF492C] text-lg">*</span>
									</label>{" "}
									<br />
									<div className="relative">
										<textarea
											onChange={(e) => setMessage(e.target.value)}
											name=""
											id=""
											required
											placeholder="Share your greatest marketing challenges or dreams!"
											cols="30"
											rows="7"
											className="border border-[#C9CBCD] bg-[#FBFBFB] w-full h-[150px] resize-none text-[16px] font-[400] px-4 py-3 mt-2 rounded-md outline-[#FF492C]"
										></textarea>
										{message === null && (
											<p className="text-[14px] rounded absolute bottom-[-45px] left-[15%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:top-[-50%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
												⚠️ Please fill out this field
											</p>
										)}
									</div>
									<div className="mt-[20px] ">
										<input
											onClick={handleSubmit}
											type="submit"
											value={contactData && contactData.data.attributes.contact_cta}
											className="w-full shadow py-2 px-2 cursor-pointer rounded-md bg-[#FF492C] hover:bg-[#E74329] text-white text-[18px] font-[500] "
										/>
									</div>
								</form>
							</div>
							<p className="pt-[30px] text-[#545454] text-[14px]">
								Your information will be kept private. We won't ever sell it and we won't ever spam you. We hate that sort of BS as much as you do.
							</p>
							<p className="py-5 text-[#545454] text-[14px]">
								We are not the only competent digital agency out there, so we appreciate you considering us. We take that responsibility seriously.
							</p>
							<p className="text-[#545454] text-[14px] ">Great things ahead!</p>
						</div>
					</div>
					{/* <iframe
						src="http://localhost:3000/animation/special-agent/index.html"
						// style={{ height: "400px", width: "200px" }}
						// title="YouTube video"
						// allowFullScreen={true}
						frameborder="0"
						scrolling="no"
						className="w-[200px] h-[400px] "
					></iframe> */}
				</div>
				<div className="break_line image bg-[url('/footer_top_cta_top.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-10 mt-[-30px] bg-center"></div>
				{/* <FooterTopCta pageBreakBlue={true} footerTopCta={contactData && contactData.data.attributes.footer_top_cta} /> */}
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
		let data = await fetch(`${URL}/api/contact-page?populate=*`);
		let contactData = await data.json();

		let seo = await fetch(`${URL}/api/contact-page?populate[seo][populate]=*`);
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

export default Contact;
