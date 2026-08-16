import { Kernel } from "../core/Kernel.js";

const i34 = new Kernel();

await i34.start();

const result = await i34.process("Salom I34");

console.log(result);
