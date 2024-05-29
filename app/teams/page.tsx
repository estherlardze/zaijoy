import React from 'react'
import Header from '@/components/Header'
import { Teams , Gallery, Embark} from '@/components'

const Team = () => {
  return (
    <div className='overflow-x-hidden'>
        <Header heading="Teams"/>
        <Teams/>
        <Embark/>
        <Gallery/>
    </div>
  )
}

export default Team