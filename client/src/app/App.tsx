import './styles/index.scss'
import { AppRouter } from './providers/router'
import { Suspense, useEffect } from 'react'
import { Navbar } from '@/widgets/Navbar'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserInited, userActions } from '@/entities/User'
import { useSelector } from 'react-redux'

function App() {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className='app'>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
            {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  )
}

export default App
