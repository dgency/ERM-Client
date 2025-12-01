import Image from "next/image";
import React from "react";

function OurWork({ ourWorkData }) {
	return (
		<div className="bg-[#f9fcff]">
			<div className={`${ourWorkData ? "" : "h-[600px]"}`}>
				<div className="g-page_structure ">
					<div className="pt-14 md:pt-16">
						<h2 className="g__section-heading text-center mx-auto font-extrabold ">
							{ourWorkData && ourWorkData.title_first_line} <br className="hidden xl:block" /> {ourWorkData && ourWorkData.title_second_line}
						</h2>
						<p className="g__section-description text-center">{ourWorkData && ourWorkData.description}</p>
					</div>
				</div>
				<div className="max-w-[1250px] mx-auto  flex flex-col lg:flex-row gap-8 lg:gap-4 2xl:gap-6 pt-10 md:pt-16 pb-14 md:pb-24 px-[10px] ">
					{ourWorkData &&
						ourWorkData.card_content.map((data) => {
							return (
								<div
									className="flex-1 max-w-[500px] lg:w-[inherit] mx-auto lg:mx-0 drop-shadow-md px-2.5 md:px-4 lg:px-3 xl:px-6 pt-14 lg:pt-14 xl:pt-20 pb-8 rounded-md bg-[#fff7f5]"
									key={data.card_heading}
								>
									<div className="">
										<Image
											src={`${data.card_image && data.card_image.data.attributes.url}`}
											alt=""
											width={400}
											height={300}
											className="mx-auto h-[150px] object-contain"
										/>
									</div>
									<h3 className=" text-xl md:text-2xl font-bold text-[#010101] text-center pt-8 xl:pt-14">{data.card_heading}</h3>
									<p className="text-[#222] text-[16px] md:text-lg  text-center pt-4">{data.card_description}</p>
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}

export default OurWork;
