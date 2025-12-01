import Link from "next/link";
import React from "react";

function DescriptiveCta({ ctaSlug, cta }) {
	return (
		<div>
			<div className="flex justify-center mt-14 max-w-[850px] mx-auto">
				<Link
					href={`${ctaSlug ? ctaSlug : "/"}`}
					className="  gap-4 text-[16px] md:text-[18px] list-none group font-[700] text-center text-[#FF492C] hover:text-[#E74329]"
				>
					{cta}
					{cta && (
						<span className="material-symbols-outlined descriptive-cta translate-y-[6px] group-hover:translate-x-1 group-hover:duration-200">
							arrow_right_alt
						</span>
					)}
				</Link>
			</div>
		</div>
	);
}

export default DescriptiveCta;
