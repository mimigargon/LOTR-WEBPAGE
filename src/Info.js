import React from 'react'
import { useEffect, useState } from 'react';

const Info = () => {
    const [book, setBook] = useState();
    const [movie, setMovie] = useState();
    const [character, setCharacter] = useState();
    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer p9wtqI6TZpFrL00WYLQX'
        }
        const getInfo = async () => {
            const bookInfo = await fetch('https://the-one-api.dev/v2/book');
            const books = await bookInfo.json();
            const bookResult = books.docs;
            console.log(bookResult);
            setBook(bookResult);
            console.log(book);

            const movieInfo = await fetch('https://the-one-api.dev/v2/movie', {
                headers: headers
            });
            const movies = await movieInfo.json();
            const movieResult = movies.docs;
            console.log(movieResult);
            setMovie(movieResult);
            console.log(movie);

            const characterInfo = await fetch('https://the-one-api.dev/v2/character?limit=50', {
                headers: headers
            });
            const characters = await characterInfo.json();
            const characterResult = characters.docs;
            console.log(characterResult);
            setCharacter(characterInfo);
            console.log(character);
        };

        getInfo();
    }, []); 
  return (
    <div>

    </div>
  )
}

export default Info; 