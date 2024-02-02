import { Link } from "react-router-dom"
import "../App.css"


export default function Tvshow({tvshow, setId}) {
    
    return <li className="list-group-item">
        <Link to={`/${tvshow.Title}/detail`} className="linkSec text-decoration-none rounded border m-1 d-flex flex-row" onClick={()=>setId(tvshow.imdbID)}>           
            <img src={tvshow.Poster} className="rounded me-2" width="70"/>
            <div className="align-self-center">
                <p className="text-secondary fw-bold fs-4 m-0">{tvshow.Title}</p>
                <p className="text-secondary m-0">{tvshow.Year}</p>
            </div>
        </Link>
    </li>
}   