import { Link } from "react-router-dom";
import { FaceSmileIcon, FaceFrownIcon } from "@heroicons/react/24/outline";
import { convertToSlug } from "../utils/url";

interface iFilmProps {
  image: string;
  title: string;
  score: number;
  year: number;
}

const Film = ({ image = "", title = "", score = 0, year = 0 }: iFilmProps) => {
  const slug = convertToSlug(title);
  const emote = score > 50 ? <FaceSmileIcon className="w-5 h-5 inline-block text-green-400" /> : <FaceFrownIcon className="w-5 h-5 inline-block text-red-400" />;
  return (
    <Link to={`/detail/${slug}`}>
      <div className="card border-0 bg-[#1F1F1F] h-[100%]">
        <div className="card-img-top position-relative">
          <img src={image} alt="banner" className="card-img-top img-fluid max-h-72 h-[100%] aspect-[3/4]" />
        </div>
        <div className="card-body">
          <div className="text-end mb-2">{emote} {score}/<small className="align-top">100</small></div>
          <p>
            <span className="fw-semibold">{title}</span>
            <br />
            <span className="fw-light">({year})</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Film