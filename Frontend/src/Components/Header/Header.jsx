import logo from '../../assets/logo.png'
import search from '../../assets/search.svg'
import notification from '../../assets/notifications.svg'
import user from '../../assets/user.svg'
import arrow from '../../assets/arrow.svg'
import menu from '../../assets/menu.svg'
import './Header.css'

import { useState } from 'react'

function Header() {
  const [display, setDisplay] = useState(false)
  const [status, setStatus] = useState('hide')
  function handleSidebar(){
    
    if(display){
      setDisplay(false)
      setStatus('hide')
    }
    if(!display){
      setDisplay(true)
      setStatus('show')
    }
  }
  return (
    <>
      <header>
        <div className="left">
          <img className='logo' src={logo} alt="" />
          <nav>
            <div className="item">TV shows</div>
            <div className="item">Movies</div>
            <div className="item">Latest</div>
            <div className="item">Favorites</div>
            <div className="item">Browse by language</div>
          </nav>
        </div>
        <div className="right">
            <img className='search' src={search} alt="" />
            <img className='notification' src={notification} alt="" />
            <div className="user-container">
              <img className='user' src={user} alt="" />
              <img className='arrow' src={arrow} alt="" />
              <div className="dropdown">
                <ul>
                  <li>Profiles</li>
                  <li>Setting</li>
                  <li className='red'>Sign out</li>
                </ul>
              </div>
            </div>
            <img className='menu-icon' onClick={handleSidebar} src={menu} alt="" />
        </div>
          <section className={`small-nav ${status}`}>
          <nav>
            <br />
            <br />
                  <div className="item">TV shows</div>
                  <div className="item">Movies</div>
                  <div className="item">Latest</div>
                  <div className="item">Favorites</div>
                  <div className="item">Browse by language</div>
              </nav>
      </section>
      </header>
    </>
  )
}

export default Header
