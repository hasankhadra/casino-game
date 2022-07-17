import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Casino", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshopt in every test.
  async function deployCasinoVariant1() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    
    console.log("Owner Address", owner.address)
    console.log("Other Account", otherAccount.address)

    const potPrizePercentage = 10;
    const potIncomePercentage = 10;
    const staticPrize = 1000;
    const ownerIncomePercentage = 10;
    const queuePrizeAmount = 20;
    const biddingAmount = 20;
    const timeToLive = 3600;
    const numbersRange = 8;

    const Casino = await ethers.getContractFactory("Casino");
    const casino = await Casino.connect(owner).deploy(potPrizePercentage, potIncomePercentage, staticPrize,
      ownerIncomePercentage, queuePrizeAmount, biddingAmount, timeToLive, numbersRange);

    await casino.deployed();

    return {
      potPrizePercentage, casino, owner, otherAccount, potIncomePercentage, staticPrize,
      ownerIncomePercentage, queuePrizeAmount, biddingAmount, timeToLive, numbersRange
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

    // it("Should set the right owner", async function () {
    //   const { lock, owner } = await loadFixture(deployOneYearLockFixture);

    //   expect(await lock.owner()).to.equal(owner.address);
    // });

    // it("Should receive and store the funds to lock", async function () {
    //   const { lock, lockedAmount } = await loadFixture(
    //     deployOneYearLockFixture
    //   );

    //   expect(await ethers.provider.getBalance(lock.address)).to.equal(
    //     lockedAmount
    //   );
    // });

    // it("Should fail if the unlockTime is not in the future", async function () {
    //   // We don't use the fixture here because we want a different deployment
    //   const latestTime = await time.latest();
    //   const Lock = await ethers.getContractFactory("Lock");
    //   await expect(Lock.deploy(latestTime, { value: 1 })).to.be.revertedWith(
    //     "Unlock time should be in the future"
    //   );
    // });
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
        value: ethers.utils.parseEther("1.0"), // Sends exactly 1.0 ether
      });

      await casino.connect(otherAccount).withdraw();

      await expect(otherAccount.getBalance()).to.be.equal(ethers.utils.parseEther("0.5"));

    });

    it("non-owner cannot withdrawOwner", async function () {
      const { casino, otherAccount, owner } = await loadFixture(deployCasinoVariant1);
      
      await expect(casino.connect(otherAccount).withdrawOwner(10)).to.be.revertedWith("Only owner!");

    });
  });
  // describe("Withdrawals", function () {
  //   describe("Validations", function () {
  //     it("Should revert with the right error if called too soon", async function () {
  //       const { lock } = await loadFixture(deployOneYearLockFixture);

  //       await expect(lock.withdraw()).to.be.revertedWith(
  //         "You can't withdraw yet"
  //       );
  //     });

  //     it("Should revert with the right error if called from another account", async function () {
  //       const { lock, unlockTime, otherAccount } = await loadFixture(
  //         deployOneYearLockFixture
  //       );

  //       // We can increase the time in Hardhat Network
  //       await time.increaseTo(unlockTime);

  //       // We use lock.connect() to send a transaction from another account
  //       await expect(lock.connect(otherAccount).withdraw()).to.be.revertedWith(
  //         "You aren't the owner"
  //       );
  //     });

  //     it("Shouldn't fail if the unlockTime has arrived and the owner calls it", async function () {
  //       const { lock, unlockTime } = await loadFixture(
  //         deployOneYearLockFixture
  //       );

  //       // Transactions are sent using the first signer by default
  //       await time.increaseTo(unlockTime);

  //       await expect(lock.withdraw()).not.to.be.reverted;
  //     });
  //   });

  //   // describe("Events", function () {
  //   //   it("Should emit an event on withdrawals", async function () {
  //   //     const { lock, unlockTime, lockedAmount } = await loadFixture(
  //   //       deployOneYearLockFixture
  //   //     );

  //   //     await time.increaseTo(unlockTime);

  //   //     await expect(lock.withdraw())
  //   //       .to.emit(lock, "Withdrawal")
  //   //       .withArgs(lockedAmount, anyValue); // We accept any value as `when` arg
  //   //   });
  //   // });


  // });
});
