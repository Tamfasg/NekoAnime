import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import 'animate.css'
import { Link, useParams } from 'react-router-dom';
import Aniliste from '../components/Anilist/Aniliste';
import { faClosedCaptioning as cc, faTv as tv, faFilm as film } from "@fortawesome/free-solid-svg-icons"
import { Loading } from '../components/Assest/Loading';
const Info: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [err, setErr] = useState(false)
  const [loading, setLoading] = useState(true)
  const [animeData, setAnimeData] = useState<any>([])
  const [animeId, setAnimeId] = useState<any>()
  const url = `https://consumet-api-mpty.onrender.com/anime/zoro/info?id=${id}`
  const api = async () => {
    try {
      const data = await axios.get(url)
        .then(data => data.data)
        .catch(error => { if (error.message === "Request failed with status code 404") { return setErr(true) } })
        .finally(() => setLoading(false))
      setAnimeData(data)
      setAnimeId(data.alID)
      console.error(err)

    } catch (error: any) {
      console.error(error)
    }
  }
  useEffect(() => {
    api()
  }, [loading])

  return (
    <>
      {!loading ?
        <>
          <main>
            <div className='cardn'>
              <div className='imgC'>
                <img src={animeData.image} className='animate__animated animate__fadeInDown animate__deplay-1s' />
              </div>
              <h1 className='animate__animated animate__fadeInLeft animate__deplay-2s'>{animeData.title}</h1>
              <div className='flex justify-evenly' id='icon'>
                <div className='type'>
                  {animeData.type === "TV" ? <FontAwesomeIcon icon={tv} className='tv' /> : animeData.type === "MOVIE" ? <FontAwesomeIcon icon={film} className='film' /> : <></>}
                  <p>{animeData.type}</p>
                </div>
                <div className='sub'>
                  <FontAwesomeIcon icon={cc} className='cc' />
                  <p>{animeData.subOrDub}</p>
                </div>
                <div className='episodeN'>
                  <p>{animeData.episodes.length}/{animeData.totalEpisodes}</p>
                  <p>Eps</p>
                </div>
              </div>
              <div className='but'>
                <Link
                  to={`/watch/${animeData.episodes[0].id}`}
                  state={{
                    id: animeId
                  }}
                  key={animeData.episodes.id}
                >
                  <button>Watch Now</button>
                </Link>
              </div>
            </div>
            <div className='db'></div>
            <div className='second' >
              <div className='character'>

              </div>
              <div className='desc'>
                <p>{animeData.description}</p>
              </div>
            </div>
          </main>
        </>
        : <><Loading /></>}
      {!loading ? <Aniliste idn={animeId} /> : <></>}
    </>
  );
};

export default Info;
