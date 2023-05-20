import { Bin } from "../../models/index.js"

class BinSeeder{
    static async seed() {
        const binsData = [
            {
                location: 47,
                company:"Helpsy",
                neighborhood:"Brighton",
                imgUrl:"",
                relatedInfo:""
            },
            {
                location: 45,
                company:"Helpsy",
                neighborhood:"Brighton",
                imgUrl:"",
                relatedInfo:""
            },
            {
                location: 67,
                company:"Helpsy",
                neighborhood:"Brighton",
                imgUrl:"",
                relatedInfo:""
            }
        ]
        for (const singleBinData of binsData) {
            const currentBin = await Bin.query().findOne({location: singleBinData.location})
            if(!currentBin){
                await Bin.query().insert(singleBinData)
            }
        }
    }
}

export default BinSeeder