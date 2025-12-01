import Image from "next/image";
import React from "react";

function ReportGraph({ bodyColor, reportGraph }) {
	return (
		<div>
			<div className={`g-page_structure ${bodyColor}`}>
				<div className="pt-9 md:pt-20">
					<h2 className="g__section-heading text-center mx-auto font-extrabold ">
						{reportGraph && reportGraph.title_first_line} <br className="hidden xl:block" /> {reportGraph && reportGraph.title_second_line}
					</h2>
					<p className="g__section-description text-center">{reportGraph && reportGraph.description}</p>
				</div>
				{reportGraph && (
					<div className="px-10 lg:px-2 flex justify-center pt-8 md:pt-16 pb-14 md:pb-24">
						<Image src="/components/graph.svg" alt="" width={314} height={320} className="" />
					</div>
				)}
			</div>
		</div>
	);
}

export default ReportGraph;
