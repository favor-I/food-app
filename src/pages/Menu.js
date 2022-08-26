import React from 'react'
import menu1 from '../assets/images/menu1.png'
import menu2 from '../assets/images/menu2.png'
import menu3 from '../assets/images/menu3.png'
import menu4 from '../assets/images/menu4.png'
import menu5 from '../assets/images/menu5.png'
import menu6 from '../assets/images/menu6.png'
import menu7 from '../assets/images/menu7.png'
import menu8 from '../assets/images/menu8.png'
import pageTitleLine from '../assets/svgs/page-title-line.svg'
import Button from '../components/Button/Button'
import Sidebar from '../components/Sidebar/Sidebar'

const Menu = ({sidbarItems}) => {
    console.log(sidbarItems)
    const menuItems = [
        {menuPicture: menu1, menuName: 'Smashed Avo' },
        {menuPicture: menu2, menuName: 'Yin & Yang' },
        {menuPicture: menu3, menuName: 'Pancakes' },
        {menuPicture: menu7, menuName: 'Breakkie Roll' },
        {menuPicture: menu4, menuName: 'Haveos Rancherous' },
        {menuPicture: menu5, menuName: 'Rancherous (Tofu)' },
        {menuPicture: menu2, menuName: 'Yin & Yang' },
        {menuPicture: menu6, menuName: 'Breakkie Roll' },
        {menuPicture: menu5, menuName: 'Rancherous (Tofu)' },
        {menuPicture: menu8, menuName: 'Burritos' }
    ]


    return (
        <div className='menu-container'>
            <Sidebar />
            <div className='menu-showroom'>
                <div className='menu-title'>
                    <h1 className='menu-title'>SUSHI FOOD</h1>
                    <img src={pageTitleLine} alt='page title line svg' />
                </div>
                <div className='menu-item-card-container'>
                    {
                        menuItems && menuItems?.map((menu, index) => (
                            <div className='menu-item-card'>
                                <img src={menu.menuPicture} alt = {menu.menuName}></img>
                                <p>{menu.menuName}</p>
                            </div>
                        ))
                    }
                </div>
                <Button btnClassName={'load-more-btn'} text = {'LOAD MORE'} />
            </div>
        </div>
    )
}

export default Menu