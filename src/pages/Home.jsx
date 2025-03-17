import MovieCard from "../components/MovieCard"

function Home() {
    const movies = [
        { id: 1, title: "John Wiz", release_date: "2020" },
        { id: 2, title: "Sam Wiz", release_date: "2020" },
        { id: 3, title: "Whis Wiz", release_date: "2020" },
    ];

    const handleSearch = () => {};
    return <div className="Home">
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text"
                    placeholder="Search for dem movies..."
                    className="search-input"
                />
                <button type="submit" className="search-button">
                    PUSH
                </button>

            </form>
        </div>
        <div className="movies-grid">
            { movies.map((m) => (
                <MovieCard movie={m} key={m.id} /> 
            ))}
        </div>
    </div>
}

export default Home