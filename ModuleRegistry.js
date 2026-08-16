export class ModuleRegistry {
  constructor(api) {
    this.api = api;
  }

  register(name, module) {
    this.api.register(name, module);
  }

  get(name) {
    return this.api.get(name);
  }

  list() {
    return this.api.list();
  }
  }
