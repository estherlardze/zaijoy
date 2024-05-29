import React from 'react'
import Header from '@/components/Header'
import { Gallery , Adventure, Embark} from '@/components'

const page = () => {
  return (
    <div>
        <Header heading="Adventure"/>
        <Adventure/>
        <Embark/>
        <Gallery/>
    </div>
  )
}

export default page