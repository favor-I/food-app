import React from 'react';
import { Link } from 'react-router-dom';
import LButtun from '../components/LButton/LButton'
import leftArrow from '../assets/svgs/left-arrow.svg'
import rightArrow from '../assets/svgs/right-arrow.svg'
import restaurantOne from '../assets/images/restaurant1.png';

const LandingPage = () => {

  return (
    <>
        <div className='slider'>
            <div className='bg-image'>
                <img src={restaurantOne} alt = {'restaurant img'}></img>
            </div>
            <div className='content-text'>
                <h1>Welcome to <span className='content-text-sushi'>Sushi</span> Restaurant</h1>
                <p>People eat with their eyes and Sushi creates an easy way for customers to order when they can see beautiful photos of your food</p>
                <div className='content-btn'>
                    <Link to = '/menu'> <LButtun buttonName={'Menu'} /> </Link>
                    <Link to = '/cart'> <LButtun buttonName={'Cart'} /></Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default LandingPage