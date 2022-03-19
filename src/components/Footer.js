import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
import gmail from './images/gmail.jpeg'

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-buttons">
                <SocialIcon fgColor='white' url="https://www.facebook.com/prabinpanta" />
                <SocialIcon fgColor='white' url="https://www.linkedin.com/in/prabinpanta/" />
                <SocialIcon bgColor='#C13584' fgColor='white' url="https://www.instagram.com/panta_prabin_10/" />
                <SocialIcon fgColor='white' url="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDfnVXdcvjSVQblKQlrQCvFMXHjRkLPZPkwWzwvzslZHwGdTFjWKsFHstTBWbBhRpvSqKq" />
            </div>
             {/* <a style={{color:"gold"}} href="https://www.linkedin.com/in/prabinpanta/">check out my LinkedIn </a> */}
        </footer>
    )
}


export default Footer