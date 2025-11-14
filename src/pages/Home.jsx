import React from 'react'
import Hero from '../components/Hero'
import LatextCollection from '../components/LatestCollection'
import BestSellers from '../components/BestSellers'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatextCollection />
      <BestSellers />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  )
}

export default Home
