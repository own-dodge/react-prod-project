import classNames from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar)}>
            <div className={classNames(cls.links)}>
                <AppLink
                    to="/about"
                    className={classNames(cls.about)}
                    theme={AppLinkTheme.SECONDARY}
                >
                    About
                </AppLink>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
                    Main
                </AppLink>
            </div>
        </div>
    )
}
