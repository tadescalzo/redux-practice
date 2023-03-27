import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment} from '../store/slices/counter/counterSlice'

export function Counter() {
  const {counter} = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{counter}</span>
      </div>
    </div>
  )
}