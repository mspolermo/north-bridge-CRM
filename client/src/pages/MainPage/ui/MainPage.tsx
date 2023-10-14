import { getUsers } from '@/features/fetchUsers';
import { fetchUsers } from '@/features/fetchUsers/model/services/fetchUsers';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const MainPage = () => {
    const dispatch = useAppDispatch();
    const data = useSelector(getUsers);
    console.log(data)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    return (
        <Page>
            ХУЯК-ХУЯК И В ПРОДАКШН
            {data?.toString()}
        </Page>
    );
};

export default MainPage;
