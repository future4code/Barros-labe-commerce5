import React, { useState } from "react";

import { Body, FundoCarrinho, FundoFiltros, FundoPrateleira, EspacoSideral, Appinha } from "./appStyle";
import Filtros from './components/filtros/Filtros';
import Carrinho from './components/carrinho/Carrinho';
import Card from "./components/card/Card";
import rocketList from "./dados/mockdata.json"
import Appa from "./appa.png"

//THIS does NOT work ;P YET
console.log("olá")
function App() {

  const [rockets] = useState(rocketList)

  const [query, setQuery] = useState("")
  const [minPreco, setMinPreco] = useState(-Infinity)
  const [maxPreco, setMaxPreco] = useState(Infinity)
  const [sortingParameter, setSortingParameter] = useState("nome")
  const [order, setOrder] = useState("asc")
  const [prodCarrinho, setProdCarrinho] = useState([""])

  function adicionarProduto(itemAdd) {
    console.log("botão apertado")
    const copiaCarrinho = [...prodCarrinho]
    const itens = copiaCarrinho.find((item) =>
      item.id === itemAdd)

    const novaLista = rocketList.map((item) => {
      return { nome: item.nome, preco: item.preco, qtde: 1, id: item.id }
    })

    const carrinhoAtualizado = novaLista.filter((item) => {
      if (!itens) {
        return itemAdd === item.id
      } else {
        return 0
      }
    })
    if (itens) {
      itens.qtde = itens.qtde + 1
    }
    setProdCarrinho([...prodCarrinho, ...carrinhoAtualizado])
    console.log(prodCarrinho)

  }
  //botão de remover

  function removerProduto(itemRemove) {
    const carrinhoAtualizado = prodCarrinho.filter((item) => {
      return itemRemove !== item.id
    })
    setProdCarrinho(carrinhoAtualizado)
  }

  //logica para somar qtde

  let arrPrecos = prodCarrinho.map((item) => {
    return item.preco * item.qtde
  })
  let somaCarrinho = arrPrecos.reduce((preco1, preco2) => {
    return preco1 + preco2
  }, 0)



  let novoCarrinho = prodCarrinho.map((item, index) => {
    return (
      <>
        <ul key={index} id={item.id}>
          <li>{item.qtde}x</li>
          <li>{item.nome}</li>
          <li>{item.price}</li>
          <button onClick={() => removerProduto(item.id)}>Remover</button>

        </ul>
      </>
    )
  })





  return (
    <EspacoSideral>
      <header />
      <Body>



        <FundoPrateleira>



          {rockets
            .filter(rocket => {
              return rocket.nome.includes(query) || rocket.origem.includes(query)
            })
            .filter(rocket => {
              return rocket.preco >= minPreco || minPreco === ""
            })
            .filter(rocket => {
              return rocket.preco <= maxPreco || maxPreco === ""
            })
            .sort((currentRocket, nextRocket) => {
              switch (sortingParameter) {
                case "ano":
                  return currentRocket.ano - nextRocket.ano
                case "autonomia":
                  return currentRocket.autonomia - nextRocket.autonomia
                default:
                  return currentRocket.nome.localeCompare(nextRocket.nome)
              }
            })
            .sort(() => {
              if (order === "asc") {
                return 0
              } else {
                return -1
              }
            })
            .map(rocket => {
              console.log(rocket.nome)
              return (<Card key={rocket.id} rocket={rocket} />)
            })}







        </FundoPrateleira>

        <FundoCarrinho>
          <Carrinho />
        </FundoCarrinho>


        <FundoFiltros>
          <Filtros
            query={query}
            minPreco={minPreco}
            maxPreco={maxPreco}
            sortingParameter={sortingParameter}
            order={order}
            setQuery={setQuery}
            setMinPreco={setMinPreco}
            setMaxPreco={setMaxPreco}
            setSortingParameter={setSortingParameter}
            setOrder={setOrder}
          />
          <Appinha src={Appa} height={50} width={50} />
        </FundoFiltros>
      </Body>


    </EspacoSideral>
  );
}
export default App;