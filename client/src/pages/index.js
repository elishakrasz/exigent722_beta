import React from 'react';
import { Link } from 'gatsby'
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';
import ExigentLogo from '../assets/ExigentX.png'
import BuildingImage from '../assets/building.jpg'
import Apples from '../assets/apples.jpg'
import Birds from '../assets/birds.jpg'
import Rock from '../assets/rock.jpg'
import '../../css/custom.css';

import ExigentLogo2 from '../assets/ExigentX.png'
import ContactForm from '../components/ContactForm';
// import CustomForm from '../components/CustomForm'
import MailChimpForm from '../components/MailChimpForm';
import ContactFormNet from '../components/ContactFormNet';
import ContactFormNodeMailer from '../components/ContactFormNodeMailer';
import ContactFormik from '../components/ContactFormik';



const AppleImage = () => (
  <div style={{
    width: '475px'
  }}
  className="ml-24"
  >
    <img src={Apples} alt="apple image" />
  </div>
)

const BirdImage = () => (
  <div style={{
    width: '450px'
  }}>
    <img src={Birds} alt="bird image" />
  </div>
)
const RockImage = () => (
  <div style={{
    width: '450px',
    marginLeft: '50px'
  }}>
    <img src={Rock} alt="rock image" />
  </div>
)
const Index = () => (
  <Layout className="">
    <section id="home" className="md:pt-40 mt-12">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left pt-4 lg:w-1/2 mt-8">
          <h1 className="2xl:text-8xl lg:text-5xl  font-extraLight leading-none pt-2">
            A Full Suite of High-Touch Services for Private Families
            {/* A full suite of high-touch services for private families */}
          </h1>
        <div className="pr-6">
        <p className="lg:text-xl lg:pr-2 mt-12 pr-8 text-justify">
            Exigent722 is being established as Israel’s leading multi-family office catering to the
            full breadth of needs for the returning Oleh Community.
          </p>

          <div>
            <p className="mt-6 text-xl lg:pr-2 pr-8 text-justify">
            722 BCE marks the year that King Sargon of Assyria invaded Israel and captured the ten northern tribes – leading to the first exile of the Jewish People from their ancestral homeland. Our mission is to undo the exile. 
            </p>
           <p className="mt-6 text-xl pr-8 lg:pr-2 text-justify">
           Exigent722 will offer a full suite of high-touch services for private families including Asset Management, Multi-jurisdictional Tax and Estate Planning, Philanthropic Advisory and Due Diligence and Generational Wealth Transfer. In addition, we will be bringing best of class service providers from our own ecosystem to assist our clients with pre-and-post Aliyah Concierge, Home Purchase, Mortgage, Insurance, Property Management and Private Banking. 
           </p>

           <p className="text-xl lg:pr-2 mt-4">
            If you are interested in a consultation, please tell us a bit about you and your family:
            </p>
          </div>
        </div>
        </div>
        <div className="w-1/2">
          {/* <HeroImage /> */}
          {/* <ContactFormik /> */}
          <ContactFormNodeMailer />
          <div>
          
            {/* <img src={BuildingImage} alt="building" /> */}
          </div>
         
        </div>
      </div>
    </section>
    {/* <CustomForm /> */}
    {/* <ContactForm /> */}
    {/* <MailChimpForm id="form" /> */}
    {/* <ContactFormNet id="form"/> */}
    {/* <ContactFormNodeMailer /> */}
    <section className="flex mt-8">
      <div className="w-1/4"></div>
    <div className="w-1/2 justify-center pl-6 p-16 m-24" >
  <img src={BuildingImage} alt="building" />
  </div>
  <div className="w-1/4"></div>
    </section>
  
    
    
    {/* <section id="features" className="mt-20 lg:mb-20 lg:pt-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-extraLight">Features</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-24">
          <div className="flex-1 px-3">
            <Card className="">
              <p className="font-semibold text-2xl">Asset Management</p>
              <p className="mt-4 text-lg">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="">
              <p className="font-semibold text-2xl ">Multi-jurisdictional Tax &amp; Estate Planning</p>
              <p className="mt-4 text-lg">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="">
              <p className="font-semibold text-2xl">Philanthropic Advisory &amp; Due Diligence</p>
              <p className="mt-4 text-lg">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section> */}
    {/* <section  id="services" className="pt-16">
      <div className="">
      <h2 className="text-3xl lg:text-5xl font-extraLight text-center mb-8">Services</h2>
      <SplitSection
      primarySlot={
        <div className="">
          <h3 className="text-3xl font-semibold leading-tight">Pre-and-Post Aliyah Concierge</h3>
          <p className="mt-6 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how your company stacks against the closest competitors
          </p>
        </div>
      }
      secondarySlot={<AppleImage />}
    
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Home Purchase and Property Management
          </h3>
          <p className="mt-6 text-xl font-light leading-relaxed">
            Once the market analysis process is completed our staff will search for opportunities
            that are in reach
          </p>
        </div>
      }
      secondarySlot={<BirdImage />}
     
    />
    <SplitSection
      primarySlot={
        <div className="lg:pl-4 xl:pl-8">
          <h3 className="text-3xl font-semibold leading-tight">
            Private Banking
          </h3>
          <p className="mt-6 text-xl font-light leading-relaxed">
            With all the information in place you will be presented with an action plan that your
            company needs to follow
          </p>
        </div>
      }
      secondarySlot={<RockImage />}
  
    />

      </div>
    </section> */}
    
    {/* <section id="stats" className="">
      <div className="container mx-auto text-center">
      <h2 className="text-3xl lg:text-5xl font-extraLight">Statistics</h2>
        <LabelText className="text-gray-600 text-lg lg:text-lg font-extraLight">Client Satisfaction</LabelText>
        <div className="flex flex-col sm:flex-row mt-8 lg:px-24">
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
          <div className="w-full sm:w-1/3">
            <StatsBox primaryText="+100%" secondaryText="Stats Information" />
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center text-xl font-extraLight">What our investors are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map((customer) => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section> */}
    <section className="container mx-auto rounded-lg text-center">
      <h3 className="text-2xl font-thin">Exigent Capital Group</h3>
      <p className="text-xl font-light">
      5 Wyndham Deedes St.
      </p>
      <p className="text-xl font-light mb-6">
      Jerusalem, Israel 9310633
      </p>
      <p className="text-xl font-light">
      Israel +972 2 500 9450
      </p>
      <p className="text-xl font-light">
      US 646 506 9450
      </p>
      <p className="text-xl font-light">
      <a href="mailto:exigent722@exigentcap.com">exigent722@exigentcap.com</a>
      </p>
    </section>
    <section className="h-24"></section>
    <section className="container mx-auto rounded-lg text-center mt-24">
      <h3 className="text-5xl font-semibold">Congratulations on your decision to make Aliyah!</h3>
      <p className="mt-8 text-xl font-light">
      If you are interested in a consultation, please contact us:
      </p>
      <p className="mt-12">
        <Button  size="lg"  style={{
          backgroundColor: '#C41E3A'
        }}><Link to="/#home">Contact Us Now</Link></Button>
      </p>
    </section>
  </Layout>
);

export default Index;
