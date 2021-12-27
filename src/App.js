import React, {useState} from "react"
import MainScreen from "./components/MainScreen";
import Reservation from "./components/Reservation";
import Search from "./components/Search";

function App() {
    const [ModalActive, setModalActive] = useState(false)

    return (
        <div className="App">
            <MainScreen setActive={setModalActive}/>
            <Reservation active={ModalActive} setActive={setModalActive}/>
            {/*<Search active={ModalActive} setActive={setModalActive}/>*/}
        </div>
    );
}

export default App;
