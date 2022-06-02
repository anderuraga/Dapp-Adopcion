# Dapp-Adopcion
Dapp para adoptar perros, contrato inteligente en Solidity y BinanceTestnet

## Desplegar contrato inteligente
Para poder publicar el contrato en la BNBTestnet hay que usar tu clave privada de metamask.
cambiar el fichero *^truffle-config.js*

```
const HDWalletProvider = require('@truffle/hdwallet-provider');
const provider = new HDWalletProvider({
   privateKeys: ['METAMASK_PRIVATE_KEY'],
   providerOrUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
})

```
