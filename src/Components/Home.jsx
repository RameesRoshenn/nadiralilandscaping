import React from 'react'
import Navigation from './Navigation'
import LandingPage from './LandingPage'
import Features from './Features'
import Coverages from './Coverages'
import Footer from './Footer'

function Home() {
  return (
    <div>
        <Navigation/>
     <LandingPage/>
     
     <Features/>
     <Coverages/>
    
     <Footer/>
    </div>
  )
}

export default Home