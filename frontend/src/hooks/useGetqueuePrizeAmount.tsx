import React, { useState, useEffect } from 'react';
import { useContractRead } from 'wagmi'

function useGetqueuePrizeAmount(friendID) {
    const { data, isError, isLoading } = useContractRead({
        addressOrName: '0xb4926B66ee76214773F96FfE58840b0e1c085dD6',
        contractInterface: wagmigotchiABI,
        functionName: 'getHunger',
      })
    return isOnline;
  }