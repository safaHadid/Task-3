import React from 'react'
import Hero from '../../components/Hero/Hero'
import Featured from '../../components/Featured/Featured'
import VideoView from '../../components/VideoView/VideoView'
import BestDeal from '../../components/BestDeal/BestDeal'
import ContactUs from '../../components/ContactUs/ContactUs'
import Footer from '../../components/Footer/Footer'
import Properties from '../../components/Properties/Properties'

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Featured />
      <VideoView />
      <BestDeal />
      <Properties />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Home