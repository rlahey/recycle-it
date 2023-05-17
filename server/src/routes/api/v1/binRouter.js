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
})

export default binRouter