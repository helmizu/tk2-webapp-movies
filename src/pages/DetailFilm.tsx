import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout"
import dataFilm from "../data/films.json"
import { convertToSlug } from "../utils/url";

const mockData = {
  image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRLeDZOOOe39EylZoDSJteMkbX8lqS4JT-SvEZ8W2M6s1DRBZMd',
  title: 'Top Gun: Maverick',
  score: 86,
  category: 'Action, Drama',
  year: 2022,
  synopsis: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id explicabo non totam quidem veritatis necessitatibus quis libero qui quo, nulla alias tempora dolore cumque, dolorem minus animi voluptates, saepe commodi.',
  trailerId: 'giXco2jaZ_4',
  duration: '2h 11m'
}

const convertCategory = (cat: string) => cat.split('/').join(', ')

const DetailFilm = () => {
  const { slug = '' } = useParams();
  const data = dataFilm.find((film) => convertToSlug(film.title) === slug) || null;
  const { image = '', title = '', year = 0, score = 0, category = '', synopsis = '', trailerId = '', duration = '' } = data || mockData;
  return (
    <Layout>
      <div className="d-flex align-items-start justify-content-start pb-8">
        <div className="w-[660px]">
          <img src={image} className="rounded" width="100%" alt="banner" />
        </div>
        <div className="px-10">
          <h2 className="inline-block">{title}</h2> <span className="fw-light fs-2">({year})</span>
          <p><span className="text-capitalize">{convertCategory(category)}</span> • {duration}</p>
          <div className="mt-8">
            <h5>Synopsis</h5>
            <p>{synopsis}</p>
          </div>
          <div className="card text-center w-fit bg-[#D9D9D91A] border-[#A41B1B] mt-8">
            <div className="card-body">
              <h5>Score</h5>
              <h3 className="text-[#A41B1B]">{score}</h3>
            </div>
          </div>
          <div className="mt-8">
            <h5>Trailer</h5>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${trailerId}`} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DetailFilm