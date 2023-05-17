/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("users1", (table) => {
        table.bigIncrements("id")
        table.string("userName").notNullable()
        table.string("item").notNullable()
        table.string("neighborhood")
        table.integer("location")//I know google needs coordinates so I thought integers would be best
        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.dropTableIfExists("users1")
}
