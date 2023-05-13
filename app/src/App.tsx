import { Routes, Route } from "react-router-dom";
import PokeDetails from "src/components/PokeDetails/PokeDetails";

function App() {
  return (
    <Routes>
      <Route path="/pokemon/:name" element={<PokeDetails />} />
    </Routes>
  );
}

export default App;
