import React from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

function TopArrowBtn() {
	const handleClickTop = () => {
		window.scrollTo(0, 0);
	};
	return (
		<div>
			{" "}
			<div
				onClick={handleClickTop}
				className="group fixed bottom-[10px] md:bottom-[20px] ml-auto right-[5px] md:right-[20px] w-[30px] md:w-[50px] h-[30px] md:h-[75px] border-[1px] border-[#c0c6d1] bg-[#fff] flex justify-center items-center rounded-full shadow-2xl z-50 cursor-pointer"
			>
				<p className=" flex flex-col items-center leading-5 text-[16px] justify-center font-[600]  text-[#a6abb3]">
					<span className="material-symbols-outlined text-[18px] md:text-[22px] text-[#c0c6d1] group-hover:translate-y-[-4px] group-hover:duration-300 ">
						keyboard_double_arrow_up
					</span>
					{/* <MdKeyboardDoubleArrowUp /> */}
					<span className="hidden md:block">TOP</span>
				</p>
			</div>
		</div>
	);
}

export default TopArrowBtn;
