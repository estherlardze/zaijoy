import React from 'react'
import Header from '@/components/Header'
import {Awards, Welcome, WhyChooseUs, Team, Faqs, Branch, Embark, Gallery} from '@/components/index'

const page = () => {
  return (
    <div>
        <Header heading ='About-us'/>
        <Welcome/>
        <WhyChooseUs/>
        <Awards/>
        <Team/>
        {/* <Faqs/> */}
        <Branch/>
        {/* <Embark/> */}
        <Gallery/>
    </div>
  )
}

export default page
