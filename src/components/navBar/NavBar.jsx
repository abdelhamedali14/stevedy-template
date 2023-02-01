import React from 'react'
//import sass file
import "./navBar.scss"
//import logo img
import logo from "../../assets/images/Logo.png"
import { navLinks } from '../../assets/Data/Data'
import Button from '../Button/Button'
import BurgerIcon from '../burgerIcon/BurgerIcon'
import { useState } from 'react'
export const NavBar = () => {
    const [toggle, setToggle] = useState(true)

    return (
        <div className="container">
            <div className="navBar-wrapper py-4 mb-3 ">
                <div className="logo p-0 m-0">
                    <img src={logo} alt="stvLogoIMg" />
                </div>
                <ul className="nav-Links p-0  m-0">
                    {navLinks.map((link, i) => {
                        return <li className='' key={i}>{link}</li>
                    })}
                </ul>
                <BurgerIcon
                    navLinks={navLinks}
                    toggle={toggle}
                    setToggle={setToggle}
                />
                <div className='m-0 p-0 nav-btn'>
                    <Button content={"hello"} color={"gradiant"} />
                </div>

            </div>


        </div>
    )
}
