import React from 'react'
import { Dashpord } from '../dashpord/Dashpord'
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper";
import dashpord  from "../../assets/images/dashboard.png"
import "./overview.scss"


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../../index.css";

export const OverView = () => {
    return (
        <>
            <div className="OverView-wrapper container py-5 mt-5">
                <div className="OverView-text">
                    <h6>Advanced Customer Service Platform</h6>
                    <h2>Platform Overview </h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                         sed diam nonumy eirmod tempor invidunt ut labore et
                          dolore magna aliquyam erat, sed diam voluptua. 
                          At vero eos et accusam et justo duo dolores et ea rebum.
                           Stet clita kasd gubergren, no sea takimata sanctus
                            est Lorem ipsum dolor sit amet
                    </p>


                </div>
                <div>
                <Swiper
               pagination={{
                  dynamicBullets: true,
               }}
               modules={[Pagination]}
               className="mySwiper"
            >
               <SwiperSlide>
                  <img src={dashpord} alt="" />
               </SwiperSlide>
               <SwiperSlide>
               <img src={dashpord} alt="" />
               </SwiperSlide>
               <SwiperSlide>
               <img src={dashpord} alt="" />
               </SwiperSlide>
            </Swiper>
                   
                {/* <Dashpord/> */}
                </div>

            </div>

        </>
    )
}
