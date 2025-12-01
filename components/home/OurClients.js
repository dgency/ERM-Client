import React from "react";
import DescriptiveCta from "../DescriptiveCta";
import Image from "next/image";
import FadeInUpContainer from "../framer-motion/FadeInUpContainer";

function OurClients({ ourClients }) {
	return (
		<div className="g-page_structure bg-[var(--section-bg-lightblue)]">
			<div className="successfull-stories m-auto pt-14 md:pt-20 pb-10 md:pb-20">
				<FadeInUpContainer>
					<h2 className="g__section-heading  text-center font-bold">
						{ourClients && ourClients.data?.attributes.our_clients?.title_first_line} <br className="hidden xl:block" />{" "}
						{ourClients && ourClients.data?.attributes.our_clients?.title_second_line}
					</h2>
					<p className="g__section-description text-center">{ourClients && ourClients.data?.attributes.our_clients?.description}</p>
					<div className="max-w-[696px] mx-auto">
						<div className=" mt-10 md:mt-16  ">
							<div className="max-w-[694px] mx-auto grid grid-cols-3 border-[1px] border-[#f3f3f3]">
								{ourClients &&
									ourClients.data?.attributes.our_clients?.company_images?.data.map((data) => {
										return (
											<div className="h-full w-full flex justify-center border-[1px] border-[#f3f3f3] p-[18px]" key={data.id}>
												<Image src={data.attributes.url} alt="" height={85} width={224} className="object-cover md:hover:-rotate-12 duration-300"></Image>
											</div>
										);
									})}
							</div>
						</div>
					</div>
				</FadeInUpContainer>
				<DescriptiveCta
					ctaSlug={ourClients && ourClients.data?.attributes.our_clients?.descriptive_cta_slug}
					cta={ourClients && ourClients.data?.attributes.our_clients?.descriptive_cta}
				/>
			</div>
		</div>
	);
}

export default OurClients;
