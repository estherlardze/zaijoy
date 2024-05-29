import React from 'react'
import Header from '@/components/Header'
import { Gallery , Pricing, Embark} from '@/components'

const page = () => {
  return (
    <div>
        <Header heading="Pricing"/>
        <Pricing/>
        <Embark/>
        <Gallery/>
    </div>
  )
}

export default page