import {ethers} from 'ethers'
import React, { useState, useEffect } from 'react';
import { useContractRead } from 'wagmi'
import {abi} from '../utils/config'
export function useBiddingAmount() {
    const { data, isError, isLoading ,status} = useContractRead({
        addressOrName: '0xb995B48a3965942d3Aa4c3FE215e404943Ff1900',
        contractInterface: abi,
        functionName: 'biddingAmount',
        chainId: 80001
      })
      if(!data)return 2;
      return data.toString();
  }
