// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class GuessedTheNumber extends ethereum.Event {
  get params(): GuessedTheNumber__Params {
    return new GuessedTheNumber__Params(this);
  }
}

export class GuessedTheNumber__Params {
  _event: GuessedTheNumber;

  constructor(event: GuessedTheNumber) {
    this._event = event;
  }

  get bidder(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get guessedNumber(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get winningNumber(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get prize(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Casino__queueResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromSignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromSignedBigInt(this.value1));
    return map;
  }

  get_begin(): BigInt {
    return this.value0;
  }

  get_end(): BigInt {
    return this.value1;
  }
}

export class Casino__queueBackResultValue0Struct extends ethereum.Tuple {
  get bidder(): Address {
    return this[0].toAddress();
  }

  get bid(): BigInt {
    return this[1].toBigInt();
  }

  get guessedNumber(): BigInt {
    return this[2].toBigInt();
  }

  get winningNumber(): BigInt {
    return this[3].toBigInt();
  }

  get timeAdded(): BigInt {
    return this[4].toBigInt();
  }
}

export class Casino__queueFrontResultValue0Struct extends ethereum.Tuple {
  get bidder(): Address {
    return this[0].toAddress();
  }

  get bid(): BigInt {
    return this[1].toBigInt();
  }

  get guessedNumber(): BigInt {
    return this[2].toBigInt();
  }

  get winningNumber(): BigInt {
    return this[3].toBigInt();
  }

  get timeAdded(): BigInt {
    return this[4].toBigInt();
  }
}

export class Casino extends ethereum.SmartContract {
  static bind(address: Address): Casino {
    return new Casino("Casino", address);
  }

  biddingAmount(): BigInt {
    let result = super.call("biddingAmount", "biddingAmount():(uint256)", []);

    return result[0].toBigInt();
  }

  try_biddingAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "biddingAmount",
      "biddingAmount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getMax(a: BigInt, b: BigInt): BigInt {
    let result = super.call("getMax", "getMax(uint256,uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(a),
      ethereum.Value.fromUnsignedBigInt(b)
    ]);

    return result[0].toBigInt();
  }

  try_getMax(a: BigInt, b: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getMax", "getMax(uint256,uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(a),
      ethereum.Value.fromUnsignedBigInt(b)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  numbersRange(): BigInt {
    let result = super.call("numbersRange", "numbersRange():(uint256)", []);

    return result[0].toBigInt();
  }

  try_numbersRange(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("numbersRange", "numbersRange():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerIncomePercentage(): BigInt {
    let result = super.call(
      "ownerIncomePercentage",
      "ownerIncomePercentage():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_ownerIncomePercentage(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "ownerIncomePercentage",
      "ownerIncomePercentage():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  pot(): BigInt {
    let result = super.call("pot", "pot():(uint256)", []);

    return result[0].toBigInt();
  }

  try_pot(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("pot", "pot():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  potIncomePercentage(): BigInt {
    let result = super.call(
      "potIncomePercentage",
      "potIncomePercentage():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_potIncomePercentage(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "potIncomePercentage",
      "potIncomePercentage():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  potPrizePercentage(): BigInt {
    let result = super.call(
      "potPrizePercentage",
      "potPrizePercentage():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_potPrizePercentage(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "potPrizePercentage",
      "potPrizePercentage():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  queue(): Casino__queueResult {
    let result = super.call("queue", "queue():(int256,int256)", []);

    return new Casino__queueResult(result[0].toBigInt(), result[1].toBigInt());
  }

  try_queue(): ethereum.CallResult<Casino__queueResult> {
    let result = super.tryCall("queue", "queue():(int256,int256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Casino__queueResult(value[0].toBigInt(), value[1].toBigInt())
    );
  }

  queueAvailableFunds(): BigInt {
    let result = super.call(
      "queueAvailableFunds",
      "queueAvailableFunds():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_queueAvailableFunds(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "queueAvailableFunds",
      "queueAvailableFunds():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  queueBack(): Casino__queueBackResultValue0Struct {
    let result = super.call(
      "queueBack",
      "queueBack():((address,uint256,uint256,uint256,uint256))",
      []
    );

    return changetype<Casino__queueBackResultValue0Struct>(result[0].toTuple());
  }

  try_queueBack(): ethereum.CallResult<Casino__queueBackResultValue0Struct> {
    let result = super.tryCall(
      "queueBack",
      "queueBack():((address,uint256,uint256,uint256,uint256))",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Casino__queueBackResultValue0Struct>(value[0].toTuple())
    );
  }

  queueFront(): Casino__queueFrontResultValue0Struct {
    let result = super.call(
      "queueFront",
      "queueFront():((address,uint256,uint256,uint256,uint256))",
      []
    );

    return changetype<Casino__queueFrontResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_queueFront(): ethereum.CallResult<Casino__queueFrontResultValue0Struct> {
    let result = super.tryCall(
      "queueFront",
      "queueFront():((address,uint256,uint256,uint256,uint256))",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Casino__queueFrontResultValue0Struct>(value[0].toTuple())
    );
  }

  queueLength(): BigInt {
    let result = super.call("queueLength", "queueLength():(uint256)", []);

    return result[0].toBigInt();
  }

  try_queueLength(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("queueLength", "queueLength():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  queuePrizeAmount(): BigInt {
    let result = super.call(
      "queuePrizeAmount",
      "queuePrizeAmount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_queuePrizeAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "queuePrizeAmount",
      "queuePrizeAmount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  queueTakenAmount(): BigInt {
    let result = super.call(
      "queueTakenAmount",
      "queueTakenAmount():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_queueTakenAmount(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "queueTakenAmount",
      "queueTakenAmount():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  requestIdToAddress(param0: Bytes): Address {
    let result = super.call(
      "requestIdToAddress",
      "requestIdToAddress(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return result[0].toAddress();
  }

  try_requestIdToAddress(param0: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "requestIdToAddress",
      "requestIdToAddress(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  requestIdToAddressTesting(param0: BigInt): Address {
    let result = super.call(
      "requestIdToAddressTesting",
      "requestIdToAddressTesting(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_requestIdToAddressTesting(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "requestIdToAddressTesting",
      "requestIdToAddressTesting(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  requestIdToGuess(param0: Bytes): BigInt {
    let result = super.call(
      "requestIdToGuess",
      "requestIdToGuess(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return result[0].toBigInt();
  }

  try_requestIdToGuess(param0: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "requestIdToGuess",
      "requestIdToGuess(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  requestIdToGuessTesting(param0: BigInt): BigInt {
    let result = super.call(
      "requestIdToGuessTesting",
      "requestIdToGuessTesting(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toBigInt();
  }

  try_requestIdToGuessTesting(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "requestIdToGuessTesting",
      "requestIdToGuessTesting(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  staticPrize(): BigInt {
    let result = super.call("staticPrize", "staticPrize():(uint256)", []);

    return result[0].toBigInt();
  }

  try_staticPrize(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("staticPrize", "staticPrize():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  timeToLive(): BigInt {
    let result = super.call("timeToLive", "timeToLive():(uint256)", []);

    return result[0].toBigInt();
  }

  try_timeToLive(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("timeToLive", "timeToLive():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  toBePaid(param0: Address): BigInt {
    let result = super.call("toBePaid", "toBePaid(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_toBePaid(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("toBePaid", "toBePaid(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _potPrizePercentage(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _potIncomePercentage(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _staticPrize(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _ownerIncomePercentage(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _queuePrizeAmount(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _biddingAmount(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _timeToLive(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _numbersRange(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ChangeBiddingAmountCall extends ethereum.Call {
  get inputs(): ChangeBiddingAmountCall__Inputs {
    return new ChangeBiddingAmountCall__Inputs(this);
  }

  get outputs(): ChangeBiddingAmountCall__Outputs {
    return new ChangeBiddingAmountCall__Outputs(this);
  }
}

export class ChangeBiddingAmountCall__Inputs {
  _call: ChangeBiddingAmountCall;

  constructor(call: ChangeBiddingAmountCall) {
    this._call = call;
  }

  get _biddingAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeBiddingAmountCall__Outputs {
  _call: ChangeBiddingAmountCall;

  constructor(call: ChangeBiddingAmountCall) {
    this._call = call;
  }
}

export class ChangeNumbersRangeCall extends ethereum.Call {
  get inputs(): ChangeNumbersRangeCall__Inputs {
    return new ChangeNumbersRangeCall__Inputs(this);
  }

  get outputs(): ChangeNumbersRangeCall__Outputs {
    return new ChangeNumbersRangeCall__Outputs(this);
  }
}

export class ChangeNumbersRangeCall__Inputs {
  _call: ChangeNumbersRangeCall;

  constructor(call: ChangeNumbersRangeCall) {
    this._call = call;
  }

  get _numbersRange(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeNumbersRangeCall__Outputs {
  _call: ChangeNumbersRangeCall;

  constructor(call: ChangeNumbersRangeCall) {
    this._call = call;
  }
}

export class ChangeOwnerIncomePercentageCall extends ethereum.Call {
  get inputs(): ChangeOwnerIncomePercentageCall__Inputs {
    return new ChangeOwnerIncomePercentageCall__Inputs(this);
  }

  get outputs(): ChangeOwnerIncomePercentageCall__Outputs {
    return new ChangeOwnerIncomePercentageCall__Outputs(this);
  }
}

export class ChangeOwnerIncomePercentageCall__Inputs {
  _call: ChangeOwnerIncomePercentageCall;

  constructor(call: ChangeOwnerIncomePercentageCall) {
    this._call = call;
  }

  get _ownerIncomePercentage(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeOwnerIncomePercentageCall__Outputs {
  _call: ChangeOwnerIncomePercentageCall;

  constructor(call: ChangeOwnerIncomePercentageCall) {
    this._call = call;
  }
}

export class ChangePotIncomePercentageCall extends ethereum.Call {
  get inputs(): ChangePotIncomePercentageCall__Inputs {
    return new ChangePotIncomePercentageCall__Inputs(this);
  }

  get outputs(): ChangePotIncomePercentageCall__Outputs {
    return new ChangePotIncomePercentageCall__Outputs(this);
  }
}

export class ChangePotIncomePercentageCall__Inputs {
  _call: ChangePotIncomePercentageCall;

  constructor(call: ChangePotIncomePercentageCall) {
    this._call = call;
  }

  get _potIncomePercentage(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangePotIncomePercentageCall__Outputs {
  _call: ChangePotIncomePercentageCall;

  constructor(call: ChangePotIncomePercentageCall) {
    this._call = call;
  }
}

export class ChangePotPrizePercentageCall extends ethereum.Call {
  get inputs(): ChangePotPrizePercentageCall__Inputs {
    return new ChangePotPrizePercentageCall__Inputs(this);
  }

  get outputs(): ChangePotPrizePercentageCall__Outputs {
    return new ChangePotPrizePercentageCall__Outputs(this);
  }
}

export class ChangePotPrizePercentageCall__Inputs {
  _call: ChangePotPrizePercentageCall;

  constructor(call: ChangePotPrizePercentageCall) {
    this._call = call;
  }

  get _percentage(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangePotPrizePercentageCall__Outputs {
  _call: ChangePotPrizePercentageCall;

  constructor(call: ChangePotPrizePercentageCall) {
    this._call = call;
  }
}

export class ChangeQueuePrizeAmountCall extends ethereum.Call {
  get inputs(): ChangeQueuePrizeAmountCall__Inputs {
    return new ChangeQueuePrizeAmountCall__Inputs(this);
  }

  get outputs(): ChangeQueuePrizeAmountCall__Outputs {
    return new ChangeQueuePrizeAmountCall__Outputs(this);
  }
}

export class ChangeQueuePrizeAmountCall__Inputs {
  _call: ChangeQueuePrizeAmountCall;

  constructor(call: ChangeQueuePrizeAmountCall) {
    this._call = call;
  }

  get _queuePrizeAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeQueuePrizeAmountCall__Outputs {
  _call: ChangeQueuePrizeAmountCall;

  constructor(call: ChangeQueuePrizeAmountCall) {
    this._call = call;
  }
}

export class ChangeStaticPrizeCall extends ethereum.Call {
  get inputs(): ChangeStaticPrizeCall__Inputs {
    return new ChangeStaticPrizeCall__Inputs(this);
  }

  get outputs(): ChangeStaticPrizeCall__Outputs {
    return new ChangeStaticPrizeCall__Outputs(this);
  }
}

export class ChangeStaticPrizeCall__Inputs {
  _call: ChangeStaticPrizeCall;

  constructor(call: ChangeStaticPrizeCall) {
    this._call = call;
  }

  get _staticPrize(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeStaticPrizeCall__Outputs {
  _call: ChangeStaticPrizeCall;

  constructor(call: ChangeStaticPrizeCall) {
    this._call = call;
  }
}

export class ChangeTimeToLiveCall extends ethereum.Call {
  get inputs(): ChangeTimeToLiveCall__Inputs {
    return new ChangeTimeToLiveCall__Inputs(this);
  }

  get outputs(): ChangeTimeToLiveCall__Outputs {
    return new ChangeTimeToLiveCall__Outputs(this);
  }
}

export class ChangeTimeToLiveCall__Inputs {
  _call: ChangeTimeToLiveCall;

  constructor(call: ChangeTimeToLiveCall) {
    this._call = call;
  }

  get _timeToLive(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeTimeToLiveCall__Outputs {
  _call: ChangeTimeToLiveCall;

  constructor(call: ChangeTimeToLiveCall) {
    this._call = call;
  }
}

export class ChangeToBePaidCall extends ethereum.Call {
  get inputs(): ChangeToBePaidCall__Inputs {
    return new ChangeToBePaidCall__Inputs(this);
  }

  get outputs(): ChangeToBePaidCall__Outputs {
    return new ChangeToBePaidCall__Outputs(this);
  }
}

export class ChangeToBePaidCall__Inputs {
  _call: ChangeToBePaidCall;

  constructor(call: ChangeToBePaidCall) {
    this._call = call;
  }

  get _address(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ChangeToBePaidCall__Outputs {
  _call: ChangeToBePaidCall;

  constructor(call: ChangeToBePaidCall) {
    this._call = call;
  }
}

export class CleanQueueCall extends ethereum.Call {
  get inputs(): CleanQueueCall__Inputs {
    return new CleanQueueCall__Inputs(this);
  }

  get outputs(): CleanQueueCall__Outputs {
    return new CleanQueueCall__Outputs(this);
  }
}

export class CleanQueueCall__Inputs {
  _call: CleanQueueCall;

  constructor(call: CleanQueueCall) {
    this._call = call;
  }
}

export class CleanQueueCall__Outputs {
  _call: CleanQueueCall;

  constructor(call: CleanQueueCall) {
    this._call = call;
  }
}

export class GuessTheNumberCall extends ethereum.Call {
  get inputs(): GuessTheNumberCall__Inputs {
    return new GuessTheNumberCall__Inputs(this);
  }

  get outputs(): GuessTheNumberCall__Outputs {
    return new GuessTheNumberCall__Outputs(this);
  }
}

export class GuessTheNumberCall__Inputs {
  _call: GuessTheNumberCall;

  constructor(call: GuessTheNumberCall) {
    this._call = call;
  }

  get _number(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class GuessTheNumberCall__Outputs {
  _call: GuessTheNumberCall;

  constructor(call: GuessTheNumberCall) {
    this._call = call;
  }
}

export class GuessTheNumberTestingCall extends ethereum.Call {
  get inputs(): GuessTheNumberTestingCall__Inputs {
    return new GuessTheNumberTestingCall__Inputs(this);
  }

  get outputs(): GuessTheNumberTestingCall__Outputs {
    return new GuessTheNumberTestingCall__Outputs(this);
  }
}

export class GuessTheNumberTestingCall__Inputs {
  _call: GuessTheNumberTestingCall;

  constructor(call: GuessTheNumberTestingCall) {
    this._call = call;
  }

  get _number(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class GuessTheNumberTestingCall__Outputs {
  _call: GuessTheNumberTestingCall;

  constructor(call: GuessTheNumberTestingCall) {
    this._call = call;
  }
}

export class HandleGuessCall extends ethereum.Call {
  get inputs(): HandleGuessCall__Inputs {
    return new HandleGuessCall__Inputs(this);
  }

  get outputs(): HandleGuessCall__Outputs {
    return new HandleGuessCall__Outputs(this);
  }
}

export class HandleGuessCall__Inputs {
  _call: HandleGuessCall;

  constructor(call: HandleGuessCall) {
    this._call = call;
  }

  get bidder(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _number(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get winningNumber(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class HandleGuessCall__Outputs {
  _call: HandleGuessCall;

  constructor(call: HandleGuessCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get value1(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}

export class RawFulfillRandomnessCall extends ethereum.Call {
  get inputs(): RawFulfillRandomnessCall__Inputs {
    return new RawFulfillRandomnessCall__Inputs(this);
  }

  get outputs(): RawFulfillRandomnessCall__Outputs {
    return new RawFulfillRandomnessCall__Outputs(this);
  }
}

export class RawFulfillRandomnessCall__Inputs {
  _call: RawFulfillRandomnessCall;

  constructor(call: RawFulfillRandomnessCall) {
    this._call = call;
  }

  get requestId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get randomness(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RawFulfillRandomnessCall__Outputs {
  _call: RawFulfillRandomnessCall;

  constructor(call: RawFulfillRandomnessCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class WithdrawOwnerCall extends ethereum.Call {
  get inputs(): WithdrawOwnerCall__Inputs {
    return new WithdrawOwnerCall__Inputs(this);
  }

  get outputs(): WithdrawOwnerCall__Outputs {
    return new WithdrawOwnerCall__Outputs(this);
  }
}

export class WithdrawOwnerCall__Inputs {
  _call: WithdrawOwnerCall;

  constructor(call: WithdrawOwnerCall) {
    this._call = call;
  }

  get amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawOwnerCall__Outputs {
  _call: WithdrawOwnerCall;

  constructor(call: WithdrawOwnerCall) {
    this._call = call;
  }
}
