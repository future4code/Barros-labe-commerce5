import React from "react"

function Filtros(props) {
    return (
        <div>
            <p>FILTROS</p>


            <input
                placeholder="Pesquisa"
                value={props.query}
                onChange={(e) => props.setQuery(e.target.value)}
            />

            <input
                type="number"
                placeholder="Preço mínimo"
                value={props.minPrice}
                onChange={(e) => props.setMinPrice(e.target.value)}
            />

            <input
                type="number"
                placeholder="Preço máximo"
                value={props.maxPrice}
                onChange={(e) => props.setMaxPrice(e.target.value)}
            />
            <input
                type="number"
                placeholder="Ano De:"
                value={props.minYear}
                onChange={(e) => props.setMinYear(e.target.value)}
            />
            <input
                type="number"
                placeholder="Ano Até:"
                value={props.maxYear}
                onChange={(e) => props.setMaxYear(e.target.value)}
            />

        </div>

    )
}
export default Filtros