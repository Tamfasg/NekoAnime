import React, { useEffect, useState } from 'react';
// import { Carousel } from "react-bootstrap"
import { query } from './Api';
interface AnilisteProps {
  idn: number,
}
const Aniliste: React.FC<AnilisteProps> = ({ idn }) => {
  type Data = [] | any | null
  const [isloading, setIsloading] = useState<boolean>(false)
  const [animeData, setAnimeData] = useState<Data>([])
  const [genre, setGenre] = useState<Data>([])
  const [err, setErr] = useState<boolean>(false)
  // const [characters, setCharacters] = useState([])
  let variables = {
    id: idn
  }

  let url = 'https://graphql.anilist.co',
    options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        query: query,
        variables: variables
      })
    };
  useEffect(() => {
    const api = async () => {
      await fetch(url, options).then(handleResponse)
        .then(handleData)
        .catch(handleError)
        .finally(() => setIsloading(true))
    }
    api()
  }, [!isloading])
  function handleResponse(response: any) {
    return response.json().then(function(json: any) {
      return response.ok ? json : Promise.reject(json);
    });
  }
  function handleData(data: any) {
    setAnimeData(data.data.Media)
    setGenre(data.data.Media.genres)
    // setCharacters(data.data.Media.characters.nodes)
  }
  function handleError(error: any) {
    if (error.errors[0].status === 404) {
      setErr(true)
    }
  }
  console.log(animeData);

  return (
    <>
      {!err && isloading ?
        <div className='w-fit h-full margin: 10px 2px,'>
          <div className='w-fit'>
            <h2 className='synone'><strong>Status</strong>:<span>{animeData?.status}</span></h2>
          </div>
          <div className='flex flex-row name'>
            <h2 className='synone'><strong>Japanese</strong>:</h2>
            <p key={animeData?.id}>{animeData?.title.native}</p>
          </div>
          <div className='flex flex-row genre' >
            <h2 className='synone'><strong>Genre</strong>:</h2>
            <div id="genreC">
              {isloading && genre?.map((genre: any) => {
                return (
                  <p key={genre}>{genre} </p>
                )
              })}
            </div>
            {/* <Carousel> */}

            {/* </Carousel> */}
          </div>
        </div>
        : <></>}
    </>
  );
}

export default Aniliste;

