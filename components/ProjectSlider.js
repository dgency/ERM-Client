"use client";
import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";

function ProjectSlider({ componentData, single, htmlAds }) {
	const [screenWidth, setScreenWidth] = useState(null);
	useEffect(() => {
		let screen = window.screen;
		window.addEventListener("resize", function () {
			setScreenWidth(screen.width);
		});
		setScreenWidth(screen.width);
	}, []);

	return (
		<div>
			<div className=" relative max-w-[1250px] mx-auto z-10">
				<div className=" bg-[#FFF2EF] px-3 sm:px-5  min-w-[230px] max-w-[1240px] md:max-h-[720px] mx-auto border-[1px] border-[rgba(255,73,44,0.50)] rounded-md shadow">
					<div className="bg-[#FFF2EF]  min-w-[230px] max-w-[1200px] md:max-h-[720px] mx-auto">
						<Swiper
							slidesPerView={
								single
									? 1
									: screenWidth > 1320
									? 3.5
									: screenWidth > 1150
									? 3
									: screenWidth > 880
									? 2.5
									: screenWidth > 700
									? 2
									: screenWidth > 520
									? 1.5
									: 1
							}
							spaceBetween={30}
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
							{/* {payperclickData &&
										payperclickData.cro_opportunity_image.data.map((img_data) => {
											return ( */}
							{(componentData || htmlAds) &&
								(componentData || htmlAds).map((item) => {
									return (
										<SwiperSlide key={item.id}>
											<div className="flex items-center justify-center gap-3">
												{single && (
													<Image src={`${item.attributes.url}`} height={630} width={1400} className=" " alt="" />
												)}
												{single !== true && <iframe src={`${item.ad}`} height={600} width={300}></iframe>}
											</div>
										</SwiperSlide>
									);
								})}
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectSlider;
