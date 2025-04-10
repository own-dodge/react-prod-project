import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import { routeConfig } from 'shared/config/routeConfig/routeConfig'

export const AppRouter = () => {
    return (
        <Suspense
            fallback={
                <p>
                    <i>Loading...</i>
                </p>
            }
        >
            <Routes>
                {Object.values(routeConfig).map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div className="page-wrapper">{element}</div>}
                    />
                ))}
            </Routes>
        </Suspense>
    )
}

export default AppRouter
