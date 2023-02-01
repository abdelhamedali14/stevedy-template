import React from 'react'
import { Line } from '../line/Line'
import "./bestSolution.scss"
import {solutionsData} from "../../assets/Data/Data"
import AboutSuccess from '../aboutSuccess/AboutSuccess'
export const BestSolution = () => {
  return (
    <div>
        <div className="best-solution-wrapper">
            <div className="container">
                <div className="row justify-content-between ">
                    <div className="col-lg-5 ">
                    <div className='py-3'> <Line/></div>
                        <AboutSuccess header={"The best business solution for you"} link={false}/>
                    </div>
                    <div className="col-lg-6 ">
                    <div className="solution-items-wrapper">
                <div className="row justify-content-between">
                  {solutionsData.map((item,i)=>{
                    return   <div className="col-lg-6  "key={i} >
                    <div className="solution-item my-3">
                    <div className={` sol-icon ${item.bg} text-white`}>
                    <item.icon className={` fs-1 `}/>
                        </div>
                        <p className='text-capitalize fs-5'>  {item.title}</p>
                        <div className='my-2'><Line/></div>
                        <p className='text-muted'>Lorem ipsum dolor sit amet, consetetur sadipscing
                             elitr, sed diam nonumy eirmod tempor invidunt ut labore</p>
                    </div>
                
                </div>
                  })}
                </div>

            </div>
                    </div>
                </div>
            </div>
         

        </div>



    </div>
  )
}
