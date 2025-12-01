/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DescriptiveCta from "./DescriptiveCta";
import FadeInUpContainer from "./framer-motion/FadeInUpContainer";

function GoogleAnalytics({ analyticsData }) {
	return (
		<div className="g-page_structure bg-[#F3FFF8]">
			<div className=" pt-24 md:pt-32 pb-24 md:pb-36">
				<FadeInUpContainer>
					<div className="main-content  m-auto">
						<h2 className="g__section-heading text-center font-bold">
							{analyticsData && analyticsData?.title_first_line} <br className="hidden xl:block" />{" "}
							{analyticsData && analyticsData?.title_second_line}
						</h2>
						<p className="g__section-description text-center ">{analyticsData && analyticsData?.description}</p>
					</div>
					<div className="max-w-[748px] mx-auto pt-10 md:pt-16 ">
						{analyticsData && <Image src={`${analyticsData?.image?.data?.attributes.url}`} alt="" width={748} height={400} className="" />}
					</div>
				</FadeInUpContainer>
				<DescriptiveCta ctaSlug={analyticsData && analyticsData?.descriptive_cta_slug} cta={analyticsData && analyticsData?.descriptive_cta} />
			</div>
		</div>
	);
}

export default GoogleAnalytics;
