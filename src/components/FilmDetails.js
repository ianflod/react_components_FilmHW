import React from 'react';

const FilmDetails = ({ film }) => {


    return (

        <>
            <h3>{film.name}</h3>
            <p>{film.url}</p>
        </>

    );

}

export default FilmDetails;