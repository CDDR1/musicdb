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

    try {
      const res: any = await fetch(`https://itunes.apple.com/search?term=${searchTerm}&resultEntity=music&limit=18`);
      const data: any = await res.json(); console.log(data.results);/////
      setSongs(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      return <div>There has been an error fetching the data </div>
    }
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
        {loading ? <h1>Loading...</h1> : <Tracks tracks={songs} />}
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
