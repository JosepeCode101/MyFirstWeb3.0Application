// https://eth-ropsten.alchemyapi.io/v2/f7CkA_Gxt573CXtw1bV1wJFOHE2TB4GY

require('@nomiclabs/hardhat-waffle');

module.exports = {

  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/f7CkA_Gxt573CXtw1bV1wJFOHE2TB4GY',
      accounts: [ 'c431ab9a1b492b2039fcab4080e2d98abfa9c3d95a2b6aabe6eaaeb85ae9cef3' ]
    }
  }
}