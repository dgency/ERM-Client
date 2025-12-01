/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";
import Quizhero from "./quizDetailsHero/Quizhero";

function CreativeAssetRelatedQuiz() {
	return (
		<div>
			<Quizhero heading="Website Creative Marketing Score" />
			<div className="bg-[#F9FCFF] flex justify-center lg:justify-between px-4 sm:px-0 overflow-x-hidden">
				<Image
					src="/resources/quiz_details/creative_quiz/creative_asset_left.svg"
					alt=""
					height={100}
					width={350}
					className="opacity-40 hidden sm:block w-[250px] lg:w-[250px] xl:w-[350px] h-full"
				/>
				<div className=" font-openSans text-center mt-14 md:mt-10 xl:mt-20 mb-14 xl:mb-20 px-2 max-w-md sm:min-w-[450px] md:min-w-[500px] 2xl:min-w-[700px]">
					<p className=" lg:text-lg text-[#FF492C] font-semibold pb-1">ESCAPE ROOM WEBSITE</p>
					<h3 className="text-2xl lg:text-4xl font-bold pb-1 lg:pb-3">SEO Quiz</h3>
					<p className="lg:text-lg ">
						Could your organic engine be stronger than it is today? Could you drive <br className="hidden md:block" /> more direct revenue with a
						different SEO focus?
					</p>
					<p className="text-[18px] lg:text-[22px] font-semibold py-3 lg:py-6">
						Answer up to 19 questions and we'll tell you how <br className="hidden md:block" /> you measure up.
					</p>
					<p className="text-[20px] lg:text-2xl font-semibold pb-6">No email required to get your results</p>
					<button className="bg-[#FF492C] hover:bg-[#E74329] px-20 py-2 text-white font-semibold rounded">Take The Quiz</button>

					{/* <div
						id="zf-widget"
						data-zf-id="uPiMvCNgOF0sN1N6s2DM"
						data-zf-d_id="ZLXBivsWppYpIA8zF"
						data-zf-type="standard"
						// style={{ height: "40vh", width: "700px", margin: "auto" }}
						className=" md:h-[40vh] lg:max-w-2xl m-auto"
					></div> */}

					<Script src="https://form-assets.forms.gozen.io/cdn/scripts/embed.js"></Script>
				</div>
				<Image
					src="/resources/quiz_details/creative_quiz/creative_asset_right.svg"
					alt=""
					height={100}
					width={350}
					className="opacity-40 hidden sm:block w-[250px] lg:w-[250px] xl:w-[350px] h-full"
				/>
			</div>
		</div>
	);
}

export default CreativeAssetRelatedQuiz;
