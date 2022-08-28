import { FC } from "react";
import TrackCard from "./TrackCard";

interface Props {
  data: object
}

const Tracks: FC<Props> = ({ data }) => {
  return (
    <div className="tracks">
      <h2 className="tracks__title">Songs</h2>
      <div className="tracks__cards">
        {

        }
      </div>
    </div>
  );
}

export default Tracks;