import React, {ChangeEvent, FunctionComponent} from 'react'
import s from './Input.module.css'

interface OwnProps {
  value: number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

type Props = OwnProps;

const Input: FunctionComponent<Props> = (props) => {
  return (
    <div>

      <label>
        {props.children}
      </label>
      <input
        className={s.input}
        type="number"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
