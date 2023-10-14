import React, {
    Suspense, memo, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRoutesProps, RouteConfig } from '@/shared/config/routeConfig/routeConfig';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback='Загрузка.....'>
                <div className="page-wrapper">
                    {route.element}
                </div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(RouteConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouter);
