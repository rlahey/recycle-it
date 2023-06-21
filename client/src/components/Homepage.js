import React from "react"
import { Link } from "react-router-dom"

const Homepage = () => {
    return(
        <div className="homepage">
        <h1>RECYCLE IT</h1>
        <p>Recycle It helps Bostonians reduce their textile waste.  Fast fashion has taken over an it's up to us to stop it.</p>
        <p>Boston has started working with Helpsy to recycle donated textiles down to their fibers to be made into new clothing</p>
        <Link className="button" to="/items/new">new item form</Link>
        <Link className="button" to="/bins">Find a bin near you</Link>
        <Link className="button" to="/items">See what's up for grabs near you</Link>
        </div>  
    )
}

export default Homepage