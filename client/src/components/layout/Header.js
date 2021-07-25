import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ExigentLogoImg from '../../assets/ExigentX.png'
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import Birds from '../../assets/birds.jpg'

export const ExigentLogo = () => (
  <div>
     <img src={ExigentLogoImg} alt="logo" />
  </div>
 
)

const BirdImage = () => (
  <div style={{
  }}>
    <img src={Birds} alt="bird image" />
  </div>
)

const Header = () => (
  <header className="sticky text-gray-700 mt-2">
    <div className="container justify-between items-center flex flex-col sm:flex-row mx-auto py-2 pl-6 mt-2">
      <div className="flex text-3xl">
        Exigent722
        <div className="w-5 pt-1">
          <ExigentLogo className=""/>
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0 justify-end">
        {/* <AnchorLink className="px-4 text-gray-700 text-xl" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="px-4 text-gray-700 text-xl" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="px-4 text-gray-700 text-xl" href="#stats">
          Stats
        </AnchorLink>
        <AnchorLink className="px-4 text-gray-700 text-xl" href="#testimonials">
          Testimonials
        </AnchorLink> */}
        <div className="w-20 mt-2 pt-2 mr-2">
        <BirdImage />
        </div>
        {/* <AnchorLink className="text-gray-700 text-xl w-24" href="#form">
          
        </AnchorLink> */}
      </div>
      {/* <div className="hidden md:block">
      <AnchorLink className="px-4 text-gray-700 text-xl" href="#Contact Us">
          Contact Us
        </AnchorLink>
      </div> */}
    </div>
  </header>
);

export default Header;
