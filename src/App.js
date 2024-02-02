import { useEffect, useState } from 'react';
import TvShows from './components/TvShows';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TvshowDetails from './components/TvshowDetails';


function App() {
  const [tvshows, setTVshows] = useState([]);
  const [search, setSearch] = useState({
    title: "",
    type: "",
    year: 0
  });
  const [error, setError] = useState(null)
  const [id, setId] = useState(null)
  const fetchTVshows = async (e) => {
    e.preventDefault()
    const handleyear = () => {
      if (search.year) {
        return search.year
      }
    }
    console.log(search)
    const resp = await fetch(`https://www.omdbapi.com/?apikey=35b75175&s=${search.title}&type=${search.type}&y=${handleyear()}`)
    .then(resp=> {
      if (!resp.ok) {
        throw Error('Faild to fetch data')
      }
      return resp.json()
    })
    // .then(resp=> console.log(typeof(resp.Response)))
    .then(resp=> {
      if (resp.Response === "False") {
        throw Error(resp.Error)
      }
      setTVshows(resp.Search)
    })
    .catch(err=> {
      alert(err.message)
    })
  }
  
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TvShows fetchTVshows={fetchTVshows} search={search} setSearch={setSearch} tvshows={tvshows} error={error} setId={setId} />} />
        <Route path='/:tvshow/detail' element={<TvshowDetails id={id} />} />
      </Routes>
    </BrowserRouter>
    {/* {console.log(tvshows)} */}
  </>
}

export default App;
