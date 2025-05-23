import classNames from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()
    return (
        <div className={classNames(cls.Navbar)}>
            <div className={classNames(cls.links)}>
                <AppLink
                    to="/about"
                    className={classNames(cls.about)}
                    theme={AppLinkTheme.SECONDARY}
                >
                    {t('about')}
                </AppLink>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
                    {t('main')}
                </AppLink>
            </div>
        </div>
    )
}
