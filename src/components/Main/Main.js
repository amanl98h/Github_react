import React, { useEffect, useState } from 'react'
import Foll from '../Foll/Foll'
import s from './Main.module.css'

export default function Main({data,foll,setFoll,setCount,getUser}) {
  // const [following, setFollowing] = useState()
  const getFollowing = async () => {
    const url = data.url+'/following'
    const req = await fetch(url)
    const res = await req.json()
    console.log(res);
    setFoll(res)
  }
  const getFollowers = async () => {
    const url = data.url+'/followers'
    const req = await fetch(url)
    const res = await req.json()
    console.log(res);
    setFoll(res)
  }
  // useEffect(() => {
  //   getFollowers(data.followers_url)
  // }, [])
  // useEffect(() => {
  //   getFollowing(data.following_url)
  // }, [])
  return (
    <>
    <div className={s.main}>
            <div className={s.conteiner}>
              <img src={data.avatar_url}/>
              <div>
                <h2>{data.name}</h2>
                <h2>{data.login}</h2>
              </div>
              <button>Edit file</button>
              <div className={s.conteiner_foll}>
                <p onClick={getFollowers}>{data.followers} followers</p>
                <p onClick={getFollowing}>{data.following} following</p>
              </div>
            </div>
    </div>
    <Foll foll={foll} 
      setCount={setCount}
      getUser={getUser}
    />
    </>
  )
}
