import React
    , {
    Suspense,
    useContext,
    useState
} from 'react';
import './styles/index.scss'
import {
    Link,
    Route,
    Routes
} from 'react-router-dom';
import {
    AboutPageLazy
} from "./pages/AboutPage/AboutPage.lazy";
import {
    MainPageLazy
} from "./pages/MainPage/MainPage.lazy";
import {
    Theme,
    ThemeContext
} from "./theme/ThemeContext";
import {
    useTheme
} from "./theme/useTheme";



const App = () => {

    const {theme, toggleTheme} = useTheme()
    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>toggle</button>
            <Link to={'/'}>General</Link>
            <Link to={'/about'}>About site</Link>
            <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={'/about'} element={<AboutPageLazy />}/>
                <Route path={'/'} element={<MainPageLazy />}/>
                <Route path={'/'}/>
            </Routes>
            </Suspense>
        </div>
    );
};

export default App;