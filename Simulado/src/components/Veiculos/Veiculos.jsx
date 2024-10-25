import "./Veiculos.css"
import React from "react"
import Polo from "../../assets/polo.png"
const carros = [
    {
        id: 1,
        marca: 'Volkswagen',
        modelo: 'Polo Confortline',
        categoria: 'Hatch',
        caracteristicas: '...',
        imagem: 'caminho/para/imagem.jpg',
        preco: 'A partir de R$ 82.799'
      },
  ];
function Veiculos() {
    return (
        
        <div className="container text-center">
            <h1>  Diversas marcas e modelos.</h1>
            <h2>Encontre o carro que combine com vc!</h2>
            <div className="Quadro"></div>
            <h3>Você seleciona o veículo, o plano mensal e a quantidade de quilômetros inclusos que preferir,
                e nós entregamos o carro na sua residência com tudo já resolvido: documentação,
                IPVA, licenciamento, emplacamento, seguro e manutenções. Tudo isso por um valor fixo mensal,
                sem complicações. No fim do contrato, basta devolver o carro ou optar por renovar o seu contrato.
                Tudo simples e sem preocupações.</h3>
                <div className="tabela-carros">
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Categoria</th>
            <th>Características</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {carros.map((carro) => (
            <tr key={carro.id}>
              <td>{carro.marca}</td>
              <td>{carro.modelo}</td>
              <td>{carro.categoria}</td>
              <td>{carro.caracteristicas}</td>
              <td>
                <img src={carro.imagem} alt={carro.marca} />
                <p>{carro.preco}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
    );
}

export default Veiculos;
