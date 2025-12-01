"use client"
import React, { useEffect } from "react";
import CommonHero from "./CommonHero";
import { useRouter } from "next/router";
import CanadaHero from "./CanadaHero";
import EuHero from "./EuHero";

function SharedHero({ heroData }) {
    const router = useRouter();
    const routeEndpoint = router.query.location
    
	return (
        <div>
            {routeEndpoint === 'canada'?<CanadaHero heroData={heroData} />:routeEndpoint === 'eu'?<EuHero heroData={heroData} /> :<CommonHero heroData={heroData}  />}
        </div>
		
	);
}

export default SharedHero;
