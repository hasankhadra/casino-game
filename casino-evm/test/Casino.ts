import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

function delay(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}

describe("Casino with static random", function () {

  async function deployCasinoVariant1() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    console.log();
    console.log("Owner Address", owner.address)
    console.log("Other account Address", otherAccount.address)

    const potPrizePercentage = 10;
    const potIncomePercentage = 10;
    const staticPrize = ethers.utils.parseEther("0.5");
    const ownerIncomePercentage = 15;
    const queuePrizeAmount = ethers.utils.parseEther("0.02");
    const biddingAmount = ethers.utils.parseEther("0.1");
    const timeToLive = 3600;
    const numbersRange = 8;

    const provider = ethers.provider;

    const Casino = await ethers.getContractFactory("Casino");

    const casino = await Casino.connect(owner).deploy(potPrizePercentage, potIncomePercentage, staticPrize,
      ownerIncomePercentage, queuePrizeAmount, biddingAmount, timeToLive, numbersRange);

    await casino.deployed();

    console.log("Casino Address", casino.address);
    console.log("---------------");

    return {
      potPrizePercentage, casino, owner, otherAccount, potIncomePercentage, staticPrize,
      ownerIncomePercentage, queuePrizeAmount, biddingAmount, timeToLive, numbersRange,
      provider
    };
  }

  async function deployCasinoShortTTL() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    console.log();
    console.log("Owner Address", owner.address)
    console.log("Other account Address", otherAccount.address)

    const potPrizePercentage = 10;
    const potIncomePercentage = 10;
    const staticPrize = ethers.utils.parseEther("0.5");
    const ownerIncomePercentage = 15;
    const queuePrizeAmount = ethers.utils.parseEther("0.02");
    const biddingAmount = ethers.utils.parseEther("0.1");
    const timeToLive = 1;
    const numbersRange = 8;

    const provider = ethers.provider;

    const Casino = await ethers.getContractFactory("Casino");

    const casino = await Casino.connect(owner).deploy(potPrizePercentage, potIncomePercentage, staticPrize,
      ownerIncomePercentage, queuePrizeAmount, biddingAmount, timeToLive, numbersRange);

    await casino.deployed();

    console.log("Casino Address", casino.address);
    console.log();

    return {
      potPrizePercentage, casino, owner, otherAccount, potIncomePercentage, staticPrize,
      ownerIncomePercentage, queuePrizeAmount, biddingAmount, timeToLive, numbersRange,
      provider
    };
  }

  async function deployCasinoShortTTLPrizeFromQueue() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    console.log();
    console.log("Owner Address", owner.address)
    console.log("Other account Address", otherAccount.address)

    const potPrizePercentage = 10;
    const potIncomePercentage = 10;
    const staticPrize = ethers.utils.parseEther("0.000002");
    const ownerIncomePercentage = 15;
    const queuePrizeAmount = ethers.utils.parseEther("0.02");
    const biddingAmount = ethers.utils.parseEther("0.1");
    const timeToLive = 1;
    const numbersRange = 8;

    const provider = ethers.provider;

    const Casino = await ethers.getContractFactory("Casino");

    const casino = await Casino.connect(owner).deploy(potPrizePercentage, potIncomePercentage, staticPrize,
      ownerIncomePercentage, queuePrizeAmount, biddingAmount, timeToLive, numbersRange);

    await casino.deployed();

    console.log("Casino Address", casino.address);
    console.log();

    return {
      potPrizePercentage, casino, owner, otherAccount, potIncomePercentage, staticPrize,
      ownerIncomePercentage, queuePrizeAmount, biddingAmount, timeToLive, numbersRange,
      provider
    };
  }

  async function deployCasinoShortTTLPrizeFromPot() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    console.log();
    console.log("Owner Address", owner.address)
    console.log("Other account Address", otherAccount.address)

    const potPrizePercentage = 50;
    const potIncomePercentage = 50;
    const staticPrize = ethers.utils.parseEther("0.000002");
    const ownerIncomePercentage = 15;
    const queuePrizeAmount = ethers.utils.parseEther("0.000002");
    const biddingAmount = ethers.utils.parseEther("0.1");
    const timeToLive = 1;
    const numbersRange = 8;

    const provider = ethers.provider;

    const Casino = await ethers.getContractFactory("Casino");

    const casino = await Casino.connect(owner).deploy(potPrizePercentage, potIncomePercentage, staticPrize,
      ownerIncomePercentage, queuePrizeAmount, biddingAmount, timeToLive, numbersRange);

    await casino.deployed();

    console.log("Casino Address", casino.address);
    console.log();

    return {
      potPrizePercentage, casino, owner, otherAccount, potIncomePercentage, staticPrize,
      ownerIncomePercentage, queuePrizeAmount, biddingAmount, timeToLive, numbersRange,
      provider
    };
  }

  async function deployCasinoShortTTLPrizeFromStaticPrize() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    console.log();
    console.log("Owner Address", owner.address)
    console.log("Other account Address", otherAccount.address)

    const potPrizePercentage = 20;
    const potIncomePercentage = 20;
    const staticPrize = ethers.utils.parseEther("0.5");
    const ownerIncomePercentage = 15;
    const queuePrizeAmount = ethers.utils.parseEther("0.000002");
    const biddingAmount = ethers.utils.parseEther("0.1");
    const timeToLive = 1;
    const numbersRange = 8;

    const provider = ethers.provider;

    const Casino = await ethers.getContractFactory("Casino");

    const casino = await Casino.connect(owner).deploy(potPrizePercentage, potIncomePercentage, staticPrize,
      ownerIncomePercentage, queuePrizeAmount, biddingAmount, timeToLive, numbersRange);

    await casino.deployed();

    console.log("Casino Address", casino.address);
    console.log();

    return {
      potPrizePercentage, casino, owner, otherAccount, potIncomePercentage, staticPrize,
      ownerIncomePercentage, queuePrizeAmount, biddingAmount, timeToLive, numbersRange,
      provider
    };
  }

  describe("Changing prizes amounts and percentages", function () {
    it("Does Change the potPrizePercentage", async function () {
      const { casino, potPrizePercentage } = await loadFixture(deployCasinoVariant1);

      expect(await casino.potPrizePercentage()).to.equal(potPrizePercentage);

      await casino.changePotPrizePercentage(20);

      expect(await casino.potPrizePercentage()).to.equal(20);
    });

    it("Does not change the potPrizePercentage with non-owner account", async function () {
      const { casino, otherAccount, potPrizePercentage } = await loadFixture(deployCasinoVariant1);

      expect(await casino.potPrizePercentage()).to.equal(potPrizePercentage);

      await expect(casino.connect(otherAccount).changePotPrizePercentage(20)).to.be.reverted;
    });

    it("Does Change the staticPrize", async function () {
      const { casino, staticPrize } = await loadFixture(deployCasinoVariant1);

      expect(await casino.staticPrize()).to.equal(staticPrize);

      await casino.changeStaticPrize(20);
      expect(await casino.staticPrize()).to.equal(20);
    });

    it("Does not change the staticPrize with non-owner account", async function () {
      const { casino, otherAccount, staticPrize } = await loadFixture(deployCasinoVariant1);

      expect(await casino.staticPrize()).to.equal(staticPrize);

      await expect(casino.connect(otherAccount).changeStaticPrize(20)).to.be.reverted;
    });

    it("Does Change the staticPrize", async function () {
      const { casino, potIncomePercentage } = await loadFixture(deployCasinoVariant1);

      expect(await casino.potIncomePercentage()).to.equal(potIncomePercentage);

      await casino.changePotIncomePercentage(20);
      expect(await casino.potIncomePercentage()).to.equal(20);
    });

    it("Does not change the staticPrize with non-owner account", async function () {
      const { casino, otherAccount, potIncomePercentage } = await loadFixture(deployCasinoVariant1);

      expect(await casino.potIncomePercentage()).to.equal(potIncomePercentage);

      await expect(casino.connect(otherAccount).changePotIncomePercentage(20)).to.be.reverted;
    });

    it("Does Change the ownerIncomePercentage", async function () {
      const { casino, ownerIncomePercentage } = await loadFixture(deployCasinoVariant1);

      expect(await casino.ownerIncomePercentage()).to.equal(ownerIncomePercentage);

      await casino.changeOwnerIncomePercentage(20);
      expect(await casino.ownerIncomePercentage()).to.equal(20);
    });

    it("Does not change the ownerIncomePercentage with non-owner account", async function () {
      const { casino, otherAccount, ownerIncomePercentage } = await loadFixture(deployCasinoVariant1);

      expect(await casino.ownerIncomePercentage()).to.equal(ownerIncomePercentage);

      await expect(casino.connect(otherAccount).changeOwnerIncomePercentage(20)).to.be.reverted;
    });

    it("Does Change the queuePrizeAmount", async function () {
      const { casino, queuePrizeAmount } = await loadFixture(deployCasinoVariant1);

      expect(await casino.queuePrizeAmount()).to.equal(queuePrizeAmount);

      await casino.changeQueuePrizeAmount(20);
      expect(await casino.queuePrizeAmount()).to.equal(20);
    });

    it("Does not change the queuePrizeAmount with non-owner account", async function () {
      const { casino, otherAccount, queuePrizeAmount } = await loadFixture(deployCasinoVariant1);

      expect(await casino.queuePrizeAmount()).to.equal(queuePrizeAmount);

      await expect(casino.connect(otherAccount).changeQueuePrizeAmount(20)).to.be.reverted;
    });

    it("Does Change the biddingAmount", async function () {
      const { casino, biddingAmount } = await loadFixture(deployCasinoVariant1);

      expect(await casino.biddingAmount()).to.equal(biddingAmount);

      await casino.changeBiddingAmount(20);
      expect(await casino.biddingAmount()).to.equal(20);
    });

    it("Does not change the biddingAmount with non-owner account", async function () {
      const { casino, otherAccount, biddingAmount } = await loadFixture(deployCasinoVariant1);

      expect(await casino.biddingAmount()).to.equal(biddingAmount);

      await expect(casino.connect(otherAccount).changeBiddingAmount(20)).to.be.reverted;
    });

    it("Does Change the timeToLive", async function () {
      const { casino, timeToLive } = await loadFixture(deployCasinoVariant1);

      expect(await casino.timeToLive()).to.equal(timeToLive);

      await casino.changeTimeToLive(20);
      expect(await casino.timeToLive()).to.equal(20);
    });

    it("Does not change the timeToLive with non-owner account", async function () {
      const { casino, otherAccount, timeToLive } = await loadFixture(deployCasinoVariant1);

      expect(await casino.timeToLive()).to.equal(timeToLive);

      await expect(casino.connect(otherAccount).changeTimeToLive(20)).to.be.reverted;
    });

    it("Does Change the numbersRange", async function () {
      const { casino, numbersRange } = await loadFixture(deployCasinoVariant1);

      expect(await casino.numbersRange()).to.equal(numbersRange);

      await casino.changeNumbersRange(20);
      expect(await casino.numbersRange()).to.equal(20);
    });

    it("Does not change the numbersRange with non-owner account", async function () {
      const { casino, otherAccount, numbersRange } = await loadFixture(deployCasinoVariant1);

      expect(await casino.numbersRange()).to.equal(numbersRange);

      await expect(casino.connect(otherAccount).changeNumbersRange(20)).to.be.reverted;
    });

  });

  describe("Withdrawals", function () {
    it("User cannot withdraw if he has no funds available", async function () {
      const { casino, otherAccount, owner } = await loadFixture(deployCasinoVariant1);

      await expect(casino.connect(otherAccount).withdraw()).to.be
        .revertedWith("You can't withdraw yet - Not allowed to withdraw 0 funds!");

    });

    it("User cannot withdraw if contract has no funds available", async function () {
      const { casino, otherAccount, owner } = await loadFixture(deployCasinoVariant1);

      await casino.changeToBePaid(otherAccount.address, 10);

      await expect(casino.connect(otherAccount).withdraw()).to.be
        .revertedWith("Sorry, there are no enough funds in the game contract, will fund it soon!");

    });

    it("User able to withdraw his funds", async function () {
      const { casino, otherAccount, owner } = await loadFixture(deployCasinoVariant1);

      await casino.changeToBePaid(otherAccount.address, ethers.utils.parseEther("0.5"));

      await owner.sendTransaction({
        to: casino.address,
        value: ethers.BigNumber.from("1000000000000000000")
      });

      const oldOtherAccountBalance = await otherAccount.getBalance();
      const txHash = await casino.connect(otherAccount).withdraw();
      await txHash.wait();

      expect(txHash.gasPrice).to.be.exist;

      expect(await casino.toBePaid(otherAccount.address)).to.be.equal(0);

      if (txHash.gasPrice)
        expect(await otherAccount.getBalance()).to.be.closeTo(ethers.utils.parseEther("0.5").toBigInt() + oldOtherAccountBalance.toBigInt() - txHash.gasPrice?.toBigInt(),
          BigInt(10 ** 16));
    });

    it("non-owner cannot withdrawOwner", async function () {
      const { casino, otherAccount } = await loadFixture(deployCasinoVariant1);

      await expect(casino.connect(otherAccount).withdrawOwner(10)).to.be.revertedWith("Only owner!");

    });

    it("owner cannot withdrawOwner if there are no enough funds", async function () {
      const { casino, owner, provider } = await loadFixture(deployCasinoVariant1);

      await owner.sendTransaction({
        to: casino.address,
        value: ethers.BigNumber.from("1000000000000000000")
      });

      await expect(casino.connect(owner).withdrawOwner(ethers.BigNumber.from("2000000000000000000"))).to.be.revertedWith("No enough balance for the amount requested!");

    });

    it("owner is able to withdrawOwner exactly the amount of existing funds", async function () {
      const { casino, owner, provider } = await loadFixture(deployCasinoVariant1);

      await owner.sendTransaction({
        to: casino.address,
        value: ethers.BigNumber.from("1000000000000000000")
      });


      const oldOwnerBalance = await owner.getBalance();

      const txHash = await casino.connect(owner).withdrawOwner(ethers.BigNumber.from("1000000000000000000"));
      await txHash.wait();

      expect(txHash.gasPrice).to.be.exist;

      if (txHash.gasPrice)
        expect(await owner.getBalance()).to.be.closeTo(oldOwnerBalance.toBigInt() + ethers.BigNumber.from("1000000000000000000").toBigInt() - txHash.gasPrice.toBigInt(), BigInt(10 ** 16));

    });

    it("owner is able to withdrawOwner less than existing funds", async function () {
      const { casino, owner, provider } = await loadFixture(deployCasinoVariant1);

      await owner.sendTransaction({
        to: casino.address,
        value: ethers.BigNumber.from("1000000000000000000")
      });


      const oldOwnerBalance = await owner.getBalance();

      const txHash = await casino.connect(owner).withdrawOwner(ethers.BigNumber.from("500000000000000000"));
      await txHash.wait();

      expect(txHash.gasPrice).to.be.exist;

      if (txHash.gasPrice)
        expect(await owner.getBalance()).to.be.closeTo(oldOwnerBalance.toBigInt() + ethers.BigNumber.from("500000000000000000").toBigInt() - txHash.gasPrice.toBigInt(), BigInt(10 ** 16));

    });
  });

  describe("Playing the game", function () {
    it("Losing guess => increases the pot prize, adds the user correctly to the queue, and increases queueAvailableFunds", async function () {
      const { casino, otherAccount, biddingAmount, potIncomePercentage, ownerIncomePercentage } = await loadFixture(deployCasinoVariant1);

      expect(await casino.queueLength()).to.be.equal(0);
      expect(await casino.pot()).to.be.equal(0);
      expect(await casino.queueAvailableFunds()).to.be.equal(0);

      await casino.connect(otherAccount).guessTheNumberTesting(3, {
        value: biddingAmount
      });

      const potShare = biddingAmount.toBigInt() * BigInt(potIncomePercentage) / BigInt(100);

      const ownerShare = biddingAmount.toBigInt() * BigInt(ownerIncomePercentage) / BigInt(100);

      const [bidder, bid] = await casino.queueFront();

      expect(bidder).to.be.equal(otherAccount.address);
      expect(bid).to.be.equal(biddingAmount.toBigInt() - potShare - ownerShare)

      expect(await casino.queueLength()).to.be.equal(1);
      expect(await casino.pot()).to.be.equal(potShare);
      expect(await casino.queueAvailableFunds()).to.be.equal(biddingAmount.toBigInt() - potShare - ownerShare);

    });

    it("Invalid guess => Insufficient sent amount of tokens", async function () {
      const { casino, otherAccount, biddingAmount } = await loadFixture(deployCasinoVariant1);

      expect(await casino.queueLength()).to.be.equal(0);
      expect(await casino.pot()).to.be.equal(0);
      expect(await casino.queueAvailableFunds()).to.be.equal(0);

      await expect(casino.connect(otherAccount).guessTheNumberTesting(3, {
        value: biddingAmount.toBigInt() - BigInt(1)
      })).to.be.revertedWith("You didn't pay the required amount for participating!");


      expect(await casino.queueLength()).to.be.equal(0);
      expect(await casino.pot()).to.be.equal(0);
      expect(await casino.queueAvailableFunds()).to.be.equal(0);
    });

    it("Funds available to withdraw after user is out of the queue", async function () {
      const { casino, otherAccount, biddingAmount, potIncomePercentage, ownerIncomePercentage } = await loadFixture(deployCasinoShortTTL);

      expect(await casino.queueLength()).to.be.equal(0);
      expect(await casino.pot()).to.be.equal(0);
      expect(await casino.queueAvailableFunds()).to.be.equal(0);

      await casino.connect(otherAccount).guessTheNumberTesting(3, {
        value: biddingAmount
      });

      const potShare = biddingAmount.toBigInt() * BigInt(potIncomePercentage) / BigInt(100);
      const ownerShare = biddingAmount.toBigInt() * BigInt(ownerIncomePercentage) / BigInt(100);

      const [bidder, bid, timeAdded] = await casino.queueFront();

      expect(bidder).to.be.equal(otherAccount.address);
      expect(bid).to.be.equal(biddingAmount.toBigInt() - potShare - ownerShare)

      expect(await casino.queueLength()).to.be.equal(1);
      expect(await casino.pot()).to.be.equal(potShare);
      expect(await casino.queueAvailableFunds()).to.be.equal(biddingAmount.toBigInt() - potShare - ownerShare);

      delay(2000).then(() => console.log('ran after 1 second1 passed'));

      const oldOtherAccountBalance = await otherAccount.getBalance();
      const txHash = await casino.connect(otherAccount).withdraw();
      await txHash.wait();

      expect(txHash.gasPrice).to.be.exist;

      if (txHash.gasPrice)
        expect(await otherAccount.getBalance()).to.be.closeTo(oldOtherAccountBalance.toBigInt() + biddingAmount.toBigInt()
          - potShare - ownerShare - txHash.gasPrice?.toBigInt(), BigInt(10 ** 16));

      expect(await casino.toBePaid(otherAccount.address)).to.be.equal(0);


    });

    it("biddings in the queue get reduced if a player wins from queue", async function () {
      const { casino, otherAccount, queuePrizeAmount, biddingAmount, potIncomePercentage, ownerIncomePercentage } = await loadFixture(deployCasinoShortTTLPrizeFromQueue);

      await casino.connect(otherAccount).guessTheNumberTesting(4, {
        value: biddingAmount
      });

      const potShare = biddingAmount.toBigInt() * BigInt(potIncomePercentage) / BigInt(100);
      const ownerShare = biddingAmount.toBigInt() * BigInt(ownerIncomePercentage) / BigInt(100);

      delay(2000).then(() => console.log('ran after 2 seconds passed'));

      casino.guessTheNumberTesting(1, {
        value: biddingAmount
      })

      expect(await casino.pot()).to.be.equal(potShare);
      expect(await casino.queueAvailableFunds()).to.be.equal(biddingAmount.toBigInt() - potShare - ownerShare - queuePrizeAmount.toBigInt());

      expect(await casino.toBePaid(otherAccount.address)).to.be.equal(
        biddingAmount.toBigInt() - potShare - ownerShare - queuePrizeAmount.toBigInt()
      );

    });

    it("winner correctly wins from pot", async function () {
      const { casino, otherAccount, owner, queuePrizeAmount, biddingAmount, potIncomePercentage, ownerIncomePercentage, potPrizePercentage } = await loadFixture(deployCasinoShortTTLPrizeFromPot);

      await casino.connect(otherAccount).guessTheNumberTesting(4, {
        value: biddingAmount
      });

      const potShare = biddingAmount.toBigInt() * BigInt(potIncomePercentage) / BigInt(100);
      const ownerShare = biddingAmount.toBigInt() * BigInt(ownerIncomePercentage) / BigInt(100);

      delay(2000).then(() => console.log('ran after 2 seconds passed'));

      casino.guessTheNumberTesting(2, {
        value: biddingAmount
      })

      expect(await casino.pot()).to.be.equal(potShare * BigInt(potPrizePercentage) / BigInt(100));

      expect(await casino.toBePaid(owner.address)).to.be.equal(
        potShare * BigInt(potPrizePercentage) / BigInt(100)
      );

    });

    it("winner correctly wins from static prize", async function () {
      const { casino, otherAccount, owner, staticPrize, biddingAmount, potIncomePercentage, ownerIncomePercentage, potPrizePercentage } = await loadFixture(deployCasinoShortTTLPrizeFromStaticPrize);

      await owner.sendTransaction({
        to: casino.address,
        value: ethers.BigNumber.from("1000000000000000000")
      });

      await casino.connect(otherAccount).guessTheNumberTesting(1, {
        value: biddingAmount
      });

      expect(await casino.toBePaid(otherAccount.address)).to.be.equal(
        staticPrize
      );

    });

  });

});
