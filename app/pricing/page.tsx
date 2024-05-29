import React from 'react'
import Header from '@/components/Header'
import { Gallery , Pricing, Embark} from '@/components'

const Pricings = () => {
  return (
    <div className='overflow-x-hidden'>
        <Header heading="Pricing"/>
        <Pricing/>
        <Embark/>
        <Gallery/>
    </div>
  )
}

export default Pricings