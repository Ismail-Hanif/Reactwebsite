import React from 'react'
import styles from './Button.module.css'

export default function Button({text}) {
  return (
    <div className={styles.customBtn}>
        <button className=''>{text}<i className="ri-arrow-right-line"></i></button>
    </div>
  )
}