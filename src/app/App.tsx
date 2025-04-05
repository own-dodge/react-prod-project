import { Routes, Route, Link } from 'react-router-dom'
import { Suspense } from 'react'
import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider'
import classNames from 'shared/lib/classNames/classNames'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
        <button onClick={toggleTheme}>Theme</button>
        <Link to='/about'>About</Link>
        <Link to='/'>Main</Link>
        <Suspense fallback={<p><i>Loading...</i></p>}>
        <Routes>
            <Route path={'/about'} element={<AboutPage />}/>
            <Route path={'/'} element={<MainPage />}/>
        </Routes>
        </Suspense>
    </div>
  )
}

export default App
