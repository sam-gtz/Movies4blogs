import MovieCard from "../components/MovieCard"
import { useState } from "react"
import "../css/Home.css"

function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "John Wiz", release_date: "2020" },
        { id: 2, title: "Sam Wiz", release_date: "2020" },
        { id: 3, title: "Whis Wiz", release_date: "2020" },
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    };
    return <div className="Home">
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text"
                    placeholder="Search for dem movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                    PUSH
                </button>

            </form>
        </div>
        <div className="movies-grid">
            { movies.map( (m) => (
                <MovieCard movie={m} key={m.id} /> 
            ))}
        </div>
    </div>
}

export default Home