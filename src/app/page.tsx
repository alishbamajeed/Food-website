"use client"


import React from 'react';
import Hero from './components/Hero';
import { Servicecard } from './components/Card';
import About from './components/About'
import Menu from './components/Menu'
import '../app/book/page'
import Team from './components/Team'
// import Client from './components/Client'
import Footer from './components/Footer'
const Page = () => {
  return (
    <div>
      <Hero />
  < Servicecard/>
  <About/>
  <Menu/>
  <Page/>
  <Team/>
  {/* <Client/> */}
  <Footer/>
    </div>
  );
};

export default Page;
