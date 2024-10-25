import "./Veiculos.css"
import React from "react"
function Veiculos() {
    const carros = [
      // Array de objetos com os dados dos carros
    ];
  
    return (
      <div className="tabela-carros">
        <table>
          <thead>
            <tr>
              <th>Marca</th>
              <th>Categoria</th>
              <th>Características</th>
            </tr>
          </thead>
          <tbody>
            {carros.map((carro) => (
              <tr key={carro.id}>
                <td>{carro.marca}</td>
                <td>{carro.categoria}</td>
                <td>{carro.caracteristicas}</td>
                <td><img src={carro.imagem} alt={carro.marca} /></td>
                <td>{carro.preco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Veiculos;
  