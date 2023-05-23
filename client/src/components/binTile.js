import React from "react"
import { Link } from "react-router-dom"

const BinTile = (props) => {
    const { company, neighborhood, imgUrl, id } = props
    return(
        <li>
            <Link to={`/bins/${id}`}>
                {company} {neighborhood} 
            </Link>
        </li>
    )
}
export default BinTile
