import "./header.css"
import Suv from "../../assets/SUV.png"

function header() {
    return (
        
            <div className="container mt-5">
              <div className="row align-items-center">
                {/* Texto da parte superior esquerda */}
                <div className="col-md-6">
                  <h1 className="fw-bold">Bem-vindo ao PraJaCarros</h1>
                  <p className="fs-5">
                    Seja para uma viagem de negócios, uma escapada de fim de semana ou simplesmente
                    para facilitar seu dia a dia, nós temos o veículo perfeito para você. Com uma
                    frota diversificada, que vai desde carros econômicos até SUVs espaçosos, garantimos
                    qualidade, conforto e segurança em cada viagem. Navegue pelo nosso site e descubra
                    como é fácil alugar um carro com a gente. Venha explorar o mundo sobre quatro rodas!
                  </p>
                </div>
        
                {/* Imagens dos carros à direita */}
                <div className="col-md-6 text-center">
                  <img src={Suv} alt="Carro 1" className="img-fluid mx-3" width="400px" />
                  
                </div>
              </div>
        
              {/* Parte inferior com título e três cartões */}
              <div className="mt-5">
                <h2 className="text-left">Seu carro por Assinatura</h2>
                <p className="text-left text-warning fw-bold">Sua liberdade por escolha!</p>
                
                <div className="row">
                  {/* Primeiro Card */}
                  <div className="col-md-4">
                    <div className="card text-center mb-3 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title fw-bold">ESCOLHA SEU VEÍCULO</h5>
                        <p className="card-text">
                          Escolha o carro que mais combina com você entre diversas marcas,
                          modelos e anos de fabricação.
                        </p>
                      </div>
                      <div className="card-footer" style={{ backgroundColor: 'transparent' }}>
                        <hr className="mx-auto" style={{ width: '50%', border: '3px solid orange' }} />
                      </div>
                    </div>
                  </div>
        
                  {/* Segundo Card */}
                  <div className="col-md-4">
                    <div className="card text-center mb-3 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title fw-bold">DEFINA SEU PLANO</h5>
                        <p className="card-text">
                          Escolha quantos meses e qual a quilometragem ideal para você.
                          Depois de assinar, o veículo será entregue em sua casa!
                        </p>
                      </div>
                      <div className="card-footer" style={{ backgroundColor: 'transparent' }}>
                        <hr className="mx-auto" style={{ width: '50%', border: '3px solid orange' }} />
                      </div>
                    </div>
                  </div>
        
                  {/* Terceiro Card */}
                  <div className="col-md-4">
                    <div className="card text-center mb-3 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title fw-bold">APROVEITE</h5>
                        <p className="card-text">
                          Aproveite seu carro e, ao fim do contrato, você pode escolher
                          estender seu plano atual ou selecionar um novo veículo.
                        </p>
                      </div>
                      <div className="card-footer" style={{ backgroundColor: 'transparent' }}>
                        <hr className="mx-auto" style={{ width: '50%', border: '3px solid orange' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
    
export default header