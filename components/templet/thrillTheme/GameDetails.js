import Image from "next/image";
import React from "react";
import player from "@/public/templet/thrillTheme/gameDetails/player.png";
import genra from "@/public/templet/thrillTheme/gameDetails/ganra.png";
import area from "@/public/templet/thrillTheme/gameDetails/area.png";
import multiple from "@/public/templet/thrillTheme/gameDetails/multiple.png";
import time from "@/public/templet/thrillTheme/gameDetails/time.png";
import keyHole from "@/public/templet/thrillTheme/gameDetails/keyHole.png";
import hat from "@/public/templet/thrillTheme/gameDetails/hat.png";
import girl from "@/public/templet/thrillTheme/girl.png";
import torch from "@/public/templet/thrillTheme/torch.png";
import location from "@/public/templet/thrillTheme/storyLine/location_icon.svg";
import call from "@/public/templet/thrillTheme/storyLine/call_icon.svg";

function GameDetails() {
	return (
		<div className="">
			<div className=" mt-[150px]  relative overflow-x-hidden">
				<div className="absolute top-0  bg-[url('/templet/thrillTheme/jail_bg.png')] bg-no-repeat bg-cover lg:bg-[length:90%_auto] bg-right h-full w-full mix-blend-color-dodge"></div>
				<div className="absolute top-0 z-10  bg-[url('/templet/thrillTheme/jail_front.png')] bg-no-repeat bg-cover lg:bg-[length:90%_auto] bg-right h-full w-full flex justify-end">
					<div className="hidden lg:block w-[90%] h-[200px] bg-gradient-to-b from-[#0D130A] to-transparent "></div>
				</div>

				<Image
					src={girl}
					alt=""
					height={1199}
					width={672}
					className=" h-full w-auto absolute object-cover z-20 scale-x-[-1] lg:scale-x-[1] -right-5 lg:right-[inherit] lg:left-0 top-0 mix-blend-luminosity "
				/>
				<div className="max-w-[1050px] lg:pl-32 mx-auto px-2.5 lg:pt-20 relative z-20">
					<h2 className="header_2 mb-[60px]">Experience Details</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-y-[27px] md:gap-y-14 gap-x-10 text-[16px] md:text-[22px] lg:text-[32px]  ">
						<div className="flex items-center gap-5 font_poppins text-[#BFBFBF]">
							<Image src={player} alt="" height={55} width={51} className="h-[40px] md:h-[inherit] object-contain " />
							<p className="font_bandex ">PLAYERS: 2 - 8</p>
						</div>
						<div className="flex items-center gap-5 font_poppins text-[#BFBFBF]">
							<Image src={time} alt="" height={55} width={51} className="h-[40px]  md:h-[inherit] object-contain " />
							<p className=" font_bandex">TIME: 100 MIN</p>
						</div>
						<div className="flex items-center gap-5 font_poppins text-[#BFBFBF]">
							<Image src={genra} alt="" height={55} width={51} className="h-[40px]  md:h-[inherit] object-contain" />
							<p className=" font_bandex">GENRA: INTERACTIVE HORROR ADVENTURE</p>
						</div>
						<div className="flex items-center gap-5 font_poppins text-[#BFBFBF]">
							<Image src={keyHole} alt="" height={55} width={51} className="h-[40px]  md:h-[inherit] object-contain" />
							<p className="font_bandex ">COMPLEXITY: MEDIUM</p>
						</div>
						<div className="flex items-center gap-5 font_poppins text-[#BFBFBF]">
							<Image src={area} alt="" height={55} width={51} className="h-[40px]  md:h-[inherit] object-contain" />
							<p className="font_bandex ">1600 SQUARE FEET</p>
						</div>
						<div className="flex items-center gap-5 font_poppins text-[#BFBFBF]">
							<Image src={hat} alt="" height={55} width={51} className="h-[40px] md:h-[inherit] object-contain" />
							<p className=" font_bandex">MULTIPLE LIVE ACTORS</p>
						</div>
						<div className="flex items-center gap-5 font_poppins text-[#BFBFBF]">
							<Image src={multiple} alt="" height={55} width={51} className="h-[40px] md:h-[inherit] object-contain" />
							<p className="font_bandex ">MULTIPLE ROOMS</p>
						</div>
					</div>
					<div className="pt-[50px] pb-[22px] font_poppins">
						<div className="flex  gap-2.5 mb-2.5">
							<Image src={call} alt="location icon" height={16} width={16} className="flex-none" />
							<p className="text-[#FC7008] text-[12px] md:text-lg text-center">323-880-0221</p>
						</div>
						<div className="flex items-start  gap-2.5">
							<Image src={location} alt="location icon" height={21} width={16} className="flex-none " />
							<p className="text-[#FC7008] text-[12px] md:text-lg text-center">Hollywood, 5517 Santa Monica Blvd, Los Angeles</p>
						</div>
					</div>
					<p className="text-[#BFBFBF] max-w-[790px] text-[14px] md:text-[16px] font_poppins  pb-16">
						<span className="text-[#FC7008]">**</span>Not recommended for individuals with neck, back, or knee injuries, severe claustrophobia, or
						those uncomfortable with physical interaction. Players must be at least 18 years old, or have an adult present.
					</p>
				</div>
				<div className=" w-full h-[100px] bg-gradient-to-t from-[#0D130A] to-transparent absolute z-20 bottom-0"></div>
			</div>
			{/* <Image src={torch} alt="" height={926} width={1920} className="w-full -mt-[150px] lg:-mt-[400px] relative z-20 text-transparent" /> */}
		</div>
	);
}

export default GameDetails;
