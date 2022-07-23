import { abi, contractAddress } from '../../utils/config';
import { useQuery, gql } from '@apollo/client';
import { useAccount } from 'wagmi'


export const useGetGuesses = () => {
    const { address } = useAccount();

    const GET_GUESSES_HISTORY = gql`
        query GetGuesses {
            guesses (bidder: ${address}){
                id
                bidder
                guessedNumber
                winningNumber
                prize
            }
        }
    `

    const { loading, error, data } = useQuery(GET_GUESSES_HISTORY);
    return {loading, error, data};
}