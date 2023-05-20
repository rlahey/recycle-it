const Model = require("./Model")

class Bin extends Model {
    static get tableName() {
        return "bins"
    }

    static get jsonSchema() {
        return{
            type: "object",
            required: ["location", "company", "neighborhood"],
            properties: {
                location: {type: "integer"},//still unsure
                company: {type: "string"},
                neighborhood: {type: "string"},
                imgUrl: {type: ["string"]},
                relatedInfo: {type: "text"}
            }
        }
    }
}

module.exports = Bin;