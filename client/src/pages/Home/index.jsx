import React from 'react'
import Categories from '../../components/Categories'
import Contact from '../../components/Contact'
import FeaturedProducts from '../../components/FeaturedProducts'
import Slider from '../../components/Slider'
import "./style.scss"

const HomePage = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="Featured"/>
      <Categories />
      <FeaturedProducts type="Trending"/>
      <Contact />
    </div>
  )
}

export default HomePage