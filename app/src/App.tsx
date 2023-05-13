import { Routes, Route } from "react-router-dom";
import PokeDetails from "src/components/PokeDetails/PokeDetails";
import PokeList from "src/components/PokeList/PokeList";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<PokeList />} />
      <Route path="/pokemon/:name" element={<PokeDetails />} />
    </Routes>
  );
}

export default App;
