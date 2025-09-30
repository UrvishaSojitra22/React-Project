import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./assets/components/Home";
import { Route, Routes } from "react-router";
import AddMovie from "./assets/components/AddMovie";
import EditMovie from "./assets/components/EditMovie";
import Header from "./assets/components/Header"

import { Navbar, Container, Nav } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddMovie" element={<AddMovie />} />
        <Route path="/EditMovie/:id" element={<EditMovie />} />
      </Routes>

    </>
  );
}

export default App;
