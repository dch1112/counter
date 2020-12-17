import React, {useState} from 'react'
import './App.css'
import {Counter} from './components/Counter'
import {Button} from './components/Button'

function App() {
  const minValue = 0
  const maxValue = 5
  const stepCounter = 1

  const [counter, setCounter] = useState<number>(minValue)

  const increaseCounter = () => {
    if (counter < maxValue) {
      setCounter(counter + stepCounter)
    }
  }

  const resetCounter = () => {
    if (counter > minValue) {
      setCounter(minValue)
    }
  }

  return (
    <div className='app'>
      <div className='counter'>
        <Counter value={counter} maxValue={maxValue}/>
      </div>
      <div className='buttons'>
        <div className='increment'>
          <Button name='inc'
                  disabled={counter >= maxValue}
                  onClick={increaseCounter}/>
        </div>
        <div className='reset'>
          <Button name='reset'
                  disabled={counter === minValue}
                  onClick={resetCounter}/>
        </div>
      </div>
    </div>
  )
}

export default App;
