import React from "react";
import StoryLineCard from "./allComponents/StoryLineCard";
import Image from "next/image";
import location from "@/public/templet/thrillTheme/storyLine/location_icon.svg";
import call from "@/public/templet/thrillTheme/storyLine/call_icon.svg";
import story1 from "@/public/templet/thrillTheme/storyLine/storyLine1.png";
import story2 from "@/public/templet/thrillTheme/storyLine/storyLine2.png";


const image = [
	{
		storyCategory:"Project Minotaur Storyline",
		title: "A Vacation Gone Horribly Wrong",
		description: "You and your friends were searching for adventure—a thrilling escape from the mundane. What started as an exclusive tour of a mysterious ancient temple quickly turned into something far darker. You noticed a heavily guarded military facility nearby. Curious, you strayed from the tour and snuck inside.",
		testimonial: "Zach was an amazing actor as the minotaur and chris was a fantastic actor as our professor. Had a great experience and would definitely recommend it to friends who want a thrill.",
		image: story1,
		name:'Bryanna M., Hollywood, LA ',
		button:"will you survive?"
	},
	{
		storyCategory:"Project Minotaur Mission",
		title: "Trapped in the Labyrinth",
		description: "Navigate the base, solve puzzles, and evade capture as you uncover the dark secrets of Project Minotaur. Work together to escape before encountering the monstrous experiment. Time is running out, and the Minotaur is on the hunt. Will you survive or fall victim to the labyrinth?",
		testimonial: "So much fun, absolutely loved the Red Giant! Extremely immersive and fun puzzles with spooky ambiance. Stunning set design, too. It really feels like playing in a video game!",
		image: story2,
		name:'Lucy X.,Hollywood, LA',
		button:"The Minotaur awaits !"
	},
];

function StoryLine({ description }) {
	return (
		<div className="relative pb-[90px] xl:pb-32">
			<div className="pt-[0px] md:pt-[100px] font_poppins px-2.5">
				{/* <h1 className="text_stroke text-center text-[40px] sm:text-[60px] lg:text-[96px] font-bold leading-[46px] sm:leading-[70px] lg:leading-[110px] ">
					PROJECT MINOTAUR <br /> ESCAPE ROOM
				</h1>
				<p className="max-w-[770px] mx-auto text-base md:text-lg text-[#a3a3a3] text-center mt-4">
					{description}
				</p> */}

				{/* <div className="pt-[25px]">
					<div className="flex items-start justify-center gap-2.5">
						<Image src={location} alt="location icon" height={21} width={16} className="flex-none " />
						<p className="text-[#FC7008] text-[12px] md:text-lg text-center">Hollywood, 5517 Santa Monica Blvd, Los Angeles</p>
					</div>
					<div className="flex justify-center gap-2.5">
						<Image src={call} alt="location icon" height={21} width={21} className="flex-none" />
						<p className="text-[#FC7008] text-[12px] md:text-lg text-center">323-880-0221</p>
					</div>
				</div> */}
			</div>
			<div className="mt-14 space-y-[60px] xl:space-y-[150px]">
				{image.map((item, i) => (
					<StoryLineCard key={i} id={i + 1} item={item} />
				))}
			</div>
		</div>
	);
}

export default StoryLine;
