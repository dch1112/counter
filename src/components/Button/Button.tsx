import React, {FunctionComponent} from 'react';
import s from './Button.module.css'

interface OwnProps {
  disabled?: boolean,
  onClick: () => void
}

type Props = OwnProps;

const Button: FunctionComponent<Props> = (props) => {

  return (<div>
    <button
      onClick={props.onClick} disabled={props.disabled}
      className={`${s.btn} ${props.disabled ? s.btnDisabled : ''}`}
    >
      {props.children}
    </button>
  </div>);
};

export default Button;
