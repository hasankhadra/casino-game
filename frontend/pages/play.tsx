import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Header from "../src/components/header/header"
import { queueAvailableFunds } from '../src/hooks/queueAvailableFunds'
import { pot } from '../src/hooks/pot'
import { staticPrize } from '../src/hooks/staticPrize'
import { biddingAmount } from '../src/hooks/biddingAmount'
import { numbersRange } from '../src/hooks/numbersRange'
import { timeToLive } from '../src/hooks/timeToLive'
const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <h1>Play</h1>
      <div>{
        "queueAvailableFunds : "}
        {queueAvailableFunds()}
      </div>
      <div>{
        "pot : "}
        {pot()}
      </div>
      <div>{
        "staticPrize : "}
        {staticPrize()}
      </div>
      <div>{
        "biddingAmount : "}
        {biddingAmount()}
      </div>
      <div>{
        "numbersRange : "}
        {numbersRange()}
      </div>
      <div>{
        "timeToLive : "}
        {timeToLive()}
      </div>
    </div>
  )
}

export default Home
