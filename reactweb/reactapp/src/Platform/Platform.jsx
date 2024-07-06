import React from 'react'
import styles from './Platform.module.css'
import Button from '../Button/Button'

export default function Platform() {
  return (
    <div className="container-fluid px-4 mt-5 ">
        <div className="row gap-1 ">
            <div className="col-lg-6 col-12 ">
                <img src="https://echooling-react.vercel.app/static/media/ab.fcda2469b98ffc37a148.png" alt="" className='w-100'/>
            </div>
            <div className="col-lg-5 d-flex flex-column px-2 px-lg-5 py-5">
                <div className={styles.PlatformHead}>
                    <h1>Welcome to <br /> <span>EchoolingLMS Platform</span></h1>
                    <p>Education is both the act of teaching knowledge to others and
                    the act of receiving knowledge from someone else.</p>
                    <p>Have a question?<span>Get free Guide</span></p>
                </div>
                <hr />
                <div className={styles.platformMid}>
                    <p>
                    Education also refers to the knowledge received through schooling instruction
                    and to the institution of teaching as a whole. The main purpose of education
                    is the integral development of a person.
                    </p>
                </div>
                <div className={`${styles.platformFooter} d-flex flex-column flex-md-row`}>
                    <Button text="Read More"/>
                    <div className='d-flex gap-2'>
                      <span className=""><i className="ri-chat-3-fill"></i></span>
                      <div className={styles.getsupport}>
                       <h5>Get Sport</h5>
                       <p>support@react.com</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}