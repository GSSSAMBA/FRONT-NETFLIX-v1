import React from 'react';
import { useState, useEffect } from 'react';
import './Banner.scss';
import requests from '../config/Requests';
import axios from "axios";
import QuickView from './QuickView';

const Banner = () => {

    const [movie, setMovie] = useState([]);
    const [popup, setPopup] = useState(false);

    function handlePopup() {
        popup ? setPopup(false) : setPopup(true);
    }


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);

            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
        }
        fetchData();
    }, []);

    function truncateText(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + "..." : string
    }

    const bannerStyle = {
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosistion: "center center",
    }

    console.log(popup);

    return (
        <header className='banner' style={bannerStyle}>
            <div className='banner__content'>
                <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_title}</h1>
                <p className='banner__description'>
                    {truncateText(movie?.overview, 100)}
                </p>
                <div className='banner__buttons'>
                    <button className='banner__button banner__button--play' onClick={handlePopup}> <i className="fa-solid fa-play"></i>
                        Lecture</button>
                    <button className='banner__button' onClick={handlePopup}>
                        <i className="fa-regular fa-circle-question"></i>Plus d'infos</button>
                </div>
            </div>
            <QuickView
                bannerStyle={bannerStyle}
                movie={movie}
                popup={handlePopup}
                popupStatut={popup}
            />
        </header>
    );
};

export default Banner;
