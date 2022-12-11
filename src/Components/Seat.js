import styled from "styled-components"

export default function Seat(props){
    const {seat ,id, setId} = props

    console.log(seat)
    console.log(id)

    function selectSeat(seat) {
        if(!seat.isAvailable){
            alert('Esse assento não está disponível')
            return
        }
       
        seat.selected = !seat.selected;

        if(!seat.selected){
            const filteredSeats = id.filter((i) => !(i === seat.name))
            setId([...filteredSeats])
            
            return
        }
        setId([...id, seat.id])        
    } 

    return(
        <SeatStyle 
        onClick={()=> selectSeat(seat)}
        isAvailable={seat.isAvailable}
        selected={seat.selected}
        key={seat.id}
        data-test="seat"
        >
            {seat.name}
        </SeatStyle>
    )
}

const SeatStyle = styled.div`
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;



    background-color: ${props => {
        if(props.isAvailable){
            if(props.selected){
                return '#1AAE9E'
            }
            return '#C3CFD9'
        }
        return '#FBE192'
    }};

    border: 1px solid ${props => {
        if(props.isAvailable){
            if(props.selected){
                return '#0E7D71'
            }
            return '#7B8B99'
        }
        return '#F7C52B'
    } };

    border-radius: 50%;

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 11px;
    color: #000000;
`