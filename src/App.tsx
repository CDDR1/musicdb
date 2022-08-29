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

    const res: any = await fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track&limit=30`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer BQCnBYpwwV9kkJ-59fSy9RkARL_xARqBUeMhiFuLabDvhcrZ7KCTer7GjIDIWoOfmp3EK71gvEyuU5lT4z83bGSeOB-nc4eBO30_MrVBSdvLtlyrk0fiJCuBKG6utdVSyxGmzeWK_4yeu1XbF5dI2r0XfV6qV5X8QuRuAl37J7OfeQcBxvW5Dl6NTbbGJQTKyUk",
      },
    });

    const data: any = await res.json(); 
    setSongs(data.tracks.items);

    setLoading(false);
  };

  const handleInputChange = (text: string) => {
    setSearchTerm(text.replace(/ /g, ""));
  };

  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main>
        <Search handleSearch={handleInputChange} fetchData={getData} />
        {loading ? <h1>Loading...</h1> : <Tracks tracks={songs} />}
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
