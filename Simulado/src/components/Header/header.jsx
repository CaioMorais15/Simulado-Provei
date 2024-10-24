import "./header.css"
import Suv from "../../assets/SUV.png"

function header() {
    return (
        <div className="Quadro">
            <div className="container">
                <div className="row fs-3 text-center gap-5 p-5">
                    <div className="card-body col-12 col-md-6 fs">
                        <div className="text text-start">
                            <h1>Bem-vindo ao PraJaCarros</h1>
                            <h2>Seja para uma viagem de negócios,
                                uma escapada de fim de semana ou simplesmente para facilitar seu dia a dia,
                                nós temos o veículo perfeito para você. Com uma frota diversificada,
                                que vai desde carros econômicos até SUVs espaçosos, garantimos qualidade,
                                conforto e segurança em cada viagem.
                                Navegue pelo nosso site e descubra como é fácil alugar um carro com a gente.
                                Venha explorar o mundo sobre quatro rodas!</h2>
                            <div className="float-end">
                                <img src={Suv} alt="Carro" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default header