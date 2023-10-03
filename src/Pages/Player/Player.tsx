import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { api } from "./Api"
// import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear, faPlay, faPause, faExpand, faBackwardFast, faForwardFast, faCompress } from "@fortawesome/free-solid-svg-icons"
import "./player.css"
// import Error from '../../components/Home/Error';
interface PlayerProps {
  id?: string
}
const Player: React.FC<PlayerProps> = ({ id }) => {
  // const { id } = useParams<{ id: string }>();
  type Div = HTMLDivElement
  const [episode, setEpisode] = useState<any[]>([]);
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [subInfo] = useState<any[]>([]);
  const [cursub] = useState<any[]>([]);
  const [parameterActive, setPramterActive] = useState<boolean>(false)
  const refV = useRef<HTMLVideoElement>(null);
  const countainer = useRef<Div>(null);
  const controle = useRef<Div>(null);
  const timeLine = useRef<Div | any>(null);
  const [fullscreen, setFullscreen] = useState<boolean>(false)
  let timer: any;
  let size: any = {
    big: fullscreen ? "3x" : "2xl",
    medium: fullscreen ? "2xl" : "xl",
    small: fullscreen ? "xl" : "lg"
  }
  type iconColor = {
    first: string,
    second: string
  }
  const color: iconColor = {
    first: "#0544b0",
    second: "#5E4CB6"
  }
  const [playing, setPlaying] = useState<boolean | null>(null)
  const [subContent, setSubContent] = useState<any | null>(null);
  useEffect(() => {
    let apiV = api(id)
    apiV().then((data: any) => {
      setEpisode(data.sources);
      setIsLoad(true)
      data.subtitles.forEach((sub: any) => {
        subInfo.push({ url: sub.url, lang: sub.lang });
      });
    })
  }, [id, !isLoad]);

  useEffect(() => {
    const fetchSub = async (url: any) => {
      // try {
      //   const data = await axios.get(url)
      //   const res = await data.data
      //   const track = document.createElement("track")
      //   track.src = URL.createObjectURL(new Blob([res], { type: 'text/vtt' }));
      //   track.lang = "Arabic"
      //   refV.current?.appendChild(track)
      // } catch (error: any) {
      //   throw new Error(error)
      // }
      try {
        const res = await axios.get(url);
        const data = res.data;
        setSubContent(data);
      } catch (error) {
        console.error(error);
      }
    };
    subInfo.map(anime => {
      if (anime.lang === "Arabic") {
        cursub.push({ url: anime.url, lang: anime.lang })
      } else if (anime.lang === "English") {
        cursub.push({ url: anime.url, lang: anime.lang })
      }
    })
    if (isLoad) {
      fetchSub(cursub[0].url)
    }
  }, [isLoad])
  refV.current?.addEventListener("play", () => {
    setPlaying(true)
  })
  refV.current?.addEventListener("pause", () => {
    setPlaying(false)
  })
  let play = () => {
    refV.current?.paused ? refV.current.play() : refV.current?.pause()
  }
  let backword = () => {
    console.log("Prev Episode")
  }
  let forward = () => {
    console.log("Next Episode");
  }
  let enterFullscreen = () => {
    screen.orientation.type == "landscape-primary"
    countainer.current?.requestFullscreen()
    let sc: any = screen?.orientation
    sc.lock("landscape-primary")
  }
  let exitFullscreen = () => {
    document.exitFullscreen()
  }

  document.addEventListener('fullscreenchange', function() {
    if (document.fullscreenElement != null) {
      setFullscreen(true)
    } else {
      setFullscreen(false)
    }
  });
  let active = () => {
    controle.current?.classList.add("showControle")
    clearTimeout(timer)
    hidControle()
  }
  function hidControle() {
    if (refV.current?.paused) return
    timer = setTimeout(() => {
      controle.current?.classList.remove("showControle")
    }, 3000)
  }
  let openParameter = () => {
    if (!parameterActive) {
      setPramterActive(true)
    } else {
      setPramterActive(false)
    }
  }
  refV.current?.addEventListener("timeupdate", (e: any) => {
    let { currentTime, duration } = e.target
    let purcent = (currentTime / duration) * 100
    timeLine.current.style.width = `${purcent}%`
  })
  // timeLine.current?.addEventListener("click", (e: any) => {
  //   let timeLineWidth: any = e.target.clientWidth
  //   // refV.current?.currentTime == (e.offsetX / timeLineWidth) * refV.current?.duration
  //   // console.log(refV.current?.currentTime, timeLineWidth)
  // })
  let changeVideoTime = (e: any | HTMLDivElement) => {
    let timeLineWidth = e.target.clientWidth
    let duration: any = refV.current?.duration
    refV.current?.currentTime == (e.offsetX / timeLineWidth) * duration
    console.log(refV.current?.currentTime, ",", timeLineWidth);
  }
  return (
    <div className='relative' id='videoC' ref={countainer} onClick={active}>
      <div className='PlayerControle' ref={controle}>
        <div className="Controle">
          <div className='TimelineCountainer' onClick={changeVideoTime}>
            <div className='Timeline' ref={timeLine}></div>
          </div>
          <div className='Start'>
            <div className='Time'>
              <span className='move'>00.00</span>
              <span className='separater'>/</span>
              <span className='duration'>00.00</span>
            </div>
          </div>
          <div className="center">
            <button onClick={backword}>
              <FontAwesomeIcon icon={faBackwardFast} color={color.second} size={size.medium} />
            </button>
            <button onClick={play} >
              {playing ?
                <FontAwesomeIcon icon={faPause} color={color.first} size={size.big} />
                : <FontAwesomeIcon icon={faPlay} color={color.first} size={size.big} />}
            </button>
            <button>
              <FontAwesomeIcon onClick={forward} icon={faForwardFast} color={color.second} size={size.medium} />
            </button>
          </div>
          <div className="end">
            {parameterActive ? <div className='paramet'>
              <ul>
                {isLoad ? cursub.map(sub => {

                  return <li>{sub.lang}</li>

                }) : <></>}
              </ul>
            </div>
              : <></>}
            <button>
              <FontAwesomeIcon icon={faGear} color={color.first} size={size.small} onClick={openParameter} />
            </button>
            {fullscreen ?
              <button onClick={exitFullscreen}>
                <FontAwesomeIcon icon={faCompress} color={color.first} size={size.small} />
              </button>
              :
              <button onClick={enterFullscreen}>
                <FontAwesomeIcon icon={faExpand} color={color.first} size={size.small} />
              </button>
            }
          </div>
        </div>
      </div>
      {isLoad ?

        <video ref={refV} poster='https://w0.peakpx.com/wallpaper/757/661/HD-wallpaper-black-screen-plain-noir-dark.jpg'>
          {isLoad &&
            <source src={episode[0].url} type='application/x-mpegURL' lang='auto' />
          }
          {subContent && isLoad ?
            <track
              src={`data:text/vtt;charset=utf-8,${encodeURIComponent(subContent)}`}
              kind="subtitles"
              label={cursub[0].lang}
              srcLang={cursub[0].label}
            />
            : <></>}
        </video>
        : <p>loading</p>}
    </div>
  );
};

export default Player;

