import { useEffect, useState, type PropsWithChildren } from 'react'
import { Button } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'

interface BugButtonProps {
    className?: string
}

// Component for test
export const BugButton = (props: PropsWithChildren<BugButtonProps>) => {
    const { className } = props
    const { t } = useTranslation()
    const [error, setError] = useState(false)

    const onThrow = () => {
        setError(true)
    }

    useEffect(() => {
        if (error === true) throw new Error()
    }, [error])

    return <Button onClick={onThrow}>{t('throwError')}</Button>
}
