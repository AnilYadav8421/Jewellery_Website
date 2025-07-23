import React from 'react'
import Hero from '../components/Hero'
import Collections from '../components/Collections'
import MostGifted from '../components/MostGifted'
import ShopByCategory from '../components/ShopByCategory'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Collections/>
      <MostGifted/>
      <ShopByCategory/>
    </div>
  )
}

export default Home