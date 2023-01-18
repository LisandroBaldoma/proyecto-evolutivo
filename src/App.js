import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import Agenda from "./pages/Agenda";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  // TODO LOGGED DINAMICO
  const logged = localStorage.getItem("credential");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={logged !== null ? <Agenda /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
