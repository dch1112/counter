import React, {FunctionComponent, useState} from 'react';
import {Settings} from "./Settings/Settings";
import {Counter} from "./Counter/Counter";
import Button from "./Button/Button";

interface OwnProps {
  counter: number
  minValue: number
  maxValue: number
  tempMinValue: number
  tempMaxValue: number
  tempMinValueChange: (value: number) => void
  tempMaxValueChange: (value: number) => void
  increaseCounter: () => void
  resetCounter: () => void
  saveCounter: () => void
}

type Props = OwnProps;

const AppSplit: FunctionComponent<Props> = (props) => {

  const onSetCounterHandler = () => {
    props.saveCounter()
  }

  return (<div className='wrapper'>
    <div className="section">
      <div className="content">
        <Settings
          tempMinValue={props.tempMinValue}
          tempMaxValue={props.tempMaxValue}
          tempMinValueChange={props.tempMinValueChange}
          tempMaxValueChange={props.tempMaxValueChange}
        />


      </div>
      <div className="buttons">
        <Button
          disabled={props.tempMinValue === props.minValue && props.tempMaxValue === props.maxValue}
          onClick={onSetCounterHandler}
        >
          set
        </Button>

      </div>
    </div>
    <div className="section">
      <div className="content">
        <Counter
          value={props.counter}
          maxValue={props.maxValue}
        />
        <div className="buttons">
          <Button
            disabled={props.counter >= props.maxValue}
            onClick={props.increaseCounter}
          >
            inc
          </Button>
          <Button
            disabled={props.counter <= props.minValue}
            onClick={props.resetCounter}
          >
            res
          </Button>
        </div>
      </div>
    </div>

  </div>);
};

export default AppSplit;
