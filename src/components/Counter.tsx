import React from 'react'

type CounterPropsType = {
  value: number
  maxValue: number
}

export const Counter = (props: CounterPropsType) => {
  return (
    <div className={props.value >= props.maxValue ? 'maxValue' : ''}>
      {props.value}
    </div>)
}