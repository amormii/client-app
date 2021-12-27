import exit from "../imgs&videos/exit.svg"
import table from "../imgs&videos/table.svg"

const TableCard = ((active, setActive)=>{
    return (<div className="table-card">
        <div className={active ? "tableCard active" : "tableCard"} onClick={setActive(false)}>
            <div className={active ? "tableCard_content active" : "tableCard_content"} onClick={e => e.stopPropagation()}>
                <header>
                    <p className="tableName">The Front Room, 3</p>
                    <a className="exit" onClick={()=>setActive(false)}><img className="exitBtn" src={exit} alt="exit"/></a>
                </header>
                <main>
                    <img className="tableImage" src={table} alt="table"/>
                </main>
                <footer>
                    <div className="tableInfo">
                        <p>21:00</p>
                        <p>The Front Room, 3</p>
                    </div>
                    <div className="select_btn">
                        <a className="select" onClick={setActive(false)}>Вибрати</a>
                    </div>
                </footer>
            </div>
        </div>
    </div>
    )
})

export default TableCard