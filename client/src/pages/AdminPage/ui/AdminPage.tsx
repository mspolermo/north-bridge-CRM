import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Page } from '@/widgets/Page';
import { getUsers } from '@/features/fetchUsers';
import { fetchUsers } from '@/features/fetchUsers/model/services/fetchUsers';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

const AdminPage = () => {
    const dispatch = useAppDispatch();
    const data = useSelector(getUsers);

    const auth = useSelector(getUserAuthData);
    const location = useLocation();

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    if (!(auth?.role === 'admin')) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return (
        <Page>
            СТРАНИЦА АДМИНИСТРАТОРА
            <h3>СПИСОК ПОЛЬЗОВАТЕЛЕЙ:</h3>
            <div>

               {data?.map( (user) => {
                return (
                    <p key={user.id}>
                        <span>{user.id}. </span>
                        <span>Username - {user.username}, </span>
                        <span>Password - {user.password}, </span>
                        <span>Role - {user.role}</span>
                    </p>
                )
               })} 
            </div>
            
        </Page>
    );
};

export default AdminPage;
