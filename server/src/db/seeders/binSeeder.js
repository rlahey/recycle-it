import { Bin } from "../../models/index.js"

class BinSeeder{
    static async seed() {
        const binsData = [
            {
                address: "42 Shady Lane",
                company: "Helpsy",
                neighborhood: "Brighton",
                imgUrl: "",
                relatedInfo: ""
            },
            {
                address: "33 Raymond Street",
                company: "Helpsy",
                neighborhood:"Brighton",
                imgUrl:"",
                relatedInfo:""
            },
            {
                address: "96 Porter Street",
                company: "Helpsy",
                neighborhood:"Somerville",
                imgUrl:"",
                relatedInfo:""
            }
        ]

        for (const singleBinData of binsData) {
            const currentBin = await Bin.query().findOne({address: singleBinData.address})
            if(!currentBin){
                await Bin.query().insert(singleBinData)
            }
        }
    }
}

export default BinSeeder