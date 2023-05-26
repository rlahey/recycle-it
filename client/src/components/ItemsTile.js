import React from "react"
//import { Link } from "react-router-dom"
//import ItemsIndex from "./ItemsIndex"

const ItemsTile = (props) => {
    const { itemType, imgUrl, address, id, handleItemDelete } = props

    const handleClickDelete = () => {
        handleItemDelete(id)
    }
    return(
        <>
            <div onclick={handleClickDelete}>
            {itemType} {imgUrl} {address}
            </div> 
        </>
    )
}

export default ItemsTile