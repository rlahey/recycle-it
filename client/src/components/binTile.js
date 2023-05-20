import React from "react"
import { Link } from "react-router-dom"

const binTile = (props) => {
    const { company, neighborhood, imgUrl } = props
    return(
        <li><Link to={`/bins`}>{company}{neighborhood}{imgUrl}</Link></li>
    )
}
///${/id}
export default binTile
