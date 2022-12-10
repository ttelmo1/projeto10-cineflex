import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Sucess(props) {
    const {nameSucess, cpfSucess, idSucess, movieName, hour} = props

    console.log(nameSucess)
    console.log(cpfSucess)
    console.log(idSucess)
    return (
        <SucessStyle>
            <div className="ticket-sucess-div">
                <p>Pedido feito com sucesso!</p>
            </div>
            <div className="movie">
                <p className="big">Filme e sessão</p>
                <div className="movie-details">
                    <p className="small">{movieName}</p>
                    <p className="small">{hour}</p>
                </div>
            </div>
            <div className="ticket">
                <p className="big">Ingressos</p>
                <div className="ticket-details">
                    {idSucess.map((i) => <p className="small">Assento {i}</p>)}
                </div>
            </div>
            <div className="customer">
                <p className="big">Comprador</p>
                <div className="customer-details">
                    <p className="small">Nome: {nameSucess}</p>
                    <p className="small">CPF: {cpfSucess}</p>
                </div>
            </div>
            <div className="div-button">
                <Link to="/">
                    <button className="back-button">Voltar para Home</button>
                </Link>

            </div>
        </SucessStyle>
    )
}

const SucessStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 24px;
    
    margin-bottom: 50px;

    .ticket-sucess-div{
        width: 100%;
        height: 110px;
        margin-top: 50px;
        padding: 0px 80px;
        text-align: center;
    }

    .ticket-sucess-div p{
        font-size: 24px;
        font-weight: 700;
        color: #247A6B;
    }

    .big{
        font-size: 24px;
        font-weight: 700;
        color: #293845;

    }

    .small{
        font-size: 22px;
        font-weight: 400;
        color: #293845;

    }

    .div-button{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .back-button{
        width: 225px;
        height: 42px;
        margin-top: 50px;

        background-color: #E8833A;
        border-radius: 3px;
        border: none;
        color: #FFFFFF;
        cursor: pointer;

        font-size: 18px;
        font-family: 'Roboto';
        font-weight: 400;
   }


    .movie, .ticket, .customer{
        padding: 25px 0;
    }
`
