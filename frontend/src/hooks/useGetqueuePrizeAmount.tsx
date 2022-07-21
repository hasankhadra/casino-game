import {ethers} from 'ethers'
import React, { useState, useEffect } from 'react';
import { useContractRead } from 'wagmi'
import {abi} from '../utils/config'
export function useGetqueuePrizeAmount() {
    const { data, isError, isLoading ,status} = useContractRead({
        addressOrName: '0x0fcB81c2CD4c17072B5eDb4e899eaD4c22F07c63',
        contractInterface: abi,
        functionName: '',
        chainId: 80001
      })
      if(!data)return 2;
      return data.toString();
  }
