"use client";
import { createContext, useContext, useRef, useEffect, useState } from "react";
// import { ChevronDown } from "react-feather";
import { IoIosArrowDown } from "react-icons/io";

const AccordianContext = createContext();

export default function Accordion({ children, value, onChange, ...props }) {
	const [selected, setSelected] = useState(value);
	const [reRender, setReRender] = useState(false); // New state to trigger re-render

	useEffect(() => {
		if (value === undefined && children && children.length > 0) {
			setSelected(children[0]?.props?.value);
		}
		setReRender(true);
	}, [value, children]);

	useEffect(() => {
		onChange?.(selected);
	}, []);

	return (
		<ul {...props}>
			<AccordianContext.Provider value={{ selected, setSelected, reRender }}>{children}</AccordianContext.Provider>
		</ul>
	);
}

export function AccordianItem({ children, value, trigger, ...props }) {
	const { selected, setSelected, reRender } = useContext(AccordianContext);
	const open = selected === value;

	const ref = useRef(null);

	return (
		<li className="max-w-[1095px]  font_poppins" {...props}>
			<header
				role="button"
				onClick={() => setSelected(open ? null : value)}
				className="relative flex justify-between items-center py-5 pr-5   md:py-[26px] text-[17px] md:text-[24px] font-[400] text-[#D9D9D9]"
			>
				<div>
					<span className="mr-3 text-[22px] md:text-[32px]">Q.</span>
					{trigger}
				</div>
				<IoIosArrowDown size={22} className={`border-[1px] border-[#345029] text-[#FC7008] rounded-full p-[3px] transition-transform absolute right-0 sm:right-4 ${open ? "rotate-180" : ""}`} />
			</header>
			<div
				className="overflow-y-hidden transition-all border-b-[1px] border-b-[#1C2B17] max-w-[1095px] mx-auto text-[14px] md:text-[18px] leading-[1.6] text-[#A3A3A3]"
				style={{ height: open && reRender ? ref.current?.offsetHeight || 0 : 0 }}
			>
				<div className=" pb-5 px-[px]" ref={ref}>
					<div>
						<span className="mr-3 text-[22px] md:text-[32px] text-[#FF0000]">A.</span>
						{children}
					</div>
				</div>
			</div>
		</li>
	);
}
