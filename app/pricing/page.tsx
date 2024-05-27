import React from 'react'
import Header from '@/components/Header'
import { Gallery , Adventure} from '@/components'

const page = () => {
  return (
    <div>
        <Header heading="Pricing"/>
        <Adventure/>
        <Gallery/>
    </div>
  )
}

export default page