import axios from 'axios';
import 'animate.css'
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
const Carouselle: React.FC = () => {
  const url = "https://consumet-api-mpty.onrender.com/anime/zoro/recent-episodes"
  const [lastE, setLastE] = useState<any[]>([])
  const [isloading, setIsLoading] = useState(false)
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

  return (
    <>
      {isloading ?

        <Carousel className="animate__animated animate__fadeInDown">
          {isloading && lastE.map((anime, index) => {
            return (
              <Carousel.Item>
                <img src={anime.image} id="img" key={index} />
                <Carousel.Caption>
                  <div className='flex flex-row ' id="info-Carosell" key={index}>
                    <img src={anime.image} id='smallPoster' key={anime.image} />
                    {anime.title.length < 18 ? <h2 className="space" key={anime.title.length}>{anime.title}</h2> : <h2 key={anime.title}>{anime.title}</h2>}
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

