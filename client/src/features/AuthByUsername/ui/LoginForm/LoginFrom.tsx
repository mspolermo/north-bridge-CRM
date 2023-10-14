import { memo, useCallback, useEffect } from 'react';
import LOGO from '@/shared/assets/images/logo.png'
import cls from './LoginFrom.module.scss';
import { Input } from '@/shared/ui/Input/Input';
import { Button } from '@/shared/ui/Button/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { 
    errorUser, getUserPassword, getUsername, loadingUser,
} from '../../model/selectors/getLoginState';
import { loginActions } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { getUserAuthData } from '@/entities/User';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

export const LoginFrom = memo(() => {
    const dispatch = useAppDispatch();
    const username = useSelector(getUsername);
    const password = useSelector(getUserPassword);
    const isLoading = useSelector(loadingUser);
    const error = useSelector(errorUser);

    const authCheck = useSelector(getUserAuthData);
    const navigate = useNavigate();

    const onLoginClick = useCallback(() => {
        const authData = {
            username: username,
            password: password
        };
        dispatch(loginByUsername(authData));
    }, [dispatch, password, username]);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch])

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch])

    useEffect(() => {
        if (authCheck) {
            navigate(RoutePath.main);
        }
    }, [authCheck, navigate]);

    return (
        <div className={cls.LoginFrom}>
            <img className={cls.LoginFrom__logo} src={LOGO} alt="" />
            <h2 className={cls.LoginFrom__heading}>Вход в личный кабинет</h2>
            {error && <Text text='Ошибка авторизации' theme={TextTheme.ERROR}/>}
            <div className={cls.LoginFrom__body}>
                <Input
                    placeholder='Имя пользователя'
                    value={username}
                    onChange={onChangeUsername}    
                />
                <Input
                    placeholder='Пароль'
                    value={password}
                    onChange={onChangePassword}    
                />
                <Button onClick={onLoginClick} disabled={isLoading}>
                    Войти
                </Button>                
            </div>
        </div>
    );
});
