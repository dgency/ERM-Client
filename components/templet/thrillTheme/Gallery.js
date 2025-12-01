import React from "react";
// import gallery1 from "@/public/templet/thrillTheme/gallery1.png";
// import gallery2 from "../../../public/templet/thrillTheme/gallery/gallery2.jpeg";
// import gallery3 from "../../../public/templet/thrillTheme/gallery/gallery3.jpeg";
// import gallery4 from "../../../public/templet/thrillTheme/gallery/gallery4.jpeg";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from "swiper/modules";

function Gallery() {
	return (
		<div className=" pt-10 pb-20">
			<h2 className="g_container--theme header_2 mb-[42px]">Photo Gallery</h2>

			<Swiper
				// slidesPerView={2.5}
				// spaceBetween={40}
				// centeredSlides={true}
				// freeMode={true}

				// loop={true}
				// speed={1000}
				// navigation={true}
				// modules={[ Navigation]}
				slidesPerView={1.3}
				spaceBetween={10}
				centeredSlides={true}
				loop={true}
				speed={1000}
				navigation={true}
				modules={[Navigation]}
				className="thrillTempletGallerySwiper thrillTempletSwiper "
				style={{}}
				breakpoints={{
					
					1100: {
						slidesPerView: 2.4,
						spaceBetween: 30,
					},
				}}
			>
				<SwiperSlide>
					<Image src='/templet/thrillTheme/gallery/gallery1.jpg' alt="gallery image" height={636} width={954} quality={60}    className="w-full h-full object-cover rounded-xl mix-blend-luminosity" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src='/templet/thrillTheme/gallery/gallery2.jpg' alt="gallery image" height={636} width={954} quality={60}   className="w-full h-full object-cover rounded-xl mix-blend-luminosity" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src='https://res.cloudinary.com/duvvlysie/image/upload/v1736231837/gallery3_mw0txx.jpg' alt="gallery image" height={636} width={954} quality={60}  className="w-full h-full  object-cover rounded-xl mix-blend-luminosity" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src='/templet/thrillTheme/gallery/gallery1.jpg' alt="gallery image" height={636} width={954} quality={60}  loading="lazy" className="w-full h-full object-cover rounded-xl mix-blend-luminosity" />
				</SwiperSlide>
				<SwiperSlide>
					<Image src='/templet/thrillTheme/gallery/gallery4.jpg' alt="gallery image" height={636} width={954} quality={60} priority={true}  className="w-full h-full object-cover rounded-xl mix-blend-luminosity" />
				</SwiperSlide>
				
			</Swiper>
		</div>
	);
}

export default Gallery;
