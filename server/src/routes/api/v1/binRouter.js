import express from "express"
import objection from "objection"
import Bins from "../../../models/Bins.js"

const binRouter =  new express.Router()
binRouter.get("/", async (req, res) => {
    try {
        const bins = await Bins.query()
        bins.map(async (bin) => {
            return await BinSerializer.getSummary(bin)
        })
        return res.status(200).json({ bins: serializedBins })
    } catch (err) {
        return res.status(500).json({ errors: err})
    }
    //trying to figure out if I need a post request here since
    //I will be creating a form.  Just not sure if it will live here or a nested router
})

export default binRouter