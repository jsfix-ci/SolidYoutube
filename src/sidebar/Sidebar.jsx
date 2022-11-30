import '../App.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import { menuItem } from './SidebarData'
import { footerMenuItem } from './SidebarData'
import { PosibilitiesMenuItem } from './SidebarData'
import { NavigatorMenuItem } from './SidebarData'
import { SubscriptionsMenuItem } from './SidebarData'

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <div className='navbar'>
        <Link to='#' className='sidebar'>
          <MenuIcon onClick={toggle} />
        </Link>
        <div className='wrapp'>
          {menuItem.map((item, index) => (
            <Link to={item.path} key={index} className='link'>
              <div className='icon'>{item.icon}</div>
              <div style={{ display: isOpen ? 'block' : 'none' }} className='linkText'>
                {item.name}
              </div>
            </Link>
          ))}
          <hr style={{ display: isOpen ? 'block' : 'none' }}></hr>
        </div>

        <div className=''>
          <h3 style={{ display: isOpen ? 'block' : 'none' }}>Subscriptions</h3>
          {SubscriptionsMenuItem.map((item, index) => (
            <Link to={item.path} key={index} className='link'>
              <div style={{ display: isOpen ? 'block' : 'none' }} className='linkText'>
                {item.icon}
              </div>
              <div style={{ display: isOpen ? 'block' : 'none' }} className='linkText'>
                {item.name}
              </div>
            </Link>
          ))}
          <hr style={{ display: isOpen ? 'block' : 'none' }}></hr>
        </div>

        <div className='wrapp'>
          <h3 style={{ display: isOpen ? 'block' : 'none' }}>Navigator</h3>
          {NavigatorMenuItem.map((item, index) => (
            <Link to={item.path} key={index} className='link'>
              <div style={{ display: isOpen ? 'block' : 'none' }} className='linkText'>
                {item.icon}
              </div>
              <div style={{ display: isOpen ? 'block' : 'none' }} className='linkText'>
                {item.name}
              </div>
            </Link>
          ))}
          <hr style={{ display: isOpen ? 'block' : 'none' }}></hr>
        </div>

        <div className='wrapp'>
          <h3 style={{ display: isOpen ? 'block' : 'none' }}>Other possibilities</h3>
          {PosibilitiesMenuItem.map((item, index) => (
            <Link to={item.path} key={index} className='link'>
              <div
                style={{ color: 'red', display: isOpen ? 'block' : 'none' }}
                className='linkText'>
                {item.icon}
              </div>
              <div style={{ display: isOpen ? 'block' : 'none' }} className='linkText'>
                {item.name}
              </div>
            </Link>
          ))}
          <hr style={{ display: isOpen ? 'block' : 'none' }}></hr>
        </div>

        <div className=''>
          {footerMenuItem.map((item, index) => (
            <Link to={item.path} key={index} className='link'>
              <div style={{ display: isOpen ? 'block' : 'none' }} className='linkText'>
                {item.icon}
              </div>
              <div style={{ display: isOpen ? 'block' : 'none' }} className='linkText'>
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <main></main>
    </>
  )
}

export default Sidebar

