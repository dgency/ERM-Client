import GlobeMapSection from "@/components/GlobeMapSection";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import LocationHero from "@/components/location/LocationHero";
import OurClients from "@/components/home/OurClients";
import ConversionMarketing from "@/components/service/ConversionMarketing";
import Payperclick from "@/components/service/Payperclick";
import React, { useEffect, useState } from "react";
import OnlyErmAgency from "@/components/home/OnlyErmAgency";
import DedicatedTeam from "@/components/DedicatedTeam";
import WiningStrategy from "@/components/home/WiningStrategy";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FooterTopCta from "@/components/FooterTopCta";
import NotFound from "../404";
import CampaignStrategy from "@/components/location/CampaignStrategy";
import CaseStudySection from "@/components/CaseStudySection";

function Location({ slug, heroData, worldMapData, payperclickData, analyticsData }) {
	const [otherServicesData, setOtherServicesData] = useState();
	const [ourClients, setOurClients] = useState();
	const [onlyErmAgency, setOnlyErmAgency] = useState();
	const [campaignStrategy, setCampaignStrategy] = useState();
	const [caseStudySectionData, setCaseStudySectionData] = useState();
	const [caseStudyCard, setCaseStudyCard] = useState();
	const [winingStrategy, setWiningStrategy] = useState();
	const [testimonialCarousel, setTestimonialCarousel] = useState();
	const [footerTopCta, setFooterTopCta] = useState();

	useEffect(() => {
		const APIurl = `${process.env.NEXT_PUBLIC_API_URL}/api/locations/${slug}`;
		const url = `${process.env.NEXT_PUBLIC_API_URL}`;

		// fetch data for OtherServices section
		fetch(`${APIurl}?populate[0]=other_services.other_services_card.card_image`)
			.then((res) => res.json())
			.then((data) => setOtherServicesData(data));

		//fetch data for ourClients
		fetch(`${APIurl}?populate[0]=our_clients.company_images`)
			.then((res) => res.json())
			.then((data) => setOurClients(data));

		//fetch data for ourClients
		fetch(`${APIurl}?populate[0]=only_erm_agency.only_erm_agency_card.image`)
			.then((res) => res.json())
			.then((data) => setOnlyErmAgency(data));

		//fetch data for ourClients
		fetch(`${APIurl}?populate[0]=casestudy_section.case_studies`)
			.then((res) => res.json())
			.then((data) => setCaseStudySectionData(data));

			fetch(`${url}/api/case-studies?fields=id`)
			.then((res) => res.json())
			.then((data) => setCaseStudyCard(data));

		//fetch data for ourClients
		fetch(`${APIurl}?populate[0]=wining_strategy.strategy_image_1&populate[1]=wining_strategy.strategy_image_2`)
			.then((res) => res.json())
			.then((data) => setWiningStrategy(data));

		//fetch data for ourClients
		fetch(`${APIurl}?populate[0]=testimonial_carousel.testimonial_data.persons_image&populate[1]=testimonial_carousel.testimonial_data.company_logo`)
			.then((res) => res.json())
			.then((data) => setTestimonialCarousel(data));

		//fetch data for ourClients
		fetch(`${APIurl}?populate[0]=footer_top_cta`)
			.then((res) => res.json())
			.then((data) => setFooterTopCta(data));

		//fetch data for ourClients
		fetch(`${APIurl}?populate[0]=campain_strategy.strategy_card.image`)
			.then((res) => res.json())
			.then((data) => setCampaignStrategy(data));
	}, [slug]);

	try {
		return (
			<div>
				<LocationHero heroData={heroData && heroData?.data?.attributes.hero} />
				<GlobeMapSection worldMapData={worldMapData && worldMapData.data?.attributes.world_map} location={true} />
				<div className="break_line image bg-[url('/home_hero_down2.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-40 -mt-[65px]  bg-center rotate-180 "></div>
				<Payperclick
					bodyColor="bg-[var(--section-bg-lightblue)]"
					payperclickData={payperclickData && payperclickData.data.attributes.cro_opportunities}
				/>
				<div className="break_line image bg-[url('/footer_top_cta_top_red.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-10 mt-[-60px] md:mt-[-70px] bg-center rotate-180"></div>
				<ConversionMarketing
					bodyColor="bg-[var(--section-bg-lightred)]"
					cardColor="bg-white"
					otherServices={otherServicesData && otherServicesData.data.attributes.other_services}
				/>
				<div className="break_line image bg-[url('/footer_top_cta_top_red.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-10 mt-[-10px] bg-center"></div>
				<TestimonialCarousel
					bodyColor="bg-[var(--section-bg-lightblue)]"
					testimonialData={testimonialCarousel && testimonialCarousel.data.attributes.testimonial_carousel}
				/>
				<div className="break_line image bg-[url('/home_hero_down2.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-40 mt-[-35px]  bg-center  "></div>
				<CampaignStrategy bodyColor="bg-[#F3FFF8]" campaignStrategy={campaignStrategy} />
				<div className="break_line image bg-[url('/footer_top_cta_top_red.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-10 mt-[-65px] bg-center rotate-180"></div>
				<CaseStudySection
					caseStudyData={caseStudySectionData && caseStudySectionData.data.attributes.casestudy_section}
					caseStudyCard={caseStudyCard}
					bodyColor="bg-[var(--section-bg-lightred)]"
				/>
				<div className="break_line image bg-[url('/footer_top_cta_top_red.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-10 mt-[-20px] bg-center "></div>
				<GoogleAnalytics analyticsData={analyticsData && analyticsData.data?.attributes.google_analytics} />
				<div className="break_line image bg-[url('/home_hero_down2.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-40 -mt-[65px]  bg-center rotate-180 "></div>
				<OurClients ourClients={ourClients} />
				<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center"></div>
				<OnlyErmAgency onlyErmAgency={onlyErmAgency} />
				<div className="break_line image bg-[url('/footer_top_cta_top_red.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-10 mt-[-10px] bg-center"></div>
				<WiningStrategy winingStrategy={winingStrategy} bodyColor="bg-[#F3FFF8]" />

				<FooterTopCta footerTopCta={footerTopCta && footerTopCta.data.attributes.footer_top_cta} breakGreen={true} />
			</div>
		);
	} catch (error) {
		return <NotFound />;
	}
}

export async function getStaticPaths() {
	const allLocation = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/locations`);
	const allLocationData = await allLocation.json();

	const paths = allLocationData.data.map((location) => ({
		params: { location: location.attributes.slug },
	}));

	return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
	try {
		const slug = params.location;
		const hero = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}/api/locations/${slug}?populate[0]=hero.background_image&populate[1]=hero.left_image&populate[2]=hero.right_image&populate[3]=hero.mobile_background_image`
		);
		const heroData = await hero.json();

		const worldMap = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/locations/${slug}?populate[0]=world_map.image`);
		const worldMapData = await worldMap.json();

		const payperClick = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/locations/${slug}?populate[0]=cro_opportunities.cro_opportunity_image`);
		const payperclickData = await payperClick.json();

		const analytics = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/locations/${slug}?populate[0]=google_analytics.image`);
		const analyticsData = await analytics.json();

		// Check if any of the critical data is missing
		if (!heroData?.data?.attributes.publishedAt) {
			return { notFound: true };
		}

		return { props: { slug, heroData, worldMapData, payperclickData, analyticsData }, revalidate: 60 };
	} catch (error) {
		console.error("Error fetching data:", error);
		return { notFound: true }; // Return notFound on any error
	}
}

export default Location;
