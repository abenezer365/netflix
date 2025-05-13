import './Row.css'
import request from '../../../utils/request'
import Movie from './Movie'

function Row() {
  return (
    <div className="row">
      <Movie title="Trending Now" fetchUrl={request.trending} />
      <Movie title="Top Rated" fetchUrl={request.rated} />
      <Movie title="Action" fetchUrl={request.action} />
      <Movie title="Comedy" fetchUrl={request.comedy} />
      <Movie title="Horror" fetchUrl={request.horror} />
      <Movie title="Documentaries" fetchUrl={request.documentaries} />
    </div>
  )
}

export default Row
