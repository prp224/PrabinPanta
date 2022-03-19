import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

export default function Occupation() {



    return (
        <div className="carousel-wrapper">
            <Carousel showThumbs={false} fade={true} useKeyboardArrows={false} swipeable={false} stopOnHover={false} showStatus={false} showArrows={false}  showIndicators={false} infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <h3>A Student</h3>
                </div>
                <div>
                    <h3>A Developer</h3>
                </div>
                <div>
                    <h3>An Engineer</h3>
                </div>
            </Carousel>
        </div>
    );
}