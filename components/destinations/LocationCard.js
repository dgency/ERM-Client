import Image from "next/image";
import React from "react";

function LocationCard() {
	return (
		<div className="max-w-[392px] rounded-lg bg-white border-[1px] border-[#e9e9e973] ">
			<Image src={"/destinations/miami.png"} height={300} width={392} alt="miami" />
			<div className="px-[15px] pt-5 pb-4">
				<p className="text-[24px] text-[#010101] font-[700]">Miami</p>
				<p className="text-[14px] text-[#5E5E5E] font-[400]">103 Companies|335 games</p>
			</div>
		</div>
	);
}

export default LocationCard;
