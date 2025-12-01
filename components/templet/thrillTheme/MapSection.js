import Image from "next/image";
import React from "react";
import map from '@/public/templet/thrillTheme/map.svg'

function MapSection() {
	return (
		<div className="g_container--theme pt-10 pb-20 flex items-center">
			<div className="flex-none"> 
				<h2 className="header_2 ">Visit Us</h2>
				<p className="text-white text-[32px] font_poppins font-[700]">
					Hollywood <span className="text-[#fc7008]">Questroom</span>
				</p>

				<div className="font_poppins text-[#bfbfbf] mt-[45px] space-y-8 max-w-[365px]">
					<div className="flex gap-4">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" className="flex-none mt-1.5" viewBox="0 0 19 25" fill="none">
							<path
								d="M9.51538 0.310547C4.53588 0.310547 0.483643 4.39088 0.483643 9.40751C0.483643 16.5356 8.6664 23.8954 9.01462 24.2045C9.15813 24.332 9.33675 24.3952 9.51538 24.3952C9.69401 24.3952 9.87264 24.332 10.0161 24.2055C10.3644 23.8954 18.5471 16.5356 18.5471 9.40751C18.5471 4.39088 14.4949 0.310547 9.51538 0.310547ZM9.51538 14.3599C6.74866 14.3599 4.49775 12.109 4.49775 9.34229C4.49775 6.57556 6.74866 4.32465 9.51538 4.32465C12.2821 4.32465 14.533 6.57556 14.533 9.34229C14.533 12.109 12.2821 14.3599 9.51538 14.3599Z"
								fill="#BFBFBF"
							/>
						</svg>
						<p className="text-xl ">5517 Santa Monica Blvd, Los Angeles, CA 90038</p>
					</div>
					<div className="flex items-center gap-4">
						<svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" className="flex-none" viewBox="0 0 23 17" fill="none">
							<path
								d="M22.52 1.47705L15.7253 8.22791L22.52 14.9788C22.6428 14.722 22.7173 14.4382 22.7173 14.1352V2.32065C22.7173 2.01754 22.6428 1.73378 22.52 1.47705Z"
								fill="#BFBFBF"
							/>
							<path
								d="M20.7482 0.351562H2.28256C1.97946 0.351562 1.69569 0.426082 1.43896 0.548909L10.1232 9.18939C10.8911 9.95724 12.1397 9.95724 12.9076 9.18939L21.5918 0.548909C21.3351 0.426082 21.0513 0.351562 20.7482 0.351562Z"
								fill="#BFBFBF"
							/>
							<path
								d="M0.510823 1.47705C0.387996 1.73378 0.313477 2.01754 0.313477 2.32065V14.1352C0.313477 14.4383 0.387996 14.7221 0.510823 14.9788L7.30543 8.22791L0.510823 1.47705Z"
								fill="#BFBFBF"
							/>
							<path
								d="M14.7972 9.15576L13.8357 10.1172C12.5563 11.3967 10.4744 11.3967 9.19502 10.1172L8.23358 9.15576L1.43896 15.9066C1.69569 16.0294 1.97946 16.104 2.28256 16.104H20.7482C21.0513 16.104 21.3351 16.0294 21.5918 15.9066L14.7972 9.15576Z"
								fill="#BFBFBF"
							/>
						</svg>
						<p className="text-xl ">hollywood@questroom.com</p>
					</div>
					<div className="flex items-center gap-4">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" className="flex-none" viewBox="0 0 21 20" fill="none">
							<path
								d="M19.6615 14.4047L16.9618 11.705C15.9976 10.7408 14.3585 11.1265 13.9728 12.3799C13.6835 13.2477 12.7193 13.7298 11.8516 13.5369C9.92319 13.0548 7.31988 10.548 6.83778 8.52316C6.54853 7.65535 7.12704 6.69116 7.99481 6.40195C9.24825 6.01627 9.63393 4.37715 8.66974 3.41296L5.97001 0.71323C5.19866 0.0382982 4.04163 0.0382982 3.3667 0.71323L1.53474 2.54519C-0.297216 4.47357 1.72758 9.58377 6.25927 14.1155C10.791 18.6471 15.9012 20.7684 17.8295 18.84L19.6615 17.008C20.3365 16.2367 20.3365 15.0796 19.6615 14.4047Z"
								fill="#BFBFBF"
							/>
						</svg>
						<p className="text-xl ">323-880-0221</p>
					</div>
					<div className="flex gap-4">
						<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" className="flex-none mt-1.5" viewBox="0 0 22 22" fill="none">
							<path
								d="M20.7013 10.4115L11.2531 0.963317C10.8437 0.553894 10.177 0.553894 9.77286 0.963317L0.324645 10.4115C-0.0847776 10.821 -0.0847776 11.4876 0.324645 11.897L9.77286 21.34V21.3452C10.1823 21.7547 10.8489 21.7547 11.2583 21.3452L20.7066 11.897C21.1159 11.4823 21.1159 10.821 20.7013 10.4115ZM12.6125 13.7761V11.1516H8.41335V14.3011H6.31373V10.1019C6.31373 9.51922 6.78088 9.05207 7.36352 9.05207H12.6125V6.42754L16.2869 10.1019L12.6125 13.7761Z"
								fill="#BFBFBF"
							/>
						</svg>
						<p className="text-xl ">
							Directions: The parking lot is located around the back of the building off of St. Andrews Pl ...
						</p>
					</div>
				</div>
			</div>
            <Image src={map} alt="" height={725} width={1093} className="mix-blend-screen" />
		</div>
	);
}

export default MapSection;
