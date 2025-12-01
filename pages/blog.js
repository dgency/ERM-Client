import FooterTopCta from "@/components/FooterTopCta";
import TeamHero from "@/components/others/TeamHero";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { InfinitySpin } from "react-loader-spinner";
import { MdKeyboardArrowDown } from "react-icons/md";
import EmailSubscribe from "@/components/others/EmailSubscribe";
import pin from "../public/blog/pin.svg";

function Blog({ blogPageData, seoData, blogPostsData }) {
	const [blogPosts, setBlogPosts] = useState(() => {
		const initialRegularPosts = blogPostsData.data.filter((post) => !post.attributes.isPinned);
		return { ...blogPostsData, data: initialRegularPosts };
	});
	const [isLoading, setIsLoading] = useState(false);
	const [page, setPage] = useState(1);

	const [pinnedPosts, setPinnedPosts] = useState([]);
	const [pinnedPostIds, setPinnedPostIds] = useState(new Set());

	// useEffect(() => {
	// 	fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?populate=*`)
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			setBlogPosts(data);
	// 		});
	// }, []);

	// useEffect(() => {
	// 	if (blogPosts) {
	// 		let finalData = blogPosts.data.reduce(function (accumulator, currentValue) {
	// 			if (typeof currentValue.id === "number") {
	// 				// Insert currentValue into the correct position in the accumulator array
	// 				const index = accumulator.findIndex((item) => item.id <= currentValue.id);
	// 				if (index === -1) {
	// 					accumulator.push(currentValue);
	// 				} else {
	// 					accumulator.splice(index, 0, currentValue);
	// 				}
	// 			}
	// 			return accumulator;
	// 		}, []);
	// 		setSortedData(finalData);
	// 	}
	// }, [blogPosts]);

	useEffect(() => {
		const fetchPinnedPosts = async () => {
			let allPinnedPosts = [];
			let page = 1;
			let totalPages = 1;

			try {
				while (page <= totalPages) {
					const res = await fetch(
						`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?filters[pin_post]=true&pagination[page]=${page}&pagination[pageSize]=14&sort[0]=id:desc&populate=*`
					);
					const data = await res.json();
					const pinnedData = data.data || [];

					// Append fetched pinned posts to the list
					allPinnedPosts = [...allPinnedPosts, ...pinnedData];

					// Update total pages from API response metadata
					totalPages = data.meta.pagination.pageCount;
					page++;
				}

				// Sort all pinned posts by pinpost_id
				allPinnedPosts.sort((a, b) => a.attributes.pinpost_id - b.attributes.pinpost_id);

				setPinnedPosts(allPinnedPosts);
				setPinnedPostIds(new Set(allPinnedPosts.map((post) => post.id))); // Store pinned post IDs
			} catch (error) {
				console.error("Failed to fetch pinned posts:", error);
			}
		};

		fetchPinnedPosts();
	}, []);

	const handleLoadMore = async () => {
		const nextPage = page + 1;
		setIsLoading(true);
		if (nextPage <= blogPosts?.meta.pagination.pageCount) {
			const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blogs?pagination[page]=${nextPage}&sort[0]=id:desc&populate=*`);
			const data = await res.json();

			if (data?.data.length) {
				const filteredPosts = data.data.filter((post) => !pinnedPostIds.has(post.id)); // Filter out pinned posts
				setBlogPosts((prevItems) => ({ ...prevItems, data: [...prevItems.data, ...filteredPosts] }));
				setIsLoading(false);
				setPage(nextPage);
			}
		}
	};

	return (
		<div className="">
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
				<meta property="og:image" content={`${seoData && seoData.data.attributes.seo?.metaImage.data?.attributes.url}`} />
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

			<div className=" pt-16 md:pt-24 pb-14 bg-[var(--section-bg-lightred)]">
				<div className="m-auto">
					<h1 className="hero_heading text-center">
						{blogPageData && blogPageData.data.attributes.title_first_line} <br className="hidden xl:block" />{" "}
						{blogPageData && blogPageData.data.attributes.title_second_line}
					</h1>
					<p className="g__hero_description px-[10px] md:px-0  text-center max-w-2xl font-[400] xl:max-w-4xl mx-auto py-2">
						{blogPageData && blogPageData.data.attributes.description}
					</p>
				</div>
				<div className=" pt-5 px-2.5 md:px-0">
					<EmailSubscribe />
				</div>
			</div>
			<div className="break_line image bg-[url('/paper-cropped2.svg')]  h-[50px] w-full bg-repeat bg-[length:1800px_100px] bg-center rotate-180 "></div>
			<div className="bg-[var(--section-bg-lightblue)] pb-12">
				<div className="pt-16 px-[10px] max-w-[1050px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-y-6 md:gap-y-12 gap-x-6 justify-center">
					{/* Render Pinned Posts */}
					{pinnedPosts.length > 0 &&
						pinnedPosts.map((post) => (
							<Link
								href={`/${post.attributes.slug}`}
								key={post.id}
								className="group relative z-10 max-w-[545px] mx-auto bg-[#fff] px-4 py-6 md:py-7 md:px-7 shadow-md rounded-md hover:shadow-[0px_0px_20px_2px_rgba(255,73,44,0.15)] duration-300"
							>
								{post.attributes.cover_image.data ? (
									<Image
										src={`${post.attributes.cover_image.data ? post.attributes.cover_image.data.attributes.url : "/"}`}
										height={280}
										width={515}
										className="max-h-[260px] object-cover rounded-t-[6px]"
										alt=""
									/>
								) : (
									<div className="h-[260px] w-full bg-[#d6d6d6] rounded-t-[6px]"></div>
								)}
								<p className="py-[6px] md:py-0 font-[600] text-[20px] md:text-[22px] lg:text-[26px] pt-2 md:pt-4 group-hover:text-[#FF492C]">
									{post.attributes.title}
								</p>
								{/* <span className="absolute -top-6 right-8 bg-[#FFF] px-5 py-1 z-[-1] shadow-[0px_0px_20px_2px_rgba(255,73,44,0.15)]">pin</span> */}
								<span className="absolute top-[2px] right-8 text-[#ADB5BD] flex items-center gap-1 py-1 text-[12px] font-[500] rounded">
									{" "}
									<Image src={pin} height={30} width={15} alt="" className=" " />
									<p>Pinned</p>
								</span>
							</Link>
						))}

					{blogPosts &&
						blogPosts?.data.map((post) => {
							return (
								<Link
									href={`/${post.attributes.slug}`}
									key={post.id}
									className="group max-w-[545px] mx-auto bg-[#fff] px-4 py-6 md:py-7 md:px-7 shadow-md rounded-md hover:shadow-[0px_0px_20px_2px_rgba(255,73,44,0.15)] duration-300"
								>
									{post.attributes.cover_image.data ? (
										<Image
											src={`${post.attributes.cover_image.data ? post.attributes.cover_image.data.attributes.url : "/"}`}
											height={280}
											width={515}
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
				{!blogPosts && (
					<div className="flex justify-center h-[600px]">
						<InfinitySpin width="200" color="#FF492C" />
					</div>
				)}
				{page !== blogPosts?.meta?.pagination.pageCount && (
					<div className="flex justify-center pt-10 text-[#FF492C] h-[100px]">
						{isLoading ? (
							<div className="flex justify-center  ">
								<InfinitySpin width="200" color="#FF492C" />
							</div>
						) : (
							<div
								className="flex justify-center items-center gap-[2px] font-[600] rounded-md cursor-pointer border-[#FF492C] border-[1px] px-8 py-3"
								onClick={handleLoadMore}
							>
								Load more <MdKeyboardArrowDown className={`arrow_rotate text-2xl`} />
							</div>
						)}
					</div>
				)}
			</div>
			<FooterTopCta pageBreakBlue={true} footerTopCta={blogPageData && blogPageData.data.attributes.footer_top_cta} />
		</div>
	);
}

export async function getStaticProps(context) {
	let URL = `${process.env.NEXT_PUBLIC_API_URL}`;
	try {
		// Fetch data from external API
		let data = await fetch(`${URL}/api/blog-page?populate=*`);
		let blogPageData = await data.json();

		let blogPost = await fetch(`${URL}/api/blogs?sort[0]=id:desc&populate=*`);
		let blogPostsData = await blogPost.json();

		let seo = await fetch(`${URL}/api/blog-page?populate[seo][populate]=*`);
		let seoData = await seo.json();

		// Pass data to the page via props
		return {
			props: { blogPageData, seoData, blogPostsData },
			revalidate: 10,
		};
	} catch (error) {
		return { props: { error: { ok: false, reason: "some error description for your own consumption, not for client side" } } };
	}
}

export default Blog;
