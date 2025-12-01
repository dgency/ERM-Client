import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiArrowNarrowRight } from "react-icons/hi";
import Head from "next/head";
import { data } from "autoprefixer";
import DescriptiveCta from "../DescriptiveCta";

function FaqSection({ bodyColor, faqSectionData, allFaq }) {
	return (
		<div className={`g-page_structure ${bodyColor} min-h-[70vh]`}>
			<div className="pt-9 md:pt-16 pb-10 md:pb-20">
				{!allFaq && (
					<div className="m-auto ">
						<h2 className="g__section-heading text-center  mx-auto font-extrabold ">
							{faqSectionData && faqSectionData.title_first_line}
							<br className="hidden xl:block" /> {faqSectionData && faqSectionData.title_second_line}
						</h2>
						<p className="g__section-description text-center">{faqSectionData && faqSectionData.description}</p>

						{faqSectionData && (
							<div className="flex justify-center my-10 md:my-16">
								<Image src="/components/faq/faq_icon.svg" alt="" width={300} height={100} className="w-[170px] md:w-[250px] md:h-[250px]" />
							</div>
						)}
					</div>
				)}
				{allFaq && (
					<div>
						<p className="font-openSans max-w-[800px]  mx-auto font-[600] pb-[28px] md:pb-[42px] underline underline-offset-4 text-[#FF492C] text-[32px] ">
							FAQs About Escape Room Marketing
						</p>
					</div>
				)}

				<ul
					itemScope
					itemType="https://schema.org/FAQPage"
					className={`font-openSans max-w-[800px] mx-auto  ${allFaq ? "pb-[80px] md:pb-[130px]" : ""}  md:text-xl font-bold`}
				>
					{faqSectionData &&
						faqSectionData.question_and_answer.map((data, i) => {
							return (
								<li className="" key={data.id}>
									<div className=" border-b-[1px] py-5">
										<div itemScope itemProp="mainEntity" itemType="https://schema.org/Question" className=" relative">
											<Image src="/components/faq/lock_open.svg" alt="" width={20} height={50} className={`absolute left-0`} />
											<h3 itemProp="name" className=" font-[600] text-lg md:text-xl ml-10 text-[#222]">
												{data.question}
											</h3>

											<div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
												<p
													itemProp="text"
													className={`py-2.5 mt-0 text-[16px] md:text-[18px] font-normal  text-[#606060] `}
													dangerouslySetInnerHTML={{ __html: data.answer }}
												/>
											</div>
										</div>
									</div>
								</li>
							);
						})}
				</ul>

				{allFaq && (
					<div>
						<p className="font-openSans max-w-[800px] font-[600] mx-auto pb-[28px] md:pb-[42px] underline underline-offset-8 text-[#FF492C] text-[32px] ">
							FAQs About Escape Room Marketing Services
						</p>
					</div>
				)}

				{allFaq && (
					<ul className="font-openSans max-w-[800px] mx-auto md:text-xl font-bold">
						{faqSectionData &&
							faqSectionData.question_and_answer_another_section.map((data, i) => {
								return (
									<li className="" key={data.id}>
										<div className=" border-b-[1px] py-5">
											<div className="flex justify-between relative">
												{/* <Image
													src="/components/faq/lock_close.svg"
													alt=""
													width={20}
													height={50}
													className={`absolute left-0 ${i == 0 ? (firstFaqOpenSecond ? "hidden" : "") : secondFaqOpen === i ? "hidden" : ""}`}
												/> */}
												<Image src="/components/faq/lock_open.svg" alt="" width={20} height={50} className={`absolute left-0`} />
												<h3 className=" font-[600] text-lg md:text-xl ml-10 text-[#222]">{data.question}</h3>
												{/* <MdKeyboardArrowDown
													className={`arrow_rotate mt-2 text-2xl transition-transform duration-300 ${
														i == 0 ? (firstFaqOpenSecond ? "rotate-180" : " ") : secondFaqOpen === i ? "rotate-180" : ""
													}`}
												/> */}
											</div>
											<p
												className={` py-2.5 mt-0 text-[16px] md:text-[18px] font-normal  text-[#606060] `}
												dangerouslySetInnerHTML={{ __html: data.answer }}
											/>
										</div>
									</li>
								);
							})}
					</ul>
				)}
				{!allFaq && (
					<DescriptiveCta ctaSlug={faqSectionData && faqSectionData.descriptive_cta_slug} cta={faqSectionData && faqSectionData.descriptive_cta} />
				)}
			</div>
		</div>
	);
}

export default FaqSection;
