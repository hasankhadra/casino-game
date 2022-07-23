import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import configEnv from './utils/env';

configEnv();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY_1, process.env.PRIVATE_KEY_2] 
    },
  }
};

export const contractAddress = "0x12e9701E97111Afe67c7ffD7FEEb6566fec64BCe";

export default config;
