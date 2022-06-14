import React from 'react';

const FilmDetails = ({ film }) => {


    return (

        <>
            {/* <h3>{film.name}</h3> */}
            <a href={film.url}>{film.name}</a>


        </>

    );

}

export default FilmDetails;