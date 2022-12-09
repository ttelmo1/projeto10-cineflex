import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Movie from "./Movie"
import Seat from "./Seat"

export default function Seats(props){
    const [seats, setSeats] = useState(undefined)

    // const [size] = props

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/showtimes/1/seats')
        promise.then(res => {
            setSeats(res.data)
            console.log(res.data)

        })
    }, [])


    return(
        <>
        <SeatsStyle>
            <p className="select-seats">Selecione o(s) assento(s)</p>
            <div className="seats">
                {seats?.seats.map((s) => <Seat name={s.name} />)}
            </div>
            <div className="legend">
                <div>
                    <div className="selected"></div>
                    <p>Selecionado</p>
                </div>
                <div>
                    <div className="available"></div>
                    <p>Disponível</p>
                </div>
                <div>
                    <div className="unavailable"></div>
                    <p>Indisponível</p>
                </div>
            </div>
            <div className="info">
                <p>Nome do comprador:</p>
                <input type="text" placeholder="Digite seu nome..." />
            </div>
            <div className="info">
                <p>CPF do comprador:</p>
                <input type="text" placeholder="Digite seu CPF..." />
            </div>
            <button className="book-button">Reservar assento(s)</button>
        </SeatsStyle>
        <FooterSeats>
            <Movie posterURL={seats?.movie.posterURL} size={"small"}/>
            <div>
                <p>{seats?.movie.title}</p>
                <p>{seats?.day.weekday} - {seats?.name}</p>
            </div>
        </FooterSeats>
        </>
    )
}

const SeatsStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 24px;
    
    .select-seats{
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .seats{
        display: flex;
        flex-wrap: wrap;
        gap: 18px 7px;
        
    }

    .legend{
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 16px;
    }

    .legend div{
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .legend div div{
        width: 25px;
        height: 25px;
        border-radius: 50%;
    }

    .selected{
        background-color: #1AAE9E;
        border: 1px solid #0E7D71;
    }

    .available{
        background-color: #c3cfd9;
        border: 1px solid #7b8b99;
    }

    .unavailable{
        background-color: #FBE192;
        border: 1px solid #f7c52b;
    }

    .legend p{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 16px;
    }

    .info{
        margin-top: 20px;
        width: 100%;
    }

    .info p{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 16px;
    }

    .info input{
        width: 100%;
        height: 50px;
        border-radius: 3px;
        border: 1px solid #D5D5D5;
        margin-top: 10px;

        font-size: 18px;
        font-family: 'Roboto';
        font-weight: 400;
        color: #afafaf;
        font-style: italic;
    }

   .book-button{
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

`

const FooterSeats = styled.footer`
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
    background-color: #DFE6ED;
    width: 100%;
    height: 117px;

    div{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    p{
        padding-left: 10px;
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 20px;
        color: #293845;
    }

    `

