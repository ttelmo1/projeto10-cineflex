import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Session from "./Session"

export default function Sessions() {

    const [sessionList, setSessionList] = useState(undefined)
    console.log(sessionList)

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies/1/showtimes')
        promise.then(res => {
            setSessionList(res.data)

        })
    }, [])

    return (
        <>
            <SessionsStyle>
                <p>Selecione o horário</p>
                <div>
                    {sessionList?.days.map((s) => <Session weekday={s.weekday} showtimes={s.showtimes} date={s.date} key={s.id} />)}
                </div>

            </SessionsStyle>
            <FooterSessions>
                <div><img src={sessionList?.posterURL} /></div>
                <p>{sessionList?.title}</p>
            </FooterSessions>
        </>
    )
}

const SessionsStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    just            y-content: center;
    margin-bottom: 125px;
                


    p{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 24px;            
        color: #293845;
        margin-top: 25px;
        margin-bottom: 25px;
    }

    div{
        width: 100%;
        padding: 0 10px;
    }
`

const FooterSessions = styled.footer`
    width: 100%;
    height: 117px;
    bottom: 0px;
    position: fixed;

    background: #DFE6ED;
    border-top: 1px solid #9EADBA;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 5px;
    gap: 0 5px;

    div{
        width: 64px;
        height: 89px;
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #FFFFFF;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
    }

    img{
        width: 48px;
        height: 72px;
    }
`