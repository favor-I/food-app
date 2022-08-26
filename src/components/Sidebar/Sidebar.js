import React from 'react'
import './sidebar.modules.css'
// import cutleryIcon from './icons/curtlery-icon.svg'
import cartIcon from './icons/cart-icon.svg'
import locationIcon from './icons/location-icon.svg'
import exitIcon from './icons/exit-icon.svg'
import ess from './icons/S..svg'
import homeIcon from './icons/home-icon.svg'

const Sidebar = () => {
    const sidebarIcons = [
        {icon: ess, name: 'nav s icon' },
        {icon: homeIcon, name: 'nav home icon' },
        {icon: homeIcon, name: 'nav s icon' },
        {icon: homeIcon, name: 'nav s icon' },
        {icon: homeIcon, name: 'nav s icon' },
        {icon: homeIcon, name: 'nav s icon' },
        // {icon: cartIcon, name: 'nav cart icon' },
        // {icon: locationIcon, name: 'nav location icon' },
        // {icon: exitIcon, name: 'nav exit icon' }
    ]
  return (
    <div className='sidebar'>
        {
            sidebarIcons && sidebarIcons?.map((item, index) => (
                <div className='sidebar-item'>
                    <img src={item.icon} alt = {item.name}></img>
                </div>
            ))
        }
    </div>
  )
}

export default Sidebar