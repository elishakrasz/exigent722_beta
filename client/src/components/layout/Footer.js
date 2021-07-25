import React from 'react';
import Apples from '../../assets/apples.jpg'

const AppleImage = () => (
  <div>
    <img src={Apples} alt="apple image" />
  </div>
)

const Footer = () => (
  <footer className=" mx-auto py-16 px-3 mt-48 mb-8 bg-gray-700 text-white ">
    <div className="flex mx-24">
      <div className="flex-1 px-3 w-1/3 item-center pr-24 ">
        <h2 className="text-lg font-semibold">About Us</h2>
        <h6 className="mt-5 text-sm">Exigent722 is being established as Israel’s leading multi-family office catering to the full breadth of needs for the returning Oleh Community. </h6>
      </div>
      <div className="w-1/3"></div>
      <div className="w-1/3"><div className="w-20"><AppleImage /></div></div>
      {/* <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold w-1/3">Links</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="">Terms &amp; Conditions</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
        </ul>
      </div> */}
      {/* <div className="flex-1 px-3 w-1/3">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://dev.to/changoman">Dev.to</a>
          </li>
          <li>
            <a href="https://twitter.com/HuntaroSan">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/codebushi/gatsby-starter-lander">GitHub</a>
          </li>
        </ul>
      </div> */}
    </div>
  </footer>
);

export default Footer;
