import React from 'react'
import styles from "./CampusLeft.module.css"

export default function CampusLeft({src}) {
  return (
    <div className="container">
        <div className="row row-gap-3">
            <div className=" col-lg-1 col-12">
                <img src={src} alt="" />
            </div>
            <div className={`${styles.campuscompo} col-lg-8 col-12`}>
                <h5>Do More,Stress Less</h5>
                <p className='fs-6'>Why I say old chap that is spiffing he legged
                it in my flat easy peasy.</p>
            </div>
            <div className={` col-lg-2 col-12 d-flex justify-content-start justify-content-lg-end`}>
                <div className={styles.arrowLeft}>
                 <i className="ri-arrow-right-line"></i>
                </div>
            </div>
        </div>
    </div>
  )
}