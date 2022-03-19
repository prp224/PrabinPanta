
import React from 'react'
import HomeCarousel from './HomeCarousel'
import Footer from './Footer'

const Home = () => {

    const onClick = () => {
        window.location.assign('https://reactjs.org/docs/getting-started.html#learn-react')
    }

    return (
        <div className="container" >
            <header className="App-header">
                <HomeCarousel></HomeCarousel>
                <body className="body">
                <h1>Welcome to my Website!</h1>
                <h3>Why have I decided to create this website?</h3>
                <p className='main-text'>
                    I have spent some time lerning Web development through
                    a web development bootcamp on udemy and it has inspired me to 
                    learn more about developing websites and web applications. Therefore, 
                    I decided to learn React JS which is a javascript framework which makes 
                    web development easier and makes combining HTML and javascript a lot more efficient.
                    I made this website as a means to test my knowledge in React Js and web development.
                    In this project I learned many new things like:
                    <ul className='list'>
                        <li>how to make JSX components and how to use them,</li>
                        <li>how to use npm packages to help making website building a little easier and, </li>
                        <li>how to use react router dom to create different pages in a website</li>
                    </ul>
                </p><br />
                <h2>My future Goals:</h2>
                <p>
                    Next, I hope I can keep developing my skills as a programmer and developer while 
                    maintainig my workload in college and extra cirricular activities. I want to continue 
                    improving my skills in React and front-end development and start learning some back-end development 
                    such as: MongoDB, SQL and Node Js.
                </p>
                <div className="spin-logo">
                    <form type='submit' action="https://reactjs.org/docs/getting-started.html#learn-react">
                        <button className="react-logo"></button>
                    </form>
                    <h2>React Rules!!</h2>
                </div>
            </body>
            </header>
            <Footer />
        </div>
    )
}

export default Home

