import FooterTopCta from "@/components/FooterTopCta";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import ErrorAnimation from "../public/others/404-Page.json";

function NotFound() {
	const [state, setState] = useState();

	useEffect(() => {
		const APIurl = `${process.env.NEXT_PUBLIC_API_URL}/api/not-found-error`;

		fetch(`${APIurl}?populate=*`)
			.then((res) => res.json())
			.then((data) => setState(data));
	}, []);
	return (
		<div className="">
			{/* <div className="break_line image bg-[url('/page_broke.png')] h-[75px] bg-[length:1600px_90px] bg-center -mt-10 bg-[var(--section-bg-lightblue)]"></div> */}
			<div className="g-page_structure  bg-[var(--section-bg-lightred)]">
				<div className="max-w-2xl mx-auto pt-20 md:pt-32 ">
					<Lottie loop={true} animationData={ErrorAnimation} className="" />
					{/* <Image src="/404 page esscape room marketer.gif" alt="" height={400} width={700} className="" /> */}
				</div>
				<div className="pt-16 pb-14 md:pb-16">
					<h1 className="hero_heading tracking-tighter text-center font-extrabold">
						{state && state.data.attributes.title_first_line}
						<br />
						{state && state.data.attributes.title_second_line}
					</h1>
					<div className="text-center text-xl mt-5">
						<p className="">{state && state.data.attributes.short_description}</p>
						<div className="flex justify-center items-center pt-4 lg:pt-8">
							<Link
								href={`${state && state.data.attributes.cta_slug ? state.data.attributes.cta_slug : "/free-marketing"}`}
								className="group   font-[700] text-[#FF492C] hover:text-[#E74329]"
							>
								{state && state.data.attributes.cta}
								<span className="material-symbols-outlined font-[700] leading-[0px] translate-y-2 pl-2 text-2xl group-hover:translate-x-1 group-hover:duration-200">
									arrow_right_alt
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
			<FooterTopCta footerTopCta={state && state.data.attributes.footer_top_cta} />
			{/* <div className="break_line image bg-[url('/footer_top_cta_bottom.svg')] h-[90px] w-full bg-[length:2500px_90px] absolute z-10 mt-[-80px]  bg-center"></div> */}
		</div>
	);
}

export default NotFound;
