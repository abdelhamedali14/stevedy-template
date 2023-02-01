import React from 'react'
import "./market.scss"
import { marketData } from "../../assets/Data/Data"

export const Market = () => {
    return (
        <>
            <div className="market-wrapper">
   
                {marketData.map((item, i) => (
                    <div key={i} className="market-item-wrapper ">
                        <div className=" market-item ">
                            <div className="  px-4 py-2 my-3  market-circle text-white fs-3">
                                1
                            </div>
                            {i === marketData.length - 1 ? null : (
                                <div className=" special-line "></div>
                            )}
                        </div>
                        <div className=" market-content">
                            <h4 className="fs-3">{item}</h4>
                            <p className=" text-muted ">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                magna aliquyam erat, sed diam voluptua.
                            </p>
                        </div>
                    </div>
                ))}

            </div>


        </>
    )
}
