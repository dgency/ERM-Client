import Image from 'next/image'
import React from 'react'

function WiningStrategy({winingStrategy,bodyColor}) {
  return (
    <div className={`better_perform g-page_structure  ${bodyColor}`}>
    <div className="main-content  m-auto">
        <h2 className="g__section-heading pt-14 md:pt-20 text-center">
            {winingStrategy && winingStrategy.data?.attributes.wining_strategy?.title_first_line} <br className="hidden xl:block" />
            {winingStrategy && winingStrategy.data?.attributes.wining_strategy?.title_second_line}
        </h2>
        <p className="g__section-description text-center">{winingStrategy && winingStrategy.data?.attributes.wining_strategy?.description}</p>
    </div>
    <div className=" flex flex-col md:flex-row gap-8 lg:gap-32 justify-center items-center pt-10 md:pt-16 ">
        <p
            className=" md:text-xl max-w-sm md:w-[478px] "
            dangerouslySetInnerHTML={{ __html: winingStrategy && winingStrategy.data?.attributes.wining_strategy?.strategy_1 }}
        />

        <Image
            src={winingStrategy && winingStrategy.data?.attributes.wining_strategy?.strategy_image_1?.data?.attributes.url}
            alt=""
            width={300}
            height={100}
            className="w-[200px] lg:w-[235px] lg:h-[250px]"
        />
    </div>
    <div className=" flex md:flex-row-reverse flex-col  gap-8 lg:gap-32 justify-center items-center pt-16 md:pt-14 pb-14 md:pb-24 ">
        <p
            className=" md:text-xl max-w-sm md:w-[478px]"
            dangerouslySetInnerHTML={{ __html: winingStrategy && winingStrategy.data?.attributes.wining_strategy?.strategy_2 }}
        />

        <Image
            src={winingStrategy && winingStrategy.data?.attributes.wining_strategy?.strategy_image_2?.data?.attributes.url}
            alt=""
            width={300}
            height={100}
            className="w-[200px] lg:w-[235px] lg:h-[250px]"
        />
    </div>
</div>
  )
}

export default WiningStrategy