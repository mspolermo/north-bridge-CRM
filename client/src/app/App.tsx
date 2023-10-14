import './styles/index.scss'
import { AppRouter } from './providers/router'
import { Suspense } from 'react'
import { Navbar } from '@/widgets/Navbar'

function App() {

  return (
    <div className='app'>
    <Suspense fallback="">
        <Navbar />
        <div className="content-page">
            <AppRouter />
        </div>
    </Suspense>
</div>
  )
}

export default App
