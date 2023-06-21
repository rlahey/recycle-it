import React, {useEffect, useState} from "react"
//import {Redirect} from "react-router-dom"

const ItemForm = (props) => {
    const [itemForm, setItemForm] = useState({
        itemType: "",
        imgUrl: {},
        address: "",
    })

    // add redirect state
    // if statement that checks redirect state and renders a redirect component if the state is true

    const addItemForm = async event => {
        const itemFormBody = new FormData()

        try{
            const response = await fetch ("/api/v1/items/new", {//should this change to "/item"? form was there
                method: "POST",
                headers: new Headers({
                    "Content-Type": "application/json"
                }),
                body: JSON.stringify
            })

            if(!response.ok) {
                if(response.status ===422) {
                    const body = await response.json()
                    const newErrors = translateServerErrors(body.errors)
                    return setErrors(newErrors)
                } else {
                    const errorMessage = `${response.status} (${response.statusText})`
                    const error = new Error(errorMessage)
                    throw (error) 
                }
            } else {
                const body = await response.json()
                setShouldRedirect(true)
            }
            } catch (err) {
                console.error(`Error in ItemForm fetch: ${err.message}`)
            }
        }

        const handleInputChange = (event) => {
            event.preventDefault()
            setItemForm({
                ...itemForm,
                [event.currentTarget.name]: event.currentTarget.value
            })
        }

        const handleSubmit = (event) => {
            event.preventDefault()
            addItemForm()
        }
        return (
        <>
            <h1>What Do You Want To Swap?</h1>
            <p>Please only swap items that are in good condition.  Please refrain from swapping items that have holes or stains</p>
            <form className="forms" onSubmit={handleSubmit}>
                <label>
                    Item Type:
                    <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleInputChange}
                    >
                    </input>
                </label>
                <div>
                    <input
                    className="button" type="submit" value="Submit"
                    />
                </div>
            </form>
        </>
    )
}

export default ItemForm