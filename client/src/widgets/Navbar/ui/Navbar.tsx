import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import LOGO from '@/shared/assets/images/logo.png';
import cls from './Navbar.module.scss';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button/Button';

export const Navbar = memo(() => {
    const authData = useSelector(getUserAuthData);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onLogOut = useCallback(() => {
        dispatch(userActions.logout());
        navigate(RoutePath.login);
    }, [dispatch, navigate]);

    const onLogoClick = useCallback(() => {
        navigate(RoutePath.main);
    }, [navigate]);

    if (!authData) {
        return null
    }

    return (
        <div className={cls.Navbar}>
            <img className={cls.logo} src={LOGO} alt="Logo" onClick={onLogoClick} />
            <div>
                <Button onClick={onLogOut}>Выйти</Button>
            </div>

        </div>
    );
});
