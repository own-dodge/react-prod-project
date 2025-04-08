import { Link } from 'react-router-dom'
import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider'
import classNames from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Theme</button>
      <Link to="/about">About</Link>
      <Link to="/">Main</Link>
      <AppRouter />
    </div>
  )
}

export default App
