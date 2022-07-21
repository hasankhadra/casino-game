import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Header from "../src/components/header/header"
import {useGetqueuePrizeAmount} from '../src/hooks/useGetqueuePrizeAmount'
const Home: NextPage = () => {
  return (
    <div>
      <Header/>
    <h1>Play</h1>
    {useGetqueuePrizeAmount()}
    </div>
  )
}

export default Home
