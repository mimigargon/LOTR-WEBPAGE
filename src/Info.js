import React from 'react'
import { useEffect, useState } from 'react';

const Info = () => {
    const [book, setBook] = useState();
    const [movie, setMovie] = useState();
    const [aragorn, setAragorn] = useState();
    const [arwen, setArwen] = useState();
    const [boromir, setBoromir] = useState();
    const [frodo, setFrodo] = useState();
    const [bilbo, setBilbo] = useState();
    const [merry, setMerry] = useState();
    const [denethor, setDenethor] = useState();
    const [elrond, setElrond] = useState();
    const [eowyn, setEowyn] = useState();
    const [eomer, setEomer] = useState();
    const [legolas, setLegolas] = useState();
    const [gimli, setGimli] = useState();
    const [sam, setSam] = useState();
    const [pippin, setPippin] = useState();
    const [gandalf, setGandalf] = useState();
    const [faramir, setFaramir] = useState();
    const [galadriel, setGaladriel] = useState();
    const [saruman, setSaruman] = useState();
    const [sauron, setSauron] = useState();
    const [witchKing, setWitchKing] = useState();
    const [gollum, setGollum] = useState();
    const [theoden, setTheoden] = useState(); 


    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer p9wtqI6TZpFrL00WYLQX'
        }
        const getInfo = async () => {
            const bookInfo = await fetch('https://the-one-api.dev/v2/book');
            const books = await bookInfo.json();
            const bookResult = books.docs;
            setBook(bookResult);
            

            const movieInfo = await fetch('https://the-one-api.dev/v2/movie', {
                headers: headers
            });
            const movies = await movieInfo.json();
            const movieResult = movies.docs;
            setMovie(movieResult);
            

            const aragornInfo = await fetch('https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfbe6', {
                headers: headers
            });
            const aragorn = await aragornInfo.json();
            const aragornResult = aragorn.docs;
            setAragorn(aragornResult);


            const arwenInfo = await fetch('https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfc07', {
                headers: headers
            });
            const arwen = await arwenInfo.json();
            const arwenResult = arwen.docs;
            setArwen(arwenResult);


            const boromirInfo = await fetch('https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfc57', {
                headers: headers
            });
            const boromir = await boromirInfo.json();
            const boromirResult = boromir.docs;
            setBoromir(boromirResult);


            const frodoInfo = await fetch('https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfc15', {
                headers: headers
            });
            const frodo = await frodoInfo.json();
            const frodoResult = frodo.docs;
            setFrodo(frodoResult);


            const bilboInfo = await fetch('https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfc38', {
                headers: headers
            });
            const bilbo = await bilboInfo.json();
            const bilboResult = bilbo.docs;
            setBilbo(bilboResult);


            const merryInfo = await fetch('https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfc7c', {
                headers: headers
            });
            const merry = await merryInfo.json();
            const merryResult = merry.docs;
            setMerry(merryResult);


            const denethorInfo = await fetch('https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfc9a', {
                headers: headers
            });
            const denethor = await denethorInfo.json();
            const denethorResult = denethor.docs;
            setDenethor(denethorResult);


            const elrondInfo = await fetch('https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfcc8', {
                headers: headers
            });
            const elrond = await elrondInfo.json();
            const elrondResult = elrond.docs;
            setElrond(elrondResult);


            const faramirInfo = await fetch('https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfcef', {
                headers: headers
            });
            const faramir = await faramirInfo.json();
            const faramirResult = faramir.docs;
            setFaramir(faramirResult);


            const galadrielInfo = await fetch('https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfd06', {
                headers: headers
            });
            const galadriel = await galadrielInfo.json();
            const galadrielResult = galadriel.docs;
            setGaladriel(galadrielResult);


            const samInfo = await fetch('https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfd0d', {
                headers: headers
            });
            const sam = await samInfo.json();
            const samResult = sam.docs;
            setSam(samResult);


            const gimliInfo = await fetch('https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfd23', {
                headers: headers
            });
            const gimli = await gimliInfo.json();
            const gimliResult = gimli.docs;
            setGimli(gimliResult);


            const legolasInfo = await fetch('https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfd81', {
                headers: headers
            });
            const legolas = await legolasInfo.json();
            const legolasResult = legolas.docs;
            setLegolas(legolasResult);


            const theodenInfo = await fetch('https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfe19', {
                headers: headers
            });
            const theoden = await theodenInfo.json();
            const theodenResult = theoden.docs;
            setTheoden(theodenResult);
            

            const pippinInfo = await fetch('https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfe2e', {
                headers: headers
            });
            const pippin = await pippinInfo.json();
            const pippinResult = pippin.docs;
            setPippin(pippinResult);

            
            const gandalfInfo = await fetch('https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfea0', {
                headers: headers
            });
            const gandalf = await gandalfInfo.json();
            const gandalfResult = gandalf.docs;
            setGandalf(gandalfResult);

            
            const sarumanInfo = await fetch('https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfea4', {
                headers: headers
            });
            const saruman = await sarumanInfo.json();
            const sarumanResult = saruman.docs;
            setSaruman(sarumanResult);


            const sauronInfo = await fetch('https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfea5', {
                headers: headers
            });
            const sauron = await sauronInfo.json();
            const sauronResult = sauron.docs;
            setSauron(sauronResult);


            const eowynInfo = await fetch('https://the-one-api.dev/v2/character/5cdbdecb6dc0baeae48cfa59', {
                headers: headers
            });
            const eowyn = await eowynInfo.json();
            const eowynResult = eowyn.docs;
            setEowyn(eowynResult);


            const eomerInfo = await fetch('https://the-one-api.dev/v2/character/5cdbdecb6dc0baeae48cfa5a', {
                headers: headers
            });
            const eomer = await eomerInfo.json();
            const eomerResult = eomer.docs;
            setEomer(eomerResult); 


            const witchKingInfo = await fetch('https://the-one-api.dev/v2/character/5cdbdecb6dc0baeae48cfaa6', {
                headers: headers
            });
            const witchKing = await witchKingInfo.json();
            const witchKingResult = witchKing.docs;
            setWitchKing(witchKingResult);


            const gollumInfo = await fetch('https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfe9e', {
                headers: headers
            });
            const gollum = await gollumInfo.json();
            const gollumResult = gollum.docs;
            setGollum(gollumResult);
        };

        getInfo();
    }, []); 
  return (
    <div>

    </div>
  )
}

export default Info; 