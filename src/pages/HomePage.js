import React, { useState } from 'react';
import Hero from '../components/Hero/Hero';
import Navbar from '../components/Navbar/Navbar';
import ReusableSection from '../components/ReusableSection/ReusableSection';
import Sidebar from "../components/Sidebar/Sidebar";
import {dataOne, dataThree, dataTwo} from '../components/ReusableSection/Data';
import Services from '../components/Services/Services';
import Footer from '../components/Footer/Footer';

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
      <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <ReusableSection {...dataOne} />
      <ReusableSection {...dataTwo} />
      <ReusableSection {...dataThree} />
      <Services />
      <Footer />

    </>
  )
}

export default HomePage;