import React from 'react'
import Button from '../Button/Button'
import "./textHolder.scss"

export const TextHolder = ({ header }) => {
    return (
        < >
            <div className="text-holder-wrapper text-white ">
                <h6 className='py-3'>Advanced Platform</h6>
                <h2 className='main-text'>Take your team to the next level
                </h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>
            </div>
            <div className={"pb-4 ps-3"}>
                <Button content={"About us"} color={"white"} />
            </div>
        </>
    )
}
