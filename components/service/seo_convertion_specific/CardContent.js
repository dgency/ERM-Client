import Image from "next/image";
import React, { useEffect, useState } from "react";

function CardContent({ cardContentData, bodyColor, slug, isEmail, cardColor }) {
	const [contentCard, setContentCard] = useState();

	useEffect(() => {
		let URL = "https://escaperoommarketer.com";
		fetch(`${URL}/api/cardcontent?slug=${slug}`)
			.then((res) => res.json())
			.then((data) => setContentCard(data));
	}, []);
	return (
		<div>
			<div className={`g-page_structure  ${bodyColor}`}>
				<h2 className="g__section-heading pt-14 md:pt-20  text-center mx-auto font-extrabold">
					{cardContentData && cardContentData.title_first_line}
					<br className="hidden xl:block" /> {cardContentData && cardContentData.title_second_line}
				</h2>
				<p className="g__section-description text-center">{cardContentData && cardContentData.description}</p>

				<div className=" md:max-w-[950px] mx-auto md:grid  md:grid-cols-3 md:gap-x-8 gap-y-7 md:gap-y-8  pt-10 md:pt-16 pb-14 md:pb-24">
					{contentCard &&
						contentCard.cards.map((data) => {
							return (
								<div
									className={`card max-w-md md:max-w-none mx-auto md:mx-0 px-[10px]  py-10  shadow rounded  mb-8 md:mb-0 ${cardColor} `}
									key={data.id}
								>
									<h4 className=" text-center text-lg  lg:text-[22px] md:h-[55px] text-[#010101] font-bold mb-8">{data.title}</h4>
									{isEmail == null && (
										<Image src={`/serveice/${data.image}`} alt="" height={100} width={250} className="mx-auto w-[190px]  h-[180px] object-contain" />
									)}
									{isEmail && <Image src={`/serveice/${data.image}`} alt="" height={100} width={250} className="mx-auto  h-[110px]" />}
								</div>
							);
						})}
				</div>
			</div>
		</div>
	);
}

export default CardContent;
