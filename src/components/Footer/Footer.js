import React from 'react'
import s from './Footer.module.css'
import foot_icon from '../../assets/images/foot_icon.png'

export default function Footer() {
  return (
    <div className={s.foot}>
    <hr/>
        <div className={s.conteiner}>
            <img src={foot_icon} alt='Foot_icon'/>
            <a>Terms</a>
            <a>Privacy</a>
            <a>Security</a>
            <a>Status</a>
            <a>Docs</a>
            <a>Contact GitHub</a>
            <a>Pricing</a>
            <a>API</a>
            <a>Training</a>
            <a>Blog</a>
            <a>About</a>
        </div>
    </div>
  )
}
