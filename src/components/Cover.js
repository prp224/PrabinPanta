import React from 'react'
import image from './images/coverPhoto.jpeg'
import Occupation from "./Occupation";
import Footer from './Footer'

const Cover = () => {
    return (
        <div className="cover">
            <header className='App-header'>
                {/* <img className="cover-photo" src={image}/> */}
                <h1>Hi, I'm Prabin!</h1>
                <Occupation />
            </header>
            <Footer />
        </div>
    )
}

export default Cover
