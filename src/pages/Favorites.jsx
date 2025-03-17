import { Routes } from "react-router-dom"
import "../css/Favorites.css"

function Favorites() {
    return <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding movies to your fovorites and they will appear here</p>
    </div>
}

export default Favorites