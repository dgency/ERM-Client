import React from "react";
import styles from "@/styles/blogdetails.module.css";
import Image from "next/image";

function CeoStalk({ allData, bodyColor }) {
	return (
		<div>
			<div className={`g-page_structure  ${bodyColor}`}>
				<div className="pt-14 md:pt-20 pb-14 md:pb-20 max-w-[780px] mx-auto">
					<h2 className="g__section-heading text-center mx-auto font-extrabold">
						{allData && allData.title_first_line} <br className="hidden lg:block" />
						{allData && allData.title_second_line}
					</h2>
					<div className={styles.blog_details}>
						<div className="mt-6 md:mt-12 text-[18px]" dangerouslySetInnerHTML={{ __html: allData?.message }} />
					</div>
					<div className=" flex flex-col md:flex-row items-center gap-5 mt-10">
						<Image src="/others/h_m-hamiduzjaman_escaperoom-marketer_founder.png" height={100} width={140} alt="" className="" />
						<div className="flex flex-col items-center md:items-start text-center md:text-left">
							<Image src="/others/Hamid Signature.svg" height={100} width={100} alt="" className="object-cover mb-2  " />
							<h5 className="text-xl font-bold">Hamid Shawon</h5>
							<p className=" text-lg text-[#808080]">Captain, Escape Room Marketer</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CeoStalk;
