import { ContainerTable } from "./style";

const TablaDeProductos = ({ bolsaCompra, setCompra }) => {
  const borrar = (id) => {
    const newBolsa = bolsaCompra.filter((producto) => producto.id !== id);
    setCompra(newBolsa);
  };
  return (
    <ContainerTable>
      <table>
        <thead>
          
        {bolsaCompra.length > 0 && <tr>
          <th>Talla</th>
          <th>Producto</th>
          <th>Color</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Vista</th>
          <th>Borrar</th>
        </tr> }
       
        </thead>
        <tbody>

        {bolsaCompra.map(({ name, price, img, id, cantidad, talla,color }) => (
          <tr key={id}>
            <td>{talla}</td>
            <td>{name}</td>
            <td>{color}</td>
            <td>${price}.00</td>
            <td>{cantidad}</td>
            <td>{<img src={img} alt={img} width="50px" />}</td>
            <td>
              <button onClick={() => borrar(id)}> x</button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </ContainerTable>
  );
};

export default TablaDeProductos;
