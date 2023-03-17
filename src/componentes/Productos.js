import Colores from "./Colores";
import { ContainerTargeta, Info, Targeta, BtnFavorito } from "./style";
import Talla from "./Talla";

const Productos = ({ productos, añadir, talla, setTalla, color, setColor }) => {
  const prevenir = (e) => e.preventDefault();
  /* el boton de añadir al carro genera un nuevo id en union con la 'talla' y el color para generar nuevos id por modello-talla-color */
  return (
    <ContainerTargeta>
      <form onSubmit={prevenir} id="myform">
        {productos.map((producto) => (
          <Targeta key={producto.id}>
            <div className="contenedor">
              <img
                src={producto.img}
                alt={producto.name}
                width="280px"
                height="200px"
              />
            </div>
            <Info>
              <h3>{producto.name}</h3>
              <p>precio: ${producto.price}.00</p>
              <Talla name={producto.name} setTalla={setTalla} />
              <Colores name={producto.name} setColor={setColor} />
              <BtnFavorito
                onClick={() =>
                  añadir({ ...producto, id: producto.id + talla + color }, talla, color)
                }
              >
                añadir producto
              </BtnFavorito>
            </Info>
          </Targeta>
        ))}
      </form>
    </ContainerTargeta>
  );
};
export default Productos;
