import Image from "next/image";
import Link from "next/link";
import React from "react";
import DescriptiveCta from "../DescriptiveCta";
import FadeInUpContainer from "../framer-motion/FadeInUpContainer";

function ConversionMarketing({ bodyColor, cardColor, otherServices }) {
	return (
		<div className={`g-page_structure ${bodyColor} relative z-10 min-h-[70vh]`}>
			<FadeInUpContainer>
				<div className="m-auto pt-14 md:pt-20">
					<h2 className="g__section-heading text-center mx-auto font-extrabold ">
						{otherServices && otherServices.title_first_line} <br className="hidden xl:block" /> {otherServices && otherServices.title_second_line}
					</h2>
					<p className="g__section-description text-center ">{otherServices && otherServices.description}</p>
				</div>
			</FadeInUpContainer>
			<div className=" sm:max-w-xl md:max-w-3xl lg:max-w-none xl:w-[1000px] sm:mx-auto lg:mx-16 xl:mx-auto mt-10 md:mt-16  pb-14 md:pb-24">
				<div className="flex flex-col gap-6 md:gap-8">
					{otherServices &&
						otherServices.other_services_card.map((data) => {
							return (
								// hover:drop-shadow-[0_5px_15px_#c48904] hover:duration-200
								<FadeInUpContainer key={data.id}>
									<div
										
										className={`${cardColor} px-2.5 md:px-8 py-7 md:py-9 rounded-md shadow hover:shadow-none hover:drop-shadow-[0_4px_10px_#00000015] hover:duration-200 border-[1px] border-transparent hover:border-[#FF492C]`}
									>
										<div className=" text-center ">
											<h3 className=" font-[700] text-[#010101] pt-3 text-xl md:text-[26px]">
												<Link href={`${data.card_cta_slug}`}>{data.card_title}</Link>
											</h3>
											<p className="text-[#222] text-[16px] md:text-lg mt-3 md:mx-10 xl:mx-20">{data.card_description}</p>
										</div>
										<Image
											src={data.card_image.data.attributes.url}
											alt=""
											width={100}
											height={150}
											className="w-full h-[170px] md:h-[260px]  mt-7"
										/>
										<div className="marketing_plan  mx-auto text-center mt-12  font-[600] flex-[2]  ">
											<Link
												href={`${data.card_cta_slug}`}
												className="text-[18px] rounded border-2 border-[#ff492c] text-[#ff492c] hover:bg-[#ff492c] hover:text-white px-12 py-2 md:px-16 md:py-3"
											>
												{data.card_cta}
											</Link>
										</div>
									</div>
								</FadeInUpContainer>
							);
						})}
				</div>
				<DescriptiveCta ctaSlug={otherServices && otherServices.descriptive_cta_slug} cta={otherServices && otherServices.descriptive_cta} />
			</div>
		</div>
	);
}

export default ConversionMarketing;
