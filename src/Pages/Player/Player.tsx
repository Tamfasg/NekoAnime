import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { api } from "./Api"
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGear, faPlay, faPause, faVolumeUp, faExpand, faBackwardFast, faForwardFast } from "@fortawesome/free-solid-svg-icons"
import "./player.css"
const Player: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [episode, setEpisode] = useState<any[]>([]);
  const [isLoad, setIsLoad] = useState(false);
  const [subInfo] = useState<any[]>([]);
  const [cursub] = useState<any[]>([])
  const refV = useRef<HTMLVideoElement>(null)
  const countainer = useRef<HTMLDivElement>(null)
  let size: any = {
    big: "2xl",
    medium: "xl",
    small: "lg"
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
  }, [isLoad, subInfo, cursub])
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
  let expand = () => {
    screen.orientation.type == "landscape-primary"
    countainer.current?.requestFullscreen()
    console.log(document.fullscreenEnabled)
  }
  return (
    <div className='relative' id='videoC' ref={countainer}>
      <div className='PlayerControle'>
        <div className="Controle">
          <div className='TimelineCountainer'>
            <div className='Timeline'></div>
          </div>
          <div className='Start'>
            <button>
              <FontAwesomeIcon icon={faVolumeUp} size={size.small} color={color.first} />
            </button>
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
            <button>
              <FontAwesomeIcon icon={faGear} color={color.first} size={size.small} />
            </button>
            <button onClick={expand}>
              <FontAwesomeIcon icon={faExpand} color={color.first} size={size.small} />
            </button>
          </div>
        </div>
      </div>
      <video ref={refV} >
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
    </div>
  );
};

export default Player;

