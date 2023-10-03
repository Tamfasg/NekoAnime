import React, { useEffect, useState } from 'react'
import Player from './Player'
import { useLocation } from 'react-router-dom'
const Video: React.FC = () => {
  const location = useLocation()
  const [epTitle, setEpTitle] = useState<string | null>(null)
  const [data, setData] = useState<any>()
  useEffect(() => {
    setEpTitle(location.state.title)
    setData(location.state.data)
  }, [location.state])
  return (
    <div>
      {data ?
        <>
          <Player id={data.episodes[0].id} />
          <section>
            <div className='h-fit Ep-titleC'>
              <p className='Ep-title'>{epTitle}</p>
              <div className='line'></div>
              <div className='p-2'>
                <p className='ml-2'>Ep:{data.episodes[0].number}</p>
              </div>
            </div>
            <div className='episodeList'>
              <div className='episode'>
              </div>
            </div>
          </section>
        </>
        : <></>
      }
    </div>
  )
}

export default Video
