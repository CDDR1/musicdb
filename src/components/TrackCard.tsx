import { Link } from "react-router-dom";

interface Props {
  id: number
  image: string;
  name: string;
  artist: string;
  album: string;
}

const TrackCard = ({ id, image, name, artist, album }: Props) => {
  return (
    <div className="card">
      <div className="card__img-container">
        <img src={image} alt="Album cover image" className="card__img" />
      </div>
      <div className="card__data">
        <h3 className="card__title">{name}</h3>
        <span className="card__artist">{artist}</span>
        <span className="card__album">{album}</span>
      </div>
      <Link to={`/track/${id}`} className="card__link">Details</Link>
    </div>
  );
};

export default TrackCard;
