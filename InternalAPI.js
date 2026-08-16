export class InternalAPI {
  constructor() {
    this.modules = new Map();
  }

  register(name, module) {
    if (!name || !module) {
      throw new Error("Module name and module are required");
    }

    if (this.modules.has(name)) {
      throw new Error(`Module already exists: ${name}`);
    }

    this.modules.set(name, module);
  }

  get(name) {
    return this.modules.get(name);
  }

  has(name) {
    return this.modules.has(name);
  }

  list() {
    return [...this.modules.keys()];
  }

  async call(moduleName, method, payload = {}) {
    const module = this.get(moduleName);

    if (!module) {
      throw new Error(`Module not found: ${moduleName}`);
    }

    if (typeof module[method] !== "function") {
      throw new Error(`Method not found: ${method}`);
    }

    return await module[method](payload);
  }
  }
