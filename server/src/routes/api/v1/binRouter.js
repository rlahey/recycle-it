import express from "express"

import Bin from "../../../models/Bin.js"

const binRouter =  new express.Router()
binRouter.get("/", async (req, res) => {
    try {
        const bins = await Bin.query()
        return res.status(200).json({ bins: bins })//will want serializd here eventually
    } catch (err) {
        console.log(err)
        return res.status(500).json({ errors: err})
    }
})

binRouter.get("/:id", async (req,res) => {
    const {id} = req.params
    try{
        const bins = await Bin.query().findById(id)
        return res.status(200).json({bins: bins})

    } catch(err) {
        return res.status(500).json({errors: err})
    }
})

export default binRouter