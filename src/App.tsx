import { Route, Routes } from 'react-router-dom'

import { Error404 } from '@/components/error-404/error-404'
import { Footer } from '@/layout/footer/footer'
import { Header } from '@/layout/header/header'
import { Contacts } from '@/layout/sections/contacts/contacts'
import { Main } from '@/layout/sections/main/main'
import { Skills } from '@/layout/sections/skills/skills'

import './App.scss'

import { Projects } from './layout/sections/projects/projects'

function App() {
  return (
    <div className={'App'}>
      <Header />
      <Routes>
        <Route element={<Main />} path={'/'} />
        <Route element={<Contacts />} path={'/contacts'} />
        <Route element={<Skills />} path={'/skills'} />
        <Route element={<Projects />} path={'/projects'} />
        <Route element={<Error404 />} path={'*'} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
