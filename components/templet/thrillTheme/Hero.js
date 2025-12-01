import { useRef, useState } from "react";
import { ImVolumeMute2 } from "react-icons/im";
import { GoUnmute } from "react-icons/go";
import Image from "next/image";
import warning from "@/public/templet/thrillTheme/warning.png";
import title from "@/public/templet/thrillTheme/game_title.png";
import cross from "@/public/templet/thrillTheme/cross.png";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";
import buttonLeft from "@/public/templet/thrillTheme/hero/button_left.svg";
import buttonRight from "@/public/templet/thrillTheme/hero/button_right.svg";
import sticker from "@/public/templet/thrillTheme/hero/stiker.svg";
import gif from "../../../public/templet/thrillTheme/hero/hero.gif";

function Hero({ description }) {
	const videoRef = useRef(null);
	const [isMuted, setIsMuted] = useState(true);

	const toggleMute = () => {
		if (videoRef.current) {
			videoRef.current.muted = !isMuted;
			setIsMuted(!isMuted);
		}
	};
	return (
		<div className="h-[100vh] w-full relative pb-[250px] md:pb-0">
			
			<div className="xl:left-[2%] 2xl:left-[calc((100%-1440px)/2)] absolute z-10 top-2.5 flex font_poppins ">
				<Link
					// onClick={backToPreviousPage}
					href="/blog"
					className="text-[#D9D9D9]  text-center text-[12px] md:text-[14px] flex items-center decoration-  underline underline-offset-4 "
				>
					<BiChevronLeft className="text-xl" /> See all rooms of this location
				</Link>
			</div>
			<video ref={videoRef} autoPlay loop muted={isMuted} playsInline className="h-full w-full object-cover">
				<source src="/templet/thrillTheme/hero_video.mp4" type="video/mp4" />
			</video>
			<button
				onClick={toggleMute}
				className={` hidden md:flex  absolute z-20 top-[100%] right-14 -mt-32 md:-mt-[200px]  justify-center items-center bg-[#0F1A0C]  px-1 py-1 rounded-full after:absolute after:bg-[#0F1A0C80] after:h-10 after:w-10 after:rounded-full before:absolute before:bg-[#0F1A0C90] before:h-8 before:w-8 before:rounded-full `}
			>
				{isMuted ? (
					<ImVolumeMute2 className="relative z-10 text-[15px] text-[#fff]" />
				) : (
					<GoUnmute className="relative z-10 text-[15px] text-[#fff] " />
				)}
			</button>

			<div className="flex justify-center   font_poppins ">
				<div className="absolute z-20 bottom-5 flex flex-col items-center px-2.5">
					<h1 className="font_rusolie heading_1 font-[400] text-[#CAFFBC] text-center text-[40px] sm:text-[60px] lg:text-[90px] leading-[46px] sm:leading-[70px] lg:leading-[90px] ">
						PROJECT MINOTAUR <br /> ESCAPE ROOM
					</h1>
					<p className="max-w-[770px] mx-auto text-base md:text-lg text-[#a3a3a3] text-center mt-0 mb-[40px]">{description}</p>
					<button className="box box-b py-[15px] md:py-[20px] px-[55px] md:px-[65px] font_bandex text-[#FFFFFF] text-[26px] bg-[#FF050535] relative">
						<Image src={buttonLeft} alt="" height={71} width={9} className="h-full absolute left-[-4px] top-0" />
						<Image src={buttonRight} alt="" height={71} width={9} className="h-full absolute right-[-4px] top-0" />
						BOOK THIS GAME
					</button>
				</div>
			</div>
			<div className="absolute z-10 top-3 md:top-10 right-3 md:right-10">
				<Image src={sticker} alt=" " height={40} width={78} className="h-[30px] sm:h-[inherit]" />
				<div className="text-[#B5B5B5] font_poppins mt-1.5 sm:mt-2.5 relative">
					<Image src={gif} alt=" " height={30} width={50} className="absolute -left-10 -top-2.5" />
					<p className="text-[10px] sm:text-[16px] font-[500] uppercase leading-[1]">
						Live Experience <br /> <span className="text-[8px] sm:text-[12px] font-[500] lowercase">with multiple actors</span>
					</p>
				</div>
			</div>
			<div className="absolute bottom-56 md:-bottom-2 h-[600px] w-full bg-gradient-to-t from-[#0D130A]  to-transparent "></div>
		</div>
	);
}

export default Hero;
