import React from 'react'
import styles from './Blog.module.css'
import Heading from '../Heading/Heading'



export default function Blogs() {
    const blogObj =[
        {
            src:"/blog1.jpg",
            date:"April 18",
            heading:"Education",
            title:"Kids future Schools & Corona Prevent to Growth",
            author:"Charlie Doyle"
        },
        {
            src:"/blog2.jpg",
            date:"April 12",
            heading:"Education",
            title:"Echooling future Schools & social Innovation",
            author:"Charlie Doyle"
        },
        {
            src:"/blog3.jpg",
            date:"April 24",
            heading:"Education",
            title:"7 Learning system design tips For better eLearning",
            author:"Charlie Doyle"
        },
        {
            src:"/blog1.jpg",
            date:"April 13",
            heading:"Education",
            title:"Why schools should continue remote study",
            author:"Charlie Doyle"
        },
    ]
  return (
    <div className={`container-fluid ${styles.blogs} px-3 px-md-5`}>
        <div className="row">
            <div className="col-12 text-center">
                <Heading text="Echooling News and Blogs"/>
            </div>
        </div>
        <div className="row">
            {
                blogObj.map((e,i)=>{
                    return (
                        <div className={`col-12 col-lg-3 mt-5`} key={i}>
                          <div className={styles.blogCard}>
                            <div className={styles.blogPhoto}>
                            <img src={e.src} alt="" className='w-100'/>
                            <div className={styles.date}>{e.date}</div>
                            </div>
                            <div className={`${styles.blogsDetails} px-2 py-2`}>
                            <h6>{e.heading}</h6>
                            <p className=''>{e.title}</p>
                            <span> <i className="ri-user-line"></i>{e.author}</span>
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