import { useEffect, useState } from "react"

export default function TvshowDetails({id}) {
    const [tvshow, setTVshow] = useState({})
    useEffect(()=>{
        const fetchTVshow =async () => {
            const resp = await fetch(`https://www.omdbapi.com/?apikey=35b75175&i=${id}`)
            .then(resp=> resp.json())
            .then(resp=> {
                console.log(resp)
                setTVshow(resp)
            })
        }
        fetchTVshow()
    },[])
    const starIcon = <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="orange"className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /></svg>
    return<div className="container bg-light border mt-3 p-2">
        <p className="text-secondary fs-2 fw-bold m-0">{tvshow.Title}</p>
        
         {(tvshow.Type==='series' && <p className="text-secondary">{'TV serie, '+tvshow.Year+', '+tvshow.Runtime}</p>)||(tvshow.Type==='movie' && <p className="text-secondary">{'Movie, '+tvshow.Year+', '+tvshow.Runtime}</p>)}
        
        <div className="row">
            <img src={tvshow.Poster} className="col-5 rounded" />
            <div className="col d-flex flex-column">
                <p className="bg-white border rounded-pill p-2 ">{tvshow.Genre}</p>
                <p>{tvshow.Plot}</p>
                <p></p>


            </div>

        </div>
    </div>
    
}