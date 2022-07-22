import React, { useState } from "react";

import { Body, FundoCarrinho, FundoFiltros, FundoPrateleira } from "./appStyle";
import Prateleira from './components/prateleira/Prateleira'
import Filtros from './components/filtros/Filtros';
import Carrinho from './components/carrinho/Carrinho';
import Card from "./components/card/Card";
import rocketList from "./dados/mockdata.json"

//THIS does NOT work ;P YET
console.log("olá")
function App() {

  const [rockets] = useState(rocketList)


  return (
    <div className="App">
      <header />
      <Body>

        <FundoFiltros>
          <Filtros />
        </FundoFiltros>

        <FundoPrateleira>
          <Prateleira>
            {rockets
              .map(rocket => {
                console.log(rocket.nome)
                return <Card key={rocket.id} rocket={rocket} />
              })}

          </Prateleira>

          <Card />

        </FundoPrateleira>

        <FundoCarrinho>
          <Carrinho />
        </FundoCarrinho>
      </Body>


    </div>
  );
}
export default App;