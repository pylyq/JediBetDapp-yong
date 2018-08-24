require('dotenv').config()
const MNEMONIC = process.env.MNEMONIC_PHRASE;
const INFURA_API_KEY = process.env.INFURA_API_KEY;
const HDWalletProvider = require("truffle-hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
  }
};