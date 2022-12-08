import styled from "styled-components"

export default function Header(){
    return(
        <HeaderStyle>
            <p>CINEFLEX</p>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C3CFD9;
    width: 100%;
    height: 67px;
    
    font-size: 34px;
    
    color: #E8833A;


`