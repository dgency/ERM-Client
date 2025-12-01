import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/blogdetails.module.css";
import FooterTopCta from "@/components/FooterTopCta";
import moment from "moment";
import Link from "next/link";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { InfinitySpin } from "react-loader-spinner";
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from "react-share";
import linkedIn from "../public/blog/linkedin.svg";
import facebook from "../public/blog/facebook.svg";
import twitter from "../public/blog/twitter.svg";
import linkCopy from "../public/blog/link.svg";

import NotFound from "./404";

function Blogdetails({ blogData }) {
	const [allBlogData, setAllBlogData] = useState();
	const router = useRouter();
	const dynamicpage = router.query.blogDetails;

	// console.log(dynamicpage);

	useEffect(() => {
		if (dynamicpage) {
			fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate=*`)
				.then((response) => response.json())
				.then((data) => {
					setAllBlogData(data);
				});

			if (document.querySelectorAll(".blog_body a").length !== 0) {
				var aTags = document.querySelectorAll(".blog_body a");
				aTags.forEach(function (aTag) {
					if (aTag.href.split("/")[2] === "escaperoommarketer.com") {
						console.log("on same tab");
					} else {
						aTag.setAttribute("target", "_blank");
					}
				});
			}
		}
	}, [dynamicpage]);

	const handleCopyUrl = (e) => {
		const completeUrl = "https://escaperoommarketer.com/" + dynamicpage;
		navigator.clipboard.writeText(completeUrl);
		e.target.classList.add("bg-[#BFFF00]");
		setTimeout(() => {
			e.target.classList.remove("bg-[#BFFF00]");
		}, 700);
	};

	try {
		return (
			<div>
				{/* {dynamicpage === blogData?.data.attributes.slug && ( */}
				<div>
					<Head>
						<title>{blogData && blogData.data.attributes.seo?.metaTitle}</title>
						<meta name="description" content={`${blogData && blogData.data.attributes.seo?.metaDescription}`} />
						<meta name="keywords" content={`${blogData && blogData.data.attributes.seo?.keywords}`} />
						<meta name="robots" content={`${blogData && blogData.data.attributes.seo?.metaRobots}`} />
						<meta property="og:image:url" content={`${blogData && blogData.data.attributes.cover_image?.data?.attributes.url}`} />
						<meta property="og:image:secure_url" content={`${blogData && blogData.data.attributes.cover_image?.data?.attributes.url}`} />
						<meta property="og:image:type" content="image/jpeg" />
						<meta name="twitter:card" content="summary_large_image" />
						<meta name="twitter:image" content={`${blogData && blogData.data.attributes.cover_image?.data?.attributes.url}`} />
						<meta name="viewport" content="width=device-width, initial-scale=1" />
						<link rel="canonical" href={`https://escaperoommarketer.com/${dynamicpage}`} />

						{blogData &&
							blogData.data.attributes.seo?.structuredData?.map((data, i) => {
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

					{/* {!post && (
					<div className="absolute h-full w-full left-0 right-0 top-0 bottom-0 z-50 bg-[#373737d3] flex justify-center pt-[50vh]">
						<div className="flex gap-2 p-4">
							<div class="bg-[#ffd9cf]  w-4 h-4 rounded-full animate-bounce blue-circle"></div>
							<div class="bg-[#ffc2b3] p-2 w-4 h-4 rounded-full animate-bounce green-circle"></div>
							<div class="bg-[#ff987e] p-2  w-4 h-4 rounded-full animate-bounce red-circle "></div>
						</div>
					</div>
				)} */}
					<div className=" pt-14 md:pt-24 pb-24 sm:pb-44 bg-[var(--section-bg-lightred)]">
						<div className="max-w-[1050px] xl:max-w-[1250px] mx-auto flex">
							<Link
								// onClick={backToPreviousPage}
								href="/blog"
								className="text-[#FF492C] hover:text-[#E74329] text-center  font-bold text-[12px] md:text-[14px] flex items-center decoration-  underline underline-offset-4 "
							>
								<BiChevronLeft className="text-2xl" /> BACK TO All ARTICLES
							</Link>
						</div>
						<div className=" px-2 md:px-0  m-auto mt-6 md:mt-8">
							<h1 className="hero_heading text-[#222] text-center max-w-[1200px] ">
								{blogData !== undefined ? (
									blogData.data.attributes.title
								) : (
									<p>
										Loading <span className=" animate-bounce">.</span>
										<span className="animate-bounce">.</span>
										<span className="animate-bounce">.</span>
									</p>
								)}
							</h1>
						</div>
						<div className="text-[14px] flex flex-col sm:flex-row justify-center items-center mt-[15px]">
							<div className="flex items-center">
								<div className="bg-[#F1F8FF]  h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] flex justify-center items-center rounded-full border-[#FFD8D1] border-[1px] mr-2">
									<Image src="/infinity.svg" height={30} width={25} alt={"this is hero alt"} className="w-[20px]  sm:w-[25px]" />
								</div>
								By Escape Room Marketer{" "}
							</div>
							<div className="flex items-center">
								<p className="h-[7px] w-[7px] mx-3 rounded-full bg-[#c7c7c7]"></p>
								<span className="text-[#888888]">Last updated {moment(blogData !== undefined && blogData.data.attributes.updatedAt).fromNow()} </span>
							</div>
						</div>
						<div className="flex justify-center"></div>
					</div>
					<div className="break_line image bg-[url('/section_break_redWithWhite.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px]  rotate-180 bg-center  "></div>
					<div className="bg-white">
						<div className={styles.blog_details}>
							<div className="relative max-w-[700px] lg:max-w-[800px] mx-auto lg:flex">
								<div className="absolute bottom-6 right-4 lg:sticky lg:top-[150px] lg:-mt-20 lg:h-[120px] flex flex-row lg:flex-col gap-3 text-[24px]">
									<LinkedinShareButton url={`https://escaperoommarketer.com/${dynamicpage}`}>
										<Image src={linkedIn} alt="" className=" w-[20px] h-[20px]" />
									</LinkedinShareButton>
									<FacebookShareButton url={`https://escaperoommarketer.com/${dynamicpage}`}>
										<Image src={facebook} alt="" className=" w-[20px] h-[20px]" />
									</FacebookShareButton>
									<TwitterShareButton url={`https://escaperoommarketer.com/${dynamicpage}`}>
										<Image src={twitter} alt="" className=" w-[20px] h-[20px]" />
									</TwitterShareButton>
									<Image
										src={linkCopy}
										alt=""
										className="link_copy w-[20px] h-[20px] rounded-tl-md rounded-br-md cursor-pointer"
										onClick={(Event) => handleCopyUrl(Event)}
									/>
								</div>
								<div className=" pt-[70px] pb-12 px-[10px] max-w-[700px] mx-auto list-inside ">
									{blogData && (
										<div className="">
											{blogData.data.attributes.cover_image.data && (
												<Image
													src={`${blogData.data.attributes.cover_image.data ? blogData.data.attributes.cover_image.data.attributes.url : "/"}`}
													height={350}
													width={690}
													className="w-[100%] max-h-[350px]  relative z-40 -mt-[190px] sm:-mt-[260px] object-cover shadow-[0px_0px_3px_0px_rgb(0,0,0,0.1)] rounded-t-lg "
													alt={blogData.data.attributes.cover_image.data ? blogData.data.attributes.cover_image.data.attributes.alternativeText : ""}
												/>
											)}
										</div>
									)}
									{blogData !== undefined && (
										<div
											className="blog_body mt-12 text-[18px] leading-[1.8]"
											dangerouslySetInnerHTML={{ __html: blogData.data.attributes.description }}
										/>
									)}
								</div>

								{!blogData && (
									<div className="flex justify-center h-[600px]">
										<InfinitySpin width="200" color="#FF492C" />
									</div>
								)}
							</div>
						</div>
						<div className="max-w-[580px] mx-8 md:mx-auto h-[1px] bg-[#ff9686bd] mb-12 "></div>
						<div className="more_post">
							<h2 className="text-[24px] md:text-[32px] lg:text-[42px] font-[900] px-5 max-w-[800px] lg:max-w-[1000px] mx-auto text-center pb-[30px] md:pb-[40px]">
								Read More Articles Like This
							</h2>
							<div className="pb-12 px-[10px] max-w-[1050px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-4 justify-center">
								{allBlogData &&
									allBlogData.data
										.filter((item) => item.attributes.slug !== dynamicpage)
										.slice(0, 2)
										.map((post) => {
											return (
												<Link
													href={`/${post.attributes.slug}`}
													key={post.id}
													className="group max-w-[545px] mx-auto bg-[#fff] p-2 md:p-5 shadow-md rounded-md  hover:shadow-[0px_0px_20px_2px_rgba(255,73,44,0.15)] duration-300"
												>
													{post.attributes.cover_image.data ? (
														<Image
															src={`${post.attributes.cover_image.data ? post.attributes.cover_image.data.attributes.url : "/"}`}
															height={300}
															width={650}
															className="max-h-[260px] object-cover rounded-t-[6px]"
															alt=""
														/>
													) : (
														<div className="h-[260px] w-full bg-[#d6d6d6] rounded-t-[6px]"></div>
													)}
													<p className="py-[6px] md:py-0 font-[600] text-[20px] md:text-[22px] lg:text-[26px] pt-2 md:pt-4 group-hover:text-[#FF492C]">
														{post.attributes.title}
													</p>
												</Link>
											);
										})}
							</div>
							<div className="flex justify-center pb-20 text-[#FF492C]">
								<Link href={"/blog"} className="group text-[18px] flex justify-center font-[600] cursor-pointer">
									All articles <BiChevronRight className={`arrow_rotate pt-[2px] text-[26px] group-hover:translate-x-[3px] duration-200`} />
								</Link>
							</div>
						</div>
					</div>
					<FooterTopCta breakWhite={true} blogDetail={true} />
				</div>
				{/* )} */}
			</div>
		);
	} catch (error) {
		return <NotFound />;
	}
}

// export async function getServerSideProps(context) {
// 	// Fetch data from external API
// 	let data = await fetch(`http://localhost:1337/api/blogs/4?populate=*`);
// 	// let blogData = await data.json();
// 	// Pass data to the page via props
// 	console.log(data);
// 	return {
// 		props: { blogData: await serializeMarkdown(data) },
// 	};
// }

export async function getStaticPaths() {
	const allBlog = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate=*`);
	const allBlogData = await allBlog.json();

	const paths = allBlogData.data.map((blog) => ({
		params: { blogDetails: blog.attributes.slug.toString() },
	}));

	return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
	try {
		const slug = params.blogDetails;
		const source = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs/${slug}`);
		const blogData = await source.json();

		// if (!source.ok) {
		// 	return { notFound: true };
		// }

		return { props: { blogData }, revalidate: 10 };
	} catch (error) {
		console.error("Error fetching blog post:", error);
		return { props: { newBlogData: null }, revalidate: 10 };
	}
}

export default Blogdetails;
