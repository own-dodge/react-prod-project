import { Routes, Route, Link } from 'react-router-dom'
import { Suspense } from 'react'
import './styles/index.scss'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { useTheme } from './theme/useTheme'
import classNames from './helpers/ClassNames'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>Theme</button>
        <Link to='/about'>About</Link>
        <Link to='/'>Main</Link>
        <Suspense fallback={<p><i>Loading...</i></p>}>
        <Routes>
            <Route path={'/about'} element={<AboutPageAsync />}/>
            <Route path={'/'} element={<MainPageAsync />}/>
        </Routes>
        </Suspense>
    </div>
  )
}

export default App
