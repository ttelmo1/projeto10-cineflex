import { Link } from "react-router-dom"
import styled from "styled-components"



export default function Movie(props) {
    const { id, title, posterURL, size } = props

    return (
        <MovieStyle data-test="movie">
            <Link to={`/sessoes/${id}`} >
                <img src={posterURL} />
            </Link>
        </MovieStyle>
    )
}

const MovieStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 145px;
    height: 209px;

    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    img{
        width: 129px;
        height: 193px;
    }
`

