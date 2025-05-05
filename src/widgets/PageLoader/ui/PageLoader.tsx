import classNames from 'shared/lib/classNames/classNames'
import type { PropsWithChildren } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import cls from './PageLoader.module.scss'

interface PageLoaderProps {
    className?: string
}

export const PageLoader = (props: PropsWithChildren<PageLoaderProps>) => {
    const { className } = props

    return (
        <div className={classNames(cls.PageLoader, {}, [className])}>
            <Loader />
        </div>
    )
}
