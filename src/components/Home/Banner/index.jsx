import React from 'react';
import './styles.css';
import bannerImg from './banner3.png';
import Logo from '../../common/Logo';



const Banner = ({ handleScrollMenu }) => (
  <header>
    <div className='header-content'>
      <Logo />
      <div className='content-main'>
        <h1> Bridging the Gap Between Customers and Farmers</h1>
        <p>FoodFramBridge
Connecting You with Fresh, Local Vegetables
Supporting Local Farmers, Farm-to-Table Goodness
Join the Farm-to-Table Revolution Today
Get Fresh, Flavorful Vegetables Straight from the Source
Sign Up and Support Local Agriculture</p>
        <button
      onClick={handleScrollMenu}
      className="menu-button"
    >
      View Menu <i className="fas fa-long-arrow-alt-right"></i>
    </button>
      </div>
    </div>
    <img className='header-img' src={bannerImg} alt='banner' style={{ width: '100%', height: 'auto' }}/>

  </header>
);

export default Banner;