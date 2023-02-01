import React from 'react'
import { images } from "../../assets/Data/Data"
import "./customers.scss"


export default function Customers() {
    return (
        <>
            <div className="cusetomers-wrapper mb-4 py-5  flex-wrap ">
                <div className="container">
                    <div className="row justify-content-around align-items-center   mt-lg-0 py-lg-0   ">
                    {images.map((image, i) => (
                            <div className="col-lg-2 col-xs-6 col-sm-4  col-md-3  " key={i}>
                                <div className="customer-img-wrapper">
                                    <img src={image} alt="customer-img" className='w-100  w-sm-50 '  />
                                </div>

                            </div>

                        ))}
                     
                    </div>

                </div>
            </div>

        </>
    )
}
