import { useState } from "react";

export default function App() {
  
  //let numRegistros = 0


  const[arrayPartidas, setArrayPartidas] = useState(
    [
      {
        id: 1,
        puntos: 10
      },
      {
        id: 2,
        puntos: 15
      }
    ]
  )

  const [numRegistros, setNumRegistros] = useState(arrayPartidas.length);

  function ctrlNumRegistros(num){
    const nuevoRegistro = {
      id: 1000,
      puntos: 10000000000
    }
    arrayPartidas.push(nuevoRegistro);
    console.log(arrayPartidas)

    setArrayPartidas([...arrayPartidas]);

    setNumRegistros(arrayPartidas.length);
  }


  const arrayOrdenado = arrayPartidas.sort((a,b)=> b.id - a.id)

  function ctrlOrden(num){
    console.log('ordenado')
    setArrayPartidas(arrayOrdenado)
  }

  return (
    <div>
      <h1>Sesión 4 plus</h1>

      <div>
        Número de registros:
        <span>{numRegistros}</span>
      </div>
      
      <table>
        
        <thead>
          <tr>
            <th>Id</th>
            <th>Puntos</th>
          </tr>
        </thead>
        
        
        <tbody>
          {
            arrayPartidas.map((item, index)=> (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.puntos}</td>
              </tr>
            )) 
          }
        </tbody>
      </table>
      {

      }
      <button onClick={ctrlNumRegistros}>Sumar registro</button>
      
      <button onClick={{ctrlOrden}}>Ordenar</button>
    </div>
  )
}