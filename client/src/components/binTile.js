import React from "react"
import { Link } from "react-router-dom"

const binTile = (props) => {
    const { company, neighborhood, imgUrl } = props.bin
    return(
        <li><Link to={`/bins/${id}`}>{company}{neighborhood}{imgUrl}</Link></li>
    )
}

export default binTile
