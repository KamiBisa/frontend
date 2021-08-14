import { Heading } from '@chakra-ui/react'
import { useCounter } from '../context/CounterContext'

export default function Level2() {
  const [counter, setCounter] = useCounter()
  return (
    <Heading onClick={() => setCounter(prev => prev + 1)} cursor="pointer">
      {counter}
    </Heading>
  )
}
