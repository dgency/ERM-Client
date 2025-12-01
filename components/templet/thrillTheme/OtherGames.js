/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useRef, useState } from "react";
import people from "@/public/templet/thrillTheme/gameCard/people.svg";
import age from "@/public/templet/thrillTheme/gameCard/age.svg";
import duration from "@/public/templet/thrillTheme/gameCard/duration.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

function OtherGames() {
	return (
		<div className="g_container--theme pt-10 pb-20">
			<h2 className="header_2 uppercase">Other games at Hollywood location</h2>

			<div className="">
				<Swiper
					slidesPerView={1}
					spaceBetween={50}
					loop={false}
					speed={1000}
					pagination={{
						dynamicBullets: true,
						clickable: true,
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className="thrillGameSwiper thrillTempletSwiper "
					style={{}}
					breakpoints={{
						520:{
							slidesPerView: 1.5,
							spaceBetween: 30,
						},
						740: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
						905: {
							slidesPerView: 2.5,
							spaceBetween: 20,
						},
						1088: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						1365: {
							slidesPerView: 3.3,
							spaceBetween: 20,
						},
					}}
				>
					<SwiperSlide>
						<div className="relative group h-[578px] max-w-[390px] mx-auto border-[2px] border-[#0B1D4B] rounded-lg overflow-hidden bg-[url('/templet/thrillTheme/gameCard/Perfumer.jpg')] bg-center bg-no-repeat bg-cover ">
							<video id="1" autoPlay loop muted playsInline className="hidden group-hover:block h-full w-full object-cover">
								<source src="https://cdn.gbase.online/Perfumer_4k_2_fin_2_893dd3a39c.mp4" type="video/mp4" />
							</video>

							<div className="absolute top-0 left-0 right-0 z-20 flex gap-3 justify-between text-[11px] sm:text-[14px] text-[#D9D9D9] font_roboto  mt-2.5 px-4">
								<div className="flex items-center gap-1.5">
									<Image src={people} alt="" height={15} width={15} className="h-[12px] sm:h-[15px] w-auto" />
									<span className="">Team: 2-6</span>
								</div>
								<div className="flex items-center gap-1.5">
									<Image src={age} alt="" height={15} width={15} className="h-[12px] sm:h-[15px] w-auto" />
									<span className="">Age: 18+</span>
								</div>
								<div className="flex items-center gap-1.5">
									<Image src={duration} alt="" height={15} width={15} className="h-[12px] sm:h-[15px] w-auto" />
									<span className="">Time: 75 min</span>
								</div>
							</div>

							<div className="font_poppins px-[16px] absolute bottom-6 z-20 ">
								<p className="text-[12px] text-[#A3A3A3]">Historic Adventure</p>
								<p className="text-[24px] font-[600] text-[#EDEDED]">Perfumer</p>
								<p className="text-[14px] text-[#A3A3A3] pt-1 pb-5">
									The greatest perfumer in the world has been executed. The scents he crafted were well-known throughout...
								</p>
								<div className="flex justify-between">
									<button className="rounded-sm bg-[#FC7008] py-2 px-4 sm:px-7 text-[#000A19] text-[14px] font-[700]">BOOK NOW</button>
									<button className="rounded-sm border-[1px] border-[#D9D9D9] bg-transparent py-2 px-6 sm:px-9 text-[#D9D9D9] text-[14px] font-[700]">
										EXPLORE
									</button>
								</div>
							</div>
							<div className="w-full h-[230px] absolute bottom-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_15%,rgba(0,0,0,0.8)_40%,rgba(0,0,0,0.95)_100%)]"></div>
							<div className="w-full h-[50px] absolute top-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0.8))]"></div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative group h-[578px] max-w-[390px] mx-auto border-[2px] border-[#0B1D4B] rounded-lg overflow-hidden bg-[url('/templet/thrillTheme/gameCard/RedGiant.png')] bg-center bg-no-repeat bg-cover ">
							<video id="1" autoPlay loop muted playsInline className="hidden group-hover:block h-full w-full object-cover">
								<source src="https://cdn.gbase.online/Red_Giant_Escape_room_fin_2_dba64856ae.mp4" type="video/mp4" />
							</video>

							<div className="absolute top-0 left-0 right-0 z-20 flex gap-3 justify-between text-[11px] sm:text-[14px] text-[#D9D9D9] font_roboto  mt-2.5 px-4">
								<div className="flex items-center gap-1.5">
									<Image src={people} alt="" height={15} width={15} className="h-[12px] sm:h-[15px] w-auto" />
									<span className="">Team: 2-6</span>
								</div>
								<div className="flex items-center gap-1.5">
									<Image src={age} alt="" height={15} width={15} className="h-[12px] sm:h-[15px] w-auto" />
									<span className="">Age: 18+</span>
								</div>
								<div className="flex items-center gap-1.5">
									<Image src={duration} alt="" height={15} width={15} className="h-[12px] sm:h-[15px] w-auto" />
									<span className="">Time: 60 min</span>
								</div>
							</div>

							<div className="font_poppins px-[16px] absolute bottom-6 z-20 ">
								<p className="text-[12px] text-[#A3A3A3]">Action Adventure</p>
								<p className="text-[24px] font-[600] text-[#EDEDED]">Red Giant</p>
								<p className="text-[14px] text-[#A3A3A3] pt-1 pb-5">
									The Pink Pyramid. A testament to the civilization who crafted it and surrounded it with glorious cities and streets...
								</p>
								<div className="flex justify-between">
									<button className="rounded-sm bg-[#FC7008] py-2 px-4 sm:px-7 text-[#000A19] text-[14px] font-[700]">BOOK NOW</button>
									<button className="rounded-sm border-[1px] border-[#D9D9D9] bg-transparent py-2 px-6 sm:px-9 text-[#D9D9D9] text-[14px] font-[700]">
										EXPLORE
									</button>
								</div>
							</div>
							<div className="w-full h-[230px] absolute bottom-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_15%,rgba(0,0,0,0.8)_40%,rgba(0,0,0,0.95)_100%)]"></div>
							<div className="w-full h-[50px] absolute top-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0.8))]"></div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative group h-[578px] max-w-[390px] mx-auto border-[2px] border-[#0B1D4B] rounded-lg overflow-hidden bg-[url('/templet/thrillTheme/gameCard/Cannibal.jpg')] bg-center bg-no-repeat bg-cover ">
							<video id="1" autoPlay loop muted playsInline className="hidden group-hover:block h-full w-full object-cover">
								<source src="https://cdn.gbase.online/FULL_CANNIBAL_S_DEN_fin_2_6a4bb0b1ec.mp4" type="video/mp4" />
							</video>

							<div className="absolute top-0 left-0 right-0 z-20 flex gap-3 justify-between text-[11px] sm:text-[14px] text-[#D9D9D9] font_roboto  mt-2.5 px-4">
								<div className="flex items-center gap-1.5">
									<Image src={people} alt="" height={15} width={15} className="h-[12px] sm:h-[15px] w-auto" />
									<span className="">Team: 2-6</span>
								</div>
								<div className="flex items-center gap-1.5">
									<Image src={age} alt="" height={15} width={15} className="h-[12px] sm:h-[15px] w-auto" />
									<span className="">Age: 18+</span>
								</div>
								<div className="flex items-center gap-1.5">
									<Image src={duration} alt="" height={15} width={15} className="h-[12px] sm:h-[15px] w-auto" />
									<span className="">Time: 60 min</span>
								</div>
							</div>

							<div className="font_poppins px-[16px] absolute bottom-6 z-20 ">
								<p className="text-[12px] text-[#A3A3A3]">Thriller</p>
								<p className="text-[24px] font-[600] text-[#EDEDED]">Cannibal's Den 2.0</p>
								<p className="text-[14px] text-[#A3A3A3] pt-1 pb-5">
								Your head hurts; the world is still fuzzy. You remember being with your friends, stuck on the side of the road...
								</p>
								<div className="flex justify-between">
									<button className="rounded-sm bg-[#FC7008] py-2 px-4 sm:px-7 text-[#000A19] text-[14px] font-[700]">BOOK NOW</button>
									<button className="rounded-sm border-[1px] border-[#D9D9D9] bg-transparent py-2 px-6 sm:px-9 text-[#D9D9D9] text-[14px] font-[700]">
										EXPLORE
									</button>
								</div>
							</div>
							<div className="w-full h-[230px] absolute bottom-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_15%,rgba(0,0,0,0.8)_40%,rgba(0,0,0,0.95)_100%)]"></div>
							<div className="w-full h-[50px] absolute top-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0.8))]"></div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="relative group h-[578px] max-w-[390px] mx-auto border-[2px] border-[#0B1D4B] rounded-lg overflow-hidden bg-[url('/templet/thrillTheme/gameCard/reply.jpg')] bg-center bg-no-repeat bg-cover ">
							<video id="1" autoPlay loop muted playsInline className="hidden group-hover:block h-full w-full object-cover">
								<source src="https://cdn.gbase.online/PROJECT_MINOTAUR_fin_2_d97411cd3d.mp4" type="video/mp4" />
							</video>

							<div className="absolute top-0 left-0 right-0 z-20 flex gap-3 justify-between text-[11px] sm:text-[14px] text-[#D9D9D9] font_roboto  mt-2.5 px-4">
								<div className="flex items-center gap-1.5">
									<Image src={people} alt="" height={15} width={15} className="h-[12px] sm:h-[15px] w-auto" />
									<span className="">Team: 2-6</span>
								</div>
								<div className="flex items-center gap-1.5">
									<Image src={age} alt="" height={15} width={15} className="h-[12px] sm:h-[15px] w-auto" />
									<span className="">Age: 18+</span>
								</div>
								<div className="flex items-center gap-1.5">
									<Image src={duration} alt="" height={15} width={15} className="h-[12px] sm:h-[15px] w-auto" />
									<span className="">Time: 100 min</span>
								</div>
							</div>

							<div className="font_poppins px-[16px] absolute bottom-6 z-20 ">
								<p className="text-[12px] text-[#A3A3A3]">Interactive Horror Adventure</p>
								<p className="text-[24px] font-[600] text-[#EDEDED]">Project Minotaur: Replay</p>
								<p className="text-[14px] text-[#A3A3A3] pt-1 pb-5">
								You were having a wonderful vacation when you and your friends decided to participate in a very exclusive...
								</p>
								<div className="flex justify-between">
									<button className="rounded-sm bg-[#FC7008] py-2 px-4 sm:px-7 text-[#000A19] text-[14px] font-[700]">BOOK NOW</button>
									<button className="rounded-sm border-[1px] border-[#D9D9D9] bg-transparent py-2 px-6 sm:px-9 text-[#D9D9D9] text-[14px] font-[700]">
										EXPLORE
									</button>
								</div>
							</div>
							<div className="w-full h-[230px] absolute bottom-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.6)_15%,rgba(0,0,0,0.8)_40%,rgba(0,0,0,0.95)_100%)]"></div>
							<div className="w-full h-[50px] absolute top-0 bg-[linear-gradient(0deg,rgba(0,0,0,0),rgba(0,0,0,0.8))]"></div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}

export default OtherGames;
