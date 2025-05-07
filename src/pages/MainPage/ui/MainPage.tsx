import { useTranslation } from 'react-i18next'
import { BugButton } from 'widgets/PageError/ui/BugButton'

const MainPage = () => {
    const { t } = useTranslation('main')
    return (
        <div>
            <BugButton />
            {t('title')}
        </div>
    )
}

export default MainPage
