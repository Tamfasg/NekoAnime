import React, { useEffect, useState } from 'react';
// import {Carousel} from "react-bootstrap"
interface AnilisteProps {
  idn: number,
}
const Aniliste: React.FC<AnilisteProps> = ({ idn }) => {
  const [isloading, setIsloading] = useState(false)
  const [animeData, setAnimeData] = useState<any>([])
  const [genre, setGenre] = useState<any[]>([])
  const [err, setErr] = useState(false)
  const [character, setCharacter] = useState<any[]>([])
  let query = `
query ($id: Int, $chid: Int) { # Define which variables will be used in the query (id)
  Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
    id
    title {
      romaji
      english
      native
    }
    genres
    characters {
    nodes {
      image { 
          medium
        }
      }
    }
  }
  Character(id: $chid) {
    id
    image {
      large
      medium
    }
  }
}
`;
  let variables: any = { id: idn, chid: 13042 }

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
    setCharacter(data.data.characters)
  }
  function handleError(error: any) {
    if (error.errors[0].status === 404) {
      setErr(true)
    }
  }
  useEffect(() => {
    console.log(character);

  }, [character])
  return (
    <>
      {!err && isloading ?
        <div className='w-fit h-full margin: 10px 2px,'>
          <div className='flex flex-row name'>
            <h2 className='synone'><strong>Japanese</strong>:</h2>
            <p key={animeData?.id}>{animeData?.title.native}</p>
          </div>
          <div className='flex flex-row genre' >
            <h2 className='synone'><strong>Genre</strong>:</h2>
            <div id="genreC">
              {isloading && genre?.map(genre => {
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

