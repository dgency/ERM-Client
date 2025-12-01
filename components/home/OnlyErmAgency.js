import React from "react";
import DescriptiveCta from "../DescriptiveCta";
import Image from "next/image";
import FadeInUpContainer from "../framer-motion/FadeInUpContainer";
import FadeLeft from "../framer-motion/FadeLeft";
import FadeRight from "../framer-motion/FadeRight";

function OnlyErmAgency({ onlyErmAgency }) {
	return (
		<div className="last-marketing g-page_structure bg-[var(--section-bg-lightred)]">
			<div className=" pt-10 md:pt-16 pb-10 md:pb-20">
				<FadeInUpContainer>
					<div className="main-content  m-auto">
						<h2 className="g__section-heading text-center font-bold">
							{onlyErmAgency?.data && onlyErmAgency.data?.attributes.only_erm_agency?.title_first_line} <br className="hidden xl:block" />{" "}
							{onlyErmAgency && onlyErmAgency.data?.attributes.only_erm_agency?.title_second_line}
						</h2>
						<p className="g__section-description text-center">{onlyErmAgency && onlyErmAgency.data?.attributes.only_erm_agency?.description}</p>
					</div>
				</FadeInUpContainer>
				<div className=" home_q-card max-w-md md:max-w-[1000px]  mx-auto mt-10 md:mt-16 grid gap-x-8 gap-y-6 md:gap-y-8 md:grid-cols-2 px-1.5 py-3 overflow-hidden xl:overflow-visible">
					{onlyErmAgency &&
						onlyErmAgency.data?.attributes.only_erm_agency?.only_erm_agency_card?.map((data, i) =>

							//Fade Left Right animation
							(i + 1) % 2 !== 0 ? (
								<FadeLeft key={data.id}>
									<div className="px-5 pt-6 pb-8 md:px-10 md:pt-10 rounded bg-white shadow" key={data.id}>
										<h4 className=" font-[700] text-xl md:text-[22px] text-center text-[#010101]">
											{data?.title_first_line}
											<br className="block" /> {data?.title_second_line}
										</h4>
										<Image
											height={200}
											width={470}
											src={data?.image.data.attributes.url}
											alt=""
											className="mt-6 mx-auto w-[350px] h-[200px] md:w-[470px] md:h-[300px]"
										/>
									</div>
								</FadeLeft>
							) : (
								<FadeRight key={data.id}>
									<div className="px-5 pt-6 pb-8 md:px-10 md:pt-10 rounded bg-white shadow" key={data.id}>
										<h4 className=" font-[700] text-xl md:text-[22px] text-center text-[#010101]">
											{data?.title_first_line}
											<br className="block" /> {data?.title_second_line}
										</h4>
										<Image
											height={200}
											width={470}
											src={data?.image.data.attributes.url}
											alt=""
											className="mt-6 mx-auto w-[350px] h-[200px] md:w-[470px] md:h-[300px]"
										/>
									</div>
								</FadeRight>
							)
						)}
				</div>
				<DescriptiveCta
					ctaSlug={onlyErmAgency && onlyErmAgency.data?.attributes.only_erm_agency?.descriptive_cta_slug}
					cta={onlyErmAgency && onlyErmAgency.data?.attributes.only_erm_agency?.descriptive_cta}
				/>
			</div>
		</div>
	);
}

export default OnlyErmAgency;
