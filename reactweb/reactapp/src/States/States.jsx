import React from 'react'
import styles from "./States.module.css"

const statesObj = [
    {
        title1:"Successfully ",
        title2:"Trained",
        num:1478,
        leraners:"ENROLLED LEARNERS"
    },
    {
        title1:"Successfully",
        title2:"Trained",
        num:1478,
        leraners:"ENROLLED LEARNERS"
    },
    {
        title1:"Successfully",
        title2:"Trained",
        num:1478,
        leraners:"ENROLLED LEARNERS"
    },
    {
        title1:"Successfully",
        title2:"Trained",
        num:1478,
        leraners:"ENROLLED LEARNERS"
    },
]
export default function States() {
  return (
    <div className={`container-fluid  px-md-5 mt-5 py-4`}>
        <div className={`row ${styles.states} py-5`}>
            {
                statesObj.map((e,i)=>{
                    return (
                        <div key={i} className={`col-lg-3 col-md-6 text-white text-center ${styles.statesBox} py-3`}>
                        <h4>{e.title1} <br />{e.title2}</h4>
                        <h1>{e.num}</h1>
                        <h6>{e.leraners}</h6>
                     </div>
                    )
                })
            }


        </div>
    </div>
  )
}