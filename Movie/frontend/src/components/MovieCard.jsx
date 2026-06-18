function MovieCard({movie}) {
    //image
    //name of the movie
    //realease date
    //favourite button

    function onFavouriteClick() {
        alert("clicked")
    }
    
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favourite-btn" onClick={onFavouriteClick}>
                    ❤
                </button>
            </div>
        </div>

    </div>
}