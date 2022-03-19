import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import soccer from "./images/soccer1.jpeg";
import naruto from "./images/naruto.jpg";

const HobbieSlide = () => {
  return (
    <div className="home-carousel">
        <Carousel autoPlay interval={5000} transitionTime={3000} infiniteLoop showStatus={false} useKeyboardArrows={true} showThumbs={false} >
                <div className='slideImage'>
                        <img src={soccer} />
                    </div>    
                    <div className='slideImage'>
                        <img src={naruto} />
                    </div>
        </Carousel>
    </div>
  )
}

export default HobbieSlide