import React from 'react'
import "./ourNumbers.scss"
import {numbers} from "../../assets/Data/Data"

export const OurNumbers = () => {
    return (
        <>
            <div className="ourNumbers-wrapper py-5">
                <div className="container">
                    <div className="ourNumbers-header">
                        <h2>Don't Just Take our Word for it!
                        </h2>
                    </div>
                    <div className="row  ourNumbers-content d-flex  justify-content-between py-4  flex-wrap  ">
                        {numbers.map((item,i)=>{
                            return    <div className="col-lg-2 col-xs-6 col-sm-4  col-md-3 ourNumber-item   ">
                            <h3>{item.number}</h3>
                            <p className='text-muted'>{item.text}</p>

                        </div>


                        })}
                      

                    </div>

                </div>

            </div>

        </>
    )
}
