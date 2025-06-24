import classNames from 'shared/lib/classNames/classNames'

import { useState, type PropsWithChildren } from 'react'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { LanguageSwitcher } from 'features/LanguageSwitcher'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar = (props: PropsWithChildren<SidebarProps>) => {
    const { className } = props
    const { t } = useTranslation()

    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="sidebar-toggle"
                theme={ButtonTheme.CLEAR}
                onClick={onToggle}
            >
                {t('open')}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.lang} />
            </div>
        </div>
    )
}
