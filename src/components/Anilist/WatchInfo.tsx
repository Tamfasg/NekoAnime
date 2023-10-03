import React, { useEffect, useState } from 'react'
import { FetchInfo, Data } from "./Api";
interface Foo {
  idN: number
}
const WatchInfo: React.FC<Foo> = ({ idN }) => {
  const [animeData, setAnimeData] = useState<Data>()
  useEffect(() => {
    FetchInfo(idN).then(data => {
      setAnimeData(data.res.data.Media)
    })
  }, [idN])
  console.log(animeData)
  return (
    <div>
    </div>
  )
}

export default WatchInfo
