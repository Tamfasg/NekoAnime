//import axios from "axios"
export let query = `
query ($id: Int) { # Define which variables will be used in the query (id)
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
    status
  }
}
`;

export type Data = {
  Data?: [] | null
}
export async function FetchInfo(idN: any) {
  let variables: number | any = {
    id: idN
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
  const data = await fetch(url, options)
  const res = await data.json()

  return { res }
}
