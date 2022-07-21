import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { useRouter } from "next/router";
import {ConnectWallet} from "./connectWallet";
const Header = () => {
  const router = useRouter();
  return (
    <div>
      <button onClick={()=>{router.push('/')}}>logo</button>
      <ConnectWallet/>
    </div>
  )
}
export default Header;