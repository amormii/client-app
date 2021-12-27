import React from 'react';
import header from "../imgs&videos/header.png"
import exit from "../imgs&videos/exit.png"
import DPicker from "./DPicker";
import Guests from "./Guests";
import Time from "./Time";
import ReservFooter from "./ReservFooter";
import "../styles/reserv_window.css"

const Reservation = ({active, setActive}) => {
    return (
        <div className={active ? "modalRes active" : "modalRes"} onClick={() => setActive(false)}>
            <div className={active ? "modalRes_content active" : "modalRes_content"} onClick={e => e.stopPropagation()}>
                <header>
                    <img className="headerImg" src={header} alt="header"/>
                    <a className="exit" onClick={() => setActive(false)}><img className="crossBtn" src={exit} alt="exit"/></a>
                </header>
                <main>
                    <DPicker/>
                    <p>дата</p>
                    <hr/>
                    <Guests/>
                    <p>гості</p>
                    <hr/>
                    <Time/>
                    <p>час</p>
                    <hr/>
                </main>
                <footer>
                    <ReservFooter/>
                </footer>
            </div>
        </div>
    );
};

export default Reservation;