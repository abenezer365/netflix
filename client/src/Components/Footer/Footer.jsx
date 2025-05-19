import './Footer.css'
import youtube_logo from '../../assets/youtube.svg'
import instagram_logo from '../../assets/instagram.svg'
import facebook_logo from '../../assets/facebook.svg'
import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="social">
        <img src={youtube_logo} alt="" />
        <img src={instagram_logo} alt="" />
        <img src={facebook_logo} alt="" />
      </div>
      <div className="list">
            <ul className='container'>
                <li>Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
                <li>Service Code</li>
                <li>© 1997-2024 Netflix, Inc.</li>
            </ul>

            <ul className='container'>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            </ul>

            <ul className='container'>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
            </ul>

            <ul className='container'>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
            </ul>

      </div>
      <br />
      <div className="copyright">©Copyright <a href="https://abenezerzewge.com/">Abenezer Zewge 2025</a></div>
    </footer>
  )
}

export default Footer
