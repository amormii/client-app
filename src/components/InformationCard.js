import "../styles/InformationCard.css"
import back from "../imgs&videos/back.svg"
import exit from "../imgs&videos/exit.svg"
import geo from "../imgs&videos/geo.svg"
import date from "../imgs&videos/date.svg"
import people from "../imgs&videos/people.svg"
import time from "../imgs&videos/time.svg"
import hall from "../imgs&videos/hall.svg"

const InformationCard = ((active, setActive)=>{
    return (<div className="information-card">
        <div className={active ? "informationCard active" : "informationCard"} onClick={setActive(false)}>
            <div className={active ? "informationCard_content active" : "informationCard_content"} onClick={e => e.stopPropagation()}>
                <header>
                    <a className="back" onClick={setActive(false)}><img className="backBtn" src={back} alt="back"/></a>
                    <p className="dateTimeInfo">Пон, 13 Вер гості: 2, 21:00</p>
                    <a className="exit" onClick={setActive(false)}><img className="exitBtn" src={exit} alt="exit"/></a>
                </header>
                <main>
                    <h1>Ваші дані</h1>
                    <form className="dataInput">
                        <div className="nameNumber">
                            <input type="text" name="name" placeholder="Ім'я" required/>
                            <input type="type" name="number" placeholder="Номер телефону" required/>
                        </div>
                        <div className="email">
                            <input type="text" name="email" placeholder="Email"/>
                        </div>
                    </form>
                    <h1>Підсумок</h1>
                    <div className="summary">
                        <div className="summaryRow">
                            <img src={geo} alt="geo"/>
                            <p>Doux Trou</p>
                            <hr/>
                        </div>
                        <div className="summaryRow">
                            <img src={date} alt="date"/>
                            <p>Пон, 13 Вер</p>
                            <hr/>
                        </div>
                        <div className="summaryRow">
                            <img src={people} alt="people"/>
                            <p>Гості: 2</p>
                            <hr/>
                        </div>
                        <div className="summaryRow">
                            <img src={time} alt="time"/>
                            <p>21:00-00:00</p>
                            <hr/>
                        </div>
                        <div className="summaryRow">
                            <img src={hall} alt="hall"/>
                            <p>The Front Room, 3</p>
                            <hr/>
                        </div>
                    </div>
                </main>
                <footer>
                    <a className="submitBtn" onClick={}>Підтвердити</a>
                </footer>
            </div>
        </div>
    </div>)
})

export default InformationCard