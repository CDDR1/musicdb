import { FC } from "react";

interface Props {
  image: string;
  name: string;
  artist: string;
  album: string;
}

const TrackCard: FC<Props> = ({ image, name, artist, album }) => {
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
      <button className="card__btn">Details</button>
    </div>
  );
};

export default TrackCard;
