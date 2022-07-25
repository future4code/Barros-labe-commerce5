import React from "react"
import { Input } from "./FiltrosStyle"

function Filtros(props) {
    return (
        <div>
            <p>FILTROS</p>


            <Input
                placeholder="Pesquisa nome ou país"
                value={props.query}
                onChange={(e) => props.setQuery(e.target.value)}
            />

            <Input
                type="number"
                placeholder="Preço mínimo"
                value={props.minPreco}
                onChange={(e) => props.setMinPreco(e.target.value)}
            />

            <Input
                type="number"
                placeholder="Preço máximo"
                value={props.maxPreco}
                onChange={(e) => props.setMaxPreco(e.target.value)}
            />
            <p>
                <label htmlFo="sortingParameter">Ordenar por: </label>
                <select
                    name="sortingParameter"
                    value={props.sortingParameter}
                    onChange={(ev) => props.setSortingParameter(ev.target.value)}
                >
                    <option value="nome">Nome</option>
                    <option value="preco">Preço</option>
                    <option value="ano">Ano</option>
                </select>
            </p>

            <select
                value={props.order}
                onChange={(ev) => props.setOrder(ev.target.value)}
            >
                <option value={"asc"}>Crescente</option>
                <option value={"desc"}>Decrescente</option>

            </select>


        </div>

    )
}
export default Filtros