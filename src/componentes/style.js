import styled from "styled-components";

export const Container = styled.div`
cursor:pointer;
  [type="radio"] {
    display: none;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    margin: 5px 0px;
  }
  label {
    padding: 4px 6px;
    border: none;
    border-radius: 15px;
    font-size: 15px;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
box-shadow:  3px 3px 4px #d1d1d1,
             3px 3px 4px #ffffff;
  }
  [type="radio"]:checked + label {
    color: #Ffffff;
    background: #111111;
  }
`;
export const ContainerColor = styled.div`
cursor:pointer;
  [type="radio"] {
    display: none;
  }

  div {
    display: flex;
    justify-content: space-evenly;
    margin: 5px 0px;
  }
  label {
    padding: 4px 6px;
    border: none;
    border-radius: 15px;
    font-size: 15px;
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
box-shadow:  3px 3px 4px #d1d1d1,
             3px 3px 4px #ffffff;
  }
  [type="radio"]:checked + label {
    color: #Ffffff;
    background: #111111;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  width: 100%;
  height: 85px;
  background-color: #f7eeee;
  box-shadow: 0px 3px 5px #a9a6a6;
  justify-content: space-between;
  .nav {
    display: flex;
    justify-content: space-between;
  }
  svg {
    width: 36px;
    margin: 40px 15px 0px;
  }
`;

export const Logo = styled.div`
width: 300px;
display: flex;
align-items: center;
justify-content: center;
  cursor: default;
  h1 {
    margin: 0px;
    margin-top:12px;
    font-family: "Bebas Neue";
    font-size: 40px;
    color: #111111;
    text-shadow: 1px 1px 2px #DDDDDD;
  }
  p {
    position: relative;
    top: -12px;
    font-size: 13px;
    font-weight: bold;
    color: #111111;
    margin:0px

  }
`;

export const Nav = styled.div`
display: flex;
  input {
    display: none;
  }
  label {
    height: 100%;
    padding: 12px 18px;
    display: flex;
    flex-wrap: wrap;
    align-content: end;
    border-bottom: 3px solid #f7eeee;
  }
  input:checked + label {
    border-bottom: 3px solid #111111;
    box-shadow: inset 0px -1px 20px #e9e9e9;
  }
`;
export const Targeta = styled.div`
  background-color: #f7eeee;
  width: 280px;
  margin: auto;
  margin-bottom: 35px;
  border-radius: 0px 0px 8px 8px;
  overflow: auto;
  box-shadow: 1px 1px 4px #a9a6a6;
  .contenedor {
    overflow: hidden;
  }
  img {
    transition: 0.5s transform;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const Info = styled.div`
  padding: 15px;
  h3 {
    margin: 0px;
  }
  p {
    margin: 1px 0px;
  }
`;

export const ContainerTargeta = styled.div`
  margin: 0px 140px;
  padding: 40px 0px;
  display: block;
  column-count: 3;
`;
export const BtnFavorito = styled.button`
  border: none;
  background: linear-gradient(145deg, #f7eeee, #e6e6e6);
  color: #111111;
  padding: 8px;
  border-radius: 8px;
  width: 100%;
  cursor:pointer;
 box-shadow:  3px 3px 2px #d1d1d1,
             -3px -3px 6px #ffffff;

  &:active {


box-shadow: inset 3px 3px 4px #d1d1d1,
            inset -2px -0px 4px #d1d1d1;
  }
`;

export const Car = styled.div`
  background-color: #f7eeee;
  width: 500px;
  min-height:270px ;
  max-height: 400px;
  position: absolute;
  right: 0px;
  top: 85px;
  border-radius: 0px 0px 8px 8px;
  box-shadow: -1px 1px 4px #a9a6a6;

  h3 {
    margin: 0px;
    background-color: #f7eeee;
    padding: 10px;
    box-shadow: 0px 1px 4px #a9a6a6;
    span{
      text-align: center;
    margin-top: 70px;

    }
  }
  h2{
    text-align: center;
    margin-top: 70px;
    background-color: #f7eeee;
    font-size:30px;
  }
`;
export const ContainerTable = styled.div`
  overflow: auto;
  max-height: 357px;
  table {
    width: 100%;
    height: 100px;
    border-collapse: collapse;
    text-align: center;
  }
  img {
    display: grid;
    transition: transform .5s;
    &:hover {
      transform: scale(2.5);
    }
  }
  th {
    background-color: #111111;
    color: #ffffff;
  }
  td:nth-child(odd) {
    background-color: #887b7b2b;;
  }
  td:nth-child(even) {
    background-color:#ffffff ;
  }
  
  button {
    border: none;
    border-radius: 50%;
    background-color: #111111;
    color: #ffffff;
    padding: 2px 8px;
  }
`;

export const Mensaje = styled.div`
  background-color: ${({ alert }) => (alert ? "#111111" : "#2ECC40")};
  display: flex;
  width: 100%;
  color: #ffffff;
  justify-content: center;
  font-size: 26px;
  position: fixed;
  bottom: 0px;
  z-index:99;
  height:60px;
  align-items: center;
`;
export const Notificacion = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #111111;
  position: absolute;
  top: 41px;
  right: 40px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: smaller;
`;
