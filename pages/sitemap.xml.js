

export default function Sitemap() {
	return null;
}

export const getServerSideProps = async (ctx) => {
	let URL = `${process.env.NEXT_PUBLIC_API_URL}`;

	let caseStudyData = await fetch(`${URL}/api/case-studies?pagination[page]=1&pagination[pageSize]=200&sort[0]=id:asc&populate=*`);
	let caseStudy = await caseStudyData.json();

	let allQuiz = await fetch(`${URL}/api/quizz-details?populate=*`);
	let allQuizzData = await allQuiz.json();

	let data = await fetch(`${URL}/api/blogs?pagination[page]=1&pagination[pageSize]=200&sort[0]=id:desc&populate=*`);
	let blogData = await data.json();

    // Perform sorting or other data manipulation here
    // let sortedCaseStudyData = caseStudy.data.reduce((accumulator, currentValue) => {
    //   if (typeof currentValue.id === "number") {
    //     const index = accumulator.findIndex(item => item.id >= currentValue.id);
    //     if (index === -1) {
    //       accumulator.push(currentValue);
    //     } else {
    //       accumulator.splice(index, 0, currentValue);
    //     }
    //   }
    //   return accumulator;
    // }, []);

	ctx.res.setHeader("Content-Type", "text/xml");
	const xml = await generateSitemap(caseStudy.data , allQuizzData, blogData);
	ctx.res.write(xml);
	ctx.res.end();

	return {
		props: {},
	};
};

async function generateSitemap(CaseStudyData, allQuizzData, blogData) {
	// let caseStudyData = caseStudy.data.attributes.casestudy_section.data;

	return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <url>
         <loc>https://escaperoommarketer.com</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
       <url>
         <loc>https://escaperoommarketer.com/pricing</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
       <url>
         <loc>https://escaperoommarketer.com/services</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
       <url>
         <loc>https://escaperoommarketer.com/google-ads</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
       <url>
         <loc>https://escaperoommarketer.com/microsoft-ads</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
       <url>
         <loc>https://escaperoommarketer.com/seo</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
       <url>
         <loc>https://escaperoommarketer.com/facebook-ads</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
       <url>
         <loc>https://escaperoommarketer.com/linkedin-ads</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
       <url>
         <loc>https://escaperoommarketer.com/social-media-management</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
       <url>
         <loc>https://escaperoommarketer.com/landing-page-development</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
       <url>
         <loc>https://escaperoommarketer.com/website-development</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
       <url>
         <loc>https://escaperoommarketer.com/email-marketing</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
       <url>
         <loc>https://escaperoommarketer.com/case-studies</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
       ${CaseStudyData
					.map((d,index) => {
						return `<url >
						<loc>https://escaperoommarketer.com/case-studies/${d.attributes.slug}?i=${index}&amp;t=${CaseStudyData.length}</loc>
						<lastmod>${new Date(d.attributes.updatedAt).toISOString().slice(0, 10)}</lastmod>
					</url>`;
					})
					.join("")}
       <url>
         <loc>https://escaperoommarketer.com/testimonials</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
       <url>
         <loc>https://escaperoommarketer.com/projects</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
       <url>
         <loc>https://escaperoommarketer.com/quizzes</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
       ${allQuizzData.data
					.map((d) => {
						return `<url >
          <loc>https://escaperoommarketer.com/quizzes/${d.attributes.slug}</loc>
          <lastmod>${new Date(d.attributes.updatedAt).toISOString().slice(0, 10)}</lastmod>
        </url>`;
					})
					.join("")}

       <url>
         <loc>https://escaperoommarketer.com/about</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
       <url>
         <loc>https://escaperoommarketer.com/team</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
       <url>
         <loc>https://escaperoommarketer.com/career</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
       <url>
         <loc>https://escaperoommarketer.com/faqs</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
       <url>
         <loc>https://escaperoommarketer.com/blog</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
       ${blogData.data
					.map((d) => {
						return `<url >
          <loc>https://escaperoommarketer.com/${d.attributes.slug}</loc>
          <lastmod>${new Date(d.attributes.updatedAt).toISOString().slice(0, 10)}</lastmod>
        </url>`;
					})
					.join("")}
       <url>
         <loc>https://escaperoommarketer.com/contact</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
       <url>
         <loc>https://escaperoommarketer.com/client-call</loc>
         <lastmod>2024-07-02</lastmod>
       </url>
       <url>
         <loc>https://escaperoommarketer.com/demo-call</loc>
         <lastmod>2024-07-02</lastmod>
       </url>
       <url>
         <loc>https://escaperoommarketer.com/free-marketing</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
       <url>
         <loc>https://escaperoommarketer.com/terms-of-service</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
       <url>
         <loc>https://escaperoommarketer.com/privacy-policy</loc>
         <lastmod>2024-02-01</lastmod>
       </url>
    
     </urlset>`;
}
