import React from 'react';
import FilmDetails from './FilmDetails';

const FilmList = ({ films }) => {

    const filmNodes = films.map((film) => {
        return (
            <FilmDetails film={film} key={film.id} />
        )
    });


    return (

        <>
            {filmNodes}
        </>

    )

}

export default FilmList;