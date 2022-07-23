import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Header from "../src/components/header/header"
import { useQueueAvailableFunds } from '../src/hooks/queueAvailableFunds'
import { usePot } from '../src/hooks/pot'
import { useStaticPrize } from '../src/hooks/staticPrize'
import { useBiddingAmount } from '../src/hooks/biddingAmount'
import { useNumbersRange } from '../src/hooks/numbersRange'
import { useTimeToLive } from '../src/hooks/timeToLive'
import { useState } from 'react';
import { useContract,useSigner } from 'wagmi'
import {abi} from '../src/utils/config'
import { ethers } from 'ethers';
const Home: NextPage = () => {
  const [userNumber,setUserNumber]=useState(0);
  const { data: signer, isError, isLoading } = useSigner();
  const contract = useContract({
    addressOrName: '0x2fcbF5542C244f4fb074B7FDB000246f5a855b2D',
    contractInterface: abi,
    signerOrProvider: signer,
  })
  const guessNumber = async () => {
    if(userNumber)await contract.guessTheNumber(userNumber, {
      value: ethers.utils.parseEther("0.0000001")
    });
  }
  return (
    <div>
      <Header />
      <h1>Play</h1>
      <div>{
        "queueAvailableFunds : "}
        {useQueueAvailableFunds()}
      </div>
      <div>{
        "pot : "}
        {usePot()}
      </div>
      <div>{
        "staticPrize : "}
        {useStaticPrize()}
      </div>
      <div>{
        "biddingAmount : "}
        {useBiddingAmount()}
      </div>
      <div>{
        "numbersRange : "}
        {useNumbersRange()}
      </div>
      <div>{
        "timeToLive : "}
        {useTimeToLive()}
      </div>
      <input
          onChange={(event) => setUserNumber(event.target.value)}
          value={userNumber}
          type="number"
          alt="your number"
        />
        <button type="button" onClick={guessNumber}>
          Submit
        </button>
    </div>
  )
}

export default Home
