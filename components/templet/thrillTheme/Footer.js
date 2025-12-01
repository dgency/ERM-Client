/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import logo from "@/public/templet/thrillTheme/questroom_logo.svg";
import location1 from "@/public/templet/thrillTheme/footer/location1.png";
import location2 from "@/public/templet/thrillTheme/footer/location2.png";
import location3 from "@/public/templet/thrillTheme/footer/location3.png";
import location4 from "@/public/templet/thrillTheme/footer/location4.png";
import mail from "@/public/templet/thrillTheme/footer/mail.svg";
import location from "@/public/templet/thrillTheme/footer/location.svg";
import call from "@/public/templet/thrillTheme/footer/call.svg";
import direction from "@/public/templet/thrillTheme/footer/direction.svg";
import parking from "@/public/templet/thrillTheme/footer/parking.svg";
import map1 from "@/public/templet/thrillTheme/footer/map1.png";
import map2 from "@/public/templet/thrillTheme/footer/map2.png";
import map3 from "@/public/templet/thrillTheme/footer/map3.png";
import map4 from "@/public/templet/thrillTheme/footer/map4.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

function Footer() {
	return (
		<div className="bg-[#000A19] bg-[url('/templet/thrillTheme/footer/footer_pattern.png')] bg-repeat  px-2.5 ">
			<div className="pt-[67px] font_poppins">
				<div className="flex justify-center pb-[25px]">
					<Image src={logo} alt="logo" height={96} width={496} />
				</div>
				<p className="text-lg text-[#808080] max-w-[762px] mx-auto text-center ">
					At the core of our project's concept is the desire to provide people with maximum immersion. Each room has a meticulously thought-out story,
					from a detailed script to a cinematic set on par with Hollywood.
				</p>
				<div className="pt-[42px] pb-[51px] text-[#A3A3A3] font_poppins text-[14px] font-[600] uppercase flex flex-wrap justify-center items-center gap-3">
					<span className="cursor-pointer">Escape Rooms</span>
					<span className="text-[18px]">•</span>
					<span className="cursor-pointer">Events</span>
					<span className="text-[18px]">•</span>
					<span className="cursor-pointer">Gift Cards</span>
					<span className="text-[18px]">•</span>
					<span className="cursor-pointer">Schedule</span>
					<span className="text-[18px]">•</span>
					<span className="cursor-pointer">promotions</span>
					<span className="text-[18px]">•</span>
					<span className="cursor-pointer">pricing</span>
					<span className="text-[18px]">•</span>
					<span className="cursor-pointer">Faq</span>
					<span className="text-[18px]">•</span>
					<span className="cursor-pointer">About us</span>
					<span className="text-[18px]">•</span>
					<span className="cursor-pointer">in the news</span>
					<span className="text-[18px]">•</span>
					<span className="cursor-pointer">Blog</span>
					<span className="text-[18px]">•</span>
					<span className="cursor-pointer">Safety</span>
				</div>
				<div className="g_container--theme pb-[55px] grid lg:grid-cols-2 gap-y-[25px]  gap-x-5 border-b-[1px] border-[#001D4D]">
					<div className="max-w-[710px] mx-auto bg-[#00112C] border-[#062352] border-[1px] rounded-[10px] overflow-hidden">
						<Image src={location1} alt="" height={287} width={571} className="h-[229px] w-full object-cover" />
						<div className=" px-3 sm:px-[27px] pt-[25px] pb-[30px] sm:pb-[42px] grid sm:grid-cols-2 gap-2.5 place-items-center ">
							<div className="text-[#BFBFBF]">
								<p className="text-[#A3A3A3] text-[14px]">04 Games</p>
								<p className="text-[24px] font-[700] uppercase">Redondo Beach</p>
								<div className="mt-[26px] space-y-[15px]">
									<div className="group flex gap-2.5 items-center text-[14px] ">
										<Image src={mail} alt="" height={10} width={13} className="flex-none object-cover" />
										<a href="mailto:sbg@questroom.com" className="group-hover:text-[#0085FF]">
											sbg@questroom.com
										</a>
									</div>
									<div className=" group flex gap-2.5 items-start text-[14px]">
										<Image src={location} alt="" height={15} width={11} className="flex-none object-cover mt-[2px]" />
										<a href="https://maps.app.goo.gl/SLEhWwkZK8z7bHSy7" target="__blank" className="group-hover:text-[#0085FF]">
											1815 Hawthorne Blvd, Redondo Beach, CA 90278
										</a>
									</div>
									<div className="group flex gap-2.5 items-center text-[14px]">
										<Image src={call} alt="" height={11} width={11} className="flex-none object-cover" />
										<a href="tel:323-307-2090" className="group-hover:text-[#0085FF]">
											323-307-2090
										</a>
									</div>
									<div className="group flex gap-2.5 items-center text-[14px]">
										<Image src={direction} alt="" height={14} width={14} className="flex-none object-cover" />
										<a href="#" className="group-hover:text-[#0085FF]">
											Get Directions
										</a>
									</div>
									<div className="group flex gap-2.5 items-center text-[14px]">
										<Image src={parking} alt="" height={11} width={11} className="flex-none object-cover" />
										<a href="#" className="group-hover:text-[#0085FF]">
											Parking instructions
										</a>
									</div>
								</div>
							</div>
							<a href="https://maps.app.goo.gl/SLEhWwkZK8z7bHSy7" target="__blank" className="w-full">
								<Image src={map1} alt="" height={250} width={240} className="pt-4 sm:pt-0 h-[180px] sm:h-[250px] w-full object-cover rounded" />
							</a>
						</div>
					</div>
					<div className="max-w-[710px] mx-auto bg-[#00112C] border-[#062352] border-[1px] rounded-[10px] overflow-hidden">
						<Image src={location2} alt="" height={287} width={571} className="h-[229px] w-full object-cover" />
						<div className=" px-3 sm:px-[27px] pt-[25px] pb-[30px] sm:pb-[42px] grid sm:grid-cols-2 gap-2.5 place-items-center ">
							<div className="text-[#BFBFBF]">
								<p className="text-[#A3A3A3] text-[14px]">05 Games</p>
								<p className="text-[24px] font-[700] uppercase">Hollywood</p>
								<div className="mt-[26px] space-y-[15px]">
									<div className="group flex gap-2.5 items-center text-[14px] ">
										<Image src={mail} alt="" height={10} width={13} className="flex-none object-cover" />
										<a href="mailto:hollywood@questroom.com" className="group-hover:text-[#0085FF]">
											hollywood@questroom.com
										</a>
									</div>
									<div className=" group flex gap-2.5 items-start text-[14px]">
										<Image src={location} alt="" height={15} width={11} className="flex-none object-cover mt-[2px]" />
										<a href="https://maps.app.goo.gl/R51qzWS7KL3iT1Bm8" target="__blank" className="group-hover:text-[#0085FF]">
											5517 Santa Monica Blvd, Los Angeles, CA 90038
										</a>
									</div>
									<div className="group flex gap-2.5 items-center text-[14px]">
										<Image src={call} alt="" height={11} width={11} className="flex-none object-cover" />
										<a href="tel:323-880-0221" className="group-hover:text-[#0085FF]">
											323-880-0221
										</a>
									</div>
									<div className="group flex gap-2.5 items-center text-[14px]">
										<Image src={direction} alt="" height={14} width={14} className="flex-none object-cover" />
										<a href="#" className="group-hover:text-[#0085FF]">
											Get Directions
										</a>
									</div>
									<div className="group flex gap-2.5 items-center text-[14px]">
										<Image src={parking} alt="" height={11} width={11} className="flex-none object-cover" />
										<a href="#" className="group-hover:text-[#0085FF]">
											Parking instructions
										</a>
									</div>
								</div>
							</div>
							<a href="https://maps.app.goo.gl/R51qzWS7KL3iT1Bm8" target="__blank" className="w-full rounded">
								<Image src={map2} alt="" height={250} width={240} className="pt-4 sm:pt-0 h-[180px] sm:h-[250px] w-full object-cover rounded" />
							</a>
						</div>
					</div>
					<div className="max-w-[710px] mx-auto bg-[#00112C] border-[#062352] border-[1px] rounded-[10px] overflow-hidden">
						<Image src={location3} alt="" height={287} width={571} className="h-[229px] w-full object-cover" />
						<div className=" h-auto px-3 sm:px-[27px] pt-[25px] pb-[30px] sm:pb-[42px] grid sm:grid-cols-2 gap-2.5 place-items-center ">
							<div className="text-[#BFBFBF]">
								<p className="text-[#A3A3A3] text-[14px]">04 Games</p>
								<p className="text-[24px] font-[700] uppercase">Korea Town</p>
								<div className="mt-[26px] space-y-[15px]">
									<div className="group flex gap-2.5 items-center text-[14px] ">
										<Image src={mail} alt="" height={10} width={13} className="flex-none object-cover" />
										<a href="mailto:ktown@questroom.com" className="group-hover:text-[#0085FF]">
											ktown@questroom.com
										</a>
									</div>
									<div className=" group flex gap-2.5 items-start text-[14px] xl:pr-2">
										<Image src={location} alt="" height={15} width={11} className="flex-none object-cover mt-[2px]" />
										<a href="https://maps.app.goo.gl/SLEhWwkZK8z7bHSy7" target="__blank" className="group-hover:text-[#0085FF]">
											170 S. Western Ave, Los Angeles, CA 90004
										</a>
									</div>
									<div className="group flex gap-2.5 items-center text-[14px]">
										<Image src={call} alt="" height={11} width={11} className="flex-none object-cover" />
										<a href="tel:310-707-1240" className="group-hover:text-[#0085FF]">
											310-707-1240
										</a>
									</div>
									<div className="group flex gap-2.5 items-center text-[14px]">
										<Image src={direction} alt="" height={14} width={14} className="flex-none object-cover" />
										<a href="#" className="group-hover:text-[#0085FF]">
											Get Directions
										</a>
									</div>
									<div className="group flex gap-2.5 items-center text-[14px]">
										<Image src={parking} alt="" height={11} width={11} className="flex-none object-cover" />
										<a href="#" className="group-hover:text-[#0085FF]">
											Parking instructions
										</a>
									</div>
								</div>
							</div>
							<a href="https://maps.app.goo.gl/SLEhWwkZK8z7bHSy7" target="__blank" className="w-full">
								<Image src={map3} alt="" height={250} width={240} className="pt-4 sm:pt-0 h-[180px] sm:h-[250px] w-full object-cover rounded" />
							</a>
						</div>
					</div>
					<div className="max-w-[710px] mx-auto bg-[#00112C] border-[#062352] border-[1px] rounded-[10px] overflow-hidden">
						<Image src={location4} alt="" height={287} width={571} className="h-[229px] w-full object-cover" />
						<div className=" px-3 sm:px-[27px] pt-[25px] pb-[30px] sm:pb-[42px] grid sm:grid-cols-2 gap-2.5 place-items-center ">
							<div className="text-[#BFBFBF]">
								<p className="text-[#A3A3A3] text-[14px]">03 Games</p>
								<p className="text-[24px] font-[700] uppercase">Culver City</p>
								<div className="mt-[26px] space-y-[15px]">
									<div className="group flex gap-2.5 items-center text-[14px] ">
										<Image src={mail} alt="" height={10} width={13} className="flex-none object-cover" />
										<a href="mailto:culver@questroom.com" className="group-hover:text-[#0085FF]">
											culver@questroom.com
										</a>
									</div>
									<div className=" group flex gap-2.5 items-start text-[14px]">
										<Image src={location} alt="" height={15} width={11} className="flex-none object-cover mt-[2px]" />
										<a href="https://maps.app.goo.gl/wT6iGrCvRWQDkWrC9" target="__blank" className="group-hover:text-[#0085FF]">
											5235 W Adams Blvd, Los Angeles, CA 90016
										</a>
									</div>
									<div className="group flex gap-2.5 items-center text-[14px]">
										<Image src={call} alt="" height={11} width={11} className="flex-none object-cover" />
										<a href="tel:323-457-7222" className="group-hover:text-[#0085FF]">
											323-457-7222
										</a>
									</div>
									<div className="group flex gap-2.5 items-center text-[14px]">
										<Image src={direction} alt="" height={14} width={14} className="flex-none object-cover" />
										<a href="#" className="group-hover:text-[#0085FF]">
											Get Directions
										</a>
									</div>
									<div className="group flex gap-2.5 items-center text-[14px]">
										<Image src={parking} alt="" height={11} width={11} className="flex-none object-cover" />
										<a href="#" className="group-hover:text-[#0085FF]">
											Parking instructions
										</a>
									</div>
								</div>
							</div>
							<a href="https://maps.app.goo.gl/wT6iGrCvRWQDkWrC9" target="__blank" className="w-full">
								<Image src={map4} alt="" height={250} width={240} className="pt-4 sm:pt-0 h-[180px] sm:h-[250px] w-full object-cover rounded" />
							</a>
						</div>
					</div>
				</div>
				<div className="g_container--theme flex flex-col-reverse md:flex-row  justify-between items-center pt-[30px] ">
					
					<div className="flex md:block flex-col items-center">
						<p className="text-[#808080] text-[14px]">© 2025 QUESTRoom | All Rights Reserved</p>
						<div className="pt-[2px] pb-[40px]  text-[#545454] text-[12px] sm:text-[14px] flex justify-center items-center gap-1.5 sm:gap-3">
							<span className="cursor-pointer">Privacy Policy</span>
							<span className="text-[18px]">•</span>
							<span className="cursor-pointer">Terms of Services</span>
							<span className="text-[18px]">•</span>
							<span className="cursor-pointer">Sitemap</span>
						</div>
					</div>
					<div className="flex md:block flex-col items-center">
						<p className="text-[22px] font-[500] text-[#808080]">FOLLOW US ON SOCIAL</p>
						<div className="flex items-center gap-4 pt-[12px] pb-[26px]">
							<FaFacebookSquare className="text-[40px] text-[#737373]" />
							<FaInstagramSquare className="text-[40px] text-[#737373]" />
							<FaYoutubeSquare className="text-[40px] text-[#737373]" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
