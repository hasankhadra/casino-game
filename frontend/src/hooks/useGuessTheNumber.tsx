import { useContractWrite } from 'wagmi'
import {abi} from '../utils/config'
export function useGuessTheNumber(number:number) {
  const contractWrite = useContractWrite({
    addressOrName: '0xb4926B66ee76214773F96FfE58840b0e1c085dD6',
    contractInterface: abi,
    functionName: 'guessTheNumber',
    chainId: 80001,
    args:[number],
  })
  return 1;
}