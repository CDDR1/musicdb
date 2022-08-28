import { FC, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Tracks from "./components/Tracks";

const App: FC = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch("https://api.spotify.com/v1/search?q=thoughtsofadyingatheist&type=track&limit=30", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer BQBoBDHZHIaR3R3zvnA205gwvSDY0oMjVJHDRgAMqPyc_-O4GbMNQdH28J3-g6KNnFkysV0cIXKA-sNSoWO-VUVV_mBYfAvfXKL1FIOJK-WPXlSneL_ITSiN2u24DRZW9jDmn7SS48ikh_bDBMRH6CR1DWJ_VVgXZqZeGvw0yomTpeg7KBVFxcudy_fDFqQwuWQ",
      },
    })
    .then(res => res.json())
    .then(data => setSongs(data.tracks.items))
    .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main>
        <Search />
        {loading ? <h1>Loading...</h1> : <Tracks data={songs} />}
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
