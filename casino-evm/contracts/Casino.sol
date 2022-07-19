// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "./DoubleEndedQueue.sol";
// import "hardhat/console.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract Casino is VRFConsumerBase {
    uint256 public potPrizePercentage;
    uint256 public potIncomePercentage;
    uint256 public staticPrize;
    uint256 public ownerIncomePercentage;
    uint256 public queuePrizeAmount;
    uint256 public biddingAmount;
    uint256 public timeToLive;
    uint256 public numbersRange;

    DoubleEndedQueue.Bytes32Deque public queue;

    uint256 public pot = 0;
    uint256 public queueTakenAmount = 0;
    uint256 public queueAvailableFunds = 0;

    address payable public owner;

    bytes32 internal keyHash;
    uint256 internal fee;
    uint256 internal randomResult;

    // @TODO: delete on production!
    uint256 requestIdTesting = 0;

    mapping(uint256 => address) public requestIdToAddressTesting;
    mapping(uint256 => uint256) public requestIdToGuessTesting;
    mapping(address => uint256) public toBePaid;
    mapping(bytes32 => address) public requestIdToAddress;
    mapping(bytes32 => uint256) public requestIdToGuess;

    event StaticPrizeChange(uint256 newStaticPrize);

    constructor(
        uint256 _potPrizePercentage,
        uint256 _potIncomePercentage,
        uint256 _staticPrize,
        uint256 _ownerIncomePercentage,
        uint256 _queuePrizeAmount,
        uint256 _biddingAmount,
        uint256 _timeToLive,
        uint256 _numbersRange
    )
        VRFConsumerBase(
            0x8C7382F9D8f56b33781fE506E897a4F1e2d17255, // VRF Coordinator
            0x326C977E6efc84E512bB9C30f76E30c160eD06FB // LINK Token
        )
    {
        owner = payable(msg.sender);
        potPrizePercentage = _potPrizePercentage;
        potIncomePercentage = _potIncomePercentage;
        staticPrize = _staticPrize;
        ownerIncomePercentage = _ownerIncomePercentage;
        queuePrizeAmount = _queuePrizeAmount;
        biddingAmount = _biddingAmount;
        timeToLive = _timeToLive;
        numbersRange = _numbersRange;
        DoubleEndedQueue.clear(queue);
        keyHash = 0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4;
        fee = 0.0001 * 10**18; // 0.1 LINK (Varies by network)
    }

    receive() external payable {
        // React to receiving ether
    }

    function changePotPrizePercentage(uint256 _percentage) public {
        require(msg.sender == owner, "Only owner!");
        potPrizePercentage = _percentage;
    }

    function changeStaticPrize(uint256 _staticPrize) public {
        require(msg.sender == owner, "Only owner!");
        staticPrize = _staticPrize;

        emit StaticPrizeChange(_staticPrize);
    }

    function changePotIncomePercentage(uint256 _potIncomePercentage) public {
        require(msg.sender == owner, "Only owner!");
        potIncomePercentage = _potIncomePercentage;
    }

    function changeOwnerIncomePercentage(uint256 _ownerIncomePercentage)
        public
    {
        require(msg.sender == owner, "Only owner!");
        ownerIncomePercentage = _ownerIncomePercentage;
    }

    function changeQueuePrizeAmount(uint256 _queuePrizeAmount) public {
        require(msg.sender == owner, "Only owner!");
        queuePrizeAmount = _queuePrizeAmount;
    }

    function changeBiddingAmount(uint256 _biddingAmount) public {
        require(msg.sender == owner, "Only owner!");
        biddingAmount = _biddingAmount;
    }

    function changeTimeToLive(uint256 _timeToLive) public {
        require(msg.sender == owner, "Only owner!");
        timeToLive = _timeToLive;
    }

    function changeNumbersRange(uint256 _numbersRange) public {
        require(msg.sender == owner, "Only owner!");
        numbersRange = _numbersRange;
    }

    function getMax(uint256 a, uint256 b) public pure returns (uint256) {
        if (a > b) return a;
        return b;
    }

    function guessTheNumber(uint256 _number) public payable {
        require(
            msg.value >= biddingAmount,
            "You didn't pay the required amount for participating!"
        );

        bytes32 requestId = getRandomNumber();
        requestIdToAddress[requestId] = msg.sender;
        requestIdToGuess[requestId] = _number;
    }

    // @TODO: delete on production - only for testing
    function guessTheNumberTesting(uint256 _number) public payable {
        require(
            msg.value >= biddingAmount,
            "You didn't pay the required amount for participating!"
        );

        requestIdToAddressTesting[requestIdTesting] = msg.sender;
        requestIdToGuessTesting[requestIdTesting] = _number;

        fulfillRandomnessTesting(requestIdTesting, 0);

        requestIdTesting += 1;
    }

    function handleGuess(
        address bidder,
        uint256 _number,
        uint256 winningNumber
    ) public payable returns (uint256, uint256) {
        if (_number == winningNumber) {
            uint256 queuePrize = queuePrizeAmount *
                uint256(DoubleEndedQueue.length(queue));
            uint256 maxPrize = getMax(queuePrize, staticPrize);

            if (maxPrize == queuePrize) {
                queueTakenAmount += queuePrizeAmount;
                cleanQueue();
            }

            toBePaid[bidder] += maxPrize;
        } else if (_number == (winningNumber % numbersRange) + 1) {
            uint256 potPrize = (potPrizePercentage * pot) / 100;

            uint256 maxPrize = getMax(potPrize, staticPrize);

            if (maxPrize == potPrize) {
                pot -= potPrize;
            }

            toBePaid[bidder] += maxPrize;
        } else {
            // keep the owner its share from the losing bid inside the
            // contract's funds
            uint256 ownerShare = (biddingAmount * ownerIncomePercentage) / 100;

            uint256 potShare = (biddingAmount * potIncomePercentage) / 100;

            // add to the pot its share from the losing bid
            pot += potShare;

            // losing bid - add item to the queue after subtracting the owner and pot share and adding the already queueTakenAmount
            cleanQueue();
            DoubleEndedQueue.pushFront(
                queue,
                DoubleEndedQueue.CasinoData(
                    bidder,
                    biddingAmount - ownerShare - potShare + queueTakenAmount,
                    block.timestamp
                )
            );
            queueAvailableFunds += biddingAmount - ownerShare - potShare;
        }
        return (winningNumber, (winningNumber % numbersRange) + 1);
    }

    function cleanQueue() public {
        while (!DoubleEndedQueue.empty(queue)) {
            DoubleEndedQueue.CasinoData storage item = DoubleEndedQueue.back(
                queue
            );
            if (item.timeAdded + timeToLive <= block.timestamp) {
                if (item.bid - queueTakenAmount > 0)
                    toBePaid[item.bidder] += item.bid - queueTakenAmount;
                DoubleEndedQueue.popBack(queue);
            } else if (item.bid - queueTakenAmount == 0) {
                DoubleEndedQueue.popBack(queue);
            } else break;
        }
    }

    function changeToBePaid(address _address, uint256 amount) public {
        require(msg.sender == owner, "Only owner!");

        toBePaid[_address] += amount;
    }

    function withdraw() public payable {
        cleanQueue();

        require(
            toBePaid[msg.sender] > 0,
            "You can't withdraw yet - Not allowed to withdraw 0 funds!"
        );

        require(
            toBePaid[msg.sender] <= address(this).balance,
            "Sorry, there are no enough funds in the game contract, will fund it soon!"
        );

        uint256 _toBePaid = toBePaid[msg.sender];
        toBePaid[msg.sender] = 0;

        payable(msg.sender).transfer(_toBePaid);
    }

    function withdrawOwner(uint256 amount) public payable {
        require(msg.sender == owner, "Only owner!");
        require(
            amount <= address(this).balance,
            "No enough balance for the amount requested!"
        );

        owner.transfer(amount);
    }

    /**
     * Requests randomness
     */
    function getRandomNumber() internal returns (bytes32 requestId) {
        require(
            LINK.balanceOf(address(this)) >= fee,
            "Not enough LINK - fill contract with faucet"
        );
        return requestRandomness(keyHash, fee);
    }

    /**
     * Callback function used by VRF Coordinator
     */
    function fulfillRandomness(bytes32 requestId, uint256 randomness)
        internal
        override
    {
        handleGuess(
            requestIdToAddress[requestId],
            requestIdToGuess[requestId],
            (randomness % numbersRange) + 1
        );
    }

    // @TODO: delete on production
    function fulfillRandomnessTesting(uint256 requestId, uint256 randomness)
        internal
    {
        handleGuess(
            requestIdToAddressTesting[requestId],
            requestIdToGuessTesting[requestId],
            (randomness % numbersRange) + 1
        );
    }

    // @TODO: delete on production
    function queueBack()
        public
        view
        returns (DoubleEndedQueue.CasinoData memory)
    {
        return DoubleEndedQueue.back(queue);
    }

    // @TODO: delete on production
    function queueFront()
        public
        view
        returns (DoubleEndedQueue.CasinoData memory)
    {
        return DoubleEndedQueue.front(queue);
    }

    // @TODO: delete on production
    function queueLength() public view returns (uint256) {
        return DoubleEndedQueue.length(queue);
    }
}
