import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import DescriptiveCta from "./DescriptiveCta";
import FadeInUpContainer from "./framer-motion/FadeInUpContainer";
import { FadeScaleUp } from "./framer-motion/FadeInUpSection";
import FadeRight from "./framer-motion/FadeRight";
import FadeLeft from "./framer-motion/FadeLeft";

function KeyServeice({ bodyColor, cardColor, keyServeiceData, downCta }) {
	// const [othersCard, setOthersCard] = useState(keyServeiceData.card_content.others_card);
	return (
		<div>
			<div className={`work-together g-page_structure ${bodyColor}  relative min-h-[70vh]`}>
				<div className="pt-14 md:pt-20 pb-14 md:pb-24">
					<FadeInUpContainer>
						<div className="main-content  m-auto">
							<h2 className="g__section-heading   text-center mx-auto font-extrabold ">
								{keyServeiceData && keyServeiceData.title_first_line}
								<br className="hidden xl:block" /> {keyServeiceData && keyServeiceData.title_second_line}
							</h2>
							<p className="g__section-description text-center">{keyServeiceData && keyServeiceData.description}</p>
						</div>
					</FadeInUpContainer>
					<FadeInUpContainer>
						<div className="q-card max-w-lg md:max-w-2xl lg:max-w-4xl 2xl:max-w-none 2xl:w-[1000px] mx-auto mt-10 md:mt-16 grid gap-x-20 gap-y-12 md:grid-cols-1 relative">
							{keyServeiceData && (
								<div
									className={`px-2.5 md:px-8  py-10 md:col-span-2 rounded ${cardColor} shadow  grid md:grid-cols-2 gap-5 items-center justify-items-center`}
								>
									<div className=" text-center ">
										<h4 className=" font-bold text-xl md:text-[22px] text-[#010101]">{keyServeiceData.long_first_card.card_title}</h4>
										<p className="text-[#222] text-[16px] md:text-lg mt-2">{keyServeiceData.long_first_card.short_description}</p>
									</div>
									<Image
										src={keyServeiceData.long_first_card.image.data.attributes.url}
										alt=""
										height={100}
										width={300}
										className="w-[291px] h-[290px]  "
									/>
								</div>
							)}
							{keyServeiceData && (
								<Image
									src="/most_populer.svg"
									alt=""
									height={100}
									width={150}
									className="w-[90px] lg:w-[120px] xl:w-[140px] absolute top-0 md:-top-4 -left-[18px] md:-left-10 -rotate-45"
								/>
							)}
						</div>
					</FadeInUpContainer>
					<div className="q-card font-openSans max-w-lg md:max-w-2xl lg:max-w-4xl 2xl:max-w-none 2xl:w-[1000px] mx-auto mt-6 md:mt-10 grid gap-x-14 gap-y-6 md:gap-y-12 md:grid-cols-2 px-1 py-2 overflow-hidden xl:overflow-visible">
						{keyServeiceData &&
							keyServeiceData.others_card.map((data, i) =>
								(i + 1) % 2 !== 0 ? (
									<FadeLeft key={i}>
										<div className={`px-2.5 md:px-8 py-10 rounded ${cardColor} shadow h-full`} key={data && data.card_title}>
											<div className=" text-center ">
												<h4 className=" font-bold text-xl md:text-[22px] text-[#010101]">{data && data.card_title}</h4>
												<p className="text-[#222] text-[16px] md:text-lg mt-2">{data && data.short_description}</p>
											</div>
											<Image
												src={`${data && data.image.data.attributes.url}`}
												alt=""
												height={100}
												width={250}
												className="mt-6 mx-auto w-[197px] h-[180px]"
											/>
										</div>
									</FadeLeft>
								) : (
									<FadeRight key={i}>
										<div className={`px-2.5 md:px-8 py-10 rounded ${cardColor} shadow h-full`} key={data && data.card_title}>
											<div className=" text-center ">
												<h4 className=" font-bold text-xl md:text-[22px] text-[#010101]">{data && data.card_title}</h4>
												<p className="text-[#222] text-[16px] md:text-lg mt-2">{data && data.short_description}</p>
											</div>
											<Image
												src={`${data && data.image.data.attributes.url}`}
												alt=""
												height={100}
												width={250}
												className="mt-6 mx-auto w-[197px] h-[180px]"
											/>
										</div>
									</FadeRight>
								)
							)}
					</div>
					<DescriptiveCta
						ctaSlug={keyServeiceData && keyServeiceData.descriptive_cta_slug}
						cta={keyServeiceData && keyServeiceData.descriptive_cta}
					/>
				</div>
				{/* <HiArrowNarrowRight className="text-3xl font-bold group-hover:translate-x-1 mt-2" /> */}
			</div>
		</div>
	);
}

export default KeyServeice;
