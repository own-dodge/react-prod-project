import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider'
import classNames from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Navbar } from 'widgets/Navbar'

const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>Theme</button>
            <AppRouter />
        </div>
    )
}

export default App
