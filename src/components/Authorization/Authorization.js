import React from 'react'
import s from './Authorization.module.css'
import icon from '../../assets/images/main_icon.png'

export default function Authorization({count, setCount, getUser}) {
  return (
    <div>
        <div className={s.conteiner}>
            <img src={icon} alt='Icons'/>
            <h2>Sign in to GitHub</h2>
            <div className={s.conteiner_body}>
                <p>Username or email address</p>
                <input type='text'
                value={count}
                onChange={(e) => { setCount(e.target.value) }}
                />
                <div>
                    <p>Password</p>
                    <p className={s.underline}>Forgot password?</p>
                </div>
                <input type="password"/>
                <button onClick={getUser}>Sign in</button>
            </div>
            <div className={s.conteiner_new}>
                <p>New to GitHub? <a className={s.underline}>Create an account.</a></p>
            </div>
            <div className={s.conteiner_foot}>
                <a className={s.underline}>Terms</a>
                <a className={s.underline}>Privacy</a>
                <a className={s.underline}>Security</a>
                <a>Contact GitHub</a>
            </div>
        </div>
    </div>
  )
}
