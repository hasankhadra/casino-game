import { ethers } from 'ethers'
import React, { useState, useEffect } from 'react';
import { useContractRead } from 'wagmi'
import { abi, contractAddress } from '../utils/config'
export function useStaticPrize() {

    const { data, isError, isLoading, status } = useContractRead({
        addressOrName: contractAddress,
        contractInterface: abi,
        functionName: 'staticPrize',
        chainId: 80001
    })

    if (!data || isLoading)
        return "Fetching ...";

    return data.toString();
}
