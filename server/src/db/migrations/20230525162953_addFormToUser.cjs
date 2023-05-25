/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.table("users", (table) => {
        table.boolean("hasItemToDonate")
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
