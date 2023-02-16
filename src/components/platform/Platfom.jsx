import React from 'react'
import AboutSuccess from '../aboutSuccess/AboutSuccess'
import { Dashpord } from '../dashpord/Dashpord'
import { Line } from '../line/Line'
import leftSquare from "../../assets/images/left-square (1).png"
import rightSquare from "../../assets/images/right-quare.png"
import "./platform.scss"

export const Platfom = ({ direction }) => {
  return (
    <>
      <div className="platfom-wrapper py-4 mt-4">
        <div className={`background  ${direction === "left" ? "left" : "right"}`}>
          <img src={direction === "left" ? leftSquare : rightSquare} alt="" />
        </div>
        {direction === "left" ?
          <div className="container-fluid left-contain "> 
           <div className="row justify-content-between align-items-center   ">
            <div className="col-lg-7 dashpord-wrapper">
              <Dashpord />
            </div>
            <div className="col-lg-4 platform-text">
              <div className='py-3'> <Line /></div>
              <AboutSuccess header={"The best business solution for you"} link={false} />
            </div>
          </div>  </div> :
          <div className="container">
            <div className="row justify-content-around align-items-center ">
              <div className="col-lg-5 platform-text">
                <div className='py-3'> <Line /></div>
                <AboutSuccess header={"The best business solution for you"} link={false} />
              </div>
              <div className="col-lg-7 dashpord-wrapper">
                <Dashpord />
              </div>

            </div>


          </div>}



      </div>


    </>
  )
}
