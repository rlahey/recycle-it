/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("bins", (table) => {
        table.bigIncrements("id")
        table.integer("location").notNullable()
        table.string("Company").notNullable()
        table.string("neighborhood").notNullable()
        table.string("imgUrl")
        table.text("relatedInfo")
        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("bins")
}
