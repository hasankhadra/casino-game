import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import {
  Center,
  Heading,
  Text,
  Button,
  Image,
  Box
} from '@chakra-ui/react'
import '../styles/Home.module.css';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className='app'>
      <Center>
        <Heading margin='3% 0%' colorScheme='blue'>Casino</Heading>
      </Center>
      <Center>
        <Text fontSize='xl' colorScheme='blue' margin='2% 10%'>Casino is a blockchain based lottery/roulette game. It's a mix between buying lottery tickets and casino IGT
          Triple Stars Slot machine. <br></br>
          <Text as='em' margin='0 10%'><Text as='b'>The difference here is when you lose, there is a high chance of you getting back most of your money!</Text></Text> <br></br>The game works as follows:
          You need to guess the lucky number that is being generated in our smart contract! The number is in the range [1 - 8]
        </Text>
      </Center>
      <Center>
        <Button marginTop='4%' colorScheme='blue' onClick={() => router.push('/play')}>Play!</Button>
      </Center>
    </div>
  )
}

export default Home
