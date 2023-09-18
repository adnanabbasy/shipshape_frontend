import React from 'react'
import Banner from '../MyComponent/Banner';
import Header from './Header';
import Footer from './Footer';
import DiscoverProfessional from '../MyComponent/DiscoverProfessional';
import ProudPartner from '../MyComponent/ProudPartner';

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <DiscoverProfessional />
      <ProudPartner />
      <Footer />
    </div>
  )
}

export default Home
