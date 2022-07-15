// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Import this file to use console.log
import "hardhat/console.sol";

contract Casino {
    uint public potPrizePercentage = 10;
    uint public staticPrize = 40;
    uint public pot;

    uint public ownerIncomePercentage = 10;
    uint public potIncomePercentage = 10;

    address payable public owner;
    address payable[] queue = new address payable(0);

    constructor(uint _unlockTime) {
        owner = payable(msg.sender);
    }

    function changePotPrizePercentage(uint _percentage) public{
        require(msg.sender == owner);
        potPrizePercentage = _percentage;
    }

    function changeStaticPrize(uint _staticPrize) public {
        require(msg.sender == owner);
        staticPrize = _staticPrize;
    }

    function getRandomNumber() public view returns(uint) {
        return 10;
    }

    function getCurrentPotPrize() public view returns(uint) {
        return potPrizePercentage * pot / 100;
    }

    function getCurrentStaticPrize() public view returns(uint) {
        return staticPrize;
    }

    function getCurrentMaxPrize() public view returns(uint) {
        if(staticPrize > pot * potPrizePercentage / 100){
            return staticPrize;
        }
        return pot * potPrizePercentage / 100;
    }

    function guessTheNumber(uint _number) public {
        if(_number == getRandomNumber()){
            uint ownerShare = msg.value * ownerIncomePercentage / 100;
            uint potShare = msg.value * potIncomePercentage / 100;
            
            owner.transfer(ownerShare);
            pot += potShare;

            msg.sender.transfer(msg.value - potShare - ownerShare);
        }
        else{
            uint currentMaxPrize = getCurrentMaxPrize();
            require(address(this).balance >= currentMaxPrize);
            msg.sender.transfer(currentMaxPrize);
        }
    }
    
    function withdraw() public {
        // Uncomment this line to print a log in your terminal
        // console.log("Unlock time is %o and block timestamp is %o", unlockTime, block.timestamp);

        require(block.timestamp >= unlockTime, "You can't withdraw yet");
        require(msg.sender == owner, "You aren't the owner");

        emit Withdrawal(address(this).balance, block.timestamp);

        owner.transfer(address(this).balance);
    }
}
