import styled from "styled-components"




export default function Movie(props) {
    const { id, title, posterURL } = props

    return (
        <MovieStyle size={"small"}>
            <img src={posterURL} size={"small"}/>
        </MovieStyle>
    )
}

const MovieStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    

    width: ${props => props.size === "small" ? "64px" : "145px"};
    height: ${props => props.size === "small" ? "89px" : "209px"};
    /* width: 145px;
    height: 209px; */

    background-color: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    img{
        width: ${props => props.size === "small" ? "48px" : "129px"};
        height: ${props => props.size === "small" ? "72px" : "193px"};
        /* width: 48px;
        height: 72px; */
    }
`

