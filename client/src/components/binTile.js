import React from "react"
import { Link } from "react-router-dom"

const BinTile = (props) => {
    const { company, neighborhood, id } = props
    return(
        <div className="links-to-showpage">
            <Link to={`/bins/${id}`}>
                {company} {neighborhood}
            </Link>
        </div>
    )
}
export default BinTile
