import React from 'react'
import s from './Menu.module.css'
import menu1 from '../../assets/images/menu1.png'
import menu2 from '../../assets/images/menu2.png'
import menu3 from '../../assets/images/menu3.png'
import menu4 from '../../assets/images/menu4.png'
import menu5 from '../../assets/images/menu5.png'

export default function Menu() {
  return (
    <div>
        <ul className={s.conteiner}>
            <li><img alt='Menu1' src={menu1}/><p>Overview</p></li>
            <li><img alt='Menu2' src={menu2}/><p>Repositories</p></li>
            <li><img alt='Menu3' src={menu3}/><p>Projects</p></li>
            <li><img alt='Menu4' src={menu4}/><p>Packages</p></li>
            <li><img alt='Menu5' src={menu5}/><p>Stars</p></li>
        </ul>
        <hr className={s.hr}/>
    </div>
  )
}
