import Image from "next/image";
import Link from "next/link";
import React from "react";
import FadeInUpContainer from "./framer-motion/FadeInUpContainer";

function FooterTopCta({ pageBreakBlue, breakWhite, footerTopCta, blogDetail, clientCall, breakGreen }) {
	try {
		return (
			<div>
				{/* <div
					className={`break_line image ${
						breakBackground ? "bg-[url('/section_break.svg')]" : "bg-[url('/section_break-red.svg')]"
					}  h-[80px] bg-[length:3200px_90px]   bg-center rotate-180 `}
				></div> */}
				{pageBreakBlue === true && (
					<div className="break_line image bg-[url('/footer_top_cta_top.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-10 mt-[-10px] bg-center"></div>
				)}
				{breakWhite === true && (
					<div className="break_line image bg-[url('/footer_top_cta_top_white.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-10 mt-[-10px] bg-center"></div>
				)}
				{breakGreen === true && (
					<div className="break_line image bg-[url('/footer_top_cta_top_green.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-10 mt-[-20px] bg-center "></div>
				)}
				{pageBreakBlue !== true && breakWhite !== true && breakGreen !== true && (
					<div className="break_line image bg-[url('/footer_top_cta_top_red.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-10 mt-[-10px] bg-center"></div>
					//
				)}
				<div className=" bg-[#FFF7F5]  bg-[url('/resources/quizzes/quiz-key-background.svg')] bg-center w-full z-20 ">
					<div className="g-page_structure  ">
						<FadeInUpContainer>
							<div className=" pt-24 md:pt-32 pb-24 md:pb-36">
								<h2 className="g__section-heading text-center font-bold  ">
									{blogDetail && "Get Escape Room Growth Strategies,"} {footerTopCta && footerTopCta.title_first_line}{" "}
									<br className="hidden xl:block" /> {footerTopCta && footerTopCta.title_second_line} {blogDetail && "An Offer You Can't Refuse."}
								</h2>
								<p className="g__section-description text-center">
									{footerTopCta && footerTopCta.description}
									{blogDetail && "We're the Escape Room Godfather, here to skyrocket your revenue and help you rule the market."}
								</p>
								{/* <Link
								href={"/freemarketing"}
								className="py-3 px-6 text-[14px] lg:text-lg 2xl:text-xl mb-16 mt-5 sm:mt-10  font-openSans font-[700] tracking-wider bg-[#FF492C] hover:bg-[#E74329] text-white rounded"
							>
								GET YOUR FREE MARKETING PLAN
							</Link> */}
								{clientCall !== true && (
									<div className="flex justify-center">
										{footerTopCta && (
											<Link
												href={`${footerTopCta && footerTopCta.cta_slug ? footerTopCta.cta_slug : "/free-marketing"}`}
												className="font-openSans tracking-wider text-center bg-[#FF492C] hover:bg-[#E74329] mt-8 md:mt-10  py-3 px-4 md:px-6 text-white lg:text-lg 2xl:text-xl rounded font-[700]"
											>
												<span className="g_cta-text">{footerTopCta ? footerTopCta.cta : "GET YOUR FREE MARKETING PLAN"}</span>
											</Link>
										)}
									</div>
								)}
							</div>
						</FadeInUpContainer>
					</div>
				</div>
				<div className="break_line image bg-[url('/footer_top_cta_bottom.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-10 mt-[-65px] rotate-180 bg-center"></div>
				{/* <div className="break_line image bg-[url('/section_break_red-footer.svg')] h-[80px] bg-[length:3200px_90px] mt-[260px] md:mt-[270px]   bg-center"></div> */}
			</div>
		);
	} catch (error) {
		return (
			<>
				<div className="h-[800px] w-full bg-[#fff7f5] ">
					<div className="flex justify-center pt-20">
						<Image src="/under_maintanence.svg" height={400} width={700} alt="this page is under maintanence" />
					</div>
					<h1 className="text-center text-[38px] pt-5 font-bold ">This Page Is Under Maintenance 🛠️</h1>
				</div>
				<div className="break_line image bg-[url('/footer_top_cta_bottom.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-10 mt-[-65px] rotate-180 bg-center"></div>
			</>
		);
	}
}

export default FooterTopCta;
