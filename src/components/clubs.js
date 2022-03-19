import React from 'react'
import Footer from './Footer'

const clubs = () => {
  return (
    <div className='container'>
        <header className='App-header'>
        <h1>Clubs {'&'} Extracirricular Activites</h1>
        <h2>Underwater Robotics</h2>
        <p>I joined Lehigh UUnderwater Robotics in October 2021 as part of the
            Electrical Team in hopes of contributing to the wiring and power supply
            of the underwater drone. I also recieved the opportunity to work ROS using
            a Linux operating system with the Jetson nano computer which is used to control
            the drone.
        </p>
        <h2>Lehigh University Space Initiative</h2>
        <p>I joined the Lehigh University Space Initiative around the same time as I joined 
            Underwater Robotics. I am involved with the robotics arm team in the University Mars Rover 
            challenge and helped program the acctuators to help with the movement of the robotic arm. 
        </p>
        <Footer />
        </header>
    </div>
  )
}

export default clubs