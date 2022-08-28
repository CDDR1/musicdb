import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Tracks from "./components/Tracks";

const App = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  const getData = async (e: any) => {
    e.preventDefault();

    setLoading(true);

    const res: any = await fetch("https://api.spotify.com/v1/search?q=thoughtsofadyingatheist&type=track&limit=30", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer BQB_1ra3IdamK98f4ehP7j-4qa6jj0W1H5EKokKTJL6-fUb0HEeS5tQxIRmwJENgKodlyt3TYHs9p0um-h8oQi4r2vNW7mDC-ipRFH8tJyL8aSbzyl695TkPTDItqRFopDb6J1dHQksXl_iBiDuHzxd2gOnigkS1oudT68lF_LWXCOlD4W8Ct7eXRGdztYD9-fg",
      },
    });

    const data: any = await res.json(); 
    setSongs(data.tracks.items);

    setLoading(false);
  };

  const handleInputChange = (text: string) => {
    setSearchTerm(text);
  };

  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main>
        <Search handleSearch={handleInputChange} fetchData={getData} />
        {loading ? <h1>Loading...</h1> : <Tracks data={songs} />}
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
