"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

function CaseStudyCard({ item, casePage, index, sortedData }) {
	let isImage = casePage ? item?.attributes?.card_image?.data !== null : false;

	const handleSlug = (slug) => {
		location.href = `/case-studies/${slug}?i=${index}&t=${sortedData.meta.pagination.total}`;
	};

	// useEffect(() => {
		
	// 		const btn6 = document.querySelectorAll(".btn-caseStudy");
	// 		console.log(btn6);
			

	// 		btn6.forEach(function (btn) {
	// 			btn.addEventListener("mouseenter", function (e) {
	// 				const parentOffset = btn.getBoundingClientRect();
	// 				const relX = e.pageX - parentOffset.left;
	// 				const relY = e.pageY - parentOffset.top;

	// 				const span = btn.querySelector("span");
	// 				span.style.top = `0px`;
	// 				span.style.left = `0px`;

	// 				console.log(span.style.top);
					
	// 			});

	// 			btn.addEventListener("mouseout", function (e) {
	// 				const parentOffset = btn.getBoundingClientRect();
	// 				const relX = e.pageX - parentOffset.left;
	// 				const relY = e.pageY - parentOffset.top;

	// 				const span = btn.querySelector("span");
	// 				span.style.top = `${relY}px`;
	// 				span.style.left = `${relX}px`;
	// 			});
	// 		});
		
	// }, []);

	return (
		<div className={`${isImage ? " md:col-span-2" : ""} h-full`}>
			<div
				className={`${
					isImage ? "text-center md:text-start" : "case_study-card pt-24 sm:pt-28 bg-[#D9D9D9] text-center"
				}  shadow-[0px_-0.5px_5px_1px_rgba(0,0,0,0.1)] h-full`}
			>
				<div
					className={`${
						isImage
							? "flex flex-col-reverse md:flex-row ite md:justify-between items-center gap-10 px-[16px] md:px-[40px] py-[40px] md:py-[60px] bg-[var(--section-bg-lightblue)]"
							: "px-2.5 sm:px-8 pt-[30px] sm:pt-[40px] pb-[100px] sm:pb-[120px] bg-[#FFFAF1]"
					} relative h-full`}
				>
					<div className="">
						{/* <Image src={item.attributes.hero_logo.data.attributes.url} alt="" height={100} width={120} className="mx-auto pb-12" /> */}
						<button className=" text-[14px] bg-[#FF492C] text-white cursor-text  mb-2.5 py-[4px] px-5 font-[700] ">
							{item.attributes.case_category}
						</button>
						<p className="text-[20px] md:text-[20px] 2xl:text-[28px] leading-[1.2] text-black max-w-sm 2xl:max-w-lg mx-auto font-[700] ">
							{item.attributes.title}
						</p>
						{/* <Link href={`/case-studies/${item.attributes.slug}`}> */}
						<div className={`${isImage ? "" : "flex justify-center"}`}>
							<button
								onClick={() => handleSlug(item.attributes.slug)}
								className={`btn-caseStud ${
									isImage ? " mt-5" : "absolute bottom-7 sm:bottom-10 "
								} text-[16px] sm:text-lg bg-white text-[#FF492C] border-2 border-[#FF492C] px-8 py-2 rounded-full font-[600] `}
							>
								{item.attributes.card_cta}<span></span>
							</button>
						</div>
						{/* </Link> */}
						{!isImage && (
							<div className="">
								<Image src={"/team/case-studies-box-break.svg"} height={100} width={400} alt="" className="w-full absolute top-[-20px] left-0  " />
							</div>
						)}
					</div>
					{isImage && (
						<div>
							<Image
								src={item?.attributes.card_image?.data?.attributes.url}
								height={200}
								width={300}
								alt=""
								className="h-[170px] lg:h-[250px] w-auto"
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default CaseStudyCard;
