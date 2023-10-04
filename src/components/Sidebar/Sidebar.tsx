import { classNames } from '../../helpers/classes/ClassNames';
import style from './Sidebar.module.scss'
import {
  useState
} from 'react';
import {
  ThemeButton
} from '../../UI/ThemeButton/ThemeButton';

interface ISidebar {
  className?: string
}

export const Sidebar = ({className}: ISidebar) => {

  const [show, setShow] = useState(false)

  const onToggle = () => {
    setShow(prev => !prev)
  }

  return (
    <div className={classNames(style.Sidebar, {[style.show]: show}, [])}>
<button onClick={onToggle}>toggle</button>
      <div className={style.switchers}>
        <ThemeButton />

      </div>
    </div>
  );
};
