import React from 'react'
import s from './Counter.module.css'

type CounterPropsType = {
  value: number
  maxValue: number
}

export const Counter = (props: CounterPropsType) => {
  return (
    <div
      className={`${s.counter} ${props.value >= props.maxValue ? s.maxValue : ''}`}
    >
      {props.value}
    </div>
  )
}