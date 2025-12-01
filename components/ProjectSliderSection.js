/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ProjectSlider from "./ProjectSlider";
import DescriptiveCta from "./DescriptiveCta";

function ProjectSliderSection({ allData, bodyColor, single, htmlAds }) {
	return (
		<div>
			<div className={`g-page_structure  ${bodyColor}`}>
				<div className="pt-14 md:pt-20 pb-14 md:pb-20">
					<h2 className="g__section-heading text-center mx-auto font-extrabold">
						{allData && allData.title_first_line} <br className="hidden lg:block" />
						{allData && allData.title_second_line}
					</h2>
					<p className="g__section-description text-center mx-auto">{allData && allData.description}</p>
					<div className="md:mx-5 section-img mt-10 md:mt-16 ">
						<ProjectSlider componentData={allData?.images?.data} single={single} htmlAds={htmlAds} />
					</div>

					<DescriptiveCta ctaSlug={allData && allData.descriptive_cta_slug} cta={allData && allData.descriptive_cta} />
				</div>
			</div>
		</div>
	);
}

export default ProjectSliderSection;
