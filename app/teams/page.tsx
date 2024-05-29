import React from 'react'
import Header from '@/components/Header'
import { Teams , Gallery, Embark} from '@/components'

const page = () => {
  return (
    <div>
        <Header heading="Teams"/>
        <Teams/>
        <Embark/>
        <Gallery/>
    </div>
  )
}

export default page