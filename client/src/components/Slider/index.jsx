import React, { useState } from 'react';
import {EastOutlined, WestOutlined} from "@mui/icons-material";
import "./style.scss"


const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);


  const data = [
    "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/447570/pexels-photo-447570.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/428363/pexels-photo-428363.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ]

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? (data.length - 1) : (prev) => prev - 1)
  }

  const nextSlide = () => {
    setCurrentSlide(currentSlide === (data.length - 1) ? 0 : (prev) => prev + 1)
  }

  return (
    <div className="slider">
      <div className="container" style={{ width: `${data.length * 100}vw`, transform: `translateX(-${currentSlide * 100}vw)`}}>
        {
          data.map((pic, i) => <img key={`pic-${i}`} src={pic} alt={`pic-${i}`} />)
        }
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <WestOutlined />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlined />
        </div>
      </div>
    </div>
  )
}

export default Slider