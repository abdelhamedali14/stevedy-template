import React from 'react'
import { NavBar } from '../navBar/NavBar'
import { TextHolder } from '../textHolder/TextHolder'
import dashpord from "../../assets/images/dashboard.png"
import "./hero.scss"
import { Dashpord } from '../dashpord/Dashpord'

export const Hero = () => {
  return (
    <>
    <div className="hero-Wrapper mb-5  pb-5">
        <NavBar />
        <div className="container">
            <div className="row justify-content-between align-items-center ">
                <div className="col-md-6">
                    <TextHolder/>
                </div>
                <div className="col-md-6 image-hero-wrapper  ">
                    <Dashpord/>
                </div>
            </div>
        </div>
        
    </div>
    </>
  )
}
