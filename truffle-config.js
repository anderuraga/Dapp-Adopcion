const HDWalletProvider = require('@truffle/hdwallet-provider');
const provider = new HDWalletProvider({
   privateKeys: ['METAMASK_PRIVATE_KEY'],
   providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
})


module.exports = {
  networks: {
    binanceTestnet: {
      provider: () => provider,
      network_id: "97",
      gas: 1000000,
      networkCheckTimeout: 999999
    },
    develop: {
      port: 8545
    }
  } 
};
