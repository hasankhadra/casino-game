declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ALCHEMY_API_KEY: string;
      PRIVATE_KEY_1: string;
      PRIVATE_KEY_2: string;
    }
  }
}

export { }