import React, { Suspense } from 'react';
import './styles/index.scss';
import { Link, Route, Routes } from 'react-router-dom';
import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.lazy';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classes/ClassNames';
import AppRouter from './routes/AppRouter';
import { Navbar } from './components/Navbar/Navbar';
import {
  ThemeButton
} from './UI/ThemeButton/ThemeButton';
import {
  Sidebar
} from './components/Sidebar/Sidebar';

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className='content_page'>
        <Sidebar />
      <AppRouter />
      </div>
    </div>
  );
};

export default App;
