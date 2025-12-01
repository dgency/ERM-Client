import Image from "next/image";
import React from "react";
import person from "@/public/templet/thrillTheme/person.png";
import shareVictory from "@/public/templet/thrillTheme/shareVictory.png";
import { IoMdHeart } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { RiTelegram2Line } from "react-icons/ri";

function ShareVictory() {
	return (
		<div className="g_container--theme pt-10 ">
			<h2 className="header_2 pb-[25px]">Share Your Victory</h2>
			<p className="text-[#a3a3a3] font_poppins text-lg max-w-[608px] mb-[65px]">
				So, you dare to enter? Bravo! Get ready to experience LA’s #1 scary escape room, where the fear is real, and the actors are part of the
				thrill!
			</p>
			<div>
				<div className="bg-[#00112c] max-w-[345px] font_poppins text-[#ededed] relative">
					{/* broken Line */}
					<div className="w-full h-[22px] bg-[url('/templet/thrillTheme/broken_line.png')] bg-no-repeat bg-[length:100%_auto] absolute -top-4"></div>

					{/* Profile Section */}
					<div className="px-4 py-3 flex gap-1.5 items-center ">
						<Image src={person} alt=" " height={35} width={35} className="rounded-full object-cover" />
						<div>
							<p className="text-[14px]">Kennedy</p>
							<p className="text-[10px] font-thin">Hollywood, Los Angeles, CA </p>
						</div>
					</div>
					<Image src={shareVictory} alt=" " height={345} width={345} className="h-[345px] w-full object-cover" />
					<div className="px-4 py-3">
						<div className="flex justify-between">
							<div className="flex items-center gap-[17px]">
								<IoMdHeart className="fill-[#f90317] text-[20px]" />
								<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 21 20" fill="none">
									<path
										d="M20.0846 19.7482L18.2601 14.6071C19.1363 13.1729 19.6677 11.5031 19.6677 9.69815C19.6677 4.48168 15.45 0.253418 10.2468 0.253418C5.04414 0.253418 0.826172 4.48168 0.826172 9.69815C0.826172 14.9142 5.04414 19.1429 10.2468 19.1429C11.8427 19.1429 13.3224 18.7081 14.6395 18.006C17.1523 18.8151 20.0846 19.7482 20.0846 19.7482Z"
										stroke="white"
										stroke-width="0.3"
										stroke-miterlimit="10"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 20" fill="none">
									<path
										d="M0.467041 0.896484H21.3467L10.4313 19.1051L8.48389 8.34328L0.467041 0.896484Z"
										stroke="white"
										stroke-width="0.3"
										stroke-miterlimit="10"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
									<path
										d="M8.48364 8.34328L21.3464 0.896484"
										stroke="white"
										stroke-width="0.3"
										stroke-miterlimit="10"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</div>
							<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none">
								<path
									d="M1.11426 0.798828H19.3521V19.2895L10.4145 12.393L1.2555 19.5113L1.11426 0.798828Z"
									stroke="white"
									stroke-width="0.3"
									stroke-miterlimit="10"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</div>
						<div className="flex items-center gap-1.5 mt-2.5 mb-3">
							<Image src={person} alt=" " height={22} width={22} className="rounded-full object-cover" />
							<span className="text-[14px]">
								likes <b>Jule</b> and <b>230</b> more
							</span>
						</div>
						<p className="text-[12px] text-[#bfbfbf] font-light">
							Project Minotaur was so awesome! As an escape room lover it ranked in the top 3 throughout the world I’ve done.
						</p>
					</div>

					{/* broken Line */}
					<div className="w-full h-[22px] bg-[url('/templet/thrillTheme/broken_line.png')] bg-no-repeat bg-[length:100%_auto] absolute -bottom-4 rotate-180"></div>
				</div>
			</div>
		</div>
	);
}

export default ShareVictory;
