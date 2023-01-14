import React from "react"
import { FundoCarta } from "./cardStyle"

function Card(props) {
    return (
        <Carta>
            <FundoImagem></FundoImagem>
            <FundoCarta>
                <NomeCarta> {props.card.title}</NomeCarta>
                <Specs>
                    <span>Preço: {props.card.preco} </span>

                </Specs>
            </FundoCarta>
        </Carta>
    )
}

"imagem": "",
    "nome": "Soyuz",
        "preço": "",
            "ano": "",
                "kilometragem": "",
                    "origem": "",
                        "autonomia": "",
                            "potencia": "",
                                "ipva": "",
                                    "estado": ""