import MovieCard from "../components/MovieCard"

function Home() {
    const movies = [
        { id: 1, title: "John Wiz", release_date: "2020" },
        { id: 2, title: "Sam Wiz", release_date: "2020" },
        { id: 3, title: "Whis Wiz", release_date: "2020" },
    ];
    return <div className="Home">
        <div className="movies-grid">
            { movies.map((m) => (
                <MovieCard movie={m} key={m.id} /> 
            ))}
        </div>
    </div>
}

export default Home