import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Header from "../src/components/header/header"
import { useQueueAvailableFunds } from '../src/hooks/useQueueAvailableFunds'
import { usePot } from '../src/hooks/usePot'
import { useStaticPrize } from '../src/hooks/useStaticPrize'
import { useBiddingAmount } from '../src/hooks/useBiddingAmount'
import { useNumbersRange } from '../src/hooks/useNumbersRange'
import { useTimeToLive } from '../src/hooks/useTimeToLive'
import { useState } from 'react';
import { useContract, useSigner, useAccount } from 'wagmi'
import { abi } from '../src/utils/config'
import { ethers } from 'ethers';
import { useQuery, gql } from '@apollo/client';
import { useCasinoContract } from '../src/hooks/contracts/useCasinoContract';
import { useGetGuesses } from '../src/hooks/graph_client/useGetGuesses';



const Home: NextPage = () => {
  const [userNumber, setUserNumber] = useState(0);
  const contract = useCasinoContract();
  const { address, connector, isConnected } = useAccount();
  const { data: guesses, loading: isLoading, error: isError } = useGetGuesses();

  const guessNumber = async () => {
    if (userNumber&&isConnected)
      await contract.guessTheNumber(userNumber, {
        value: ethers.utils.parseEther("0.0000001")
      });
    else alert('connect wallet');
  }
  const withdraw = async () => {
    if (isConnected)
      await contract.withdraw();
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
        onChange={(event) => setUserNumber(parseInt(event.target.value))}
        value={userNumber}
        type="number"
        alt="your number"
      />
      <button type="button" onClick={guessNumber}>
        Submit
      </button>
      <button onClick={withdraw}>
        withdraw
      </button>
       <div>
        History:
        {
          isLoading || isError ? (<div> Loading previous games ... </div>) : <ul>{guesses.guesses.map((guess: any, index: any) =>
            <li key={index}>
              <div>
                Your guessed number: {guess.guessedNumber}
              </div>
              <div>

                Correct number: {guess.winningNumber}
              </div>
              <div>

                Your prize: {guess.prize / 10 ** 18} MATIC
              </div>
              <div>-------------</div>
            </li>)}</ul>
        }
      </div> 
    </div>
  )
}

export default Home
