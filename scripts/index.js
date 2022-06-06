const hre = require("hardhat");

async function main() {
  // const accounts = await hre.ethers.provider.listAccounts();
  // console.log(accounts)

  const address = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';
  const Box = await hre.ethers.getContractFactory('Box');
  const box = await Box.attach(address);

  const value = await box.retrieve();
  console.log('Box value is', value.toString());

  await box.store(23);
  const value1 = await box.retrieve();
  console.log('Box value is', value1.toString());
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error)
  process.exit(1)
})