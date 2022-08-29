import React from 'react'
import s from './Header.module.css'
import github from '../../assets/images/github.png'
import bell from '../../assets/images/bell.png'
import plus from '../../assets/images/plus.png'

export default function Header({icon_user, count, setCount, getUser, glav_user, setData}) {
  return (
    <div className={s.panel}>
        <div className={s.panel_left}>
            <img src={github} alt='Github'/>
            <input type='text' placeholder='Searchor jump to...'
                onChange={(e) => { setCount(e.target.value) }}
            />
            <button onClick={getUser}> Search </button>
            <p className={s.hover}>Pull requests</p>
            <p className={s.hover}>Issues</p>
            <p className={s.hover}>Marketplace</p>
            <p className={s.hover}>Explore</p>
        </div>
        <div className={s.panel_right}>
            <img className={s.hover} src={bell} alt='Bell'/>
            <img className={s.hover} src={plus} alt='Plus'/>
            <img className={s.icon_user} src={icon_user} alt='User_icon'/>
        </div>
    </div>
  )
}
