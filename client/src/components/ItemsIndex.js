import React, {useState, useEffect} from "react"
//import ItemForm from "./components/ItemForm"
import ItemsTile from "./BinTile"

const itemIndex = (props) => {
    const [items, setItems] = useState([{
                itemType: "",
                imgUrl: "",
                address: "",
            }])

    const getItems = async () => {
        const itemId = props.match.params.id
        try{
            const response = await fetch(`/api/v1/items/${itemId}`)
            if(!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error(errorMessage)
                throw error
            }
            const body = await response.json()
            setItems(body.items)
        } catch (err) {
            console.log(`Error in Fetch: ${err.message}`)
        }
    }

    const handleItemDelete = async (itemId) => {
        try{
            const response  = await fetch(`api/v1/items/${itemId}`, {method: "DELETE"})
            const filteredItems = items.items.filter((item) => {
                if(item.id !== itemId) {
                    return item
                }
            })
            setItems({
                ...items,
                items: filteredItems
            })
        } catch (error) {
            console.error(`Error in fetch: ${error.message}`)
        }
    }

    useEffect(() => {
        getItems()
    }, [])
    
    const itemTiles = items.map(item => {
        console.log(items)
        return(
            <ItemsTile
            key={item.id}
            id={item.id}
            itemType={item.itemType}
            address={item.address}
            handleItemDelete={handleItemDelete}
            />
        )
    })

    return(
        <div>
            <h1>See what clothing is up for grabs near you</h1>
            {itemTiles}
        </div>
    )
}

export default itemIndex

// const itemIndex = (props) => {
//     const [items, setItems] = useState({
//         itemType: "",
//         imgUrl: "",
//         address: "",
//     }) not sure if i will need this later 
