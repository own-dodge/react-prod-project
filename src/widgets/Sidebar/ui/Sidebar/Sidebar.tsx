import classNames from 'shared/lib/classNames/classNames'

import { useState, type PropsWithChildren } from 'react'
import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { LanguageSwitcher } from 'features/LanguageSwitcher'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar = (props: PropsWithChildren<SidebarProps>) => {
    const { className } = props

    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }

    return (
        <div
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button theme={ButtonTheme.CLEAR} onClick={onToggle}>
                toggle
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher className={cls.lang} />
            </div>
        </div>
    )
}
