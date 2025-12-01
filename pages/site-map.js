import Link from "next/link";

function SiteMap({ caseStudy, allQuizzData, blogData }) {
	return (
		<div className="mt-0">
			<div className="g-page_structure">
				<div className="pb-20">
					<h1 className="text-[48px] font-[700] pt-32 pb-10">Site Map</h1>
					<ul className="flex flex-col gap-5 text-[22px] text-[#1A0DAB] list-inside list-disc font-[600]">
						<li>
							<Link href={"/"}>Home</Link>
						</li>
						<li>
							<Link href={"/pricing"}>Pricing</Link>
						</li>
						<div className="">
							<li>
								<Link href={"/services"}>Services</Link>
							</li>
							<div className="ml-14 mt-3 list-none text-[20px] leading-[1.5] flex flex-col gap-3 font-[500]">
								<li>
									<Link href={"/google-ads"}>Google Ads</Link>
								</li>
								<li>
									<Link href={"/microsoft-ads"}>Microsoft Ads</Link>
								</li>
								<li>
									<Link href={"/seo"}>Search Engine Optimization (SEO)</Link>
								</li>
								<li>
									<Link href={"/facebook-ads"}>Facebook Ads</Link>
								</li>
								<li>
									<Link href={"/linkedin-ads"}>LinkedIn Ads</Link>
								</li>
								<li>
									<Link href={"/social-media-management"}>Social Media Management</Link>
								</li>
								<li>
									<Link href={"/landing-page-development"}>Landing Page Development</Link>
								</li>
								<li>
									<Link href={"/website-development"}>Website Development</Link>
								</li>
								<li>
									<Link href={"/email-marketing"}>Email Marketing</Link>
								</li>
							</div>
						</div>
						<div className="">
							<li>
								<Link href={"/case-studies"}>Case Studies</Link>
							</li>
							<div className="ml-14 mt-3 list-none text-[20px] leading-[1.5] flex flex-col gap-3 font-[500]">
								{caseStudy &&
									caseStudy?.data.map((d, index) => {
										return (
											<li key={d.id}>
												<Link href={`/case-studies/${d.attributes.slug}?i=${index}&t=${caseStudy?.data.length}`}>{d.attributes.title}</Link>
											</li>
										);
									})}
							</div>
						</div>
						<li>
							<Link href={"/testimonials"}>Testimonials</Link>
						</li>
						<li>
							<Link href={"/projects"}>Projects</Link>
						</li>
						<div className="">
							<li>
								<Link href={"/quizzes"}>Quizzes</Link>
							</li>
							<div className="ml-14 mt-3 list-none text-[20px] leading-[1.5] flex flex-col gap-3 font-[500]">
								{allQuizzData &&
									allQuizzData.data.map((d) => {
										return (
											<li key={d.id}>
												<Link href={`/quizzes/${d.attributes.slug}`}>{d.attributes.quizz_title}</Link>
											</li>
										);
									})}
							</div>
						</div>
						<li>
							<Link href={"/about"}>About</Link>
						</li>
						<li>
							<Link href={"/team"}>Team</Link>
						</li>
						<li>
							<Link href={"/career"}>Career</Link>
						</li>
						<li>
							<Link href={"/faqs"}>Faqs</Link>
						</li>
						<div className="">
							<li>
								<Link href={"/blog"}>Blog</Link>
							</li>
							<div className="ml-14 mt-3 list-none text-[20px] leading-[1.5] flex flex-col gap-3 font-[500]">
								{blogData &&
									blogData.data.map((d) => {
										return (
											<li key={d.id}>
												<Link href={`/${d.attributes.slug}`}>{d.attributes.title}</Link>
											</li>
										);
									})}
							</div>
						</div>
						<li>
							<Link href={"/contact"}>Contact</Link>
						</li>
						<li>
							<Link href={"/client-call"}> Exclusive Client Call</Link>
						</li>
						<li >
							<Link href={"/demo-call"} >
							Book a Demo
							</Link>{" "}
						</li>
						<li>
							<Link href={"/free-marketing"}>Free Marketing Plan</Link>
						</li>
						<li>
							<Link href={"/terms-of-service"}>Terms of Service</Link>
						</li>
						<li>
							<Link href={"/privacy-policy"}> Privacy Policy</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="break_line image bg-[url('/footer_top_cta_bottom.svg')] h-[90px] w-full bg-[length:2000px_90px] absolute z-10 mt-[-65px] rotate-180 bg-center"></div>
		</div>
	);
}

// export async function getStaticPaths() {
// 	const caseData = await fetch(`http://localhost:1337/api/case-studies?pagination[page]=1&pagination[pageSize]=5&sort[0]=id:asc&populate=*`);
// 	const Data = await caseData.json();

// 	const paths = ({
// 		params: { caseStudy: Data.meta.pagination.total },
// 	});

// 	return { paths, fallback: "blocking" };
// }

export async function getStaticProps(context) {
	let URL = `${process.env.NEXT_PUBLIC_API_URL}`;
	try {
		// Fetch data from external API
		let caseStudyData = await fetch(`${URL}/api/case-studies?pagination[page]=1&pagination[pageSize]=200&sort[0]=id:asc&populate=*`);
		let caseStudy = await caseStudyData.json();

		let allQuiz = await fetch(`${URL}/api/quizz-details?populate=*`);
		let allQuizzData = await allQuiz.json();

		let data = await fetch(`${URL}/api/blogs?pagination[page]=1&pagination[pageSize]=200&sort[0]=id:desc&populate=*`);
		let blogData = await data.json();

		// Pass data to the page via props
		return {
			props: { caseStudy, allQuizzData, blogData },
			revalidate: 60,
		};
	} catch (error) {
		return { props: { error: { ok: false, reason: "some error description for your own consumption, not for client side" } } };
	}
}

export default SiteMap;
