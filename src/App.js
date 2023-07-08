import "./App.css";
import CartWidget from "./components/NavBar/CartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/Navbar";

function App() {
  return (
    <>
      <NavBar />

      <ItemListContainer greeting="Bienvenidos a Burger World" />
    </>
  );
}

export default App;
