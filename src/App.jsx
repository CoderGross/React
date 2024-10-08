import NavBar from "./components/NavBar/NavBar"
import Card from "./components/Card/Card";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="deco">
      <NavBar />
      <h2>Bienvenido a mi Tienda</h2>
      <section>
        <Card />
      </section>
    </div>
  )
}
export default App