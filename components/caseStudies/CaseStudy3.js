import React from "react";
import Casehero from "./Casehero";

function CaseStudy3() {
	return (
		<div>
			<Casehero />
			<div className="g-page_structure bg-[var(--section-bg-lightblue)] ">
				<div className="flex pt-[10rem] pb-8 gap-8">
					<div className="flex flex-col gap-10 relative">
						<div className="">
							<h3 className="font-circular text-3xl text-red-500">Overview</h3>
							<p className="font-graphik mt-4">
								TRUE BIJOUX opened in 2006 as the sister store to Ottawa’s favorite independent high-end jeweller – Howard Fine Jewellers. Owned and
								operated by The Jewellery Sisters, Lindsay and Stephanie Appotive.
								<br /> <br /> They’re committed to seeking out and offering their customers engagement rings, wedding rings, fine jewelry and fashion
								jewelry from Canada, the US, and around the globe. They offer various price points and styles, including vintage estate and pre-owned
								jewelry. There is indeed something for everyone here – Their curated cache of beauty, fashion, contemporary and vintage jewelry is the
								ultimate jewellery box for particular women and men. Our Dgency team needed to adapt our digital marketing efforts to accommodate
								their historical branding and buyer persona to our advantage. As a jewellery E-commerce enterprise that heavily relies on their
								digital advertising efforts, TRUE BIJOUX did not have a lot of margin for error.
							</p>
						</div>
						<div>
							<h3 className="font-circular text-3xl text-red-500">Squeezing Your Market Size</h3>
							<p className="font-graphik mt-4">
								The shift to focus only on premium jewelry product lines took our niche jewelry product and shrunk the market size. Our advertised
								products were no longer going to appeal to users that were making their decision on price alone.
								<br /> <br /> The ultimate question, therefore, was to deeply understand the buyer journey and buyer persona. Our team needed to
								discover why people choose to buy TRUE BIJOUX’s custom-designed jewelry over other jewelers, and how we can leverage this information
								to expand our customer base and build brand loyalty.
							</p>
						</div>
						<div>
							<h3 className="font-circular text-3xl text-red-500">Results</h3>
							<p className="font-graphik mt-4">
								The first step was in-depth historical Google Ads data, Analytics data and buyer journey, buyer persona analysis, followed by a
								complete account restructure.
								<br /> <br /> Search terms that didn’t convert in the past were no longer relevant to our targeting. It was also critical that
								campaign-level and ad group level negative keywords were strategically placed throughout the Google Ads account. This ensured that
								users are flowing through campaigns with the appropriate bids and relevant Google Search and Shopping ads.
							</p>
						</div>
					</div>
					<div className="bg-[#F2F4EF] px-4 py-6  h-full sticky top-0 rounded-xl">
						<div className="">
							<h5 className="text-[15px] font-circular">ABOUT THE CLIENT</h5>
							<p className="font-graphik text-[14px] ">
								TRUE BIJOUX Jewellery owned and operated by The Jewellery Sisters, Lindsay and Stephanie Appotive. They’re committed to seeking out
								and offering their customers engagement rings, wedding rings, fine jewelry and fashion jewelry from Canada, the US, and around the
								globe. They offer various price points and styles, including vintage estate and pre-owned jewelry.
							</p>
						</div>
						<div className="">
							<h5 className="text-[15px] font-circular mt-2">HEADQUARTERS</h5>
							<p className="font-graphik text-[14px]">
								206 Sparks Street,
								<br /> Ottawa ON K2P 5C1,
								<br /> Canada
							</p>
						</div>
						<div className="">
							<h5 className="text-[15px] font-circular mt-2">INDUSTRY</h5>
							<p className="font-graphik text-[14px]">Jewelry Ecommerce</p>
						</div>
						<div className="">
							<h5 className="text-[15px] font-circular mt-2">SERVICES RENDERED</h5>
							<ul className="font-graphik text-[14px] list-disc list-inside ">
								<li>Buyer Persona Analysis</li>
								<li>Google Search Ads</li>
								<li>Google Shopping Ads</li>
								<li>Programmatic Display Ads</li>
								<li>Dynamic Remarketing Ads</li>
								<li>User Testing</li>
								<li>Conversion Rate Optimization</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="break_line image bg-[url('/test_break.svg')] h-[90px] w-full bg-[length:2500px_90px] absolute z-10   bg-center rotate-180 "></div>
		</div>
	);
}

export default CaseStudy3;
