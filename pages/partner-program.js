import FooterTopCta from "@/components/FooterTopCta";
import PartnerContact from "@/components/others/PartnerContact";
import FaqSection from "@/components/service/FaqSection";
import Hero from "@/components/service/Hero";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function PartnerProgram({ heroData, testimonialData, stepsData, shortIntroData, servicesData, faqSectionData, footerTopCta }) {
	const [stepsSortedData, setStepsSortedData] = useState();
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		if (stepsData) {
			let finalData = stepsData.data.attributes.steps_section.steps.reduce(function (accumulator, currentValue) {
				let Id = parseInt(currentValue.steps_id);

				if (typeof Id === "number") {
					// Insert currentValue into the correct position in the accumulator array
					const index = accumulator.findIndex((item) => item.steps_id >= currentValue.steps_id);

					if (index === -1) {
						accumulator.push(currentValue);
					} else {
						accumulator.splice(index, 0, currentValue);
					}
				}
				return accumulator;
			}, []);
			setStepsSortedData(finalData);
		}
	}, [stepsData]);

	const handleOpen = () => {
		document.body.classList.add("overflow-hidden");
		document.body.classList.add("lg:mr-[12.8px]")
		document.body.classList.add("lg:bg-[#5a5a5aa9]")
		setToggle(true);
	};

	return (
		<div className="relative">
			<Hero heroData={heroData && heroData.data?.attributes.partner_hero} handleOpen={handleOpen} />
			{/* <div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div> */}
			<div className="pb-14 md:pb-20 bg-[#F9FCFF]">
				<div className="g-page_structure">
					<div className=" lg:flex justify-center pt-12 sm:pt-16 lg:pt-0">
						<div className="max-w-[450px] lg:max-w-none mx-auto bg-white px-[14px] py-[16px] shadow-md rounded-md relative z-30 flex flex-col lg:flex-row  gap-3 lg:gap-3   lg:-mt-[80px]">
							{testimonialData &&
								testimonialData.data.attributes.testimonial.cards.map((item, i) => {
									return (
										<div
											className={`${
												i === 0 ? "bg-[#FFFBEA]" : i === 1 ? "bg-[#EFFFF3]" : i === 2 ? "bg-[#EFF8FF]" : i === 3 ? "bg-[#FFF0EA]" : "bg-[#F5EFFF]"
											} text-center  py-2 px-3 shadow rounded-md `}
											key={item.id}
										>
											<p className="text-[40px] font-[700] text-[#010101]">{item.title}</p>
											<p className="text-[12px] font-[500] text-[#222222]">{item.description}</p>
										</div>
									);
								})}
						</div>
					</div>
					<div className="max-w-[900px] mx-auto bg-[url('/others/testtminial_bg.png')] bg-[length:100%_100%] bg-center rounded-md mt-20 py-[70px] px-4 md:px-[45px]">
						<p className="text-center italic text-[18px] md:text-[24px] text-[#222]">
							{testimonialData && testimonialData.data.attributes.testimonial.message}
						</p>
						<div className="flex flex-col items-center gap-4 mt-10">
							<Image
								src={`${
									testimonialData && testimonialData.data.attributes.testimonial.image.data
										? testimonialData.data.attributes.testimonial.image.data.attributes.url
										: "others/client.svg"
								}`}
								height={100}
								width={100}
								alt=""
								className=" rounded-full"
							/>
							<Image src="/results/testimonial/stars.svg" alt="" height={100} width={100} className=" h-[25px] w-[140px]" />
							<div className="">
								<span className="text-[#010101] font-[500] pr-3 border-r-[2px]">
									{testimonialData && testimonialData.data.attributes.testimonial.name}
								</span>
								<span className="text-[14px] text-[#222222] pl-3">{testimonialData && testimonialData.data.attributes.testimonial.company_name}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center  "></div>
			<div className="g-page_structure bg-[var(--section-bg-lightred)]">
				<div className="pt-14 md:pt-20 pb-14 md:pb-24">
					<h2 className="g__section-heading text-center ">{stepsData && stepsData.data.attributes.steps_section.title}</h2>
					<div className="max-w-[1120px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:grid-rows-3 md:grid-rows-2 gap-8 sm:gap-0 mt-12 border-l-2 sm:border-l-0 border-l-[#d9d9d9]">
						{stepsSortedData &&
							stepsSortedData.map((item) => {
								return (
									<div className="partner_table" key={item.id}>
										<button className="bg-[#FF492C] text-[18px] px-5 py-2 text-[#FBD1CA] relative">
											{" "}
											STEP <span className="text-[20px] text-[#FFF3F1] font-[600]">{item.steps_id}</span>
											<p className="block sm:hidden w-[20px] h-[2px] bg-[#d9d9d9] absolute left-[-20px] bottom-[50%] translate-y-[50%]"></p>
										</button>
										<p className="mt-3">{item.description}</p>
									</div>
								);
							})}
					</div>
				</div>
			</div>
			<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
			<div className="g-page_structure bg-[var(--section-bg-lightblue)]">
				<div className="mx-auto md:max-w-[1240px] grid grid-col-1 lg:grid-col-3 gap-7 pb-14 md:pb-24 pt-14 md:pt-24">
					<div className="main-content  m-auto  lg:col-start-1 lg:col-end-2">
						<h2 className="marketing-plan-cta_heading font-openSans text-center sm:text-left  font-bold">
							{shortIntroData && shortIntroData.data.attributes.short_intro.title}
						</h2>
						<div className="max-w-[500px] sm:max-w-none mx-auto">
							<div className="ml-[40px] sm:ml-[30px] mt-5 text-[16px] sm:text-[18px] text-[#222222]">
								{shortIntroData &&
									shortIntroData.data.attributes.short_intro.lists.map((item) => {
										return (
											<div className="relative pb-4 " key={item.id}>
												<Image
													src={"/contactus/contactCheck.svg"}
													height={15}
													width={20}
													alt=""
													className="w-[15px] sm:w-[20px] absolute left-[-25px] sm:left-[-30px] top-[6px] sm:top-[5px]"
												/>
												<p className=" "> {item.list}</p>
											</div>
										);
									})}
							</div>
						</div>
						<div className="flex justify-center sm:justify-start mt-5 md:mt-10">
							<div
								onClick={handleOpen}
								className="font-openSans cursor-pointer tracking-wider text-center bg-[#FF492C] hover:bg-[#E74329] py-3 px-4 md:px-6 text-white lg:text-lg 2xl:text-xl rounded font-[700]"
							>
								<span className="g_cta-text">{shortIntroData && shortIntroData.data.attributes.short_intro.cta}</span>
							</div>
						</div>
					</div>
					<div className="mt-10 lg:mt-0  lg:col-start-2 lg:col-end-4">
						<Image
							src={`${
								shortIntroData && shortIntroData.data.attributes.short_intro.image.data
									? shortIntroData.data.attributes.short_intro.image.data.attributes.url
									: "/others/team_group.svg"
							}`}
							alt="escape-room-marketer-marketing plan"
							width={660}
							height={500}
							// className="md:w-[450px] lg:w-[381px] md:h-[450px]"
						/>
					</div>
				</div>
			</div>
			<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center"></div>
			<div className="g-page_structure bg-[var(--section-bg-lightred)]">
				<div className=" pt-10 md:pt-20 pb-10 md:pb-24">
					<div className="main-content  m-auto">
						<h2 className="g__section-heading text-center font-bold">
							{servicesData && servicesData.data.attributes.services.title_first_line} <br className="hidden xl:block" />
							{servicesData && servicesData.data.attributes.services.title_second_line}
						</h2>
						<p className="g__section-description text-center">{servicesData && servicesData.data.attributes.services.description}</p>
					</div>
					<div className="mt-14 flex flex-col gap-8">
						{servicesData &&
							servicesData.data.attributes.services.all_service.map((item) => {
								return (
									<div className="max-w-[1026px] mx-auto rounded-md border-[1px] border-transparent hover:border-[#FF492C]" key={item.id}>
										<div className="bg-[#ffffff] max-w-[380px] md:max-w-[1024px] mx-auto flex flex-col-reverse md:flex-row gap-8 rounded-md shadow hover:shadow-none hover:drop-shadow-[0_4px_10px_#00000015] hover:duration-200">
											<div className="pl-7 py-5 flex items-center">
												<div>
													<h3 className="text-[22px] font-[600] text-[#010101]">{item.title}</h3>
													<p className="text-[#222222] mt-2">{item.description}</p>
												</div>
											</div>
											<div className=" md:flex justify-end">
												<Image
													src={`${item.image.data ? item.image.data.attributes.url : "/others/ss.svg"}`}
													height={200}
													width={450}
													alt=""
													className=" sm:max-w-[380px] lg:max-w-[460px] h-full object-contain md:object-cover lg:object-contain rounded-t-md md:rounded-t-none rounded-r-none md:rounded-r-md"
												/>
											</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>
			</div>
			<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
			<FaqSection bodyColor="bg-[var(--section-bg-lightblue)]" faqSectionData={faqSectionData && faqSectionData.data.attributes.faq_section} />
			<FooterTopCta breakBackground="blue" pageBreakBlue={true} footerTopCta={footerTopCta && footerTopCta.data.attributes.footer_top_cta} />
			<PartnerContact toggle={toggle} setToggle={setToggle} />
		</div>
	);
}

export async function getStaticProps(context) {
	let URL = `${process.env.NEXT_PUBLIC_API_URL}`;
	try {
		// Fetch data from external API
		let data = await fetch(`${URL}/api/partner-program?populate[partner_hero][populate]=*`);
		let heroData = await data.json();

		let testimonial = await fetch(`${URL}/api/partner-program?populate[testimonial][populate]=*`);
		let testimonialData = await testimonial.json();

		let steps = await fetch(`${URL}/api/partner-program?populate[steps_section][populate]=*`);
		let stepsData = await steps.json();

		let shortIntro = await fetch(`${URL}/api/partner-program?populate[short_intro][populate]=*`);
		let shortIntroData = await shortIntro.json();

		let services = await fetch(
			`${URL}/api/partner-program?populate[0]=services&populate[1]=services.all_service&populate[2]=services.all_service.image`
		);
		let servicesData = await services.json();

		let faqSection = await fetch(`${URL}/api/partner-program?populate[faq_section][populate]=*`);
		let faqSectionData = await faqSection.json();

		let footerTopCtaData = await fetch(`${URL}/api/partner-program?populate[footer_top_cta][populate]=*`);
		let footerTopCta = await footerTopCtaData.json();

		// Pass data to the page via props
		return {
			props: { heroData, testimonialData, stepsData, shortIntroData, faqSectionData, footerTopCta, servicesData },
			revalidate: 60,
		};
	} catch (error) {
		return { props: { error: { ok: false, reason: "some error description for your own consumption, not for client side" } } };
	}
}

export default PartnerProgram;
