import React, { useEffect, useState } from 'react'
import './App.css'
import Authorization from './components/Authorization/Authorization'
// import Foll from './components/Foll/Foll'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Menu from './components/Menu/Menu'
import { API } from './config'

export default function App() {

  function getLength(obj) {
    let i = 0;
    for (const index in obj) {
      i++
    }
    return i
  }
  const [glav_user, setGlav_user] = useState()
  const [foll, setFoll] = useState()
  const [registr, setRegistr] = useState(false)
  const [count, setCount] = useState()
  const [data, setData] = useState(0)
  const [icon_user, setIcon_user] = useState()
  const getUser = async () => {
    const url = API + count
    const req = await fetch(url)
    const res = await req.json()
    console.log(res);
    if (getLength(res) > 2) {
      setRegistr(true)
      if (data==0) {
        setIcon_user(res.avatar_url)
        setGlav_user(res)
      } 
      setFoll([])
      setData(res)
    }
    else {
      alert('Неправильный логин')
      setRegistr(false)
    }
    
  }
  return (
    <>
      {
        registr === false ? <Authorization
          count={count}
          setCount={setCount}
          getUser={getUser}
        />
          : <div>
            <Header icon_user={icon_user} 
              count={count}
              setCount={setCount}
              getUser={getUser}
              glav_user={glav_user}
              setData={setData}
            />
            <Menu/>
            <div className='main'>
              <Main data={data}
                foll={foll}
                setFoll={setFoll}
                setCount={setCount}
                getUser={getUser}
              />
              
            </div>
            <Footer />
          </div>
      }
    </>

  )
}
