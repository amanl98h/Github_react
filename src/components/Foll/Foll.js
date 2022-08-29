import React from 'react'
import s from './Foll.module.css'

export default function Foll({foll,setCount, getUser}) {
    return (
        <div className={s.conteiner}>
            {
                foll?.map((el)=>{
                    return(
                        <div key={el.id} className={s.card}>
                            <div className={s.card_body}>
                                <img className={s.avatar_url} src={el.avatar_url}/>
                                <h3>{el.login}</h3>
                            </div>
                            <hr className={s.hr} />
                        </div>
                    )
                })
            }
            
        </div>
    )
}
