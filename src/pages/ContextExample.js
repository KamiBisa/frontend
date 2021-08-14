import { useState } from 'react'
import { CounterContext } from '../context/CounterContext'
import Level1 from '../components/Level1'
import Level2 from '../components/Level2'

export default function ContextExample() {
  const initialState = useState(0)
  return (
    <CounterContext.Provider value={initialState}>
      <Level1>
        <Level2 />
      </Level1>
    </CounterContext.Provider>
  )
}
