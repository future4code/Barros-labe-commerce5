
import styled from "styled-components"
import FundoSpace from "./fundoSpace.png"
import Cockpit from "./cockPit.png"


export const EspacoSideral = styled.div`
height: 2000px;
background-image: url(${FundoSpace});
margin: 0;
`

export const FundoFiltros = styled.footer`

border-radius: 10px;
width: 15vw;
z-index: 200;
bottom: 0%;
position: fixed;
justify-content: center;
background-color: rgba(0,128,0, 0.5);
text-align: center;
align-items: center;
padding: 10px;

`
export const FundoPrateleira = styled.div`
border-radius: 10px;
height: 80vh;
width: 60vw;
display: flex;
`
export const FundoCarrinho = styled.div`

border-radius: 10px;
height: 80vh;
width: 25vw;

`
export const Filtros = styled.form`
background-color: lightgreen;
border-radius: 10px;

`
export const Body = styled.div`
background-image: url(${Cockpit});
background-repeat: no-repeat;
display: flex;
height: 1000px;
width: 100%;
position: fixed;
justify-content: center;
`
export const Produtos = styled.div`
background-color: pink;
width: 50vh;
height: 80vh;
`
export const Carrinho = styled.div`
background-color: lightblue;
width: 30%;
height: 80vh;
`

export const Appinha = styled.img`
width: 200px;
height: 200px;
z-index:300;
position: absolute;
bottom: 0px;
right: -520px;
opacity: 0%;

&:hover {
opacity: 100%;
  }

`