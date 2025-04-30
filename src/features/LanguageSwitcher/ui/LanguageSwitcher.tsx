import classNames from 'shared/lib/classNames/classNames'
import type { PropsWithChildren } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface LanguageSwitcherProps {
    className?: string
}

export const LanguageSwitcher = (
    props: PropsWithChildren<LanguageSwitcherProps>,
) => {
    const { className } = props
    const { t, i18n } = useTranslation()
    const changeLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={changeLang}
        >
            {t('language')}
        </Button>
    )
}
