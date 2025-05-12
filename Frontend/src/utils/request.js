const APIKEY = import.meta.env.VITE_API_KEY

const reqeust = {
    trending: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
	originals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
	rated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
	action: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
	comedy: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
	horror: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
	romance: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
	documentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
}
export default reqeust;
// 'https://api.themoviedb.org/3/trending/all/week?api_key=0260d25bec44e88cc6597322ca827e7d&language=en-US'