import { LoginPage } from '@/pages/LoginPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { type RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    authOnly? : boolean;
}

export enum AppRoutes {
  LOGIN = 'login',
  MAIN = 'main',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.MAIN]: '/main',
    [AppRoutes.NOT_FOUND]: '*'
};

export const RouteConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage />,
    },
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
        authOnly: true,
    },
};
