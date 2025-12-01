import Image from "next/image";
import React from "react";
import head from "@/public/templet/thrillTheme/booking/head.png";
import light1 from "@/public/templet/thrillTheme/booking/ligh1.png";
import light from "@/public/templet/thrillTheme/booking/ligh.png";
import doc from "@/public/templet/thrillTheme/booking/doctor.png";
import bookingSlot from "@/public/templet/thrillTheme/booking/bookingSlot.png";

function BookingSection() {
	return (
		<div className=" pt-[0px] sm:pt-[20px]  sm:overflow-x-hidden xl:overflow-x-visible">
			<div className="bg-[url('/templet/thrillTheme/booking/bookingbg.png')] bg-no-repeat bg-cover pb-20 relative ">
				{/* <h2 className="header_2 text-center ">BIGGER GROUP, BIGGER SAVINGS</h2> */}
				{/* <div className="max-w-[1100px] mx-auto bg-[#00112c60] px-10 py-16 -mt-10 flex items-end gap-14">
				<div className="bg-[#001433] rounded-md  py-5 font_poppins text-white max-w-[330px] relative z-10">
					<p className="text-center text-[20px] font-semibold pb-1">$396</p>
					<p className="text-center text-[12px]">2-4 person</p>
					<div className="flex justify-between mt-7">
						<div className="px-4 border-r-[1px] flex flex-col items-center">
							<p className=" text-[12px]">2 person</p>
							<Image src={head} alt="" height={38} width={30} className="my-3" />
							<p className=" text-[14px] pb-1">$198</p>
							<p className=" text-[14px] ">Per Person</p>
						</div>
						<div className="px-4 border-r-[1px] flex flex-col items-center">
							<p className=" text-[12px]">3 person</p>
							<Image src={head} alt="" height={38} width={30} className="my-3" />
							<p className=" text-[14px] pb-1">$132</p>
							<p className=" text-[14px] ">Per Person</p>
						</div>
						<div className="px-4 flex flex-col items-center">
							<p className=" text-[12px]">4 person</p>
							<Image src={head} alt="" height={38} width={30} className="my-3" />
							<p className=" text-[14px] pb-1">$99</p>
							<p className=" text-[14px] ">Per Person</p>
						</div>
					</div>
                    <div className="hidden xl:block text-[18px] text-[#3DE70040] px-2.5 py-2 border-b-[2px] border-dashed border-[#3DE70040] absolute left-full top-[20%] rotate-[-23deg] translate-x-[-8px]">+$99</div>
				</div>
               
				<div className="bg-[#001433] rounded-md  py-5 font_poppins text-white flex flex-col items-center relative z-10">
					<p className="text-center text-[20px] font-semibold">$396</p>
					<p className="text-center text-[12px] px-5">5 person</p>

					<Image src={head} alt="" height={101} width={80} className="my-8 h-[101px] w-[80px] object-cover" />
					<p className=" text-[14px] pb-1">$99</p>
					<p className=" text-[14px] px-5">Per Person</p>
                    <div className=" hidden xl:block text-[18px] text-[#3DE70040] px-2.5 py-2 border-b-[2px] border-dashed border-[#3DE70040] absolute left-full top-[23%] rotate-[-23deg] translate-x-[-8px]">+$99</div>
				</div>
				<div className="bg-[#001433] rounded-md   py-5 font_poppins text-white flex flex-col items-center relative z-10">
					<p className="text-center text-[20px] font-semibold">$396</p>
					<p className="text-center text-[12px] px-5">5 person</p>

					<Image src={head} alt="" height={126} width={100} className="my-8 h-[126px] w-[100px] object-cover " />
					<p className=" text-[14px] pb-1">$99</p>
					<p className=" text-[14px] px-5">Per Person</p>
                    <div className="hidden xl:block text-[18px] text-[#3DE70040] px-2.5 py-2 border-b-[2px] border-dashed border-[#3DE70040] absolute left-full top-[23%] rotate-[-23deg] translate-x-[-8px]">+$99</div>
				</div>
				<div className="bg-[#001433] rounded-md py-5 font_poppins text-white flex flex-col items-center relative z-10">
					<p className="text-center text-[20px] font-semibold">$396</p>
					<p className="text-center text-[12px] px-5">5 person</p>

					<Image src={head} alt="" height={150} width={100} className="my-8 h-[150px] w-[100px] object-cover" />
					<p className=" text-[14px] pb-1">$99</p>
					<p className=" text-[14px] px-5">Per Person</p>
                    <div className="hidden xl:block text-[18px] text-[#3DE70040] px-2.5 py-2 border-b-[2px] border-dashed border-[#3DE70040] absolute left-full top-[23%] rotate-[-23deg] translate-x-[-8px]">+$99</div>
				</div>
				<div className="bg-[#001433] rounded-md py-5 font_poppins text-white flex flex-col items-center relative z-10">
					<p className="text-center text-[20px] font-semibold">$396</p>
					<p className="text-center text-[12px] px-5">5 person</p>

					<Image src={head} alt="" height={150} width={100} className="my-8 h-[175px] w-[100px] object-cover" />
					<p className=" text-[14px] pb-1">$99</p>
					<p className=" text-[14px] px-5">Per Person</p>
				</div>
			</div> */}
				<div className=" pt-16 sm:pt-[145px] ">
					<div className="relative z-20 max-w-[1236px] pb-20 px-8  mx-auto rounded-lg bg-[#0D130A] shadow-[0px_2px_50px_0px_rgba(210,0,0,0.2)] ">
						{/* <div className="relative flex justify-center "> */}
						<Image
							src={light1}
							alt=""
							height={196}
							width={176}
							className="h-[51px] sm:h-[120px] md:h-[150px] lg:h-[196px] w-auto absolute left-[50%] translate-x-[-50%] top-[-10px] sm:top-[-20px] lg:top-[-40px] animate-pulse"
						/>
						<Image
							src={light}
							alt=""
							height={639}
							width={1269}
							className="h-[168px] sm:h-[inherit] w-auto absolute z-20 top-[-70px] sm:top-[-130px] md:top-[-170px] lg:top-[-220px]  animate_siren"
						/>
						{/* </div> */}
						<h2 className="header_2 text-center pt-14 sm:pt-28 md:pt-[180px] pb-5">BEGIN YOUR JOURNEY TODAY!</h2>
						<Image src={bookingSlot} alt="" height={639} width={1269} className=" " />
					</div>
				</div>
				{/* <Image src={doc} alt="" height={1112} width={488} className="h-[70%] w-auto  absolute bottom-0 right-0 z-20   " /> */}
				<div className=" w-full h-[300px] bg-gradient-to-t from-[#0D130A] to-transparent absolute z-10 bottom-0"></div>
			</div>
		</div>
	);
}

export default BookingSection;
