import {ethers} from 'ethers'
import React, { useState, useEffect } from 'react';
import { useContractRead } from 'wagmi'
import {abi} from '../utils/config'
export function useQueueAvailableFunds() {
    const { data, isError, isLoading ,status} = useContractRead({
        addressOrName: '0xb995B48a3965942d3Aa4c3FE215e404943Ff1900',
        contractInterface: abi,
        functionName: 'queueAvailableFunds',
        chainId: 80001
      })
      if(!data)return 2;
      return data.toString();
  }
