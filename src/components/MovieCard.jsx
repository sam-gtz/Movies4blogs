import "../css/MovieCard.css"

function MovieCard({movie}) {

    function onFavoriteClick() {
        alert("You dun Clicked Up Now! =O");
    }

    return <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>
                    &#x2764;
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h1>{movie.title}</h1>
                <p>{movie.release_date}</p>
            </div>
        </div>
    
}

export default MovieCard