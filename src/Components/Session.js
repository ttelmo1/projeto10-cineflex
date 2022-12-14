import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Session(props) {

    const { weekday, date, showtimes} = props
    return (
        <SessionStyle data-test="movie-day">
            <p>{weekday} - {date}</p>
            {showtimes.map((s) =>
                <Link to={`/assentos/${s.id}`} key={s.id} data-test="showtime">
                    <button >{s.name}</button>
                </Link>

            )}
        </SessionStyle>
    )
}

const SessionStyle = styled.div`
    p{
        font-size: 20px;
    }

    button{
        width: 83px;
        height: 43px;
        margin-right: 10px;

        background-color: #E8833A;
        border-radius: 3px;
        border: none;
        color: #FFFFFF;

        font-size: 18px;

    }
`