import { Routes, Route, Navigate } from "react-router-dom";
import PokeDetails from "src/components/PokeDetails/PokeDetails";
import PokeList from "src/components/PokeList/PokeList";

function App() {
  return (
    <Routes>
      <Route path="/list" element={<PokeList />} />
      <Route path="/pokemon/:name" element={<PokeDetails />} />
      <Route path="*" element={<Navigate to="/list" />} />
    </Routes>
  );
}

export default App;
