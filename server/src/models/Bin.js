const Model = require("./Model")

class Bin extends Model {
    static get tableName() {
        return "bins"
    }

    static get jsonSchema() {
        return{
            type: "object",
            required: ["address", "company", "neighborhood"],
            properties: {
                address: {type: "string"},
                company: {type: "string"},
                neighborhood: {type: "string"},
                imgUrl: {type: ["string"]},
                relatedInfo: {type: "string"}
            }
        }
    }
}

module.exports = Bin;