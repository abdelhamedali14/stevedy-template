
import React from 'react'
import "./button.scss"

export default function Button({content,color}) {
  return (
    <>
    <button className={`myButton ${color==="gradiant"?"gradiant":"white"} `}>{content}</button>

    </>
  )
}
