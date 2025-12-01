import React, { useEffect, useState } from "react";

function FreeMarketingBanner({ handleCloseBanner }) {
	let [bannerData, setBannerData] = useState();
	useEffect(() => {
		fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/free-marketing-plan`)
			.then((res) => res.json())
			.then((data) => setBannerData(data));
	}, []);

	return (
		<div>
			<div id="marketing-banner" className="flex justify-center  items-center gap-2 bg-[#219653] py-2 relative">
				<div className="h-[40px] flex items-center">
					{bannerData && (
						<p className="text-white font-[600] text-[14px] md:text-base text-center">
							🎉{bannerData && bannerData.data.attributes.free_marketing_banner} 🎉
						</p>
					)}
				</div>
				{bannerData && (
					<p
						onClick={handleCloseBanner}
						className="md:absolute md:right-2 flex justify-center items-center hover:bg-[#f6f6f62e] text-3xl w-[30px] h-[30px] text-white cursor-pointer  mr-2"
					>
						×
					</p>
				)}
			</div>
		</div>
	);
}

export default FreeMarketingBanner;
