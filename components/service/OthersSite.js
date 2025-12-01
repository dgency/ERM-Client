import Image from "next/image";
import React from "react";

function OthersSite({ title, pera }) {
	return (
		<div className="g-page_structure">
			<div className="m-auto">
				<h2 className="pt-10 md:pt-20 text-[20px] md:text-4xl 2xl:text-[39px]  text-center mx-auto font-extrabold lg:w-[75%] xl:w-[70%] 2xl:w-[70%]">
					{title}
				</h2>
				<p className="md:text-xl xl:text-xl 2xl:text-2xl text-center md:px-[20%] xl:px-[30%] 2xl:px-[20%] m-auto pt-5 pb-10">{pera}</p>
			</div>
			<div className="grid grid-cols-3 justify-items-center gap-y-8 md:w-[50%] xl:w-[40%] 2xl:w-[50%] m-auto pb-12">
				<Image src="/serveice/ppcagency/logo-10.svg" alt="" width={100} height={100} />
				<Image src="/serveice/ppcagency/logo-4.svg" alt="" width={100} height={100} />
				<Image src="/serveice/ppcagency/logo-7.svg" alt="" width={100} height={100} />
				<Image src="/serveice/ppcagency/logo-9.svg" alt="" width={100} height={100} />
				<Image src="/serveice/ppcagency/logo-11.svg" alt="" width={100} height={100} />
				<Image src="/serveice/ppcagency/logo-8.svg" alt="" width={100} height={100} />
				<Image src="/serveice/ppcagency/logo-12.svg" alt="" width={100} height={100} />
				<Image src="/serveice/ppcagency/logo-1.svg" alt="" width={100} height={100} />
				<Image src="/serveice/ppcagency/logo-6.svg" alt="" width={100} height={100} />
				<Image src="/serveice/ppcagency/logo-5.svg" alt="" width={100} height={100} />
				<Image src="/serveice/ppcagency/logo-2.svg" alt="" width={100} height={100} />
				<Image src="/serveice/ppcagency/logo-3.svg" alt="" width={100} height={100} />
			</div>
			<p className="text-2xl text-center ">And many more...</p>
		</div>
	);
}

export default OthersSite;
