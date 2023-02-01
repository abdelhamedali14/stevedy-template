import React from 'react'
import AboutSuccess from '../aboutSuccess/AboutSuccess'
import "./testmonails.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../../index.css";

// import required modules
import { Pagination } from "swiper";
import { TestCard } from './testCard/TestCard';



export const Testmonails = () => {
    return (
        <>
            <div className="testmonails-wrapper py-5">
                <div className="container">
                    <div className="row  d-flex  justify-content-between">
                        <div className="col-lg-6">
                        <Swiper
               pagination={{
                  dynamicBullets: true,
               }}
               modules={[Pagination]}
               className="mySwiper"
            >
               <SwiperSlide>
                  <TestCard />
               </SwiperSlide>
               <SwiperSlide>
               <TestCard />
               </SwiperSlide>
               <SwiperSlide>
               <TestCard />
               </SwiperSlide>
            </Swiper>

                        </div>
                        <div className="col-lg-5">
                            <AboutSuccess
                                header={"Grow Your Business and Join Our Happy Users"}
                                link={true}
                                button={true}
                                buttonColor={"gradiant"}
                                ButtonContent={"About us"}
                            />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
