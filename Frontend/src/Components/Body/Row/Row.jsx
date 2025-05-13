import './Row.css'
import axios from '../../../utils/api'
import request from '../../../utils/request'
import { useEffect, useState } from 'react'

function Row() {
    const [trending, setTrending] = useState(null)
    const [rated, setRated] = useState(null)
    const [action, setAction] = useState(null)
    const [comedy, setComedy] = useState(null)
    const [horror, setHorror] = useState(null)
    const [documentaries, setDocumentaries] = useState(null)

    useEffect(()=>{
        (async () => {
            try {
                const res = await axios.get(request.trending)
                setTrending(res.data.results)
            } catch (error) {
                 console.log(`Error during fetching ${error.message}`)
            }
        })()
    },[])
    useEffect(()=>{
        (async () => {
            try {
                const res = await axios.get(request.action)
                setAction(res.data.results)
            } catch (error) {
                 console.log(`Error during fetching ${error.message}`)
            }
        })()
    },[])
    useEffect(()=>{
        (async () => {
            try {
                const res = await axios.get(request.rated)
                setRated(res.data.results)
            } catch (error) {
                 console.log(`Error during fetching ${error.message}`)
            }
        })()
    },[])
    useEffect(()=>{
        (async () => {
            try {
                const res = await axios.get(request.documentaries)
                setDocumentaries(res.data.results)
            } catch (error) {
                 console.log(`Error during fetching ${error.message}`)
            }
        })()
    },[])
    useEffect(()=>{
        (async () => {
            try {
                const res = await axios.get(request.horror)
                setHorror(res.data.results)
            } catch (error) {
                 console.log(`Error during fetching ${error.message}`)
            }
        })()
    },[])
    useEffect(()=>{
        (async () => {
            try {
                const res = await axios.get(request.comedy)
                setComedy(res.data.results)
            } catch (error) {
                 console.log(`Error during fetching ${error.message}`)
            }
        })()
    },[])
 useEffect(() => {
    const makeDraggable = (slider) => {
      let isDown = false;
      let startX;
      let scrollLeft;

      slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
        slider.style.cursor = 'grabbing';
      });

      slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.style.cursor = 'grab';
      });

      slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.style.cursor = 'grab';
      });

      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
      });
    };

    // Apply to all lists
    const lists = document.querySelectorAll('.row .list');
    lists.forEach(makeDraggable);
  }, []); // Empty dependency array to run only once

  return (
    <>
    <div className="row">
        <div className="trending">
              <div className="name">Trending Now</div>
              <div className="list">
                {trending && trending.map((movie,index) =>
                 <div className='card' key={index}>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster" />
                      <div className="title">{movie.title || movie.original_title}</div>
                 </div>)}
              </div>
        </div>
        <div className="rated">
             <div className="name">Top Rated</div>
              <div className="list">
                {rated && rated.map((movie,index) =>
                 <div className='card' key={index}>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster" />
                      <div className="title">{movie.title || movie.original_title}</div>
                 </div>)}
              </div>
        </div>
        <div className="action">
             <div className="name">Action</div>
              <div className="list">
                {action && action.map((movie,index) =>
                 <div className='card' key={index}>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster" />
                      <div className="title">{movie.title || movie.original_title}</div>
                 </div>)}
              </div>
        </div>
        <div className="comedy">
             <div className="name">Comedy</div>
              <div className="list">
                {comedy && comedy.map((movie,index) =>
                 <div className='card' key={index}>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster" />
                      <div className="title">{movie.title || movie.original_title}</div>
                 </div>)}
              </div>
        </div>
        <div className="horror">
             <div className="name">Horror</div>
              <div className="list">
                {horror && horror.map((movie,index) =>
                 <div className='card' key={index}>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster" />
                      <div className="title">{movie.title || movie.original_title}</div>
                 </div>)}
              </div>
        </div>
        <div className="documentaries">
             <div className="name">Documentaries</div>
              <div className="list">
                {documentaries && documentaries.map((movie,index) =>
                 <div className='card' key={index}>
                        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="poster" />
                      <div className="title">{movie.title || movie.original_title}</div>
                 </div>)}
              </div>
        </div>
    </div>
    </>
  )
}

export default Row
