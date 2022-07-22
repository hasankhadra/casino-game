import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Header from "../src/components/header/header"
import {queueAvailableFunds} from '../src/hooks/queueAvailableFunds'
import {pot} from '../src/hooks/pot'
const Home: NextPage = () => {
  return (
    <div>
      <Header/>
    <h1>Play</h1>
    <div>{
    "queueAvailableFunds : "}
      {queueAvailableFunds()}
    </div>
    <div>{
    "pot : "}
      {pot()}
    </div>

    </div>
  )
}

export default Home
