import React from 'react';

const FilmDetails = ({ film }) => {


    return (

        <>

            <a href={film.url} target='_blank' className="list">{film.name}</a>


        </>

    );

}

export default FilmDetails;