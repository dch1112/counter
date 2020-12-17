import React from 'react'

type ButtonPropsType = {
  name: string
  disabled: boolean
  onClick: () => void
}

export const Button = (props: ButtonPropsType) => {
  return (
    <button disabled={props.disabled}
            onClick={props.onClick}
            className={`${'button'} ${props.disabled ? 'buttonDisabled' : ''}`}>
      {props.name}
    </button>)
}
