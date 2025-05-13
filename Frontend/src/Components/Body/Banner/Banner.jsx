import { useEffect, useState } from "react"
import axios  from '../../../utils/api'
import request from '../../../utils/request'
import skip_icon from '../../../assets/skip.svg'

import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState(null)
    const [skip, setSkip] = useState(true)
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
                    <button>Play</button> 
                    <button>Add to my list</button>
                 </div>
                 <div className="desc">
                    <p>{truncate(movie.overview,150)}</p>
                 </div>
            </div>
        </div>
    </>
  )
}

export default Banner
