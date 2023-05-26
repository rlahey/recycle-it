import express from "express"
import { User, Item } from "../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"
import { ValidationError } from "schema-utils"

const usersItemRouter = new express.Router({ mergeParams: true })

usersItemRouter.get("/new", async (req,res) => {//change to item in root an dclient
    try {
        const form = await User.query({forms: form})//what will go here?
        return res.status(200).json({})
    } catch (err) {
        console.log(err)
        return res.status(500).json({ errors: err })
    }
})


usersItemRouter.post("/items", async (req, res) => {
    const formInput = cleanUserInput(req.body)
    const { itemType, imgUrl, address } = formInput
    const userId = req.user.userId

    try{
        const newItem = await Item.query().insertAndFetch({
            userId,  itemType, imgUrl, address
        })
        return res.status(201).json( {item: newItem} )
    } catch(error) {
        if(error instanceof ValidationError){
            return res.status(422).json({errors: error.data})
        } return res.status(500).json({errors:error})
    }
})

export default usersItemRouter