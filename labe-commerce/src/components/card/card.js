import React from "react"
import { FundoCarta, Carta, Specs, NomeCarta, ImagemFundoCarta, FundoImagemFundoCarta, BotaoComprar } from "./CardStyle"
import adicionarProduto from "../../App"

export default function Card(props) {

    return (
        <FundoCarta>
            <FundoImagemFundoCarta>
                <NomeCarta>
                    <h2>{props.rocket.nome}</h2>
                </NomeCarta>
                <ImagemFundoCarta src={props.rocket.img} /><br />
                <BotaoComprar onClick={adicionarProduto}>COMPRAR</BotaoComprar>
            </FundoImagemFundoCarta>
            <Carta>
                <Specs>
                    <p>Preço Milhões USD: {props.rocket.preco}</p>
                    <p>Ano: {props.rocket.ano}</p>
                    <p>KM: {props.rocket.kilometragem}</p>
                    <p>Origem: {props.rocket.origem}</p>
                    <p>Autonomia: {props.rocket.autonomia}</p>
                    <p>Potência: {props.rocket.potencia}</p>
                    <p>IPVA: {props.rocket.ipva}</p>
                    <p>Condição: {props.rocket.estado}</p>
                </Specs>
            </Carta>

        </FundoCarta>
    )
}