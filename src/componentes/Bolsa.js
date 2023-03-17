import { useState } from "react";
import { Car, Notificacion } from "./style";
import TablaDeProductos from "./TablaDeProductos";

const Bolsa = ({ bolsaCompra, setCompra }) => {
  /* calculan el total a pagar y la cantidad de productos en el carrito */
  let total = bolsaCompra.reduce(
    (total, bolsa) => (total = total + bolsa.cantidad * bolsa.price),
    0
  );
  let cantidad = bolsaCompra.reduce(
    (total, bolsa) => (total = total + bolsa.cantidad),
    0
  );

  const [open, setOpen] = useState(false);
  const openCar = () => setOpen(!open);

  return (
    <>
      <svg
        onClick={openCar}
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill="#111111"
        className="bi bi-bag-heart"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"
        />
      </svg>
      { bolsaCompra.length > 0 && <Notificacion>{cantidad}</Notificacion>} 
      {open && (
        <Car>
       { cantidad > 0 ? <h3>total añadido = <span>${total}.00 </span></h3> : <h2>El carrito esta vacio,<br/> !Añade algun producto¡</h2>}   
          <TablaDeProductos bolsaCompra={bolsaCompra} setCompra={setCompra} />
        </Car>
      )}
    </>
  );
};
export default Bolsa;
