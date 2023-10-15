import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '@/widgets/Sidebar/model/types/sidebar';
import cls from './SidebarItem.module.scss';
import { Icons } from '@/shared/lib/Icons';
import { IconsSize, IconsTheme } from '@/shared/lib/Icons/ui/Icons';

interface SidebarItemProps {
    item: SidebarItemType;
    collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <Icons
                name={item.Icon}
                theme={IconsTheme.PRIMARY_INVERTED}
                size={IconsSize.M}
                strokeWidth='0'
                className={cls.icon}
            />
            <span className={cls.link}>
                {item.text}
            </span>
        </AppLink>
    );
});
