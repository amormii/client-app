import React from 'react';
import background from "../imgs&videos/background.mp4";
import "../styles/main_screen.css"

const MainScreen = ({setActive}) => {
    return (
        <div className="mainScr">
            <video className="background-video" autoPlay loop muted>
                <source src={background} type="video/mp4"/>
            </video>
            <h1 className="logo">
                DOUX TROU
            </h1>
            <a className="reservation" onClick={() => setActive(true)}>БРОНЮВАННЯ</a>
        </div>
    );
};

export default MainScreen;