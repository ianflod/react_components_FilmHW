import React from "react";

const FilmLink = () => {
    window.open("https://www.imdb.com/calendar/?region=gb")

    return (
        <>
            <button onClick={FilmLink} className='button'>Further Upcoming Films in the UK.....</button>

        </>
    )

}

export default FilmLink;

