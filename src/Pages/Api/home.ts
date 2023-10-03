import axios from "axios"

export async function TopAiring() {
  const url = "https://consumet-api-mpty.onrender.com/anime/zoro/top-airing"
  const data = await axios.get(url).then(data => data.data)
  return data
}
export type Data = [
  {
    coverImage?: {
      large?: string,
      color: any
    },
    id?: number,
    title: {
      english: string
    }
  }
]
export async function Trending() {
  let variables = {
    p: 1
  }
  let query = `query($p: Int) {
  Page(page: $p){
    media(sort: TRENDING_DESC) {
      id
    title {
        romaji
        english
        native
      }
    coverImage {
        extraLarge
        large
        medium
        color
      }
    }
  }
}`
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
  const data = await fetch(url, options)
  const res = await data.json()

  return { res }
}
