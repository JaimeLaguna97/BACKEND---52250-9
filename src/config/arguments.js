import { Command } from "commander";

const program = new Command()

program
    .option("-p <port>", "port", 8080)
    .option("--mode <mode>", "mode", "dev");
program.parse()

console.log(program.opts());
export default program.opts() //Exporta el objeto con los comandos escritos.

//node ./src/server.js -p 8080 --mode production
//* { p: 8080,  mode: "production" }