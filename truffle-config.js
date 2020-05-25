require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remind prosper hidden clinic swing slender'; 
let testAccounts = [
"0x614529438f7ef7e961f36db07923efffb72b9db15d9b5f4b4e9738c2cae788f1",
"0x16c48c04680de1fa99e8eb79cb6df1819acbcb877fc552be7955020327c84725",
"0xde3f0455deb9f5e4a470b1657351a602e1617d0a2044bf803d38843aeed66296",
"0x321b73f843bdefc0317e45273e055258ddcfacebc69c12d55bd5fceb53a5681b",
"0x4123f8aa3c0e4b4f3893abc0794e2978f5c9461b08b14caf6984c84c66ab05ce",
"0x9159936da37b0e8585d5d9559bfe504d7a5cbe7c05fef3fff7a47eb187b839fa",
"0x3cc13d86a900ec63cb3b9bcbe7579e993f63e00a0bcd6456a8423f1bf626f6ee",
"0x0af15310d91512d15093a26fe1aaa73303ad7fb83dea993db04d191d242f6cc3",
"0xff9307ea7963860afb04c0a0d4f7c9e5b1acb1a06f6d3bd45f51866eaab78c15",
"0x883845c27c4b20be38a0825f400396e10835cbcc9db33d5ba77cb5b440cf0eac"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
