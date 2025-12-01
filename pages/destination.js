const { default: HomeHero } = require("@/components/destinations/HomeHero");
import Locations from '@/components/destinations/Locations';
import React from 'react';

function destination() {
  return (
    <div>
        <HomeHero />
        <Locations />
    </div>
  )
}

export default destination