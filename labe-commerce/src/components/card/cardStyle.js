
import styled from "styled-components"

export const FundoCarta = styled.div`
display: flex;
background-color: rgba(0, 128, 0, 0.8);
border-radius: 10px;
width: 500px;
height: 400px;
margin: 3px;
align-items: center;

&:hover {
  color: lightgreen;
    background-color: lightgreen;
  }

`
export const Carta = styled.div`

background-color: rgba(0,0,0, 0.8);
text-align: center;
width: 100px;
color: green;
height: 100%;
border-radius: 10px 0 0 10px;
margin: 10px 0 10px 10px;
`

export const Specs = styled.div`
border-radius: 10px;
`

export const NomeCarta = styled.div`
text-align: center;
font-weight: bolder;
`

export const ImagemFundoCarta = styled.img`
text-align: center;
font-weight: bolder;
border-radius: 50%;
margin: 10px;
`

export const FundoImagemFundoCarta = styled.div`
text-align: center;
justify-content: center;
`

export const BotaoComprar = styled.button`
border-radius: 10px;
&:focus {
  background-color: yellow;
}
`