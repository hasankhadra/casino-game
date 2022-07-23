import {ethers} from 'ethers'
import React, { useState, useEffect } from 'react';
import { useContractRead } from 'wagmi'
import { abi, contractAddress} from '../utils/config'
export function useBiddingAmount() {
    const { data, isError, isLoading ,status} = useContractRead({
        addressOrName: contractAddress,
        contractInterface: abi,
        functionName: 'biddingAmount',
        chainId: 80001
      })
      if (!data || isLoading)return "Fetching ...";
      return data.toString();
  }
