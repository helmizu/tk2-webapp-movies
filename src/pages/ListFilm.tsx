import Layout from "../components/Layout"
import { PlusCircleIcon, CheckIcon, MagnifyingGlassIcon as SearchIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import Film from "../components/Film"
import dataFilm from "../data/films.json"
import { getArrayStringUnique, sortObjectByField } from "../utils/data"

const ListFilm = () => {
  const [sort, setSort] = useState<"" | "asc" | "desc">("");
  const [category, setCategory] = useState<string>('');
  const [search, setSearch] = useState<string>("");
  const dataCategory = getArrayStringUnique(dataFilm.map(film => film.category.split('/').join(',')).join(',').split(','));
  const dataSorted = dataFilm.sort(sortObjectByField('title', sort));
  const dataFiltered = category ? dataSorted.filter(film => film.category.includes(category)) : dataSorted;
  const dataSearched = search ? dataFiltered.filter(film => film.title.toLowerCase().includes(search.toLowerCase())) : dataFiltered;
  const dataToRender = dataSearched;

  console.log(dataCategory, 'cat')
  return (
    <Layout>
      <div className="card bg-[#D9D9D91A]">
        <div className="card-body">
          <h2>Welcome to <span className="text-red-500">Filmku</span></h2>
          <p className="mt-4">
            Browse movies, add them to watchlists and share them with friends. <br />
            Just click the <PlusCircleIcon className="w-5 h-5 inline-block" /> to add a movie, the poster to see more details or <CheckIcon className="w-5 h-5 inline-block" /> to mark the movie as watched.
          </p>
        </div>
      </div>
      <div className="input-group my-8 border-[#D9D9D94D]">
        <span className="input-group-text border-[#D9D9D94D] bg-transparent" id="basic-addon1"><SearchIcon className="w-6 h-6 text-[#E1E1E1]" /></span>
        <input
          type="text"
          className="form-control bg-transparent border-[#D9D9D94D] placeholder-[#D9D9D94D] text-[#E1E1E1]"
          placeholder="Search  for movies by title"
          onChange={(e: any) => setSearch(e.target.value)}
        />
        {/* <button className="btn btn-danger" onClick={() => console.log("searching")}>Search</button> */}
      </div>
      <div>
        <div className="d-flex flex-row justify-content-between align-items-center">
          <h3>Popular movies right now</h3>
          <div className="d-flex flex-row justify-content-between align-items-center">
            <span>Sort by</span>
            <select className="btn btn-sm btn-secondary rounded-pill ms-3" value={sort} onChange={(e: any) => setSort(e.target.value)}>
              <option value="">Default</option>
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <div className="d-flex mb-2">
          <button
            className={category === "" ?
              "btn btn-sm btn-secondary rounded-pill me-2 text-capitalize bg-red-800 border-red-800" :
              "btn btn-sm btn-secondary rounded-pill me-2 text-capitalize"
            }
            onClick={() => setCategory("")}
          >
            Semua
          </button>
          {dataCategory.map((cat, index) => (
            <button
              className={category === cat ?
                "btn btn-sm btn-secondary rounded-pill me-2 text-capitalize bg-red-800 border-red-800" :
                "btn btn-sm btn-secondary rounded-pill me-2 text-capitalize"
              }
              key={index}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="pt-2">
          <div className="row">
            {dataToRender.map((film, index) => (
              <div className="col-6 col-md-4- col-lg-3 col-xl-2 mb-4" key={index}>
                <Film
                  title={film.title}
                  image={film.image}
                  score={Number(film.score)}
                  year={Number(film.year)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ListFilm