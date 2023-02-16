import React from 'react'
import "./testCard.scss"
import testmg from "../../../assets/images/testImg.png"
import { rating } from "../../../assets/Data/Data"

export const TestCard = () => {
    return (
        <>
            <div className="testCard-wrapper-main">
                <div className="testCard-wrapper shadow">
                    <div className="card-img">
                        <img src={testmg} alt="profile-img" className='' />
                    </div>
                    <div className="card-content">
                        <h4>Florrie Jacobs</h4>
                        <span className=''>CEO of Company</span>
                        <p className=''>  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore
                            magna aliquyam erat</p>

                        <div className="card-rating d-flex pt-3">
                            {rating.map((star, i) => {
                                return <div className="card-icon">
                                    <star.icon  className='star-icon'/>
                                </div>
                            })}
                        </div>
                    </div>



                </div>

            </div>



        </>
    )
}
