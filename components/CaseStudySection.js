import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import CaseStudyCard from "./CaseStudyCard";
import DescriptiveCta from "./DescriptiveCta";
import { InfinitySpin } from "react-loader-spinner";
import FadeInUpContainer from "./framer-motion/FadeInUpContainer";
import FadeLeft from "./framer-motion/FadeLeft";
import FadeRight from "./framer-motion/FadeRight";

function CaseStudySection({ bodyColor, caseStudyData, caseStudyCard, setCaseStudyCard, itemTOShow }) {
	// const [caseStudyCard, setCaseStudyCard] = useState();
	// const [sortedData, setSortedData] = useState();
	const [isLoading, setIsLoading] = useState(false);
	const [page, setPage] = useState(1);

	// useEffect(() => {
	// 	if (caseStudyCard) {
	// 		let finalData = caseStudyCard?.data.reduce(function (accumulator, currentValue) {
	// 			if (typeof currentValue.id === "number") {
	// 				// Insert currentValue into the correct position in the accumulator array
	// 				const index = accumulator.findIndex((item) => item.id >= currentValue.id);
	// 				if (index === -1) {
	// 					accumulator.push(currentValue);
	// 				} else {
	// 					accumulator.splice(index, 0, currentValue);
	// 				}
	// 			}
	// 			return accumulator;
	// 		}, []);
	// 		setSortedData(finalData);
	// 	}
	// }, [caseStudyCard]);

	// console.log(caseStudyData);

	const handleLoadMore = async () => {
		const nextPage = page + 1;
		setIsLoading(true);
		if (nextPage <= caseStudyCard?.meta.pagination.pageCount) {
			const res = await fetch(
				`${process.env.NEXT_PUBLIC_API_URL}/api/case-studies?pagination[page]=${nextPage}&pagination[pageSize]=15&sort[0]=id:asc&populate=*`
			);
			const data = await res.json();

			if (data?.data.length) setIsLoading(false);
			setCaseStudyCard((prevItems) => ({ ...prevItems, data: [...prevItems.data, ...data.data] }));
			setPage(nextPage);
		}
	};

	return (
		<div>
			<div id="case" className={`g-page_structure ${bodyColor ? bodyColor : "bg-[var(--section-bg-lightblue)]"} `}>
				<div className="pt-10 md:pt-20 pb-8 md:pb-14">
					<FadeInUpContainer>
						<div className=" ">
							<h2 className="g__section-heading   text-center mx-auto font-extrabold">
								{caseStudyData && caseStudyData.title_first_line} <br className="hidden xl:block" />{" "}
								{caseStudyData && caseStudyData.title_second_line}
							</h2>
							<p className="g__section-description text-center mx-auto">{caseStudyData && caseStudyData.description}</p>
						</div>
					</FadeInUpContainer>
					{itemTOShow ? (
						<div className="max-w-md md:max-w-3xl lg:max-w-5xl mx-auto pt-10 md:pt-16 grid  md:grid-cols-2 gap-10 sm:gap-8">
							{caseStudyCard &&
								caseStudyCard?.data?.map((d, i) => {
									return <CaseStudyCard key={d.id} item={d} index={i} casePage={true} sortedData={caseStudyCard} />;
								})}
						</div>
					) : (
						<div className="max-w-md md:max-w-3xl lg:max-w-5xl mx-auto pt-10 md:pt-16 grid md:grid-cols-2 gap-8 lg:gap-12 py-3 px-1 overflow-hidden xl:overflow-visible">
							{caseStudyData &&
								caseStudyData.case_studies?.data.slice(0, 4).map((d, i) =>
									(i + 1) % 2 !== 0 ? (
										<FadeLeft key={d.id}>
											<CaseStudyCard
												item={d}
												index={Math.floor(Math.random() * caseStudyCard?.meta.pagination.total + 1)}
												sortedData={caseStudyCard}
											/>
										</FadeLeft>
									) : (
										<FadeRight key={d.id}>
											<CaseStudyCard
												item={d}
												index={Math.floor(Math.random() * caseStudyCard?.meta.pagination.total + 1)}
												sortedData={caseStudyCard}
											/>
										</FadeRight>
									)
								)}
						</div>
					)}

					{/* <Link href={"/"} className="group  text-lg md:text-2xl list-none text-red-500">
					<p className="font-medium pb-8 text-center leading-[0px] px-4">See All Case Stusies</p>
					
				</Link> */}
					{!itemTOShow ? (
						<DescriptiveCta ctaSlug={caseStudyData && caseStudyData.descriptive_cta_slug} cta={caseStudyData && caseStudyData.descriptive_cta} />
					) : (
						caseStudyCard.data.length < caseStudyCard?.meta?.pagination.total && (
							<div className="flex justify-center pt-10 text-[#FF492C] h-[100px]">
								{isLoading ? (
									<div className="flex justify-center  ">
										<InfinitySpin width="200" color="#FF492C" />
									</div>
								) : (
									<div
										className="flex justify-center items-center gap-[2px] font-[600] rounded-md cursor-pointer border-[#FF492C] border-[1px] px-8 py-3"
										onClick={handleLoadMore}
									>
										Load more <MdKeyboardArrowDown className={`arrow_rotate text-2xl`} />
									</div>
								)}
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
}

export default CaseStudySection;
