import {
  classNames,
} from '../../helpers/classes/ClassNames';
import style
  from './ThemeButton.module.scss';
import {
  useTheme,
} from '../../theme/useTheme';
import {
  ReactNode,
} from 'react';
import DarkIcon
  from '../../shared/assets/iconsMode/dark-mode-svgrepo-com.svg';
import LightIcon
  from '../../shared/assets/iconsMode/moonhalf-svgrepo-com.svg';
import {
  Theme,
} from '../../theme/ThemeContext';
import {
  Button,
} from '../Button/Button';


interface IThemeButton {
  className?: string;
}

export const ThemeButton = ({ className }: IThemeButton) => {
  const {
    theme,
    toggleTheme,
  } = useTheme();

  return (
    <Button
      className={classNames(style.ThemeButton, {}, [className || ''])}
      onClick={toggleTheme}>
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
