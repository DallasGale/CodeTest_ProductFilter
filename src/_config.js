class Flags {
  static get IS_PRIVATE_SANDBOX_ENABLED() { return process.env.IS_PRIVATE_SANDBOX_ENABLED }
}

// PUBLIC API
class Config {
  static get Flags() { return Flags }
}

export default Config
