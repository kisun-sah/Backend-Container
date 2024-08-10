import fs from "fs/promises"

let a = await fs.readFile("kisu.txt");

console.log(a.toString());
