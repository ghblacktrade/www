import { classNames } from '../../helpers/classes/ClassNames';
import style from './Button.module.scss'
import {
  ButtonHTMLAttributes,
  FC,
} from 'react';

export enum ThemeButton {
  CLEAR = 'clear',

}

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?: string
  theme?: ThemeButton,
}

export const Button: FC<IButton> = (props) => {

  const {
    className,
    children,
    theme = ThemeButton.CLEAR,
    ...otherProps
  } = props

  return (
    <button className={classNames(style.Button, {}, [className || '', style[theme]])} {...otherProps}>
      {children}
    </button>
  );
};
