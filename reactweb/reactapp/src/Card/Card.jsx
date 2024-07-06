import React from 'react'
import styles from './Card.module.css'


export default function Card() {
    const cardObj = [
        {
            src:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQhdSCHbSlyRyGl0STXVB6LNs7mKG4T95rP_mfOYyGZM_VlKSzX",
            title:"Let's Talk Science"
        },
        {
            src:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMVBgDdUczT3v74NPIZznxipElQixkpDv_hpKVVbzQTmE7gPu3",
            title:"Innovative Course"
        },
        {
            src:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQwgLwhz-VneNCk5L-E0Zdx0n8hGC8d9RbrJhFnxKOnOE-8FLDD",
            title:"Cloud Storage"
        },
        {
            src:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS4TWrkEAS7p6ZeJG-kPlsxhO2lyzfGXmwAvBfktyOgif1AeGk6",
            title:"Online Education"
        }
    ]

  return (
    <div className="container-fluid mt-5">
        <div className="row px-2 px-md-5 row-gap-5">
            {
                cardObj.map((e,i)=>{
                    return (
                        <div className={ `${styles.card} col-lg-3 col-12`} key={i}>
                            <div className='px-3'>
                                <div className={styles.imgDiv}>
                               <img src={e.src} alt="" />                                    
                               <div className={styles.overlay}></div>
                                </div>
                               <div className={styles.cardDetails}>
                                 <p>{e.title}</p>
                                 <p>Learn More</p>
                               </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}