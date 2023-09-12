import axios from 'axios'
export function api(id: any) {
  const url = `https://consumet-api-mpty.onrender.com/anime/zoro/watch?episodeId=${id}&server=vidcloud`;
  const apiN = async () => {
    const res = await axios.get(url)
    const data = await res.data
    return data
  }
  return apiN
}

export function sub(url: any) {
  const data = async () => {
    try {
      const data = await axios.get(url)
      const res = await data.data
      return res
    }
    catch (erro) {
      console.log(erro)
    }
  }

  return data
}
