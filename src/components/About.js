import React, {Component} from 'react'
import propTypes from 'prop-types'
import {useState, useEffect} from 'react'
import profile from './images/Headshot.png'
import Footer from './Footer'

const About = (props) => {


    return (
        <div className="container">
            <header className="App-header" >
                <img className="profile" src={profile} alt="Profile-pic" />
                <h2>HI, I'm Prabin Panta!</h2>
                <body className='body'>
                    <h3>Bio:</h3>
                    <p>
                        I am a second year student at Lehigh University studying 
                        Computer Engineering. Aside from my studies,
                        I enjoy playing soccer, learning songs on the piano, and playing pool with my friends.
                        I am originally from Nepal, but I currently live in Houston with my family when
                        I am not at college. Math and Technology is something that has always inetrested me and 
                        it's something I'd hoped to pursue since I was young. 
                    </p>
                    <h3> <br />
                        Goals:
                    </h3>
                    <p>
                        My goal is to get into industry work within fields of AI and 
                        Machine Learning. I hope to work as an intern in this field and get 
                        some experience in the field before I graduate and work full time.
                        After Graduation, I want to work as a Software Engineer/Developer in a collaborative 
                        environment and help advance Machine Learning and AI and help forge the path into the future.
                    </p>
                </body>
            </header>
            <body>

            </body>
            <Footer />
        </div>
    )
}



export default About