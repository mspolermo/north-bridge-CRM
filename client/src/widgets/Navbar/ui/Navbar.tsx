import { memo, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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

    console.log(authData);

    const onLogOut = useCallback(() => {
        dispatch(userActions.logout());
        navigate(RoutePath.login);
    }, [dispatch, navigate]);

    if (!authData) {
        return null
    }

    return (
        <div className={cls.Navbar}>
            <Link to={RoutePath.login}>Войти</Link>
            <Link to={RoutePath.main}>Главная</Link>
            <Button onClick={onLogOut}>Выйти</Button>
        </div>
    );
});
