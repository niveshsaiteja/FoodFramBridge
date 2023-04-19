import React from 'react';
import logo from './logo3.png';
import './styles.css';

const Logo = () => (
  <div className='header-content_logo'>
    <div>
      <img src={logo} alt='logo' style={{ width: '100px', height: '100px',marginRight: '-10px' }} />
      <div>
      <h1 style={{ margin: '0', fontFamily: 'Helvetica', fontSize: '24px', fontWeight: 'bold', color: 'black' }}>FoodFramBridge</h1>
      <p style={{ fontFamily: 'Arial', fontSize: '16px', color: 'black' }}>
        --Connection between customer and farmer</p>
        </div>
    </div>
  </div>
);

export default Logo;
