import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { RiErrorWarningFill } from "react-icons/ri";
import styles from "@/styles/Home.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import FadeInUpContainer from "../framer-motion/FadeInUpContainer";

function Payperclick({ bodyColor, payperclickData }) {
	const { ref: myRef, inView: myElementIsVisible } = useInView();

	useEffect(() => {
		const sliderButtons = document.querySelector(".payPerClickSwiper");
		sliderButtons.children[1].addEventListener("click", () => {
			sliderButtons.children[2].classList.remove("active_button");
			sliderButtons.children[1].classList.add("active_button");
		});
		sliderButtons.children[2].addEventListener("click", () => {
			sliderButtons.children[1].classList.remove("active_button");
			sliderButtons.children[2].classList.add("active_button");
		});
	});

	return (
		<div>
			<div className={`multiple_agency relative g-page_structure ${bodyColor} min-h-[70vh]`}>
				<FadeInUpContainer >

			
				<div className="m-auto pt-12 md:pt-20 ">
					<h2 className="g__section-heading text-center font-bold">
						{payperclickData && payperclickData.title_first_line} <br className="hidden xl:block" />{" "}
						{payperclickData && payperclickData.title_second_line}
					</h2>
					<p className="g__section-description text-center ">{payperclickData && payperclickData.description}</p>
				</div>
				<div className=" md:mx-5 section-img mt-10 md:mt-16">
					<div ref={myRef} className=" relative max-w-[800px] mx-auto z-10">
						<div
							className={`${
								payperclickData &&
								"bg-[#FFF2EF] px-3 sm:px-5  min-w-[230px] max-w-[740px] max-h-[620px] mx-auto border-[1px] border-[rgba(255,73,44,0.50)] rounded-md shadow-[0px_0px_10px_0px_rgba(0,0,0,0.20)] md:shadow-[0px_0px_80px_5px_rgba(0,0,0,0.20)]"
							}`}
						>
							<div className={`${payperclickData && "bg-[#FFF2EF]  min-w-[230px] max-w-[700px] max-h-[620px] mx-auto"}`}>
								<Swiper
									slidesPerView={1}
									spaceBetween={50}
									loop={false}
									speed={1000}
									pagination={{
										clickable: true,
									}}
									navigation={true}
									modules={[Pagination, Navigation]}
									className="payPerClickSwiper "
									style={{}}
								>
									{payperclickData &&
										payperclickData.cro_opportunity_image.data.map((img_data) => {
											return (
												<SwiperSlide key={img_data.id}>
													<div className="flex items-center h-full">
														<Image src={img_data.attributes.url} height={230} width={700} className=" w-full h-full object-contain  " alt="" />
													</div>
												</SwiperSlide>
											);
										})}
								</Swiper>
							</div>
						</div>

						{payperclickData && (
							<div className=" cta-mobileresponsive flex lg:flex-none flex-col gap-4 max-w-[380px] mx-auto -mt-[5px] lg:mt-0 ">
								<Link
									href={`${payperclickData?.cro_slug_1 ? payperclickData.cro_slug_1 : "/"}`}
									className={`${
										myElementIsVisible ? styles.cta1 : ""
									} rounded py-2.5 drop-shadow pl-3 pr-3 xl:pr-8 block lg:absolute z-30 lg:translate-x-[-35%] xl:translate-x-[-60%] bg-white `}
								>
									<div className="">
										<div className="flex items-center gap-3">
											<RiErrorWarningFill className={`${myElementIsVisible ? styles.error_warning : ""}`} />
											<div>
												<h5 className="text-[18px] font-bold text-[#010101]">{payperclickData && payperclickData.cro_title1}</h5>
												<p className="">{payperclickData && payperclickData.cro_description1}</p>
											</div>
										</div>
									</div>
								</Link>

								<Link
									href={`${payperclickData?.cro_slug_2 ? payperclickData.cro_slug_2 : "/"}`}
									className={`${
										myElementIsVisible ? styles.cta2 : ""
									} rounded drop-shadow  py-2.5  pl-3 pr-3 xl:pr-8 block translate-x-0 lg:absolute z-30  lg:translate-x-[35%] xl:translate-x-[60%] bg-white `}
								>
									<div className="">
										<div className="flex items-center gap-3">
											<RiErrorWarningFill className={`${myElementIsVisible ? styles.error_warning : ""}`} />
											<div>
												<h5 className="text-[18px] font-bold text-[#010101]">{payperclickData && payperclickData.cro_title2}</h5>
												<p className=" ">{payperclickData && payperclickData.cro_description2}</p>
											</div>
										</div>
									</div>
								</Link>
								<Link
									href={`${payperclickData?.cro_slug_3 ? payperclickData.cro_slug_3 : "/"}`}
									className={`${
										myElementIsVisible ? styles.cta3 : ""
									} rounded drop-shadow py-2.5 pl-3 pr-3 xl:pr-8 lg:absolute z-30 lg:translate-x-[-35%] xl:translate-x-[-60%] bg-white `}
								>
									<div className="">
										<div className="flex items-center gap-3">
											<RiErrorWarningFill className={`${myElementIsVisible ? styles.error_warning : ""}`} />
											<div className={`${myElementIsVisible ? styles.text_wrapper : ""}`}>
												<h5 className="text-[18px] font-bold text-[#010101]">{payperclickData && payperclickData.cro_title3}</h5>
												<p className=" ">{payperclickData && payperclickData.cro_description3}</p>
											</div>
										</div>
									</div>
								</Link>
								<Link
									href={`${payperclickData?.cro_slug_4 ? payperclickData.cro_slug_4 : "/"}`}
									className={`${
										myElementIsVisible ? styles.cta4 : ""
									} rounded drop-shadow py-2.5 pl-3 pr-3 xl:pr-8 lg:absolute z-30 lg:translate-x-[35%] xl:translate-x-[60%] bg-white `}
								>
									<div className="">
										<div className="flex items-center gap-3">
											<RiErrorWarningFill className={`${myElementIsVisible ? styles.error_warning : ""}`} />
											<div className={`${myElementIsVisible ? styles.text_wrapper : ""}`}>
												<h5 className="text-[18px] font-bold text-[#010101]">{payperclickData && payperclickData.cro_title4}</h5>
												<p className=" ">{payperclickData && payperclickData.cro_description4}</p>
											</div>
										</div>
									</div>
								</Link>
							</div>
						)}
					</div>
				</div>
				</FadeInUpContainer>
				{payperclickData && (
					<div className="flex justify-center">
						<Link
							href={payperclickData && payperclickData.cro_cta_slug ? payperclickData.cro_cta_slug : "/free-marketing"}
							className="font-openSans tracking-wider text-center bg-[#FF492C] hover:bg-[#E74329] md:w-[inherit] mt-10 md:mt-16 mb-12 md:mb-24 py-3 px-4 md:px-6 text-white xl:text-lg 2xl:text-[20px] rounded font-[700]"
						>
							<span className="g_cta-text">{payperclickData ? payperclickData.cro_cta : "GET YOUR FREE MARKETING PLAN"}</span>
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}

export default Payperclick;
