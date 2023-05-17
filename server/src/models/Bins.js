const Model = require("./Model")

class Bins extends Model {
    static get tableName() {
        return "bins"
    }

    static get jsonSchema() {
        return{
            type: "object",
            required: ["location", "company", "neighborhood", "imgUrl" ],
            properties: {
                location: {type: "integer"},//still unsure
                company: {type: "string"},
                neighborhood: {type: "string"},
                imgUrl: {type: ["string"]}
            }
        }
    }
}

Model.exports = Bins