import { ContainerHeader, Logo, Nav } from "./style";
import { inventario } from "../Data.js/BD";
import Bolsa from "./Bolsa";

const Header = ({ setProductos, bolsaCompra, setCompra}) => {

  /* filtro global de los tipos de calzado */
  /* los botones de navegacion se han hecho con input's tipo radio */
  const handleChange = (e) => {
    if (e.target.value === "botines") {
      const botinesList = inventario.filter(
        (producto) => producto.tipo === "botin"
      );
      setProductos(botinesList);
    } else if (e.target.value === "sandalias") {
      const sandaliaList = inventario.filter(
        (producto) => producto.tipo === "sandalia"
      );
      setProductos(sandaliaList);
    } else if (e.target.value === "tenis") {
      const tenisList = inventario.filter(
        (producto) => producto.tipo === "tenis"
      );
      setProductos(tenisList);
    } else {
      setProductos([...inventario]);
    }
  };

  return (
    <ContainerHeader>
      <Logo>
        <h1>Calzado Rubio's<p>Diseño y calidad</p> </h1>
        
      </Logo>
      <div className="nav">
        <Nav onChange={handleChange}>
          <input
            type="radio"
            name="tipo"
            id="todos"
            value="todos"
            defaultChecked
          />
          <label htmlFor="todos">Todos</label>
          <input type="radio" name="tipo" id="botines" value="botines" />
          <label htmlFor="botines">Botines</label>
          <input type="radio" name="tipo" id="sandalias" value="sandalias" />
          <label htmlFor="sandalias">Sandalias</label>
          <input type="radio" name="tipo" id="tenis" value="tenis" />
          <label htmlFor="tenis">Tenis</label>
        </Nav>
        
        <Bolsa bolsaCompra={bolsaCompra} setCompra={setCompra} />
      </div>
     
    </ContainerHeader>
  );
};

export default Header;
