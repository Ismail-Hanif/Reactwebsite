import React from 'react'
import styles from './Campus.module.css'
import Heading from '../Heading/Heading'
import CampusLeft from '../CampusLeft/CampusLeft'
import Button from '../Button/Button'

export default function Campus() {
  return (
    <div className={`${styles.campus} container-fluid mt-5`}>
        <div className="row">
            <div className="col-12">
                <Heading text="Campus Life"/>
            </div>
        </div>

        <div className="row mt-5 row-gap-5 ">
            <div className="col-lg-7  bg-white d-flex flex-column justify-content-center gap-2 px-1 px-lg-5 pb-4 pb-lg-0 pt-5">
                <CampusLeft src="/pencil.svg"/>
                <hr />
                <CampusLeft src="/growth.svg"/>
                <hr />
                <CampusLeft src="/Setting.svg"/>

            </div>
            <div className="col-lg-5 d-flex justify-content-center px-0 px-lg-4 object-fit-cover">
                <img src="https://echooling-react.vercel.app/static/media/4.ff3894830e71cdd1965f.png" alt="" className='w-100' />
            </div>
        </div>

        <div className="row my-5 pb-5">
            <div className="col-12 text-center w-100">
                <Button text="More About Compus Life"/>
            </div>
        </div>
    </div>
  )
}