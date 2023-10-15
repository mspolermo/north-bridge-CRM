import './styles/index.scss'
import { AppRouter } from './providers/router'
import { Suspense, useEffect } from 'react'
import { Navbar } from '@/widgets/Navbar'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData, getUserInited, userActions } from '@/entities/User'
import { useSelector } from 'react-redux'
import { Sidebar } from '@/widgets/Sidebar'
import classNames from 'classnames'

const App = () => {
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);
    const authData = useSelector(getUserAuthData);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className={authData 
                    ? "content-page"
                    : ""
                }>
                    {authData && <Sidebar />}
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App
