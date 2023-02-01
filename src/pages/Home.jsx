import React from 'react'
import { BestSolution } from '../components/bestSolution/BestSolution'
import Customers from '../components/customers/Customers'
import { Footer } from '../components/footer/Footer'
import { Hero } from '../components/hero/Hero'
import { MarketResearch } from '../components/marketResearch/MarketResearch'
import { OurNumbers } from '../components/ourNumbers/OurNumbers'
import { OverView } from '../components/overView/OverView'
import { Platfom } from '../components/platform/Platfom'
import { Testmonails } from '../components/testmonails/Testmonails'
import "./home.scss"

export const Home = () => {
  return (
    <>
    <div className="home-wrapper">
    <Hero/>
      <Customers/>
      <BestSolution/>
      <Platfom direction={"left"}/>
      <OverView/>
      <Platfom direction={"right"}/>
      <MarketResearch/>
      <OurNumbers/>
      <Testmonails/>
      <Footer/>

    </div>

    </>
  )
}
