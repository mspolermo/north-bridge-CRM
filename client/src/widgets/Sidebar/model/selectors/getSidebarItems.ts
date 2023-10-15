import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                Icon: 'main',
                text: 'Главная', 
            },
            {
                path: RoutePath.tasks,
                Icon: 'tasks',
                text: 'Задачи', 
            },
        ];
        if (userData?.role === 'admin') {
            sidebarItemsList.push(
                {
                    path: RoutePath.admin,
                    Icon: 'admin',
                    text: 'Админка', 
                },
            );
        }

        return sidebarItemsList;
    },
);
