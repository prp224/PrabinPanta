import React from 'react'
import Footer from './Footer'
import lehigh from './images/lehigh.JPG'

function Prof() {
    return (
        <div className='container'>
            <header className='App-header prof'>
            <img style={{ width:'40%'}}  src={lehigh}></img>
                <h3>Education</h3>
                <div className='education'>
                    <div className='college'>
                        <h2>Lehigh University</h2>
                            <ul>
                                <li>2020-2024</li>
                                <li>B.S Computer Engineering</li>
                                <li>GPA: 3.48</li>
                                <li>Dean's List Fall 2021</li>
                            </ul>
                        </div>
                        <div className='highSchool'>
                            <h2>Westside High School</h2>
                            <ul>
                                <li>2016-2020</li>
                                <li>GPA: 4.4</li>
                                <li>top 10% of my class</li>
                                <li>Honors Student</li>
                            </ul>
                        </div>
                </div>
                <h3>Skills</h3>
                <div className='skills'>
                    <ul>
                        <li>
                            Programming: Java, HTML, CSS, Javascript, ReactJS,
                            Matlab, VHDL
                        </li>
                        <li>
                            Technical knowledge: circuit analysis, combinational and <br /> sequential circuits,
                            data structures
                        </li>
                    </ul>
                </div>
                <h3>Work Experience</h3>
                    <div className='workEx'>
                        <ul>
                            <li>
                                Extern, Schlumberger: shadowed engineers at one biggest
                                oil and gas field service company and created an interactive 
                                presentation on sustainability.
                            </li>
                            <li>
                                Team Member, Chick-fil-A: served customers by taking their 
                                orders, packaging food, making drinks and delivering food. 
                            </li>
                        </ul>
                    </div>
                <div>

                </div>
            </header>
            <Footer />
        </div>
    )
}

export default Prof
