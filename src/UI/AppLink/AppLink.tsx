import { classNames } from '../../helpers/classes/ClassNames';
import style from './AppLink.module.scss';
import { FC, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IAppLink extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<IAppLink> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link to={to} className={classNames(style.AppLink, {}, [className || '', style[theme]])} {...otherProps}>
      {children}
    </Link>
  );
};
