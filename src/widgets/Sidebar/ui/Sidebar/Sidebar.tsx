import classNames from 'shared/lib/classNames/classNames'
import cls from './Sidebar.module.scss'

import { useState, type PropsWithChildren } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

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
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    )
}
