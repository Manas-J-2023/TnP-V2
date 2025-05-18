import React from 'react'
import Hero from '@/components/process/Hero';
import PlacementCards from '@/components/process/PlacementCard';
import Faq from '@/components/process/Faq';
import Experience from '@/components/process/Process';

const Process = () => {
  return (
    <div>
      <Hero />
      <PlacementCards />
      <Experience />
      <Faq />
    </div>
  )
}

export default Process
