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
          tracks.map((track: any, index: number) => 
            <TrackCard 
              key={index}
              image={track?.album?.images?.[0].url}
              name={track?.name}
              artist={track?.artists?.[0]?.name}
              album={track?.album?.name}
            />
          )
        }
      </div>
    </div>
  );
}

export default Tracks;