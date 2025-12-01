"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "@/styles/priceAnimation.module.css";
import Lottie from "lottie-react";
import coinRotation from "../../public/animation/Coin-Rotation.json";
import coinstatic from "../../public/animation/Coin-Static.json";
import doller1 from "../../public/animation/Dollar-1.json";
import doller2 from "../../public/animation/Dollar-2.json";
import { useRouter } from "next/router";

function PricepageAnimation(e) {
	const [isVisible, setIsVisible] = useState(true);
	const [isLoad, setIsLoad] = useState(false);
	const router = useRouter();

	useEffect(() => {
		setInterval(() => {
			setIsVisible(false);
		}, 10000);
	}, []);

	return isVisible ? (
		<div id="price_animation" className="absolute z-10 top-[-100px] h-[400px] md:h-[800px] w-full">
			<div className={styles.Dashboard}>
				<div className={styles.Dashboard_members}>
					<div className={styles.group}>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} className=" cash" />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller1} className=" cash" />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinstatic} className=" cash" />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} className=" cash" />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={doller2} className=" cash" />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={coinstatic} className=" cash" />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} className=" cash" />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={doller1} className=" cash" />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={coinstatic} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={coinstatic} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={doller1} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={coinstatic} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={doller1} />
							</div>
						</div>

						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={coinstatic} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={doller1} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={doller1} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={doller1} />
							</div>
						</div>
					</div>
					{/* <div className={styles.group1}>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller1} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinstatic} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={coinstatic} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={doller1} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={coinstatic} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={coinstatic} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={doller1} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={coinstatic} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={doller1} />
							</div>
						</div>

						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={coinstatic} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={doller1} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={doller1} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={doller1} />
							</div>
						</div>
					</div> */}
					<div className={styles.group2}>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller1} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinstatic} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={coinstatic} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={doller1} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={coinstatic} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={coinstatic} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={doller1} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={coinstatic} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={doller1} />
							</div>
						</div>

						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={coinstatic} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={doller1} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={doller2} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								<Lottie loop={true} animationData={coinRotation} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={doller1} />
							</div>
						</div>
						<div className={styles.Dashboard_members_dot}>
							<div className={styles.Member}>
								{" "}
								<Lottie loop={true} animationData={doller1} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	) : null;
}

export default PricepageAnimation;
