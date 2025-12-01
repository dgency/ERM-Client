/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "@/styles/testimonialcarusel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { MdOutlineChevronRight } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Link from "next/link";
import coma from "@/public/others/testimonial_coma.svg";

function TestimonialCarousel({ text1, text2, name1, bodyColor, testimonialData }) {
	const [colleps, setColleps] = useState();
	const [storeId, setStoreId] = useState();
	const [isColleps, setIsColleps] = useState(true);
	const [isLastSlide, setIsLastSlide] = useState(false);

	const handleSpanText = (id, message) => {
		const sliderButtons = document.querySelector(".mySwiper");
		if (id === storeId) {
			setIsColleps(!isColleps);
		} else {
			setIsColleps(true);
			setStoreId(id);
			setColleps(message.length);
		}
	};

	useEffect(() => {
		const sliderButtons = document.querySelector(".mySwiper");
		sliderButtons.children[1].addEventListener("click", () => {
			sliderButtons.children[2].classList.remove("active_button");
			sliderButtons.children[1].classList.add("active_button");
			//when click in slider prev or next button then the spand text will close
			setIsColleps(false);
			// setCount(count++);
		});
		sliderButtons.children[2].addEventListener("click", () => {
			sliderButtons.children[1].classList.remove("active_button");
			sliderButtons.children[2].classList.add("active_button");
			//when click in slider prev or next button then the spand text will close
			setIsColleps(false);
		});
	}, []);

	const handleSlideChange = (swiper) => {
		setIsLastSlide(swiper.isEnd);

		console.log(swiper.isEnd);
	};

	return (
		<div className={`g-page_structure ${bodyColor}`}>
			<div className=" md:pt-10 pb-14 md:pb-24 ">
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
					className="mySwiper"
					style={{}}
					onSwiper={(swiper) => {
						swiper.on("slideChange", () => handleSlideChange(swiper));
					}}
				>
					{testimonialData &&
						testimonialData.testimonial_data.map((data) => {
							return (
								<SwiperSlide key={data.id}>
									<div
										// itemscope
										// itemtype="https://schema.org/NewsArticle"
										className="my-16  max-w-[970px]  mx-auto pb-6 md:pb-0 flex flex-col md:flex-row  items-center bg-[#E7FBF2] relative rounded-xl h-full"
									>
										{/* <Image
											src="/results/testimonial/client-corner.svg"
											alt=""
											height={100}
											width={100}
											className="absolute -top-[165px] left-[calc(100%-(300px+(50%-140px)))]  md:-top-4 md:-left-6 -rotate-6 z-10"
										/>

										<Image
											src={data.persons_image.data.attributes.url}
											alt=""
											height={100}
											width={400}
											className="h-[280px] md:h-[340px] w-[280px] md:w-[338px] absolute object-cover md:static  -top-[150px] md:-top-0 "
										/> */}
										{/* px-2.5 md:px-8 pt-[150px] md:pt-5 md:pb-5 lg:pt-7 lg:pb-0 */}
										<div className=" font-openSans py-6 px-8 relative h-full">
											<p className="testimonial_heading text-[28px] md:text-[36px] font-[400] text-center mb-4">{data?.title}</p>
											<p className="hidden md:block text-center text-[#222222] text-[17px] md:text-[20px] lg:leading-[1.4] xl:leading-normal italic">
												"{data.persons_message}"
											</p>
											<p
												className={`block md:hidden text-center text-[#222222] text-[17px] md:text-sm lg:text-[18px] xl:text-xl lg:leading-[1.4] xl:leading-normal italic ${
													colleps === 250 ? "max-h-[200px] duration-[1200ms]" : "max-h-[500px] duration-[2000ms]"
												}`}
											>
												{data.persons_message.slice(0, data.id == storeId ? (isColleps ? colleps : 250) : 250)}

												{data.persons_message.length > 250 && (
													<span
														onClick={() => handleSpanText(data.id, data.persons_message)}
														className="text-[#FF492C]  md:hidden ml-2 inline-flex items-center text-[16px] cursor-pointer"
													>
														See {`${data.id == storeId && isColleps ? "less" : "more"}`}
														<span
															className={`material-symbols-outlined inline-block mt- text-[#FF492C] ${
																data.id == storeId && isColleps ? "rotate-180" : ""
															}`}
														>
															expand_more
														</span>
													</span>
												)}
											</p>

											<div className="flex justify-center mt-[50px]">
												<Image src="/results/testimonial/stars.svg" alt="" height={100} width={100} className="mb-[15px] h-[25px] w-[140px]" />
											</div>
											<div className="flex flex-col items-center relative z-10">
												<div className="w-[70px] h-[70px] overflow-hidden rounded-full">
													<Image
														src={data.persons_image.data.attributes.url}
														quality={100}
														alt=""
														height={100}
														width={100}
														className="object-cover "
													/>
												</div>
												<p className="text-[15px] md:text-[16px] text-[#010101] font-semibold mt-2 mb-1">{data.persons_name}</p>
												<p className="text-[13px] md:text-[14px] text-[#414141]">{data.persons_occupation}</p>
											</div>

											{/* <div className="flex justify-center md:justify-start">
												<div className=" flex gap-2 md:gap-4 items-center pl-4 pr-[30px] py-2 mt-6 bg-[#00B67A10] rounded-md">
													<Image
														// itemprop="image"
														src={data.company_logo.data?.attributes.url}
														alt=""
														height={100}
														width={80}
														className="w-[80px] md:w-[80px] md:h-[70px] object-contain"
													/>
													<div className="">
														<p className="text-[15px] md:text-[16px] text-[#010101] leading-4 font-semibold mb-[5px]">{data.persons_name}</p>
														<p className="text-[13px] md:text-[14px] text-[#414141]">{data.persons_occupation}</p>
													</div>
												</div>
											</div> */}
											<Image src={coma} quality={100} alt="" height={150} width={150} className="w-[80px] sm:w-[150px] absolute -bottom-3 sm:bottom-4 right-4 sm:right-8 opacity-50 sm:opacity-70" />
										</div>
									</div>
								</SwiperSlide>
							);
						})}
					{isLastSlide && (
						<Link
							href="/testimonials"
							className="absolute bottom-2 right-[calc(100%-(50%+160px))] sm:right-[calc(100%-(50%+180px))] z-50 font-[600] text-[#FF492C] flex items-center text-[15px] sm:text-[18px]"
						>
							Read more
							<MdOutlineChevronRight className="text-[18px] pt-[2px]" />
						</Link>
					)}
				</Swiper>
				{/* <div className="flex justify-center  items-center">
					<Link
						href={testimonialData && testimonialData.descriptive_cta_slug ? testimonialData.descriptive_cta_slug : "/"}
						className="group max-w-[350px] md:max-w-none mx-auto mt-6   gap-2  text-lg  list-none text-[#FF492C] hover:text-[#E74329]"
					>
						<p className=" font-[700] text-center leading-5">
							{testimonialData && testimonialData.descriptive_cta}
							<span className="material-symbols-outlined leading-[0] font-[700] translate-y-2 pl-2 text-2xl group-hover:translate-x-1">
								arrow_right_alt
							</span>
						</p>
					</Link>
				</div> */}
			</div>
		</div>
	);
}

export default TestimonialCarousel;
