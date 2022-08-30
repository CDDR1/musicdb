import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TrackDetails from "./pages/TrackDetails";
import NotFound from "./pages/NotFound";
import "./styles/index.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/track/:id" element={<TrackDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
