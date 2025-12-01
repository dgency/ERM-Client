import Image from "next/image";
import React from "react";

function SeoHandle({ title, pera }) {
	return (
		<div>
			<div className={` g-page_structure bg-[#FAFAFA]`}>
				<div className="main-content  m-auto">
					<h2 className=" pt-10 md:pt-20 text-[20px] md:text-4xl 2xl:text-[39px]  text-center mx-auto font-extrabold lg:w-[60%] xl:w-[70%] 2xl:w-[60%]">
						{title}
					</h2>
					<p className="md:text-lg xl:text-xl 2xl:text-2xl text-center md:px-36 m-auto py-6">{pera}</p>
				</div>
				<div className="flex justify-center py-10 ">
					<Image src="/serveice/contentMarketingAgency/nerdy-part-desktop.svg" alt="" width={1200} height={100} className="" />
				</div>
			</div>
		</div>
	);
}

export default SeoHandle;
