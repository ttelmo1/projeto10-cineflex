import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import Seat from "./Seat"

export default function Seats(props) {
    const {setNameSucess, setCpfSucess,setIdSucess, setMovieName, setHour} = props

    
    const {idSessao} = useParams()
    const [seats, setSeats] = useState(undefined)
    

    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [id, setId] = useState([])
    const navigate = useNavigate()
    
   

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
        promise.then(res => {
            setSeats(res.data)
            console.log(res.data)            
            setMovieName(res.data.movie.title)
            setHour(res.data.day.date + "  " + res.data.name)

        })
    }, [])

    function sendOrder(e){
        e.preventDefault()
        const body = { ids: id, name , cpf }

        const url_post = `https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`
        if(id.length === 0){
            alert("Selecione pelo menos um assento")
            return
        }
        
        const promise = axios.post(url_post, body)
        promise.then(res => {
                       
            setNameSucess(body.name)
            setCpfSucess(body.cpf)
            setIdSucess(body.ids)

            console.log(res.data)

            navigate('/sucesso')
        })

    }

    return (
        <FormStyle onSubmit={sendOrder}>
            <SeatsStyle>
                <p className="select-seats">Selecione o(s) assento(s)</p>
                <div className="seats">
                    {seats?.seats.map((s) => <Seat  id={id} setId={setId} seat={s} key={s.id} />)}
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
                    <input 
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    data-test="client-name"
                    type="text" 
                    placeholder="Digite seu nome..." />
                </div>
                <div className="info">
                    <p>CPF do comprador:</p>
                    <input 
                    required
                    onChange={(e) => setCpf(e.target.value)}
                    value={cpf}
                    data-test="client-cpf"
                    type="number"
                    placeholder="Digite seu CPF..." />
                </div>
                <button type="submit" className="book-button" data-test="book-seat-btn">Reservar assento(s)</button>
            </SeatsStyle>
            <FooterSeats data-test="footer">
                <div className="poster" >
                    <img src={seats?.movie.posterURL} />
                </div>
                <div>
                    <p>{seats?.movie.title}</p>
                    <p>{seats?.day.weekday} - {seats?.name}</p>
                </div>
            </FooterSeats>
        </FormStyle>
    )
}

const FormStyle = styled.form`
    padding-bottom: 150px;
`

const SeatsStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 24px;
    
    .select-seats{
        margin-top: 50px;
        margin-bottom: 50px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        color : #293845;
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
        margin-top: 25px;

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
        font-size: 26px;
        color: #293845;
    }

    .poster{
        width: 64px;
        height: 89px;
        display: flex;
        align-items: center;
        justify-content: center;


        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px; 
    }

    .poster img{
        width: 48px;
        height: 72px;
    }

    `

