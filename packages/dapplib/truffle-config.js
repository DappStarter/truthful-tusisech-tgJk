require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remind modify inflict entire sun side'; 
let testAccounts = [
"0x270a06dec9f4108c8737721490d1a7471c941d53655fcdb84880d6a4eebade1a",
"0xe4310992ca97bb34c13465b0af4413055af44e241508e56c71695afe4df2ab47",
"0xc4db8cd4119148557a621bba0e20988ed5b70414ae7e5fd81e14359b0482d59b",
"0xa7e8a67c453fcca42696f6c08a0cb7eb3f08b5989d42b55f58ae7ec937efabed",
"0xa35429eadd35c0c034b3a3e61e61616c1ce5c021fb07f94f74006b975d8f9697",
"0xe3a950fcc3f8b35497756f96f9b9cbe8969d6e1ec66395684d10af6fadc92f55",
"0xddc15bc3574d68a1142e0c741db847d8de822c653dd82c6134e710e812636a26",
"0x1942cf502dccb9c5b16046833930213ac25b611397239fc4eaaadc41da365523",
"0x0f1b7f1b192bb81bd0b22d708688b6f72c2ac94b2b2ffc500bcd71485bdaa02d",
"0x0449060aa40af410e6ef7d144d87ef8870cabb4dae1634ba26d74705e75c24b9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

