/* eslint-disable @next/next/next-script-for-ga */
import { Html, Head, Main, NextScript } from "next/document";
// import { useRouter } from "next/router";

export default function Document() {
	// const router = useRouter()

	return (
		<Html lang="en">
			<Head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
			               (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			               new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			               j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			               'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			               })(window,document,'script','dataLayer','GTM-M5J597D');
                           `,
					}}
				/>

				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&display=optional:opsz,wght,FILL,GRAD@48,400,0,0"
				/>
				<link rel="icon" href="/favicon.ico" />

				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Organization",
							name: "Escape Room Marketer",
							url: "https://escaperoommarketer.com/",
							logo: "https://escaperoommarketer.com/logo.svg",
							contactPoint: {
								"@type": "ContactPoint",
								telephone: "+8801722510266",
								contactType: "technical support",
							},
							sameAs: ["www.facebook.com", "www.instagram.com", "www.linkedin.com", "https://escaperoommarketer.com"],
						}),
					}}
				/>
			</Head>
			<body>
				<noscript
					dangerouslySetInnerHTML={{
						__html: `
						<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M5J597D"
						height="0" width="0" style="display:none;visibility:hidden"></iframe>
                      `,
					}}
				/>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
