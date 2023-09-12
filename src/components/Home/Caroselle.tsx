import axios from 'axios';
import 'animate.css'
import React, { useEffect, useRef, useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Carouselle: React.FC = () => {
  const url = "https://consumet-api-mpty.onrender.com/anime/zoro/recent-episodes"
  const [lastE, setLastE] = useState<any[]>([])
  const [isloading, setIsLoading] = useState(false)
  let curId = useRef<any>(null)
  useEffect(() => {
    const api = async () => {
      const data = await axios.get(url)
        .then(data => data.data)
        .catch(error => console.error(error))
        .finally(() => setIsLoading(true))
      setLastE(data.results.slice(0, 5))
    }
    api()
  }, [!isloading])
  useEffect(() => {
    console.log(curId)
  }, [])
  return (
    <>
      {isloading ?

        <Carousel className="animate__animated animate__fadeInDown animate__deplay-2s">
          {isloading && lastE.map(anime => {
            return (
              <Carousel.Item ref={curId}>
                <img src={anime.image} id="img" />
                <Carousel.Caption>
                  <div className='flex flex-row ' id="info-Carosell">
                    <img src={anime.image} id='smallPoster' />
                    {anime.title.length < 18 ? <h2 className="space">{anime.title}</h2> : <h2>{anime.title}</h2>}
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>
        : <></>}
    </>
  );
};

export default Carouselle;

