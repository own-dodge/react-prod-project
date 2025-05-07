import classNames from 'shared/lib/classNames/classNames'
import type { PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import cls from './PageError.module.scss'

interface PageErrorProps {
    className?: string
}

export const PageError = (props: PropsWithChildren<PageErrorProps>) => {
    const { className } = props
    const { t } = useTranslation()

    const onReload = () => {
        window.location.reload()
    }

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('somethingWentWrong')}</p>
            <Button onClick={onReload}>{t('reload')}</Button>
        </div>
    )
}
