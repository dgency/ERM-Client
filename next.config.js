/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
};

module.exports = {
	nextConfig,
	images: {
		domains: ["escaperoommarketer.com","res.cloudinary.com"],
	},
	

	// async rewrites() {
	// 	return [
	// 		{
	// 			source: "/google278c68e1c0aa91b5.html",
	// 			destination: "/google278c68e1c0aa91b5.html", // Adjust the destination path
	// 		},
	// 	];
	// },
};
