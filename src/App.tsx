import { FC, useState, useEffect } from "react";
import Navbar from "./components/Navbar";

const App: FC = () => {
  const fetchData = async () => {
    const res: any = await fetch("https://api.spotify.com/v1/search?q=thoughtsofadyingatheist&type=track&limit=30", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer BQBE14RoksZwqOrFsNGVt8qEXfKRMBs5v-RKH9_nC3z9cMfj8cVrApgN4sEnu6icJqya7PhRKCcmEKUb7_oXKw1f1xyxcvSuQ6yfBcxOCl10XgEfQkJxGqpEBsQWuBohuu9jIeJ3V-wwTw-G_4sF7VVtgkj3DSTg5n99WhuvT1CObuhVI7Zs8DBy8j_r18YUyVE",
      },
    });
    const data: any = await res.json();
    console.log(data.tracks.items);
  };
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Navbar />
  );
};

export default App;
