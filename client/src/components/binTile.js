import React from "react"
import { Link } from "react-router-dom"

const binTile = (props) => {
    //debugger
    const { company, neighborhood, imgUrl } = props
    const id = props.id
    return(
        <div className="links">
            <Link to={`/bins/${id}`} className="link-color">
            <br></br>
            {company} {neighborhood} {imgUrl}
            </Link>
            </div>
    )
}
export default binTile
