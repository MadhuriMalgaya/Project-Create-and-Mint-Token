const hre = require("hardhat");

async function main() {
  const initialSupply= 1000; 
  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const myToken = await MyToken.deploy(initialSupply);
  await myToken.deployed();

  console.log(`A contract with balance of ${initialSupply} TKN deployed to ${myToken.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



