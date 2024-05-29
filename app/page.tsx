'use client'
import { useEffect } from 'react';

import Header from '@/components/Home/Header'
import {Features, Dedicated, Awards, Enhance} from '../components'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
         duration: 2000,
         once: false,
       })
 }, [])

  return (
    <main className="overflow-x-hidden">
      <Header/>
      <Features/>
      <Dedicated/>
      <Awards/>
      <Enhance/>
    </main>
  );
}
