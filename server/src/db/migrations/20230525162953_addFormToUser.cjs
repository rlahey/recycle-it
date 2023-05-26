/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.table("users", (table) => {
        table.boolean("hasItemToDonate").default(false).notNullable()
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.table("users", (table) => {
        table.dropColumn("hasItemToDonate")
    })
}
