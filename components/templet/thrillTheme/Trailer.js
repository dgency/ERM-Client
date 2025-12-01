"use client";

import Image from "next/image";
import React from "react";
import trailer from "@/public/templet/thrillTheme/trailer.png";
import bg from "@/public/templet/thrillTheme/trailerBg.png";
import title from "@/public/templet/thrillTheme/title.png";
import { useRef, useEffect, useState } from "react";

function Trailer() {
	const videoRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
			},
			{ threshold: 0.5 } // Trigger when 50% of the section is visible
		);

		const section = videoRef.current;
		if (section) {
			observer.observe(section);
		}

		return () => {
			if (section) observer.unobserve(section);
		};
	}, []);

	useEffect(() => {
		const iframe = videoRef.current.querySelector("iframe");
		if (iframe && iframe.contentWindow) {
			const playCommand = '{"method":"play"}';
			const pauseCommand = '{"method":"pause"}';

			
			if (isVisible) {
				iframe.contentWindow.postMessage(playCommand, "*");
			} else {
				iframe.contentWindow.postMessage(pauseCommand, "*");
			}
		}
	}, [isVisible]);

	return (
		<div ref={videoRef} className="g_container--theme  xl:pt-10 pb-[50px] sm:pb-[80px]">
			{/* <div className="flex items-center justify-center max-w-[1050px] mx-auto px-8">
				<Image src={title} alt="" height={82} width={1173} className="relative z-10 -mb-4 sm:-mb-6 md:-mb-10 xl:-mb-16 " />
			</div> */}
			<div className="bg-[url('/templet/thrillTheme/trailerBg.png')] bg-no-repeat bg-[length:100%_100%] flex justify-center max-w-[1355px] mx-auto pb-3 sm:pb-6 px-3 sm:px-6 lg:px-20 pt-[50px] sm:pt-[130px] relative">
				<div className="w-full h-0 relative " style={{ paddingTop: "60.25%" }}>
					<iframe
						src="https://player.vimeo.com/video/561954150"
						className="absolute top-0 left-0 w-full h-full"
						frameBorder="0"
						allow=" fullscreen"
						allowFullScreen
					></iframe>
				</div>
			</div>
			{/* <video autoPlay loop muted className="h-full w-full object-cover relative z-10 ml-2.5">
				<source src="https://player.vimeo.com/video/561954150?autoplay=1&title=0&portrait=0&byline=0&title=0&quality=1080p#t=0s" type="video/mp4" />
			</video> */}
		</div>
	);
}

export default Trailer;
