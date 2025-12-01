/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useState } from "react";
import testimonial from "@/public/templet/thrillTheme/faq.png";
import Image from "next/image";
import coma from "@/public/templet/thrillTheme/coma.png";
import google from "@/public/templet/thrillTheme/google.svg";
import star from "@/public/templet/thrillTheme/star.svg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiLinkExternal } from "react-icons/bi";
import { FaPlayCircle } from "react-icons/fa";
import { MdPauseCircle } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const videoList = [
	{
		description:
			"The thrill, excitement, and fun we had during the escape room were beyond compare. It truly felt like a once-in-a-lifetime adventure that we'll cherish forever. 😄🌟 The intensity of the puzzles, the heart-pounding moments, and the camaraderie we shared as a team made it a truly extraordinary experience. The memories we created together will stay with us for a lifetime! 🚀🗝️",
		short_description: "If we had to sum up our experience in one word, it would be unforgettable! 🎉",
		video: "https://cdn.gbase.online/Project_Minotaur_feedback_27b45dc956.MOV",
		google_link:
			"https://www.google.com/maps/place/QUEST+ROOM+-+Hollywood+Escape+Rooms/@34.0911441,-118.3120851,17z/data=!4m8!3m7!1s0x80c2b8ad41fb1b4b:0xdafb2f036b6bafca!8m2!3d34.0911441!4d-118.3098964!9m1!1b1!16s%2Fg%2F11f3n17vbg?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
	},
	{
		description:
			"It was an absolutely mind-blowing experience that exceeded all expectations! 'Amnesia' pushed us to the limits and provided an adrenaline rush like no other! 💥😱 We're still buzzing with excitement! Can't wait for more adventures at Questroom! 🎮🕯️ Thank you for creating such a thrilling and unforgettable gaming experience! 🙌🎉 #QuestroomAdventures #UnforgettableExperience #ThrillingGames #FiveStars #GamingBliss",
		short_description: "Wow, five out of five doesn't even do justice to the amazing time we had! 🌟🌟🌟",
		video: "https://cdn.gbase.online/Amnesia_Reaction_1_7c5bdffd1e.mov",
		google_link:
			"https://www.google.com/maps/place/QUEST+ROOM+-+Redondo+Beach+Escape+Rooms/@33.8717108,-118.3560566,17z/data=!3m2!4b1!5s0x80c2b4f99ff8bd1b:0x663c92cc538c4696!4m6!3m5!1s0x80c2b56425a6dc9f:0x7a414a6be0c41758!8m2!3d33.8717108!4d-118.3560566!16s%2Fg%2F11fl9kpq3s?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
	},
	{
		description:
			"The experience was top-notch, and we highly recommend it to anyone looking for an immersive and thrilling escape room adventure! It kept us on our toes and fully engaged throughout the entire game! 😄🧩",
		short_description: "We had an amazing time in Resurrection at Questroom! 🎉",
		video: "https://cdn.gbase.online/Resurrection_Reaction_1_286e1896ca.mov",
		google_link:
			"https://www.google.com/maps/place/QUESTROOM+-+Redondo+Beach+Escape+Rooms+and+Thrill+Theater/@33.8717152,-118.3586315,17z/data=!3m2!4b1!5s0x80c2b4f99ff8bd1b:0x663c92cc538c4696!4m6!3m5!1s0x80c2b56425a6dc9f:0x7a414a6be0c41758!8m2!3d33.8717108!4d-118.3560566!16s%2Fg%2F11fl9kpq3s?shorturl=1",
	},
	{
		description:
			"Questroom Review We were definitely feeling the pressure and getting a bit stressed out at times. One of our friends seemed to be overthinking everything, which made things even more intense! But we also knew that she had a lot of knowledge and skills, so we tried to trust her instincts and go with the flow. 🤔",
		short_description: "Oh, man, our first escape room experience was quite an adventure! 😅",
		video: "https://cdn.gbase.online/Bloody_Elbow_reaction_1_d1fec30152.MOV",
		google_link:
			"https://www.google.com/maps/place/QUESTROOM+-+Los+Angeles+Escape+Rooms/@34.0716725,-118.3111623,17z/data=!4m8!3m7!1s0x80c2b8987a4ec7b9:0x28dc8832d51cd56b!8m2!3d34.0716725!4d-118.3089736!9m1!1b1!16s%2Fg%2F11c20cpc82",
	},
	{
		description:
			"We had a fantastic time in the escape room, and it was a whole lot of fun! The challenges and puzzles kept us on our toes, and the nerve-wracking moments only added to the excitement! 😱💫 The room was undoubtedly challenging, but we were up for the adventure! Working together as a team, we tackled the obstacles and enjoyed every moment of it! 💪🚀",
		short_description: "Hey, everyone! We just conquered Polar Station, and it was an unforgettable experience! 🎉",
		video: "https://cdn.gbase.online/Polar_Station_Reaction_1_70074289a0.mp4",
		google_link:
			"https://www.google.com/maps/place/QUEST+ROOM+-+Redondo+Beach+Escape+Rooms/@33.8717108,-118.3560566,17z/data=!3m2!4b1!5s0x80c2b4f99ff8bd1b:0x663c92cc538c4696!4m6!3m5!1s0x80c2b56425a6dc9f:0x7a414a6be0c41758!8m2!3d33.8717108!4d-118.3560566!16s%2Fg%2F11fl9kpq3s?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
	},
];

function Testimonial() {
	const [isOpen, setIsOpen] = useState();
	const [toggle, setToggle] = useState(false);

	const handleTextExpand = (e, id) => {
		// console.log(e.target.id ,id);

		// if(parseInt (e.target.id) === id){
		// 	setIsOpen(!isOpen);

		// }
		setToggle(!toggle);

		// if (toggle === true) {
		setIsOpen(e.target.id);
	};

	const [playingVideo, setPlayingVideo] = useState(null); // Track currently playing video
	const videoRefs = useRef([]); // Store refs for all videos

	const handlePlayPause = (index) => {
		// Pause the currently playing video
		if (playingVideo !== null && playingVideo !== index) {
			videoRefs.current[playingVideo].pause();
		}

		if (playingVideo === index) {
			// If the same video is clicked, toggle play/pause
			videoRefs.current[index].paused ? videoRefs.current[index].play() : videoRefs.current[index].pause();
			setPlayingVideo(videoRefs.current[index].paused ? null : index);
		} else {
			// Play the new video
			videoRefs.current[index].play();
			setPlayingVideo(index);
		}
	};

	return (
		<div className="bg-[url('/templet/thrillTheme/testimonial_bg_full.png')] bg-no-repeat bg-[length:100%_100%] relative">
			<div className="g_container--theme pt-4 md:pt-28 pb-20 ">
				<h2 className="header_2 relative z-20">Reviews of Project Minotaur </h2>
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
						className="thrillTempletTestimonialVideoSwiper thrillOnlyTestimonialSwiper thrillTempletSwiper "
						style={{ paddingBottom: "50px", paddingTop: "30px", paddingLeft: "30px", paddingRight: "30px" }}
						breakpoints={{
							600: {
								slidesPerView: 2,
								spaceBetween: 30,
							},
							900: {
								slidesPerView: 3,
								spaceBetween: 30,
							},
							1100: {
								slidesPerView: 4,
								spaceBetween: 30,
							},
						}}
					>
						{videoList.map((videoSrc, index) => (
							<SwiperSlide key={index}>
								<div className="group h-[490px] max-w-[345px] mx-auto border-[1px] border-[#fc7008] rounded-lg relative font_poppins">
									{/* <Image src={testimonial} alt="" height={489} width={345} className="h-full w-full object-cover rounded-lg" /> */}
									<video
										ref={(el) => (videoRefs.current[index] = el)}
										loop
										muted={false}
										playsInline
										className="h-full w-full object-cover rounded-lg"
									>
										<source src={videoSrc.video} type="video/mp4" />
									</video>
									<button
										onClick={() => handlePlayPause(index)}
										className=" absolute bottom-[50%] left-1/2 transform -translate-x-1/2 px-4 py-2 rounded hover:scale-125 duration-300"
									>
										{playingVideo === index && !videoRefs.current[index].paused ? (
											<MdPauseCircle className="hidden group-hover:block text-[37px] text-[#b9b9b9]" />
										) : (
											<FaPlayCircle className="text-[37px] text-[#b9b9b9]" />
										)}
									</button>
									<div
										className={`${
											parseInt(isOpen) === index && toggle ? "top-0 bottom-0" : "left-5 right-5 bottom-20"
										}  px-3 py-2 max-w-full absolute z-10 bg-[#03030380] backdrop-blur-sm rounded-lg transition-all duration-300 ease-in-out`}
									>
										<div className="testimonial_text h-[calc(100%-64px)] overflow-auto">
											<p className={`text-white text-[15px]  ${parseInt(isOpen) === index && toggle ? "hidden" : "block"}`}>
												{videoSrc.short_description}
											</p>
											<p className={`text-white text-[15px]  ${parseInt(isOpen) === index && toggle ? "block" : "hidden"}`}>{videoSrc.description}</p>
										</div>
									</div>
									<div className="absolute z-0 bottom-0 h-[160px] w-full bg-gradient-to-b from-transparent to-[#00112c] rounded-lg"></div>
									<div className={`absolute left-0 right-0  z-10  max-w-full bottom-0 h-20  `}>
										<div className="flex justify-between items-center pt-4 px-5">
											<button
												id={index}
												onClick={(Event) => handleTextExpand(Event, index)}
												className="text-[#d9d9d9] px-5 py-1.5 bg-transparent border-[1px] border-[#997f7f] text-[14px] font-[400] rounded-md"
											>
												{parseInt(isOpen) === index && toggle ? "Close" : "Full Review"}
											</button>
											<a href={`${videoSrc.google_link}`} target="_blank" className="text-[#d9d9d9] text-[14px] font-[400] flex items-center gap-1.5">
												Google <HiOutlineArrowNarrowRight className="text-lg" />{" "}
											</a>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className="mt-10">
					<div className="max-w-[1440px]  relative">
						<div className=" ">
							<div className="max flex flex-col items-center  absolute top-20 md:top-[140px] left-[50%] translate-x-[-50%] md:translate-x-0  md:left-28 z-10">
								<div className="flex items-center gap-2.5">
									<Image src={google} alt="" height={65} width={65} className="h-[25px] md:h-[65px] w-auto" />
									<div>
										<Image src={star} alt="" height={16} width={110} className=" h-[12px] md:h-[16px] w-auto" />
										<p className="hidden md:block text-[12px] text-[#BFBFBF] pt-2 font_poppins">5.0 based on 3,080 reviews</p>
									</div>
								</div>
								<p className=" md:hidden text-[12px] text-[#BFBFBF] pt-2 font_poppins w-[300px] text-center">5.0 based on 3,080 reviews</p>
							</div>
							<div className="hidden md:block font_poppins absolute  md:top-[140px] right-0 md:right-28 z-10">
								<button className="px-4 py-[5px]  flex items-center border-[1px] border-[#997F7F] rounded text-[#D9D9D9]">Read more reviews</button>
							</div>
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
								className="thrillTempletTestimonialSwiper thrillOnlyTestimonialSwiper thrillTempletSwiper"
								style={{}}
							>
								<SwiperSlide>
									<div className="font_poppins ">
										<div className="max-w-[950px] ml-4 md:ml-24 mr-4 md:mr-20 ">
											<p className="relative uppercase text-[24px] md:text-[38px]  text-[#D9D9D9] text-center md:text-start font_protest pt-[110px] md:pt-[140px] pb-[15px] md:pb-[25px]">
												There were challenges for the puzzle experts
											</p>
											<div className="relative ">
												<p className={`relative text-[13px] sm:text-[16px] md:text-[18px] italic text-center md:text-start text-[#A3A3A3]`}>
													We've done a lot of escape rooms and Warlocked has good production value in addition to the interesting puzzles and actor
													interaction scaling the difficulty to keep things fun Steve was really great, the kids had a blast (the 7 year old couldn't
													stop asking questions/talking about it after, the youngest was confused at times but still had lots to do and was not
													scared) having an actor was so fun. There were challenges for the puzzle experts and more kid friendly help the forest
													animals / find stuff kind of things
												</p>
											</div>
											<p className="mt-[24px] sm:mt-[34px] text-[14px] font_poppins text-[#737373] text-center md:text-start">
												— J L., Hollywood, LA{" "}
											</p>
											<div className="mt-[10px] sm:mt-[25px] flex md:block justify-center text-[16px] font-[500] pb-0 md:pb-20">
												<button className="text-[#808080] flex items-center gap-1.5 ">
													See Original <BiLinkExternal className=" text-[18px] md:text-[20px]" />
												</button>
											</div>
											<div className="flex md:hidden font_poppins pt-[25px]  justify-center">
												<button className=" px-4 py-[3px] text-[14px]  flex items-center border-[1px] border-[#997F7F] rounded text-[#D9D9D9]">
													Read more reviews
												</button>
											</div>
										</div>
									</div>
								</SwiperSlide>
								<SwiperSlide>
									<div className="font_poppins ">
										<div className="max-w-[850px] ml-4 md:ml-24 mr-4 md:mr-20 ">
											<p className="relative uppercase text-[24px] md:text-[38px]  text-[#D9D9D9] text-center md:text-start font_protest pt-[110px] md:pt-[140px] pb-[15px] md:pb-[25px]">
												The best escape rooms I’ve ever done out of my entire life!
											</p>
											<div className="relative ">
												<p className={`relative text-[13px] sm:text-[16px] md:text-[18px] italic text-center md:text-start text-[#A3A3A3]`}>
													Awesome! Just awesome. Worth every minutes and penny. We played many of their games and they are all very high-end and
													immersive. The Perfumer was more immersive than any other room we've done before, and we've done a lot! The Game Master John
													was masterful. It really felt like you were in historic Paris! The puzzles were engaging and non-linear. We would HIGHLY
													recommend this game and this venue!
												</p>
											</div>
											<p className="mt-[24px] sm:mt-[34px] text-[14px] font_poppins text-[#737373] text-center md:text-start">
												— Bryanna M., Hollywood, LA{" "}
											</p>
											<div className="mt-[10px] sm:mt-[25px] flex md:block justify-center text-[16px] font-[500] pb-0 md:pb-20">
												<button className="text-[#808080] flex items-center gap-1.5 ">
													See Original <BiLinkExternal className=" text-[18px] md:text-[20px]" />
												</button>
											</div>
											<div className="flex md:hidden font_poppins pt-[25px]  justify-center">
												<button className=" px-4 py-[3px] text-[14px]  flex items-center border-[1px] border-[#997F7F] rounded text-[#D9D9D9]">
													Read more reviews
												</button>
											</div>
										</div>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
						<Image
							src={coma}
							alt=""
							height={93}
							width={121}
							className=" h-[40px] sm:h-[60px] lg:h-[93px] w-auto object-cover absolute top-5 md:top-0 left-0 opacity-[0.3]"
						/>
						<Image
							src={coma}
							alt=""
							height={93}
							width={121}
							className=" h-[40px] sm:h-[60px] lg:h-[93px] w-auto object-cover absolute  bottom-0 right-0 rotate-180 opacity-[0.3]"
						/>
					</div>
				</div>
			</div>
			<div className=" w-full h-[100px] bg-gradient-to-b from-[#0D130A] to-transparent absolute z-10 top-0"></div>
			<div className=" w-full h-[80px] bg-gradient-to-t from-[#0D130A] to-transparent absolute z-10 bottom-0"></div>
		</div>
	);
}

export default Testimonial;
