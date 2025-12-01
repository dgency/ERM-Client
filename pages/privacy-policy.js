import FooterTopCta from "@/components/FooterTopCta";
import React from "react";
import styles from "@/styles/blogdetails.module.css";
import Head from "next/head";

function PrivacyPolicy({ privacyPolicyData, seoData }) {
	return (
		<div className="pt-[2.5rem]">
			<Head>
				<title>{seoData && seoData.data.attributes.seo?.metaTitle}</title>
				<meta name="description" content={`${seoData && seoData.data.attributes.seo?.metaDescription}`} />
				<meta name="keywords" content={`${seoData && seoData.data.attributes.seo?.keywords}`} />
				<meta name="robots" content={`${seoData && seoData.data.attributes.seo?.metaRobots}`} />
				<meta property="og:image" content={`${seoData && seoData.data.attributes.seo?.metaImage.data?.attributes.url}`} />
				<meta property="og:image:width" content="400" />
				<meta property="og:image:height" content="300" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:image" content={`${seoData && seoData.data.attributes.seo?.metaImage.data?.attributes.url}`} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="canonical" href={`${seoData && seoData.data.attributes.seo?.canonicalURL}`} />

				{seoData &&
					seoData.data.attributes.seo?.structuredData?.map((data, i) => {
						return (
							<script
								key={i}
								type="application/ld+json"
								dangerouslySetInnerHTML={{
									__html: JSON.stringify(data),
								}}
							/>
						);
					})}
			</Head>
			<div className="pt-12 pb-12 md:pb-20">
				<div className="terms_text max-w-[950px] mx-auto">
					<h1 className="text-center text-[28px] md:text-[3.25rem] font-[700] tracking-[-0.05em]">
						{privacyPolicyData && privacyPolicyData.data.attributes.title}
					</h1>
					<div className="description pt-8 md:pt-12 mx-[10px]">
						<div className={styles.blog_details}>
							<div
								className="text-[18px] md:text-[20px]"
								dangerouslySetInnerHTML={{ __html: privacyPolicyData && privacyPolicyData.data.attributes.Privacy_body }}
							/>
						</div>
					</div>
				</div>
			</div>
			<FooterTopCta breakWhite={true} footerTopCta={privacyPolicyData && privacyPolicyData.data.attributes.footer_top_cta} />
		</div>
	);
}

export async function getStaticProps(context) {
	let URL = `${process.env.NEXT_PUBLIC_API_URL}`;
	try {
		// Fetch data from external API
		let data = await fetch(`${URL}/api/privacy-policy?populate=*`);
		let privacyPolicyData = await data.json();

		let seo = await fetch(`${URL}/api/privacy-policy?populate[seo][populate]=*`);
		let seoData = await seo.json();

		// Pass data to the page via props
		return {
			props: { privacyPolicyData, seoData },
			revalidate: 60,
		};
	} catch (error) {
		return { props: { error: { ok: false, reason: "some error description for your own consumption, not for client side" } } };
	}
}

export default PrivacyPolicy;
