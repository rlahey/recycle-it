/* eslint-disable no-console */
import { connection } from "../boot.js"
import binSeeder from "./seeders/binSeeder.js"

class Seeder {
  static async seed() {
    // include individual seed commands here
    await binSeeder.seed()
    console.log("seeding bins")

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder