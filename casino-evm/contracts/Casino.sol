// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "./DoubleEndedQueue.sol";
import "hardhat/console.sol";

contract Casino {
    uint256 public potPrizePercentage;
    uint256 public potIncomePercentage;
    uint256 public staticPrize;
    uint256 public ownerIncomePercentage;
    uint256 public queuePrizeAmount;
    uint256 public biddingAmount;
    uint256 public timeToLive;

    DoubleEndedQueue.Bytes32Deque queue;

    uint256 public pot = 0;
    uint256 public queueTakenAmount = 0;
    uint256 public queueAvailableFunds = 0;

    address payable public owner;
    mapping(address => uint256) toBePaid;

    constructor(
        uint256 _potPrizePercentage,
        uint256 _potIncomePercentage,
        uint256 _staticPrize,
        uint256 _ownerIncomePercentage,
        uint256 _queuePrizeAmount,
        uint256 _biddingAmount,
        uint256 _timeToLive
    ) {
        owner = payable(msg.sender);
        potPrizePercentage = _potPrizePercentage;
        potIncomePercentage = _potIncomePercentage;
        staticPrize = _staticPrize;
        ownerIncomePercentage = _ownerIncomePercentage;
        queuePrizeAmount = _queuePrizeAmount;
        biddingAmount = _biddingAmount;
        timeToLive = _timeToLive;
    }

    function changePotPrizePercentage(uint256 _percentage) public {
        require(msg.sender == owner);
        potPrizePercentage = _percentage;
    }

    function changeStaticPrize(uint256 _staticPrize) public {
        require(msg.sender == owner);
        staticPrize = _staticPrize;
    }

    function changePotIncomePercentage(uint256 _potIncomePercentage) public {
        require(msg.sender == owner);
        potIncomePercentage = _potIncomePercentage;
    }

    function changeOwnerIncomePercentage(uint256 _ownerIncomePercentage)
        public
    {
        require(msg.sender == owner);
        ownerIncomePercentage = _ownerIncomePercentage;
    }

    function changeQueuePrizeAmount(uint256 _queuePrizeAmount) public {
        require(msg.sender == owner);
        queuePrizeAmount = _queuePrizeAmount;
    }

    function changeBiddingAmount(uint256 _biddingAmount) public {
        require(msg.sender == owner);
        biddingAmount = _biddingAmount;
    }

    function changeTimeToLive(uint256 _timeToLive) public {
        require(msg.sender == owner);
        timeToLive = _timeToLive;
    }

    function getRandomNumber() internal view returns (uint256) {
        return 10;
    }

    function getMax(
        uint256 a,
        uint256 b,
        uint256 c
    ) public view returns (uint256) {
        if (a > b) {
            if (a > c) return a;
            if (b > c) return b;
            return c;
        } else {
            if (b > c) return b;
            if (a > c) return a;
            return c;
        }
    }

    function guessTheNumber(uint256 _number) public payable {
        require(msg.value >= biddingAmount);

        if (_number == getRandomNumber()) {
            uint256 potPrize = (potPrizePercentage * pot) / 100;
            uint256 queuePrize = queuePrizeAmount * queue.length();
            uint256 maxPrize = getMax(potPrize, queuePrize, staticPrize);

            require(address(this).balance >= maxPrize); // maybe change the condition to allow losers to pass the require

            if (maxPrize == queuePrize) {
                queueTakenAmount += queuePrizeAmount;
                cleanQueue();
            } else if (maxPrize != staticPrize && maxPrize == potPrize) {
                pot -= potPrize;
            }

            msg.sender.transfer(maxPrize);
        } else {
            // keep the owner its share from the losing bid inside the
            // contract's funds
            uint256 ownerShare = (msg.value * ownerIncomePercentage) / 100;

            uint256 potShare = (msg.value * potIncomePercentage) / 100;

            // add to the pot its share from the losing bid
            pot += potShare;

            // losing bid - add item to the queue after subtracting the owner and pot share and adding the alreadt queueTakenAmount
            cleanQueue();
            queue.pushFront(
                DoubleEndedQueue.CasinoData(
                    msg.sender,
                    msg.value - ownerShare - potShare + queueTakenAmount,
                    now
                )
            );
            queueAvailableFunds += msg.value - ownerShare - potShare;
        }
    }

    function cleanQueue() internal {
        while (!queue.empty()) {
            DoubleEndedQueue.CasinoData item = queue.back();
            if (item.timeAdded + timeToLive >= now) {
                toBePaid[item.bidder] += max(0, item.bid - queueTakenAmount);
                queue.popBack();
            } else if (item.bid - queueTakenAmount == 0) {
                queue.popback();
            } else break;
        }
    }

    function withdraw() public payable {
        cleanQueue();
        require(
            toBePaid[msg.sender] >= 0,
            "You can't withdraw yet - Not allowed to withdraw 0 funds!"
        );
        require(
            toBePaid[msg.sender] <= address(this).balance,
            "There are no enough funds in the game contract"
        );

        msg.sender.transfer(toBePaid[msg.sender]);
    }

    function withdrawOwner(uint256 amount) public payable {
        require(msg.sender == owner);
        require(amount <= address(this).balance);

        owner.transfer(amount);
    }
}
