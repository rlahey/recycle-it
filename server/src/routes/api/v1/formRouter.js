import express from "express"
import { User } from "./../../../models/index.js"
import cleanUserInput from "../../../services/cleanUserInput.js"
import { ValidationError } from "schema-utils"

const formRouter = new express.Router()

formRouter.get("/", async (req,res) => {
    try {
        const form = await User.query({forms: form})
        return res.status(200).json({})
    } catch (err) {
        console.log(err)
        return res.status(500).json({ errors: err })
    }
})

formRouter.post("/", async (req, res) => {
    const {body} = req
    const formInput = cleanUserInput(body)
    try{
        const newForm = await User.query().insertAndFetch(formInput)
        return res.status(201).json({newForm})
    } catch(error) {
        if(error instanceof ValidationError){
            return res.status(422).json({errors: error.data})
        } return res.status(500).json({errors:error})
    }
})
//this is whre my delete function will go

export default formRouter