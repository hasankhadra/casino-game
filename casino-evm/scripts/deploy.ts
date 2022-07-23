import { ethers } from "hardhat";

async function main() {
  const potPrizePercentage = 10;
  const potIncomePercentage = 10;
  const staticPrize = ethers.utils.parseEther("0.5");
  const ownerIncomePercentage = 15;
  const queuePrizeAmount = ethers.utils.parseEther("0.02");
  const biddingAmount = ethers.utils.parseEther("0.0000001");
  const timeToLive = 60;
  const numbersRange = 8;

  const Casino = await ethers.getContractFactory("Casino");
  const casino = await Casino.deploy(potPrizePercentage, potIncomePercentage, staticPrize,
    ownerIncomePercentage, queuePrizeAmount, biddingAmount, timeToLive, numbersRange);

  await casino.deployed();

  console.log("Casino contract deployed to:", casino.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
