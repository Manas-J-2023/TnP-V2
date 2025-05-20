import React from 'react'
import Navigation from '../components/Navigation'
import { PastHero } from '@/components/pastrecruiters/pasthero'
import Recruiters from '@/components/pastrecruiters/recruiters'
import Carousel from '@/components/pastrecruiters/carousel'
import ContactSection from '@/components/home/ContactSection'
import Feature from '@/components/pastrecruiters/feature'

const Pastrecruiters = () => {
  return (
    <div>
      <div  className='m-10'>
        <div><PastHero /></div>
        <div><Carousel/></div>
        <div><Feature/></div>
        <div><ContactSection/></div>
      </div>
        
    </div>
  )
}

export default Pastrecruiters