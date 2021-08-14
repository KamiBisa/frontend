import { createContext, useContext } from 'react'

export const CounterContext = createContext([
  {
    counter: 0,
  },
  obj => obj,
])

export const useCounter = () => useContext(CounterContext)
