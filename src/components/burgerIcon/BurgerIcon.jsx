import React from 'react'
import "./burgerIcon.scss"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


export default function BurgerIcon({ toggle, setToggle, navLinks }) {
    return (
        <div className='burgerIcon-wrapper'>
            {toggle ? <AiOutlineMenu className='generator-icon' onClick={() => {
                setToggle((perv) => !perv);
            }} /> :
                <AiOutlineClose className='generator-icon' onClick={() => {
                    setToggle((perv) => !perv);
                }} />}
                <ul className={`${toggle?"d-none":"d-block"}  dropDown-links`}>
                {navLinks.map((nav, i) => (
                  <li
                     key={i}
                     className={` ${
                        i === navLinks.length - 1 ? "me-0" : "mb-4"
                     } text-gray-600`}
                  >
                     {nav}</li>
               ))}
                </ul>



        </div>
    )
}
