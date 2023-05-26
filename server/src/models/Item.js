const Model = require("./Model")

class Item extends Model {
    static get tableName() {
        return "items"
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["itemType", "imgUrl", "address", "userId"],
            properties: {
                itemType: {type: "string"},
                imgUrl: {type: "string"},
                address: {type: "string"},
                userId: {type: ["string", "integer"]}
            }
        }
    }

    static get relationMappings() {
        const { User } = required("./index.js")
        return {
            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: "items.userId",
                    to: "items.id"
                }
            }
        }
    }
}

module.exports = Item