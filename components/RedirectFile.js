import { useRouter } from "next/router";
import React, { useEffect } from "react";

function RedirectFile() {
	const router = useRouter();
	useEffect(() => {
		if (
			router.asPath === "/quizzes/null" ||
			router.asPath === "/quizzes/undefined" ||
			router.asPath === "/quiz-details/undefined" ||
			router.asPath === "/quizzes/[quizDetails]" ||
			router.asPath === "/quiz-details/seo-quiz-1" ||
			router.asPath === "/quiz-details/[quizDetails]"
		) {
			router.push("/quizzes");
		} else if (
			router.asPath === "/case-studies/null" ||
			router.asPath === "/case-studies/undefined" ||
			router.asPath === "/team/case-study-1" ||
			router.asPath === "/team/case-study3" ||
			router.asPath === "/case-studies/[caseStudy]" ||
			router.asPath === "/team/case-study5" ||
			router.asPath === "/team/[caseStudy]" ||
			router.asPath === "/team/case-study6" ||
			router.asPath === "/team/case-study4" ||
			router.asPath === "/team/case-study2" ||
			router.asPath === "/team/case-study1" ||
			router.asPath === "/case-studies/targeted-remarketing-for-an-escape-room-company"
		) {
			router.push("/case-studies");
		} else if (router.asPath === "/quiz-details/facebook-ads-quiz" || router.asPath === "/quiz-details/facebook-ads-micro-quiz") {
			router.push("/quizzes/facebook-ads-quiz");
		} else if (router.asPath === "/quiz-details/email-marketing-quiz" || router.asPath === "/quiz-details/email-marketing-micro-quiz") {
			router.push("/quizzes/email-marketing-quiz");
		} else if (router.asPath === "/quiz-details/creative-asset-quiz") {
			router.push("/quizzes/creative-asset-quiz");
		} else if (router.asPath === "/quiz-details/google-ads-quiz") {
			router.push("/quizzes/google-ads-quiz");
		} else if (router.asPath === "/quiz-details/seo-quiz" || router.asPath === "/quiz-details/seo-micro-quiz") {
			router.push("/quizzes/seo-quiz");
		} else if (router.asPath === "/quiz-details/conversion-quiz" || router.asPath === "/quiz-details/conversion-micro-quiz") {
			router.push("/quizzes/conversion-quiz");
		} else if (
			router.asPath === "/blog/another-blog" ||
			router.asPath === "/blog/23-smart-landing-page-trends-and-over-60-examples" ||
			router.asPath === "/blog/[blogDetails]" ||
			router.asPath === "/another-blog" ||
			router.asPath === "/google-ads-for-escape-room-elevate-your-business-visibility-and-bookings" ||
			router.asPath === "/[blogDetails]" ||
			router.asPath === "/escape-mediocrity-creative-escape-room-marketing-strategies" ||
			router.asPath === "/5-costly-mistakes-in-escape-room-website-ux" ||
			router.asPath === "/remarketing-revolution-a-10-booking-boost-for-your-escape-room-business" ||
			router.asPath === "/beyond-rankings-essential-seo-strategies-for-your-escape-room-website"
		) {
			router.push("/blog");
		} else if (
			router.asPath === "/service/google-ads" ||
			router.asPath === "/service/google-ads-agency" ||
			router.asPath === "/service/ppc-management"
		) {
			router.push("/google-ads");
		} else if (router.asPath === "/service/microsoft-ads") {
			router.push("/microsoft-ads");
		} else if (router.asPath === "/service/seo-agency" || router.asPath === "/service/seo" || router.asPath === "/service/link-building-service") {
			router.push("/seo");
		} else if (router.asPath === "/service/facebook-ads") {
			router.push("/facebook-ads");
		} else if (router.asPath === "/service/linkedin-ads" || router.asPath === "/service/linked-in-ads") {
			router.push("/linkedin-ads");
		} else if (router.asPath === "/service/social-media-management") {
			router.push("/social-media-management");
		} else if (
			router.asPath === "/service/landing-page-development" ||
			router.asPath === "/service/landing-page-design" ||
			router.asPath === "/service/landing-page-agency"
		) {
			router.push("/landing-page-development");
		} else if (router.asPath === "/service/website-development") {
			router.push("/website-development");
		} else if (router.asPath === "/service/email-marketing-agency" || router.asPath === "/service/email-marketing") {
			router.push("/email-marketing");
		} else if (router.asPath === "/service/sem-agency") {
			router.push("/services");
		} else if (router.asPath === "/thankyou" || router.asPath === "/freemarketing") {
			router.push("/free-marketing");
		} else if (router.asPath === "/results/testimonial" || router.asPath === "/testimonial") {
			router.push("/testimonials");
		} else if (router.asPath === "/php/contact.php" || router.asPath === "/contactUs") {
			router.push("/contact");
		} else if (router.asPath === "/dgency.com" || router.asPath === "/undefined") {
			router.push("/");
		}
	}, [router]);
	return <></>;
}

export default RedirectFile;
