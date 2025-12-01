import Image from "next/image";
import React from "react";

function ListOfServeice({ listOfServeiceData, bodyColor, mobileImage }) {
	return (
		<div>
			<div className={`giant_list g-page_structure ${bodyColor} min-h-[70vh]`}>
				{/* <h1 className=" pt-10 md:pt-20 md:px-10 text-center text-xl md:text-3xl xl:text-5xl font-bold"> */}
				<div className="pt-9 md:pt-16">
					<h2 className="g__section-heading    text-center mx-auto font-extrabold ">
						{listOfServeiceData && listOfServeiceData.title_first_line}
						<br className="hidden xl:block" /> {listOfServeiceData && listOfServeiceData.title_second_line}
					</h2>
					<p className="g__section-description text-center">{listOfServeiceData && listOfServeiceData.description}</p>
				</div>
				<div className="font-openSans items-cente pt-6 md:pt-16 pb-10 md:pb-20 ">
					<div className="block sm:flex sm:justify-center sm:gap-8 lg:gap-0 lg:justify-between">
						{listOfServeiceData && (
							<Image
								src={`/serveice/googleAdsAgency/google-ads-agency-list-left-escape-room-marketer.svg`}
								alt=""
								height={100}
								width={150}
								className="hidden lg:block w-[130px] h-full self-center"
							/>
						)}

						<ul className="font-[500] list-inside md:list-outside list-disc marker:text-[#FF492C] marker:text-xl text-base md:text-[14px] lg:text-lg leading-loose ">
							{listOfServeiceData &&
								listOfServeiceData.list_left.map((data) => {
									return (
										<li
											className="leading-[2.4] text-[16px]  group relative hover:text-[#FF492C] cursor-pointer hover:underline underline-offset-8 decoration-2 "
											key={data.id}
										>
											{data.list_title}
											<div className="hidden group-hover:block drop-shadow text-[#404040] text-[14px] md:text-[13px] absolute bottom-12 bg-[#F9FCFF] leading-[1.5] p-4 md:w-[200%] lg:w-[230%] z-10 rounded-md before:content-[''] before:absolute before:left-[15%] before:top-[100%]  before:border-[15px] before:border-solid before:border-[#F9FCFF] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
												<p>{data.tooltip_description}</p>
											</div>
										</li>
									);
								})}
						</ul>
						<ul className="font-[500] list-inside md:list-outside list-disc marker:text-[#FF492C] marker:text-xl text-base md:text-[14px] lg:text-lg leading-loose">
							{listOfServeiceData &&
								listOfServeiceData.list_right.map((data) => {
									return (
										<li
											className="cursor-pointer text-[16px] leading-[2.4] group relative hover:text-[#FF492C]  hover:underline underline-offset-8 decoration-2"
											key={data.id}
										>
											{data.list_title}
											{
												<div className="hidden group-hover:block drop-shadow text-[#404040] text-[14px] md:text-[13px] absolute bottom-12  right-0 bg-[#F9FCFF] leading-[1.5] p-4 md:w-[200%] lg:w-[240%]  rounded-md before:content-[''] before:absolute before:right-[80%]   md:before:right-[20%] before:top-[100%]  before:border-[15px] before:border-solid before:border-[#F9FCFF] before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000]">
													<p>{data.tooltip_description}</p>
												</div>
											}
										</li>
									);
								})}
						</ul>

						{listOfServeiceData && (
							<Image
								src={`/serveice/googleAdsAgency/google-ads-agency-list-right-escape-room-marketer.svg`}
								alt=""
								height={100}
								width={150}
								className="hidden lg:block w-[130px] h-full self-center "
							/>
						)}
					</div>
					<Image src={`/serveice/${mobileImage}`} alt="" width={400} height={300} className="mt-6 mx-auto block lg:hidden" />
				</div>
			</div>
		</div>
	);
}

export default ListOfServeice;
