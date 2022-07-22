import {ethers} from 'ethers'
import React, { useState, useEffect } from 'react';
import { useContractRead } from 'wagmi'
import {abi} from '../utils/config'
export function biddingAmount() {
    const { data, isError, isLoading ,status} = useContractRead({
        addressOrName: '0xb4926B66ee76214773F96FfE58840b0e1c085dD6',
        contractInterface: abi,
        functionName: 'biddingAmount',
        chainId: 80001
      })
      if(!data)return 2;
      return data.toString();
  }
