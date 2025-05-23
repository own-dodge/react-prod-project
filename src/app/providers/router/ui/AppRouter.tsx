import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'widgets/PageLoader'

export const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">{element}</div>
                        </Suspense>
                    }
                />
            ))}
        </Routes>
    )
}

export default AppRouter
