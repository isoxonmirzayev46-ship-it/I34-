import { InternalAPI } from "./InternalAPI.js";
import { ModuleRegistry } from "./ModuleRegistry.js";

export class Kernel {
  constructor() {
    this.api = new InternalAPI();
    this.modules = new ModuleRegistry(this.api);
    this.started = false;
  }

  registerModule(name, module) {
    this.modules.register(name, module);
  }

  async start() {
    if (this.started) return;

    this.started = true;

    console.log("I34 Kernel started");
    console.log("Registered modules:", this.modules.list());
  }

  async process(input) {
    if (!this.started) {
      throw new Error("Kernel is not started");
    }

    return {
      input,
      status: "received",
      timestamp: Date.now()
    };
  }
      }
