import React from 'react'
import Footer from './Footer'
import HobbieSlide from './HobbieSlide.js'
import soccer1 from "./images/prabin_soccer1.jpg"
import soccer2 from "./images/prabin_soccer2.jpg"
import soccer3 from "./images/prabin_soccer3.jpg"

const Hobbies = () => {
    return (
        <div className='container'>
            <header className="App-header">
                <HobbieSlide />
                <h1>My Hobbies</h1>
                <h2>Piano</h2>
                <p>I started my piano journey when I was in the fifth grade. I had electronic 
                    keyboard that my parents had bought me and started taking lessons in my elementary school.
                    I stopped playing after elementary school because there was no piano lessons in my middle school.
                    I picked it back up after the pandemic hit and there wasn't much to do. I started by learning a 
                    recomendation I had recieved from a friend, a song called "River Flows in You" by Yurima. I have since learned
                    a few more pieces and enjoyed the process of learning and getting better. 
                </p>
                <iframe className="videos" src="https://youtube.com/embed/m8gjBHxuZYA?feature=share" allowFullScreen></iframe>
                <h2>Soccer</h2>
                <p>I started playing soccer around 2013/2014 when I my brother
                    started going to practices for a Nepali soccer club in houston.
                    We were part of the founding club which was called Dead Runner FC 
                    and started participating in tournaments. I also played in my high school
                    JV soccer team my freshman year of high school which helped me improve a lot. 
                    I started as a Right Back for the Dead Runner Football Club in its glory days
                    and won 2nd place with my team in the Dashain Cup. 
                </p>
                <div className="img-container">
                    <img className="tri-image" src={soccer1} />
                    <img className="tri-image" src={soccer2} />
                    <img className="tri-image" src={soccer3} />
                </div>
            </header>
            <Footer />
        </div>
    )
}

export default Hobbies
