import Image from "next/image";
import Link from "next/link";
import React from "react";

function MarketingPlanCta({ bodyColor, marketingData }) {
	return (
		<div>
			<div className={`g-page_structure ${bodyColor} `}>
				<div className="mx-auto max-w-[1200px] md:flex md:flex-row items-center gap-6 pb-14 md:pb-24 pt-14 md:pt-20">
					<div className="main-content  m-auto flex-1 ">
						<h2 className="marketing-plan-cta_heading font-openSans text-center md:text-left  md:pt-0 lg:w-[600px] xl:w-[700px]   font-bold">
							{marketingData && marketingData.title}
						</h2>
						<div className="flex justify-center md:block mt-5 md:mt-10">
							{marketingData && (
								<Link
									href={marketingData && marketingData.cta_slug ? marketingData.cta_slug : "/free-marketing"}
									className="font-openSans tracking-wider text-center bg-[#FF492C] hover:bg-[#E74329] py-3 px-4 md:px-6 text-white lg:text-lg 2xl:text-xl rounded font-[700]"
								>
									<span className="g_cta-text">{marketingData ? marketingData.cta : "GET YOUR FREE MARKETING PLAN"}</span>
								</Link>
							)}
						</div>
					</div>
					{marketingData && (
						<div className="flex justify-center md:justify-end mt-10 md:mt-0 flex-1">
							<Image
								src="/marketing-plan-escape-room-marketer.svg"
								alt="escape-room-marketer-marketing plan"
								width={300}
								height={300}
								className="md:w-[350px] lg:w-[381px] md:h-[350px]"
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default MarketingPlanCta;
