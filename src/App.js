import { useState } from "react";
import Header from "./componentes/Header";
import Productos from "./componentes/Productos";
import ShowMessage from "./componentes/ShowMessage";
import { inventario } from "./Data.js/BD";

const App = () => {
  /* no pregunten */
  const [productos, setProductos] = useState(inventario);
  const [bolsaCompra, setCompra] = useState([]);
  /* undefined por que es el valor que arroja el form al ser reseteado */
  const [talla, setTalla] = useState(undefined);
  const [color, setColor] = useState(undefined);
  const [show, setShow] = useState("");

  const añadir = (producto, talla, color) => {
    /**********  es nesesario  **********/
    document.getElementById("myform").reset();
    setTalla(undefined);
    setColor(undefined);

    const newProducto = bolsaCompra.find((bolsa) => bolsa.id === producto.id);
    if (talla !== undefined && color !== undefined) {
      if (newProducto) {
        const nuevo = bolsaCompra.map((bolsa) =>
          bolsa.id === producto.id
            ? { ...bolsa, cantidad: bolsa.cantidad + 1 }
            : bolsa
        );
        setCompra(nuevo);
      } else {
        setCompra([...bolsaCompra, { ...producto, talla, color }]);
      }
      setShow("exito");
      setTimeout(() => {
        setShow("");
      }, 4000);
    } else {
      setShow("alert");
      setTimeout(() => {
        setShow("");
      }, 4000);
    }
  };

  return (
    <div>
      <Header
        bolsaCompra={bolsaCompra}
        setCompra={setCompra}
        productos={productos}
        setProductos={setProductos}
      />
      {show !== "" ? (
        show === "alert" ? (
          <ShowMessage titulo={"selecciona una talla y un color"} alert={true} />
        ) : (
           <ShowMessage titulo={"producto agregado con exito"}/>
        )
      ) : null}

      <Productos
        añadir={añadir}
        productos={productos}
        talla={talla}
        setTalla={setTalla}
        color={color}
        setColor={setColor}
      />
    </div>
  );
};

export default App;
