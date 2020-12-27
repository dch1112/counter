import React, {useState} from 'react'
import './App.css'
import AppSplit from "./components/AppSplit";
import AppJoin from "./components/AppJoin";

export type ButtonsType = {
  [key: string]: {
    name: string
    disabled: boolean
    onClick: () => void
  }
}

function App() {

  const DEFAULT_MIN_VALUE = 0
  const DEFAULT_MAX_VALUE = 5
  const STEP_COUNTER = 1
  const MIN_VALUE_KEY = 'MIN_VALUE_KEY'
  const MAX_VALUE_KEY = 'MAX_VALUE_KEY'

  const [minValue, setMinValue] = useState<number>(Number(localStorage.getItem(MIN_VALUE_KEY) || DEFAULT_MIN_VALUE))
  const [maxValue, setMaxValue] = useState<number>(Number(localStorage.getItem(MAX_VALUE_KEY) || DEFAULT_MAX_VALUE))
  const [tempMinValue, setTempMinValue] = useState<number>(minValue)
  const [tempMaxValue, setTempMaxValue] = useState<number>(maxValue)
  const [counter, setCounter] = useState<number>(minValue)
  const [splitCounter, setSplitCounter] = useState<boolean>(false)

  const increaseCounter = () => {
    if (counter < maxValue) {
      setCounter(counter + STEP_COUNTER)
    }
  }

  const resetCounter = () => {
    if (counter > minValue) {
      setCounter(minValue)
    }
  }

  const saveCounter = () => {
    setMinValue(tempMinValue)
    setMaxValue(tempMaxValue)
    setCounter(tempMinValue)
    localStorage.setItem(MIN_VALUE_KEY, tempMinValue.toString())
    localStorage.setItem(MAX_VALUE_KEY, tempMaxValue.toString())
  }

  const tempMinValueChange = (value: number) => {
    if (value >= 0 && value < tempMaxValue) {
      setTempMinValue(value)
    }
  }

  const tempMaxValueChange = (value: number) => {
    if (value >= 1 && value > tempMinValue) {
      setTempMaxValue(value)
    }
  }

  return (
    <div className='app'>
      <button
        className='splitJoinButton'
        onClick={() => setSplitCounter(!splitCounter)}
      >
        {splitCounter ? 'Join Counter' : 'Split Counter'}
      </button>

      {splitCounter
        ? <AppSplit
          counter={counter}
          minValue={minValue}
          maxValue={maxValue}
          tempMinValue={tempMinValue}
          tempMaxValue={tempMaxValue}
          tempMinValueChange={tempMinValueChange}
          tempMaxValueChange={tempMaxValueChange}
          increaseCounter={increaseCounter}
          resetCounter={resetCounter}
          saveCounter={saveCounter}
        />
        : <AppJoin
          counter={counter}
          minValue={minValue}
          maxValue={maxValue}
          tempMinValue={tempMinValue}
          tempMaxValue={tempMaxValue}
          tempMinValueChange={tempMinValueChange}
          tempMaxValueChange={tempMaxValueChange}
          increaseCounter={increaseCounter}
          resetCounter={resetCounter}
          saveCounter={saveCounter}
        />
      }

    </div>)
}

export default App;