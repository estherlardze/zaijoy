'use client'
import React, {useEffect} from 'react'
import Header from '@/components/Header'
import { Gallery , Adventure, Embark} from '@/components'
import AOS from "aos";
import "aos/dist/aos.css";

const Adventures = () => {

  
    useEffect(() => {
      AOS.init({
           duration: 1500,
           once: false,
         })
   }, [])

  return (
    <div className='overflow-x-hidden'>
        <Header heading="Adventure"/>
        <Adventure/>
        <Embark/>
        <Gallery/>
    </div>
  )
}

export default Adventures