/* eslint-disable react/no-unescaped-entities */
import React from "react";
import FadeInUpContainer from "../framer-motion/FadeInUpContainer";
import image from "@/public/location/stratigy.png";
import Image from "next/image";
import { BiSolidRightArrow } from "react-icons/bi";
import { RiArrowRightSFill } from "react-icons/ri";
import { BiSolidLeftArrow } from "react-icons/bi";
import StrategyCardLists from "./clientComponents/StrategyCardLists";
import FadeLeft from "../framer-motion/FadeLeft";
import FadeLeftRightContainer from "../framer-motion/FadeLeftRightContainer";

const StrategyCard = ({ item }) => {
	return (
		<div className="max-w-[1100px] mx-auto ">
			<div className="group md:flex ">
				<div style={{ background: `${item?.hex_color}` }} className=" md:rounded-l-lg text-white text-center flex-[1.3] pt-8 pb-6 px-7">
					<p className="text-[32px] font-[700]">{item?.title}</p>

					<p className="text-[16px] ">{item?.description}</p>

					<div className="max-w-[300px] mx-auto mt-10">
						<Image
							src={item?.image?.data?.attributes.url}
							width={600}
							height={450}
							quality={100}
							alt=""
							className="group-hover:scale-105 duration-300"
						/>
					</div>
				</div>
				<div style={{ background: `${item?.hex_color + "20"}` }} className="flex-[2] md:rounded-r-lg pl-2.5 sm:pl-10 pr-5 py-8">
					<p style={{ color: `${item?.hex_color}` }} className="text-lg font-bold pb-5">
						WHAT YOU'LL LEARN
					</p>
					<StrategyCardLists lists={item?.key_points} color={item?.hex_color} />
				</div>
			</div>
		</div>
	);
};

function CampaignStrategy({ bodyColor, campaignStrategy }) {
	return (
		<div className={` g-page_structure ${bodyColor}  relative `}>
			<div className="pt-16 md:pt-28 pb-24 md:pb-32">
				<FadeInUpContainer>
					<div className="main-content  m-auto">
						<h2 className="g__section-heading   text-center mx-auto font-extrabold ">
							{campaignStrategy?.data?.attributes.campain_strategy?.title_first_line}
							<br className="hidden xl:block" /> {campaignStrategy?.data?.attributes.campain_strategy?.title_second_line}
						</h2>
						<p className="g__section-description text-center">{campaignStrategy?.data?.attributes.campain_strategy?.description}</p>
					</div>
				</FadeInUpContainer>

				<div className="mt-14 space-y-12 overflow-hidden md:overflow-visible">
					{campaignStrategy?.data?.attributes.campain_strategy?.strategy_card.map((item, i) =>
						(i + 1) % 2 !== 0 ? (
							<FadeLeftRightContainer key={item?.id} left={true}>
								<StrategyCard item={item} />
							</FadeLeftRightContainer>
						) : (
							<FadeLeftRightContainer key={item?.id}>
								<StrategyCard item={item} />
							</FadeLeftRightContainer>
						)
					)}
				</div>
			</div>
		</div>
	);
}

export default CampaignStrategy;
