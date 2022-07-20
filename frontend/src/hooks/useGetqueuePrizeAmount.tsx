import React, { useState, useEffect } from 'react';
import { useContractRead } from 'wagmi'

function useGetqueuePrizeAmount(friendID) {
    const { data, isError, isLoading } = useContractRead({
        addressOrName: '0xecb504d39723b0be0e3a9aa33d646642d1051ee1',
        contractInterface: wagmigotchiABI,
        functionName: 'getHunger',
      })
    return isOnline;
  }