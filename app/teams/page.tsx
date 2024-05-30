'use client'
import React, {useEffect} from 'react'
import Header from '@/components/Header'
import AOS from "aos";
import "aos/dist/aos.css";
import { Teams , Gallery, Embark} from '@/components'

const Team = () => {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    });
  }, []);
  
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