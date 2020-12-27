import React, {FunctionComponent, useState} from 'react';
import {Counter} from "./Counter/Counter";
import {Settings} from "./Settings/Settings";
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

const AppJoin: FunctionComponent<Props> = (props) => {
  const [settingsMode, setSettingsMode] = useState<boolean>(false)
  const onSetCounterHandler = () => {
    if (settingsMode) {
      props.saveCounter()
    }
    setSettingsMode(!settingsMode)
  }
  return (<div className="section">
    <div className="content">
      {settingsMode
        ? <Settings
          tempMinValue={props.tempMinValue}
          tempMaxValue={props.tempMaxValue}
          tempMinValueChange={props.tempMinValueChange}
          tempMaxValueChange={props.tempMaxValueChange}
        />
        : <Counter
          value={props.counter}
          maxValue={props.maxValue}
        />
      }
    </div>


    <div className="buttons">
      <Button
        disabled={settingsMode || props.counter >= props.maxValue}
        onClick={props.increaseCounter}
      >
        inc
      </Button>
      <Button
        disabled={settingsMode || props.counter <= props.minValue}
        onClick={props.resetCounter}
      >
        res
      </Button>
      <Button
        // disabled={props.tempMinValue === props.minValue && props.tempMaxValue === props.maxValue}
        onClick={onSetCounterHandler}
      >
        set
      </Button>
    </div>
  </div>);
};

export default AppJoin;
