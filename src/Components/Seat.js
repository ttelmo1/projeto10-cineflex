import styled from "styled-components"

export default function Seat(props){
    const {name} = props
    return(
        <SeatStyle>
            {name}
        </SeatStyle>
    )
}

const SeatStyle = styled.div`
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;



    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 50%;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 11px;
    color: #000000;
`