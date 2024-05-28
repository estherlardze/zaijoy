import React from 'react'
import Header from '@/components/Header'
import { Teams , Gallery} from '@/components'

const page = () => {
  return (
    <div>
        <Header heading="Teams"/>
        <Teams/>
        <Gallery/>
    </div>
  )
}

export default page