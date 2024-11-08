const DocumentVerification = artifacts.require("DocumentVerification");

module.exports = async function (deployer) {
  await deployer.deploy(DocumentVerification);
  const instance = await DocumentVerification.deployed();
  console.log("DocumentVerification deployed at address:", instance.address);
};
