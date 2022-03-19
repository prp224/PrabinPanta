import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import { bubble } from 'react-burger-menu'

import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'
import Logo from './images/logo.png'

const Navigation = () => {
  const props = {
    items: [
      {
        text: 'Home',
        link: '/Home'
      },
      {
        text: 'About',
        link: '/About'
      },
      {
        text: 'Education',
        link: '/Profession'
      },
      {
        text: 'Clubs',
        link: '/clubs'
      },
      {
        text: 'Hobbies',
        link: '/Hobbies'
      }
    ],
    logo: {
        img: Logo,
        link: '/'
    },
    style: {
      barStyles: {
        background: '#444',
        height: '30px',
      },
      linkStyles: {
        color: 'white',
        display: 'inline-flex',
      },
      sidebarStyles: {
        background: '#222',
        buttonColor: 'white',
      },
      logoStyles: {
        display: 'flex'
      }
    }
  }
  return <Navbar {...props} />
}

export default Navigation