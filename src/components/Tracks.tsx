import TrackCard from "./TrackCard";

interface Props {
  tracks: any;
}

const Tracks = ({ tracks }: Props) => {
  return (
    <div className="tracks">
      <h2 className="tracks__title">Songs</h2>
      <div className="tracks__cards">
        {
          tracks.map((track: any) => 
            <TrackCard 
              key={track?.trackId}
              id={track?.trackId}
              image={track?.artworkUrl100}
              name={track?.trackName}
              artist={track?.artistName}
              album={track?.collectionName}
            />
          )
        }
      </div>
    </div>
  );
}

export default Tracks;