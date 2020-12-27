import React, {ChangeEvent, FunctionComponent, useState} from 'react';
import s from 'Settings.module.css'
import Input from "../Input/Input";


interface OwnProps {
  tempMinValue: number
  tempMaxValue: number
  tempMinValueChange: (value: number) => void
  tempMaxValueChange: (value: number) => void
}

type Props = OwnProps;

export const Settings: FunctionComponent<Props> = (props) => {
  const setMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.tempMinValueChange(Number(e.currentTarget.value))
  }
  const setMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.tempMaxValueChange(Number(e.currentTarget.value))
  }
  return (<div>
    <Input
      onChange={setMinValueHandler}
      value={props.tempMinValue}
    >
      Min Value:
    </Input>

    <Input
      onChange={setMaxValueHandler}
      value={props.tempMaxValue}
    >
      Max Value:
    </Input>
  </div>)
}