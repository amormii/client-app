import "../styles/Search.css"
import back from "../imgs&videos/back.svg"
import exit from "../imgs&videos/exit.svg"
import TableCard from "./TableCard";
import React from "react";

const Search = ({active, setActive}) => {
    return (
        <div className={active ? "searchRes active": "searchRes"} onClick={()=> setActive(false)}>
            <div className={active ? "searchRes_content active": "searchRes_content"} onClick={e => e.stopPropagation()}>
                <header>
                    <a className="back" onClick={()=>setActive(false)}><img className="backBtn" src={back} alt="back"/></a>
                    <a className="exit" onClick={()=>setActive(false)}><img className="exitBtn" src={exit} alt="exit"/></a>
                </header>
                <main>
                    <h1>Виберіть вільний столик</h1>
                    <hr/>
                    <TableCard/>
                </main>
            </div>
        </div>
    )
}

export default Search;