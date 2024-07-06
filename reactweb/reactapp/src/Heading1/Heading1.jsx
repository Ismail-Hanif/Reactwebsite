import React from 'react'
import styles from './Heading1.module.css'

export default function Heading1() {
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-12 d-flex flex-column align-items-center ">
                <h1 className={`${styles.heading1}`}>Popular Courses</h1>
                <img src="/strip.png" alt="" />
            </div>
        </div>
    </div>
  )
}