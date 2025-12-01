import React from "react";
import styles from "../../styles/contactus.module.css";

function ContactHero({ contactData }) {
	return (
		<div>
			<div className={` ${styles.contactus_main} g-page_structur bg-[#FFF7F5] `}>
				<div className="text-container  m-auto pt-20 md:pt-28 pb-20 md:pb-28">
					<h1 className="hero_heading tracking-tighter text-center font-bold relative z-30">
						{contactData && contactData.data.attributes.hero_title_first_line} <br className="hidden xl:block" />{" "}
						{contactData && contactData.data.attributes.hero_title_second_line}
					</h1>
					<p className="g__section-description text-center mt-[15px] px-4 md:px-0 max-w-[700px] mx-auto ">
						{contactData && contactData.data.attributes.description}
					</p>
				</div>
			</div>
			<div className="break_line image bg-[url('/footer_top_cta_top.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-10 mt-[-60px] rotate-180 bg-center"></div>
		</div>
	);
}

export default ContactHero;
