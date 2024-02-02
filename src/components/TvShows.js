import { Link } from "react-router-dom"
import TvshowDetails from "./TvshowDetails";
import Tvshow from "./Tvshow";

export default function TvShows({
  fetchTVshows,
  search,
  setSearch,
  tvshows,
  setId,
}) {
  const handleSearchChange = (e, key) => {
    setSearch({ ...search, [key]: e.target.value });
  };
  const resetIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor"
      className="bi bi-x-circle"
      viewBox="0 0 16 16"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
    </svg>
  );
  const searchIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="currentColor"
      className="bi bi-search"
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
    </svg>
  );

  return (
    <div className="container bg-light border">
      <form className="row m-auto mt-3  ">
        <div className="col-10">
          <div className="row">
            <input
              className="col me-1 form-control"
              type="text"
              name="title"
              value={search.title}
              placeholder="serach for your tvshow"
              onChange={(e) => handleSearchChange(e, "title")}
            />
            <br />
            <select
              className="col me-1 form-select form-select-sm"
              name="type"
              value={search.type}
              onChange={(e) => handleSearchChange(e, "type")}
            >
              <option value="value">Type</option>
              <option value="movie">Movie</option>
              <option value="series">Serie</option>
            </select>
            <br />
            <input
              className="col form-control me-1"
              type="number"
              value={search.year || ""}
              name="year"
              placeholder="type year of release"
              onChange={(e) => handleSearchChange(e, "year")}
            />
            <br />
          </div>
        </div>
        <div className="col-2 btn-group">
          <button
            className="col btn btn-outline-success "
            onClick={(e) => fetchTVshows(e)}
          >
            {searchIcon}
          </button>
          <button
            className="col btn btn-outline-danger "
            type="button"
            onClick={() => setSearch({ title: "", type: "", year: 0 })}
          >
            {resetIcon}
          </button>
        </div>
      </form>
      <hr />
      <ul className="list-group">
        {tvshows.map((tvshow) => (
          <Tvshow key={tvshow.imdbID} tvshow={tvshow} setId={setId} />
        ))}
      </ul>
    </div>
  );
}
