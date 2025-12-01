import React, { useState } from "react";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { phoneSchema } from "../../validation/PhoneNumberValidation";
import { sendPricingForm } from "@/lib/pricingapi";

function PartnerContact({ toggle, setToggle }) {
	const [state, setState] = useState({
		name: "",
		email: "",
		phone: "",
	});
	const [phoneCountryCode, setPhoneCountryCode] = useState("+1");
	const [validation, setValidation] = useState({
		isPhoneValid: "",
		isNameValid: "",
		isEmailValid: "",
	});

	const handleClose = () => {
		document.body.classList.remove("overflow-hidden");
		document.body.classList.remove("lg:mr-[12.8px]")
		document.body.classList.remove("lg:bg-[#5a5a5aa9]")
		setToggle(false);
		setState((prev) => ({
			...prev,
			name: "",
			email: "",
			phone: "+1",
		}));
	};

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

		setState((prevState) => ({
			...prevState,
			phone: value,
		}));
	};

	console.log(state.phone);

	const handleSubmit = async (e) => {
		if (state.name !== "" && state.phone === "" && state.email !== "" && state.email.includes("@")) {
			e.preventDefault();
			setValidation((prev) => ({ ...prev, isPhoneValid: "Please enter a valid number" }));

			setTimeout(() => {
				setValidation((prev) => ({ ...prev, isPhoneValid: "" }));
			}, 800);
		}

		// let phone = (await "+") + phone;

		if (state.phone !== "") {
			e.preventDefault();
			const phone = state.phone;
			try {
				await phoneSchema.validate({ phone });
				console.log("Phone number is valid");

				if (state.name !== "" && state.email !== "" && state.email.includes("@")) {
					e.preventDefault();
					let finalObj = { data: state, subject: "Partner Program - Escape Room Marketer", form: "partner-program" };

					setTimeout(() => {
						location.replace(`https://escaperoommarketer.com/thank-you?name=${state.name.split(" ")[0]}`);
						// setLoad(false);
					}, 500);

					try {
						await sendPricingForm(finalObj);
					} catch (error) {
						console.log(error);
					}
				} else {
					e.preventDefault();
					if (state.email === "" || state.email.indexOf("@") === -1) {
						setValidation((prev) => ({ ...prev, isEmailValid: "Please enter a valid email" }));

						setTimeout(() => {
							setValidation((prev) => ({ ...prev, isEmailValid: "" }));
						}, 800);
					} else if (state.name === "") {
						setValidation((prev) => ({ ...prev, isNameValid: "Please enter your name" }));

						setTimeout(() => {
							setValidation((prev) => ({ ...prev, isNameValid: "" }));
						}, 800);
					}
				}
			} catch (error) {
				console.error(error);
				setValidation((prev) => ({ ...prev, isPhoneValid: "Please enter a valid number" }));

				setTimeout(() => {
					setValidation((prev) => ({ ...prev, isPhoneValid: "" }));
				}, 800);
			}
		}
	};

	console.log(state);

	return (
		<div className="">
			<div className={`${toggle ? "activee" : "popup"}  w-[350px] sm:w-[420px] md:w-[620px]  fixed   z-[999]`}>
				<div className="rounded-lg bg-white ">
					<Image src="/others/partner-contact.svg" height={100} width={400} alt="" className="w-full" />
					<div
						onClick={handleClose}
						className="group absolute top-0 right-0 h-[40px] w-[40px] flex justify-center items-center  bg-[#ECECEC] rounded-tr-lg cursor-pointer"
					>
						<div className="group-hover:animate-spin ">
							<p className="text-[40px] font-[300] rotate-45 ">+</p>
						</div>
					</div>
					<div className="break_line image bg-[url('/page_broke.png')] h-[45px] md:h-[75px] w-full bg-[length:1800px_90px] -mt-16 md:-mt-10  bg-center rotate-180"></div>
					<div className="px-2.5 max-w-[400px] mx-auto relative z-20 bg-white">
						<h2 className="text-[28px] md:text-[39px] text-center font-[800] leading-tight -mt-5">Who Can We Send Program Info To?</h2>

						<form action="" className=" pt-3 md:pt-8 pb-10">
							<div className="relative">
								<label htmlFor="" className="font-[400] text-[18px] text-[#222]">
									Your name<span className="text-[#FF492C] text-lg">*</span>
								</label>{" "}
								<br />
								<input
									onChange={(e) => setState((prevState) => ({ ...prevState, name: e.target.value }))}
									// value={state.name}
									type="text"
									required
									className="border border-[#C9CBCD] bg-[#FBFBFB] w-full h-[50px]  text-base px-2 py-1 mb-3 mt-2 rounded-md outline-[#FF492C]"
								/>
								{validation.isNameValid !== "" && (
									<p className="text-[14px] rounded absolute bottom-[-25px] left-[25%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:top-[-50%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
										⚠️ {validation.isNameValid}
									</p>
								)}
							</div>
							<div className="relative">
								<label htmlFor="" className="font-[400] text-[18px] text-[#222] ">
									Your email<span className="text-[#FF492C] text-lg">*</span>
								</label>{" "}
								<br />
								<input
									onChange={(e) => setState((prevState) => ({ ...prevState, email: e.target.value }))}
									// value={state.email}
									type="email"
									required
									className="border border-[#C9CBCD] bg-[#FBFBFB] w-full h-[50px]  text-base px-2 py-1 mb-3 mt-2 rounded-md outline-[#FF492C]"
								/>
								{validation.isEmailValid !== "" && (
									<p className="text-[14px] rounded absolute bottom-[-25px] left-[25%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:top-[-50%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
										⚠️ {validation.isEmailValid}
									</p>
								)}
							</div>
							<div className="relative">
								<label htmlFor="" className="font-[400] text-[18px] text-[#222]">
									Your phone number<span className="text-[#FF492C] text-lg">*</span>
								</label>{" "}
								<br />
								<PhoneInput
									country={"us"}
									preferredCountries={["us", "ca", "gb", "au"]}
									onChange={handleChange}
									value={state.phone}
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
									className="input-phone-number text-base mb-4 mt-2"
								/>
								{validation.isPhoneValid !== "" && (
									<p className="text-[14px] rounded absolute bottom-[-45px] left-[25%] px-[10px] py-[8px] z-10 bg-[#f1f1f1] before:content-[''] before:absolute before:left-[15%] before:top-[-50%] before:rotate-180  before:border-[10px] before:border-solid before:border-[#f1f1f1] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
										⚠️ {validation.isPhoneValid}
									</p>
								)}
							</div>
							{/* <input
								// onChange={(e) => setName(e.target.value)}
								type="text"
								required
								className="border border-[#C9CBCD] bg-[#FBFBFB] w-full h-[50px]  text-base px-2 py-1 mb-7 mt-2 rounded-md outline-[#FF492C]"
							/> */}
							<input
								onClick={handleSubmit}
								type="submit"
								value={"SEND ME INFO"}
								className="w-full shadow py-2 px-2 cursor-pointer rounded-md bg-[#FF492C] hover:bg-[#E74329] text-white text-[18px] font-[500] "
							/>
						</form>
					</div>
				</div>
			</div>
			<div className={`${toggle ? "block" : "hidden"} popup-cover absolute h-full w-full top-[-100px] left-0 bg-[#5a5a5aa9] z-50`}></div>
		</div>
	);
}

export default PartnerContact;
