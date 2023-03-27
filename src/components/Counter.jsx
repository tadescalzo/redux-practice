import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {decrement, increment, incrementBy} from '../store/slices/counter/counterSlice'

export function Counter() {
  const {counter} = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <span>{counter}</span>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(incrementBy(2))}
        >
          Increment by 2
        </button>
      </div>
    </div>
  )
}