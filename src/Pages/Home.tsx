import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Bar from '../components/Home/Bar'
import 'animate.css'
import Caroselle from '../components/Home/Caroselle'


export function FetchApi() {
  const url = "https://consumet-api-mpty.onrender.com/anime/zoro/recent-episodes"
  const [recentE, setRecentE] = useState<any[]>([])
  const [load, setLoad] = useState(false)
  const api = async () => {
    const data = await axios.get(url)
      .then(data => data.data)
      .catch(error => console.error(error))
      .finally(() => setLoad(true))
    setRecentE(data.results.slice(0, 18))
  }
  useEffect(() => {
    api()
  }, [!load])
  return (
    <>
      {load ?
        <>
          <div className='mt-3 mb-4 ml-5'>
            <h1 className='text-1xl'>Last Episode:</h1>
          </div>
          <div className="h-screen w-screen" id="countainer">
            {load && recentE.map(anime => {
              return (
                <>
                  <Link to={`/search/anime/${anime.id}`} key={anime.id} >
                    <div className='card animate__animated animate__fadeInLeft animate__deplay-2s'>
                      <img src={anime.image} />
                      {anime.title.length <= 19 ? <h3>{anime.title}</h3> : <h3>{anime.title.slice(0, 19)}...</h3>}
                    </div>
                  </Link>
                </>
              )
            })}
          </div>
        </>
        : <></>}
    </>
  )
}
const Home: React.FC = () => {
  return (
    <>
      <Bar />
      <Caroselle />
      <FetchApi />
    </>
  )
}

export default Home
