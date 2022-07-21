import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
const Home: NextPage = () => {
  return (
    <div>
    <h1>description</h1>
    <Link href="/play">Play</Link>
    </div>
  )
}

export default Home
