import React from 'react'
import "./aboutSuccess.scss"
import { FiArrowRight } from "react-icons/fi";
import Button from '../Button/Button';

export default function AboutSuccess({ header ,button,link , buttonColor ,ButtonContent }) {
    return (
        <>
            <div className="about-success-wrapper">
                <h2>{header}</h2>
                <p className='about-success-text'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                    sed diam nonumy eirmod tempor invidunt ut labore et
                    dolore magna aliquyam erat, sed diam voluptua. At vero eos
                    et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                    no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
                    {!link? <div className="learn-about-link ">
                    <p>Learn About Our Success  </p>
                    <FiArrowRight/>
                </div>:""}
                {button?<Button content={ButtonContent} color={buttonColor} />:""}
            
            </div>





        </>
    )
}
