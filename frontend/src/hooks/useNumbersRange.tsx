import {ethers} from 'ethers'
import React, { useState, useEffect } from 'react';
import { useContractRead } from 'wagmi'
import { abi, contractAddress } from '../utils/config'
export function useNumbersRange() {
    const { data, isError, isLoading ,status} = useContractRead({
        addressOrName: contractAddress,
        contractInterface: abi,
        functionName: 'numbersRange',
        chainId: 80001
      })
      if (!data || isLoading)return "Fetching ...";
      return data.toString();
  }
