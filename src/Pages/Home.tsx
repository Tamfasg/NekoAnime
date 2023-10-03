import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Bar from '../components/Home/Bar'
import 'animate.css'
import Caroselle from '../components/Home/Caroselle'
import { Trending, Data } from "./Api/home"
export function Airing() {
  const [load, setLoad] = useState<boolean>(false)
  const [trainding, setTrending] = useState<Data | any[] | any>()
  useEffect(() => {
    Trending().then((data: any) => {
      setTrending(data.res.data.Page.media)
    }).finally(() => setLoad(true))
  }, [!load])
  const handleClick = () => {
    const parent = document.querySelectorAll(".trendBox div")
    parent.forEach((div: HTMLDivElement | any) => {
      div.addEventListener("click", () => {
        let values: number = div.dataset.value
        let url: string = `http://localhost:5173/search/?q=${trainding[values].title.english}`
        window.location.href = url
      })
    })
  }
  return (
    <>
      <div className='mt-3 mb-4 ml-5'>
        <p className='text-1xl animate__animated animate__fadeIn'>Tren<span className='text-blues'>ding:</span></p>
      </div>
      <section className='trend'>
        {trainding && load ?
          <>
            <div className='topAiring animate__animated animate__fadeIn animate-deplay-2s'>
              <div id="airingCard" className='trendBox' onClick={handleClick}>
                <div id='left' style={{ background: trainding[1].coverImage?.color }} data-value={1}>
                  <img src={trainding[1].coverImage?.large} />
                  <div>
                    <p>2</p>
                  </div>
                </div>
                <div id='center' style={{ background: trainding[0].coverImage?.color }} data-value={0}>
                  <img src={trainding[0].coverImage?.large} />
                  <div>
                    <p>1</p>
                  </div>
                </div>
                <div id='right' style={{ background: trainding[2].coverImage?.color }} data-value={2}>
                  <img src={trainding[2].coverImage?.large} />
                  <div>
                    <p>3</p>
                  </div>
                </div>
              </div>
            </div>
          </>
          : <></>}
      </section>
    </>
  )
}
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
          <Airing />
          <div className='mt-3 mb-4 ml-5 '>
            <h1 className='text-1xl animate__animated animate__fadeIn'>Last <span className='text-blues'>episodes:</span></h1>
          </div>
          <div className="h-screen w-screen  animate__animated animate__fadeInLeft" id="countainer">
            {load && recentE.map((anime, index) => {
              return (
                <>
                  <Link to={`/search/anime/${anime.id}`} key={anime.id} >
                    <div className='card' key={anime.id}>
                      <img src={anime.image} key={anime.title.length} />
                      {anime.title.length <= 19 ? <h3 key={index}>{anime.title}</h3> : <h3 key={index}>{anime.title.slice(0, 19)}...</h3>}
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
