import { useEffect, useState } from "react"
import axios  from '../../../utils/api'
import request from '../../../utils/request'
import skip_icon from '../../../assets/skip.svg'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import './Banner.css'
import React from 'react'
function Banner() {
    const [movie, setMovie] = useState(null)
    const [skip, setSkip] = useState(true)
    const [videoId, setVideoId] = useState(null)
    const [showVideo, setShowVideo] = useState(false)
    function skipper(){
        setSkip(prev => !prev)
    }
    useEffect(()=>{
        (async()=>{
            try {
                const res = await axios.get(request.originals);
                const randomIndex = Math.floor(Math.random() * res.data.results.length);
                setMovie(res.data.results[randomIndex]);
            } catch (error) {
                console.log(`Error during fetching ${error.message}`)
            }
        })()
    },[skip])
    const truncate = (text, max, ellipsis = '...') => text.length <= max ? text : `${text.slice(0, max)}${ellipsis}`;
    if (!movie) return <div>Loading...</div>;

      const handleVideo = async (movieTitle) => {
        try {
          const url = await movieTrailer(movieTitle)
          const videoId = new URL(url).searchParams.get('v')
          setVideoId(videoId)
          setShowVideo(true)
        } catch (err) {
          console.error(`Trailer error: ${err.message}`)
        }
      }
    
      const closeVideo = () => {
        setVideoId(null)
        setShowVideo(false)
      }
    
  return (
    <>
        <div className="banner" >
            <div className="background">
                {window.innerWidth < 600 ?  <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.original_title} />
                : <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.original_title} />} 
            </div>
            <div className="skip-cont" >
                <img className="skip" onClick={skipper} src={skip_icon} alt="Skip icon" />
            </div>
            <div className="info">
                 <h1 className="title">{movie.title || movie.name}</h1>
                 <div className="btn-container">
                   <button onClick={() => handleVideo(movie?.title || movie?.name)}>Play</button>
                    <button>Add to my list</button>
                 </div>
                 <div className="desc">
                    <p>{truncate(movie.overview,150)}</p>
                 </div>
                  {showVideo && (
                    <div className="video-cont" onClick={closeVideo}>
                    <div className="video" onClick={(e) => e.stopPropagation()}>
                        <Youtube
                        videoId={videoId}
                        opts={{
                            height: '450',
                            width: '800',
                            playerVars: { autoplay: 1 },
                        }}
                        />
                        <button onClick={closeVideo}>Close</button>
                    </div>
                    </div>
                )}
            </div>
        </div>
    </>
  )
}

export default Banner
