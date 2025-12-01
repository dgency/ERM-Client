/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import faq from "@/public/templet/thrillTheme/faq.png";
import Accordion, { AccordianItem } from "./allComponents/Faq/Accordion";

function FrequentlyAsked() {
	const initialSelectedValue = "1";
	return (
		<div>
			<div className="g_container--theme pt-10 pb-20">
				<h2 className="header_2 mb-[20px] md:mb-[40px]">Frequently Asked Questions</h2>
				<Accordion className="flex flex-col xl:ml-28" value={initialSelectedValue}>
					<AccordianItem value="1" trigger="Can I add another player to my group?">
						As long as you do not exceed the capacity limit listed on the website for the specific room you have booked you can! Call us in advance to
						let us know, and we will add a player to your game so everyone can do their waivers before arriving. We can take care of payment when you
						arrive.
					</AccordianItem>
					<AccordianItem value="2" trigger="What locations do you have?">
						We currently have four locations: Koreatown, Hollywood, Redondo Beach and Culver City. Additionally, we are excited to announce our newest
						location in Plano.
					</AccordianItem>
					<AccordianItem value="3" trigger="Do you have an age limit?">
						There needs to be one person over the age of 18 in the room at all times with any minors. However, We do not have an age limit, but
						different age recommendations for our rooms - they are listed below: Amnesia- 13+ (For language and suspenseful themes) Bloody Elbow- 13+
						(for violent themes and mild nudity) Cannibal’s Den- 15+ (For violent and suspenseful themes) Project Minotaur- 16+ (For violent and
						suspenseful themes) Resurrection- 15+ (For language and suspenseful themes)
					</AccordianItem>
					<AccordianItem value="4" trigger="What's the parking situation?">
						Each of our locations has its own dedicated parking area. (See detailed maps on the LOCATION part of our website) Our location on Western
						Ave. has a white archway that says KOREA ONE PLAZA on it to the left of our building where you can park and our Hollywood location on
						Santa Monica blvd, has LIMITED parking next to our entrance, at the back of the building. Unless you're going to our location at the South
						Bay Galleria, our parking is very limited so we encourage people to carpool and take as few cars as possible when you're coming to play.
						We cannot guarantee parking at our Koreatown or Hollywood locations, however the spots we do have are free.
					</AccordianItem>
				</Accordion>
			</div>
		</div>
	);
}

export default FrequentlyAsked;
