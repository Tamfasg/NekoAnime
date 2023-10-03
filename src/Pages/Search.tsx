import { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Nav from '../components/Home/Nav'
import { Link, useSearchParams } from 'react-router-dom'
import 'animate.css'
import Error from "../components/Home/Error"
function Search() {
  const [totalpages, setTotalpages] = useState<any>()
  const [isload, setIsload] = useState(false)
  const [pages, setPages] = useState(1)
  const [anime, setAnime] = useState<any[]>([])
  const [searchParams, setSearchParams] = useSearchParams({ q: "" })
  const search = searchParams.get("q")
  const [animeId, setAnimeId] = useState<any[]>([])
  const [errn, setErrn] = useState(false)
  const url = `https://consumet-api-mpty.onrender.com/anime/zoro/${search}?page=${pages}`
  useEffect(() => {
    setPages(1)
  }, [search])
  useEffect(() => {
    if (pages > totalpages) { setPages(totalpages) }
    if (pages <= 0) { setPages(1) }
    // scrollTo(0, 0)
    scroll(0, 0)
  }, [pages])
  useEffect(() => {
    const api = async () => {
      try {
        const data = await axios.get(url)
          .then(data => data.data)
          .catch(error => console.log(error))
          .finally(() => setIsload(true))
        if (data.results.length === 0) {
          return setErrn(true)
        } else {
          setErrn(false)
        }
        setAnime(data.results)
        setTotalpages(data.totalPages)
      } catch (error) {
        console.log(error)
      }
    }
    api()
  }, [!isload, search, pages])
  const keyClick = (event: any) => {
    event.preventDefault()
  }
  const animeid = (animEId: any) => {
    if (search) { setAnimeId(animEId) }
  }
  if (animeId.length && anime.length === 0) { return }

  return (
    <>
      <Nav
        search={search}
        setSearch={setSearchParams}
        keypress={keyClick}
      />
      <div className='h-screen w-screen' id='countainerN'>
        {!errn && isload && anime && search && anime.map(anime => {
          return (
            <Link to={`/search/anime/${anime.id}`} key={anime.id} >
              <div className='cardN animate__animated animate__bounceIn animate-delay-1s' onClick={() => animeid(anime.id)} key={anime.id}>
                <img src={anime.image} alt='poster' />
                {anime.title.length <= 19 ? <h3>{anime.title}</h3> : <h3>{anime.title.slice(0, 19)}...</h3>}
              </div>
            </Link>
          )
        })}
      </div>
      {!errn && isload && search && totalpages > 2 ?
        <div className={isload ? 'switcher' : 'hidden'} >
          <FontAwesomeIcon icon={faAngleLeft} id="icon" onClick={() => setPages(pages - 1)} size='xl' />
          <p>{pages}</p>
          <FontAwesomeIcon icon={faAngleRight} id="icon" onClick={() => setPages(pages + 1)} size='xl' />
        </div>
        : <></>}
      {errn ?
        <Error />
        : <></>}
    </>
  )
}
export default Search
