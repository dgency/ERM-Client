import React from "react";
import LocationCard from "./LocationCard";

function Locations() {
	return (
		<div className="bg-[var(--section-bg-lightred)]">
			<div className="max-w-[1224px] mx-auto pt-[80px]">
				<div className="max-w-[793px] pb-[30px]">
					<p className="text-[20px] text-[#5E5D5D]">Escape rooms</p>
					<p className="text-[39px] text-[#010101] font-[800]">United States</p>
					<p className="text-[16px] text-[#5E5D5D] font-[400]">
						Discover the ultimate escape room experiences in the top cities across the United States! Each city offers unique themes and challenges
						that will test your problem-solving skills and teamwork.
					</p>
				</div>
				<div className="grid grid-cols-3 gap-5">
					{[...Array(9)].map((_, i) => (
						<LocationCard key={i} />
					))}
				</div>
				<div className="flex justify-center items-center mt-10 pb-20">
					<button className="text-[16px] text-[#FF492C] font-[700] px-5 py-1 border-[1px] border-[#FF492C] rounded-md">Load More</button>
				</div>
			</div>
		</div>
	);
}

export default Locations;
