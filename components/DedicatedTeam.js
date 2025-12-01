import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import DescriptiveCta from "./DescriptiveCta";

function DedicatedTeam({ bodyColor, dedicatedTeam }) {
	return (
		<div>
			<div className={`dedicated_marketing_team g-page_structure bg-[#FAFAFA] ${bodyColor} `}>
				<div className="pt-12 md:pt-20 pb-12 md:pb-20">
					
					<div className="main-content  m-auto">
						<h2 className="g__section-heading  text-center font-extrabold">
							{dedicatedTeam && dedicatedTeam.title_first_line} <br className="hidden xl:block" /> {dedicatedTeam && dedicatedTeam.title_second_line}
						</h2>
						<p className="g__section-description text-center ">{dedicatedTeam && dedicatedTeam.description}</p>
					</div>
					{dedicatedTeam && (
						<div className="flex justify-center pt-10 md:pt-16">
							<Image
								src={dedicatedTeam && dedicatedTeam.team_image.data.attributes.url}
								alt=""
								width={800}
								height={300}
								className=" md:h-[450px] object-contain"
							/>
						</div>
					)}
					<DescriptiveCta ctaSlug={dedicatedTeam && dedicatedTeam.descriptive_cta_slug} cta={dedicatedTeam && dedicatedTeam.descriptive_cta} />
				</div>
			</div>
		</div>
	);
}

export default DedicatedTeam;
