"use client"
import React, { useState } from "react";
import { RiErrorWarningFill } from "react-icons/ri";
import { FaRegCheckCircle } from "react-icons/fa";

function EmailSubscribe() {
	const [subscriber, setSubscriber] = useState("");
	const [error, setError] = useState({
		message: null,
		statusCode:null
	});
	const validateEmail = (email) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(String(email).toLowerCase());
	};

	const handleEmailPost = async (e) => {
		e.preventDefault();

        if(subscriber === ""){
            return
        }

		// Validate email
		if (!validateEmail(subscriber)) {
			setError((prev)=>({...prev,message:"Invalid email address"}));
			setTimeout(() => {
				setError((prev)=>({...prev,message:null}));
			}, 2000);
			return;
		}

		// setError(null); // Clear previous error if email is valid

		try {
			setError((prev)=>({...prev,statusCode:202}));
			const response = await fetch("https://acumbamail.com/webhook/incoming/pcGDyJUUGXJ3okHA0NPJUnzcjzc/nibvykKoZBKdZFYTzu0ZdA==/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: "f31dc514133f42e7a1989dcb6cb9f671",
				},
				body: JSON.stringify({
					email: subscriber,
				}), // Make sure 'subscriber' is defined and contains the necessary data
			});

			if (!response.ok) {
				if (response.status === 400) {
					setError((prev)=>({...prev,message:"You have already subscribed with this email.",statusCode:400}));
					setTimeout(() => {
						setError((prev)=>({...prev,message:null,statusCode:null}));
					}, 2500);
				}
				throw new Error(`HTTP error! status: ${response.status}`);
			}

			const data = await response.json();
			if(data){
				setError((prev)=>({...prev,message:"Thank you for being with us.",statusCode:200}))
				setTimeout(() => {
					setError((prev)=>({...prev,message:null,statusCode:null}));
				}, 2500);
			}
			setSubscriber("");
		} catch (error) {
			console.error("Error:", error);
		}
	};

	return (
		<div>
			<form action="" className="   ">
				<div className="relative max-w-[330px] sm:max-w-[400px] mx-auto ">
					<div className="flex">
						<input
							type="email"
							value={subscriber}
							onChange={(e) => setSubscriber(e.target.value)}
							placeholder="Your email..."
							className="outline-none px-2 py-[10px] w-full rounded-l-[5px] border-[1px] border-[#C0C0C0] text-[16px]"
						/>
						<button onClick={handleEmailPost} className={`${error.statusCode ===202?"bg-[#fb8573]":"bg-[#FF492C]"}  text-white px-4 rounded-r-[5px] text-[16px] w-[110px] sm:w-[110px] ml-[-5px] `}>
							SUBSCRIBE
						</button>
					</div>
					<p className="pt-2 text-[15px] text-[#535353] text-center pl-1 ">Get weekly insights straight to your inbox</p>
					{error.message && (
						<p className={`${error?.statusCode === null ?"bg-[#ffcdd2] before:border-[#ffcdd2]":"bg-[#d1ffd1] before:border-[#d1ffd1]"} py-1.5 px-5 text-[15px] text-[#101010] absolute top-[80%] shadow rounded flex items-center gap-2 before:content-[''] before:absolute before:left-[15%] before:bottom-[100%]  before:border-[10px] before:border-solid  before:border-r-[#0000] before:border-b-[#0000] before:border-l-[#0000] before:rotate-180 `}>
							{error?.statusCode === null ?<RiErrorWarningFill className="text-xl text-[#ef5350] font-bold " />:
                            <FaRegCheckCircle className="text-lg text-[#62c762] font-bold" />}
							{error.message}
						</p>
					)}
				</div>
				{/* absolut right-0 h-full text-[18px]  text-white font-[500] bg-[#FF492C] px-6 rounded-md  */}
				{/* outline-none pl-4 pr-10 py-2 text-[16px] rounded-md border-[1px] border-[#C0C0C0] h-full w-full */}
			</form>
		</div>
	);
}

export default EmailSubscribe;
