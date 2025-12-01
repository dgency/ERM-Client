import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function EuHero({heroData}) {
  return (
    <div className="flex flex-col lg:flex-row  lg:w-full items-center lg:items-start lg:justify-between mb-72 lg:mb-56 relative">
			<div className="flex-1">
				<Image
					src={heroData?.left_image?.data?.attributes.url}
					alt=""
					width={353}
                    height={1014}
					loading="eager"
                    quality={100}
					className="h-[300px] lg:h-[500px]  xl:h-[650px]  w-auto block absolute -bottom-72 lg:-bottom-56 left-[50%] translate-x-[-50%] lg:translate-x-0 lg:left-0"
				/>
			</div>
			<div className="md:min-w-[350px] max-w-[600px] mx-auto flex-1 relative z-20">
				<div>
					<div className="flex justify-center mt-5 md:mt-0  xl:mt-[35px] ">
						<Link
							href="/free-marketing"
							className="flex md:block items-center gap-2.5 tracking-wider text-center bg-[#FF492C] hover:bg-[#E74329] py-3 px-[14px] md:px-6 text-white text-[16px] xl:text-lg 2xl:text-[20px] rounded font-[700]"
						>
							<Image
								src="/components/faq/lock_close.svg"
								height={20}
								width={18}
								alt=""
								className="hero-cta_image w-[23px] h-[30px] inline-block md:hidden"
							/>

							<span className="inline-block">{heroData?.cta}</span>
							{/* <span className="g_cta-text inline-block md:hidden">UNLOCK YOUR MARKETING PLAN</span> */}
						</Link>
					</div>
					<p className="text-[#222] text-center text-[14px] xl:text-lg  pt-4 pb-6 xl:pt-6 md:pb-12 px-4 md:px-0 flex justify-center">
						{heroData?.description_under_cta}
					</p>
				</div>
			</div>
			<div className="flex-1">
				<Image
					src={heroData?.right_image?.data?.attributes.url}
					alt=""
					height={700}
					width={400}
					loading="eager"
                    quality={100}
					className=" h-[280px] xl:h-[350px] w-auto  absolute -bottom-72 lg:-bottom-56 right-0 hidden lg:block"
				/>
			</div>
		</div>
  )
}

export default EuHero