import React from 'react'
import styles from "./Topbar.module.css"

export default function Topbar() {
  return (
    <>
    <div>
    <div className={`${styles.topbarBg} container-fluid text-white d-none d-lg-block`}>
        <div className="row">
           <div className={`${styles.contacts} col-lg-7  gap-4`}>
             <ul>
              <li><a href="#"><i className="ri-phone-line"></i> (+1) 0988374747</a></li>
              <li><a href="#"><i className="ri-mail-line"></i> info@gmail.com</a></li>
             </ul>
           </div>
           <div className={`col-lg-5 d-flex justify-content-end ${styles.soicalLinks}`}>
            <ul>
                <li><a href="#"><i className="ri-facebook-fill"></i></a></li>
                <li><a href="#"><i className="ri-twitter-fill"></i></a></li>
                <li><a href="#"><i className="ri-linkedin-fill"></i></a></li>
            </ul>
           </div>
        </div>
      </div>
    </div>
    </>
  )
}