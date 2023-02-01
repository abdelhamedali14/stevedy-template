import React from 'react'
import AboutSuccess from '../aboutSuccess/AboutSuccess'
import { Market } from '../market/Market'
import "./marketResearch.scss"

export const MarketResearch = () => {
    return (
        <>
            <div className="marketResearch-wrapper py-5">
                <div className="container">
                    <div className="row justify-content-around align-items-center">
                        <div className="col-lg-5  ">
                            <AboutSuccess 
                            header={"Acceleration Process to Grow Your Business"} 
                            link={true}
                            button={true}
                            buttonColor={"gradiant"}
                            ButtonContent={"About us"}
                            />
                        </div>
                        <div className="col-lg-5 ">
                            <Market/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
