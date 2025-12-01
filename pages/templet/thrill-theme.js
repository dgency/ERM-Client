import BookingSection from "@/components/templet/thrillTheme/BookingSection";
import Footer from "@/components/templet/thrillTheme/Footer";
import FrequentlyAsked from "@/components/templet/thrillTheme/FrequentlyAsked";
import Gallery from "@/components/templet/thrillTheme/Gallery";
import GameDetails from "@/components/templet/thrillTheme/GameDetails";
import Hero from "@/components/templet/thrillTheme/Hero";
import MapSection from "@/components/templet/thrillTheme/MapSection";
import NavBar from "@/components/templet/thrillTheme/NavBar";
import OtherGames from "@/components/templet/thrillTheme/OtherGames";
import ShareVictory from "@/components/templet/thrillTheme/ShareVictory";
import StoryLine from "@/components/templet/thrillTheme/StoryLine";
import Testimonial from "@/components/templet/thrillTheme/Testimonial";
import Trailer from "@/components/templet/thrillTheme/Trailer";
import Head from "next/head";
import React from "react";

function ThrillTheme({ description }) {
	return (
		<div className="bg-[#0D130A] relative ">
			<Head>
				<title>Project Minotaur Escape Room</title>
				<meta name="description" content="So, you dare to enter? Bravo! Get ready to experience LA’s #1 scary escape room, where the fear is real, and the actors are part of the thrill!" />
				{/* <meta name="keywords" content={`${seoData && seoData.data.attributes.seo?.keywords}`} /> */}
				{/* <meta name="robots" content={`${seoData && seoData.data.attributes.seo?.metaRobots}`} /> */}
				<meta property="og:image" content="https://escaperoommarketer.com/templet/thrillTheme/thumbnail.jpg" />
				<meta property="og:image:width" content="400" />
				<meta property="og:image:height" content="300" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:image" content="https://escaperoommarketer.com/templet/thrillTheme/thumbnail.jpg" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="canonical" href="https://escaperoommarketer.com/" />

			</Head>
			<NavBar />
			<Hero description={description} />
			<GameDetails />
			<StoryLine />
			<Trailer />
			<BookingSection />
			{/* <div className="mb-20 bg-[url('/templet/thrillTheme/backgroundtestimonial.png')] bg-no-repeat object-cover object-center"> */}
			<Testimonial />
			<Gallery />
			<FrequentlyAsked />
			<OtherGames />
			{/* <ShareVictory /> */}
			{/* </div> */}
			{/* <MapSection /> */}
			{/* <div className="max-w-[500px] mx-auto">
			<iframe frameborder="0" marginheight="0" marginwidth="0" height="320" src="https://cdn.crichdplays.ru/embed2.php?id=spch39" name="iframe_a" scrolling="no" width="440">Your Browser Do not Support Iframe</iframe>
			</div> */}
			<Footer />
		</div>
	);
}

export async function getStaticProps() {
	try {
		const description =
			"So, you dare to enter? Bravo! Get ready to experience LA’s #1 scary escape room, where the fear is real, and the actors are part of the thrill!";
		return {
			props: { description }, // will be passed to the page component as props
			// revalidate: 60,
		};
	} catch (error) {
		return { props: { error: { ok: false, reason: "some error description for your own consumption, not for client side" } } };
	}
}

export default ThrillTheme;
