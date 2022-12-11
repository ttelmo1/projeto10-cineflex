import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Movie from "./Movie"

export default function Home() {
    const [movieList, setMovieList] = useState(undefined)

    useEffect(()=> {
        const promise = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')
        promise.then(res => {
            setMovieList(res.data)
        })
    },[])

    return (
        <HomeStyle>
            <p>Selecione o filme</p>
            <div className="movie-list">
                {movieList?.map((m) => <Movie id={m.id} title={m.title} posterURL={m.posterURL} key={m.id} />)}
            </div>
        </HomeStyle>
    )
}

const HomeStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    


    p{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 24px;
        color: #293845;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .movie-list{
        display: flex;
        flex-wrap: wrap;
        gap: 10px 20px; 
        align-items: center;
        justify-content: center;
    }
`