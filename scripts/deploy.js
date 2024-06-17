const hre = require("hardhat");

async function main() {
  const totalSupply= 0; 
  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy(totalSupply);
  await myToken.deployed();

  console.log(`MyToken deployed to ${myToken.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
// npx hardhat run --network localhost scripts/deploy.js