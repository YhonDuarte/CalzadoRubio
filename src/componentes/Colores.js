import { ContainerColor } from "./style";


const Colores = ({name, setColor}) => {
   const colorValue = (e) => {
        setColor(e.target.value)
    }
  return (
    <ContainerColor>
      <section>Colores: </section>
      <div>
        <input
          type="radio"
          onClick={colorValue}
          name={`color${name}`}
          value="negro"
          id={`negro${name}`}
        />
        <label htmlFor={`negro${name}`}>negro</label>
        <input
          type="radio"
          onClick={colorValue}
          name={`color${name}`}
          value="blanco"
          id={`blanco${name}`}
        />
        <label htmlFor={`blanco${name}`}>blanco</label>
        <input
          type="radio"
          onClick={colorValue}
          name={`color${name}`}
          value="azul"
          id={`azul${name}`}
        />
        <label htmlFor={`azul${name}`}>azul</label>
      
        <input
          type="radio"
          onClick={colorValue}
          name={`color${name}`}
          value="defaul"
          id={`defaul${name}`}
        />
        <label htmlFor={`defaul${name}`}>C.defaul</label>
      
        
      </div>
    </ContainerColor>
  )
}

export default Colores