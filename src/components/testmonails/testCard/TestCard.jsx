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
                        <span>Florrie Jacobs</span>
                        <p>  Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore
                            magna aliquyam erat</p>

                        <div className="card-rating d-flex">
                            {rating.map((star, i) => {
                                return <div className="card-icon">
                                    <star.icon />
                                </div>
                            })}
                        </div>
                    </div>



                </div>

            </div>



        </>
    )
}
