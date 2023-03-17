import { Container } from "./style";

const Talla = ({ name, setTalla }) => {
  const tallaValue = (e) => {
    setTalla(e.target.value);
  };
  return (
    <Container>
      <section>Tallas: </section>
      <div>
        <input
          type="radio"
          onClick={tallaValue}
          name={name}
          value="35"
          id={`35${name}`}
        />
        <label htmlFor={`35${name}`}>35</label>
        <input
          type="radio"
          onClick={tallaValue}
          name={name}
          value="36"
          id={`36${name}`}
        />
        <label htmlFor={`36${name}`}>36</label>
        <input
          type="radio"
          onClick={tallaValue}
          name={name}
          value="37"
          id={`37${name}`}
        />
        <label htmlFor={`37${name}`}>37</label>
        <input
          type="radio"
          onClick={tallaValue}
          name={name}
          value="38"
          id={`38${name}`}
        />
        <label htmlFor={`38${name}`}>38</label>
        <input
          type="radio"
          onClick={tallaValue}
          name={name}
          value="39"
          id={`39${name}`}
        />
        <label htmlFor={`39${name}`}>39</label>
        <input
          type="radio"
          onClick={tallaValue}
          name={name}
          value="40"
          id={`40${name}`}
        />
        <label htmlFor={`40${name}`}>40</label>
      </div>
    </Container>
  );
};

export default Talla;
