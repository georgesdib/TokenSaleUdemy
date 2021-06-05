var MyToken = artifacts.require("MyToken.sol");
var MyTokenSale = artifacts.require("MintedCrowdsale");
var MyKycContract = artifacts.require("KycContract");

module.exports = async function(deployer) {
    let addr = await web3.eth.getAccounts();
    await deployer.deploy(MyToken);
    await deployer.deploy(MyKycContract);
    await deployer.deploy(MyTokenSale, 1, addr[0], MyToken.address, MyKycContract.address);
    let instance = await MyToken.deployed();
    await instance.addMinter(MyTokenSale.address);
}