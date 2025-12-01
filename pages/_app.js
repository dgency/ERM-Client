// import { ChakraProvider } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Freemarketing from "./free-marketing";
import FreeMarketingBanner from "@/components/others/FreeMarketingBanner";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { Open_Sans } from "next/font/google";
import TopArrowBtn from "@/components/TopArrowBtn";
import RedirectFile from "@/components/RedirectFile";

const open_sans = Open_Sans({
	subsets: ["latin"],
	variable: "--font-sans",
	// display: "swap",
});

export default function App({ Component, pageProps }) {
	//functionality of freemarketing page top banner
	const router = useRouter();

	const [scrollTop, setScrollTop] = useState(false);
	const [closeBanner, setCloseBanner] = useState(true);

	const handleCloseBanner = () => {
		setCloseBanner(false);
		const banner = document.getElementById("marketing-banner");
		banner.remove();
	};

	useEffect(() => {
		const banner = document.getElementById("marketing-banner");
		if (banner) {
			setCloseBanner(true);
		}

		window.addEventListener("scroll", () => {
			let scrollTop = window.scrollY || document.documentElement.scrollTop;
			if (scrollTop > 3000) {
				setScrollTop(true);
			} else {
				setScrollTop(false);
			}
		});

		//add schema model for SEO purpose

		// let htmlElement = document.querySelector("html");
		// if (router.asPath.split("/")[1] === "service") {
		// 	htmlElement.setAttribute("itemscope", "");
		// 	htmlElement.setAttribute("itemtype", "https://schema.org/FAQPage");
		// } else {
		// 	htmlElement.removeAttribute("itemtype");
		// 	htmlElement.removeAttribute("itemscope");
		// }
	}, [router]);

	return (
		<>
			{router.asPath.split("/")[1] !== "templet" ? (
				<main className={`${open_sans.variable} relative`}>
					{Component === Freemarketing ? <FreeMarketingBanner handleCloseBanner={handleCloseBanner} /> : ""}
					<Navbar marketingBanner={Component === Freemarketing ? closeBanner : false} />
					<div className="">
						<Component className="main_component " {...pageProps} />
					</div>
					<Footer />

					{scrollTop === true && <TopArrowBtn />}
					<RedirectFile />
				</main>
			) : (
				<main className="relative">
					<Component className="main_component " {...pageProps} />
				</main>
			)}
		</>
	);
}
