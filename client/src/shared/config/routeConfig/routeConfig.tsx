import { AdminPage } from '@/pages/AdminPage';
import { LoginPage } from '@/pages/LoginPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { TasksPage } from '@/pages/TasksPage';
import { type RouteProps } from 'react-router-dom';

export type AppRoutesProps = RouteProps & {
    authOnly? : boolean;
}

export enum AppRoutes {
  LOGIN = 'login',
  //Авторизированные
  MAIN = 'main',
  TASKS = 'tasks',
  NOT_FOUND = 'not_found',
  ADMIN = 'admin',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.MAIN]: '/main',
    [AppRoutes.TASKS]: '/tasks',
    [AppRoutes.ADMIN]: '/admin',
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
    [AppRoutes.TASKS]: {
        path: RoutePath.tasks,
        element: <TasksPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN]: {
        path: RoutePath.admin,
        element: <AdminPage />,
        authOnly: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
        authOnly: true,
    },
};
