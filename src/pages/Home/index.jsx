import React, { useRef } from 'react';
import ButtonCartCount from '../../components/common/ButtonCartCount';
import Footer from '../../components/common/Footer';
import Banner from '../../components/Home/Banner';
import Menu from '../../components/common/Menu';
import Menu1 from '../../components/Menu-2/Menu-2';
import SectionHeading from '../../components/Menu-2/Menu-2/sectionheading'
import { menuItemsData } from '../../components/common/Menu/data';

const Home = () => {
  const menuRef = useRef();

  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Banner handleScrollMenu={handleScrollMenu} />
      <Menu list={menuItemsData} ref={menuRef} />
      
      <SectionHeading/>

      <Menu1 list={menuItemsData} ref={menuRef} />
      <Footer />
      <ButtonCartCount />
    </div>
  );
};

export default Home;
