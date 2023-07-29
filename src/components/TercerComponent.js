import React, {useState} from 'react'

const TercerComponent = () => {
    //let nombre = "Gera";
    let alias = "geraMoran";

    const [nombre, setNombre] = useState("Gera");

    let tecnologias = [
        "JS",
        "Node",
        "Angular",
        "Vue",
        "PHP",
        ".NET"
    ];

    const cambiaNombreOAlias = (nuevoNombre) => {
        setNombre(nuevoNombre);
    };
  return (
    <div>
      <s>Hola 2</s>
      <h1>Mi nombre es <strong className={nombre.length >= 4 ? 'rojo': 'verde'}>{nombre}</strong></h1>
      <p>Domino estas tecnologias:</p>
      <ul>
        {
            tecnologias.map( (item, key) => {
                return (<li key={key}>{item}</li>);
            })
        }
      </ul>
      <input type="text" onChange={ e => cambiaNombreOAlias(e.target.value) } placeholder="Escribe tu nuevo nombre"></input>
      <br/>
      <button onClick={ e => cambiaNombreOAlias("geraMoran")}>Cambia a mi alias</button>
    </div>
  )
}

export default TercerComponent
