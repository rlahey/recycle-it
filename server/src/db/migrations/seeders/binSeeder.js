import { Bins } from "../../../models/Bins.js"

class BinSeeder{
    static async Seed() {
        const binsData = [
            {
                location:"",
                company:"Helpsy",
                neighborhood:"Brighton",
                imgUrl:"",
                relatedInfo:""
            }
        ]
        for (const singleBinData of binsData) {
            const currentBin = await Bins.query().findOne({location: singleStation.location})
            if(!currentBin){
                await Bins.query().insert(singleBinData)
            }
        }
    }
}

export default BinSeeder